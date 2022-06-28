package com.google.sps.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.lang.reflect.Type;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/translate")
public class TranslationServlet extends HttpServlet{
    
@Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    StringBuffer jb = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null)
                jb.append(line);
        } catch (Exception e) {
            throw new IOException(e);
        }
        Gson gson = new Gson();
        TranslateRequest text_content;
        try {
            text_content = gson.fromJson(jb.toString(), TranslateRequest.class);
        } catch (JsonSyntaxException e) {
            // crash and burn
            throw new IOException("Error parsing JSON request string", e);
        }

    
        String[] content = text_content.stringsToTranslate;
        String languageCode = text_content.toLanguage;


        // Do the translation.
        Translate translate = TranslateOptions.getDefaultInstance().getService();
        
        List<String>  translatedContent = Arrays.asList(content);
       
        
        List<Translation> text_translated = translate.translate(translatedContent, Translate.TranslateOption.targetLanguage(languageCode));
        List<String> text_translated1 = new ArrayList<String>();

        for(int i=0; i<text_translated.size(); i++){
            String text_translated2 = text_translated.get(i).getTranslatedText(); 
            text_translated1.add(text_translated2);
        }

        //List<String> json1 = Arrays.asList(tranlatedContent);

        String json = convertToJsonUsingGson(text_translated1);

        
        
        response.setContentType("application/json");
        response.getWriter().println(json);

        
  }

  // convert to gson
  private String convertToJsonUsingGson(List<String> translated_text) {

    Type listType = new TypeToken<List<String>>() {}.getType();

    Gson gson = new Gson();
    String json = gson.toJson(translated_text, listType);

    return json;
  }
}

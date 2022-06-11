package com.google.sps.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;

/**
 * Handles requests sent to the /hello URL. Try running a server and navigating
 * to /hello!
 */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // PrintWriter pw= response.getWriter();

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
        Form2 gsonObject;
        try {
            gsonObject = gson.fromJson(jb.toString(), Form2.class);
        } catch (JsonSyntaxException e) {
            // crash and burn
            throw new IOException("Error parsing JSON request string", e);
        }

        String textValue = gsonObject.name;
        // final PrintWriter writerA = response.getWriter();

        // final PrintWriter writer = response.getWriter();

        // String htmlRespone = "<html>";
        // htmlRespone += "<h2>Your username is: " + textValue + "</h2>";
        // htmlRespone += "</html>";

        // response.setContentType("text/html;");
        response.setContentType("text/plain");
        response.getWriter().println(textValue);

        // pw.println("<h1> Hello" + textValue+ "</h1>");
        // response.getWriter().print(htmlRespone);

        // System.out.println("Name: " + textValue);

        // response.sendRedirect("index.html");
    }
}

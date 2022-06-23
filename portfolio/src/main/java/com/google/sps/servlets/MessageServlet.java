// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.lang.reflect.Type;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/message")
public final class  MessageServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //List with messages
    List<String> msg = new ArrayList<String>();
    msg.add("I am from Cameroon");
    msg.add("I like anime");
    msg.add("I am in college");
   

    // Convert the server stats to JSON
    String json = convertToJsonUsingGson(msg);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

 
  // converting using gson
  private String convertToJsonUsingGson(List msg) {
    // Gson gson = new Gson();
    // String json = gson.toJson(serverStats);
    // return json;

    Type listType = new TypeToken<List<String>>() {}.getType();

    Gson gson = new Gson();
    String json = gson.toJson(msg, listType);

    return json;
  }
}

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue1 = request.getParameter("name-input");
    String textValue2 = request.getParameter("email-input");
    String textValue3 = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("Name: " + textValue1);
    System.out.println("Email: " + textValue2);
    System.out.println("Message: " + textValue3);

    // Write the value to the response so the user can see it.
    //response.getWriter().println("You submitted: " + textValue1 + textValue2 + textValue3);

    // redirect back to the contact page
    response.sendRedirect("contact.html");
  }
}



package com.google.sps.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //PrintWriter pw= response.getWriter();
    String textValue = request.getParameter("name2-input");
    //final PrintWriter writerA = response.getWriter();
    	
    //final PrintWriter writer = response.getWriter();

    //String htmlRespone = "<html>";
    //htmlRespone += "<h2>Your username is: " + textValue + "</h2>";
    //htmlRespone += "</html>";

    //response.setContentType("text/html;");
    response.setContentType("text/html;");
    response.getWriter().println("<h1> Hello " + textValue+ "</h1>");

    //pw.println("<h1> Hello" + textValue+ "</h1>");
    //response.getWriter().print(htmlRespone);

    //System.out.println("Name: " + textValue);

    //response.sendRedirect("index.html");
  }
}

package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class prueba_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("         <script src=\"js/jquery-2.1.1.min.js\"></script>\n");
      out.write("        <script src=\"js/facto.js\"></script>\n");
      out.write("         <script src=\"js/prin.js\"></script>\n");
      out.write("         <script src=\"js/arreglos.js\"></script>\n");
      out.write("          <script src=\"js/contenido.js\"></script>\n");
      out.write("        <script src=\"js/trinomio.js\"></script>\n");
      out.write("        <script src=\"js/casosFactorizacion.js\"></script>\n");
      out.write("          <script src=\"js/factorComun.js\"></script>\n");
      out.write("           <script src=\"js/recorte.js\"></script>\n");
      out.write("           <script src=\"js/retroAlimentacion.js\"></script>\n");
      out.write("            <script src=\"js/diferenciaCuadrado.js\"></script>\n");
      out.write("               <script src=\"js/generaEjercicios.js\"></script>\n");
      out.write("         <script src=\"js/trinomioPerfecto.js\"></script>\n");
      out.write("          <script src=\"js/diferenciaCubo.js\"></script>\n");
      out.write("           <script src=\"js/funRetro.js\"></script>\n");
      out.write("            <script src=\"js/complementoFacto.js\"></script>\n");
      out.write("             <script src=\"js/Comple.js\"></script>\n");
      out.write("               <script src=\"js/temFactorizacion.js\"></script>\n");
      out.write("                 <script src=\"js/factorComun2.js\"></script>\n");
      out.write("                 <script src=\"js/newjavascript.js\"></script>\n");
      out.write("        <title>JSP Prueba</title>\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("       \n");
      out.write("        <script>\n");
      out.write("           \n");
      out.write("            var nu = \"24x<sup>3</sup>y<sup>2</sup>+26n<sup>4</sup>x<sup>8</sup>-2x<sup>4</sup>\";\n");
      out.write("            \n");
      out.write("          // var cad =  \"24t<sup>2</sup>-63t<sup>6</sup>+32t<sup>2<sup>\";\n");
      out.write("           var cad=\"15t<sup>3</sup>x<sup>2</sup> - 8t<sup>2 </sup>+ 4\";\n");
      out.write("           \n");
      out.write("               cad = recorte(cad);\n");
      out.write("               \n");
      out.write("                      \n");
      out.write("             var res3 = cad.replace(/-/g, \"*-\");\n");
      out.write("             \n");
      out.write("               var res21 = res3.replace(/\\+/g, \"*+\");\n");
      out.write("               \n");
      out.write("            \n");
      out.write("               \n");
      out.write("                  var cadSplit = res21.split(\"*\");\n");
      out.write("                  \n");
      out.write("             //    var i=0;\n");
      out.write("                  \n");
      out.write("                  // capturaBaExp(cadSplit[0]);\n");
      out.write("                  \n");
      out.write("               \n");
      out.write("                     alert(\"cadSplit[0] \"+cadSplit[0]) ;\n");
      out.write("                 var cap = new  capturaBaExp(cadSplit[0]);\n");
      out.write("                 \n");
      out.write("                 var cap2 =cap.baexArr();\n");
      out.write("                  var cap3 =cap.posArr();\n");
      out.write("                  \n");
      out.write("                 \n");
      out.write("                 \n");
      out.write("                 $(\"body\").append(cap2+ \"  \"+cap3+\"<br><br>\");\n");
      out.write("                 \n");
      out.write("                 var cajis=\"\";\n");
      out.write("                 \n");
      out.write("                 for(var t=0;t<cap2.length;t++)\n");
      out.write("                 {\n");
      out.write("                      var capInt = parseInt(cap3[t]);\n");
      out.write("                     if(capInt ===0)\n");
      out.write("                     {\n");
      out.write("                         cajis = \"<input type ='cad' id = 'p\"+t+\"'>\";\n");
      out.write("                         \n");
      out.write("                     }\n");
      out.write("                     else\n");
      out.write("                     {\n");
      out.write("                         cajis = \"<sup><input type ='cad' id = 'p\"+t+\"'></sup>\";\n");
      out.write("                         // $(\"body\").append(\"<sup><input type ='cad' id = 'p\"+t+\"'></sup>\");\n");
      out.write("                     }\n");
      out.write("                         \n");
      out.write("                 }//for\n");
      out.write("                 \n");
      out.write("                  $(\"body\").append(cajis);\n");
      out.write("                   \n");
      out.write("            \n");
      out.write("        \n");
      out.write("            \n");
      out.write("        </script>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}

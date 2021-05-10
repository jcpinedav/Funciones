<%-- 
    Document   : prueba
    Created on : 17/12/2019, 10:50:18 AM
    Author     : luis.otero
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script src="js/jquery-2.1.1.min.js"></script>
        <script src="js/facto.js"></script>
         <script src="js/prin.js"></script>
         <script src="js/arreglos.js"></script>
          <script src="js/contenido.js"></script>
        <script src="js/trinomio.js"></script>
        <script src="js/casosFactorizacion.js"></script>
          <script src="js/factorComun.js"></script>
           <script src="js/recorte.js"></script>
           <script src="js/retroAlimentacion.js"></script>
            <script src="js/diferenciaCuadrado.js"></script>
               <script src="js/generaEjercicios.js"></script>
         <script src="js/trinomioPerfecto.js"></script>
          <script src="js/diferenciaCubo.js"></script>
           <script src="js/funRetro.js"></script>
            <script src="js/complementoFacto.js"></script>
             <script src="js/Comple.js"></script>
               <script src="js/temFactorizacion.js"></script>
                 <script src="js/factorComun2.js"></script>
                 <script src="js/newjavascript.js"></script>
        <title>JSP Prueba</title>
    </head>
    <body>
       
        <script>
           
            var nu = "24x<sup>3</sup>y<sup>2</sup>+26n<sup>4</sup>x<sup>8</sup>-2x<sup>4</sup>";
            
          // var cad =  "24t<sup>2</sup>-63t<sup>6</sup>+32t<sup>2<sup>";
           var cad="15t<sup>3</sup>x<sup>2</sup> - 8t<sup>2 </sup>+ 4";
           
               cad = recorte(cad);
               
                      
             var res3 = cad.replace(/-/g, "*-");
             
               var res21 = res3.replace(/\+/g, "*+");
               
            
               
                  var cadSplit = res21.split("*");
                  
             //    var i=0;
                  
                  // capturaBaExp(cadSplit[0]);
                  
               
                     alert("cadSplit[0] "+cadSplit[0]) ;
                 var cap = new  capturaBaExp(cadSplit[0]);
                 
                 var cap2 =cap.baexArr();
                  var cap3 =cap.posArr();
                  
                 
                 
                 $("body").append(cap2+ "  "+cap3+"<br><br>");
                 
                 var cajis="";
                 
                 for(var t=0;t<cap2.length;t++)
                 {
                      var capInt = parseInt(cap3[t]);
                     if(capInt ===0)
                     {
                         cajis = "<input type ='cad' id = 'p"+t+"'>";
                         
                     }
                     else
                     {
                         cajis = "<sup><input type ='cad' id = 'p"+t+"'></sup>";
                         // $("body").append("<sup><input type ='cad' id = 'p"+t+"'></sup>");
                     }
                         
                 }//for
                 
                  $("body").append(cajis);
                   
            
        
            
        </script>
    </body>
</html>

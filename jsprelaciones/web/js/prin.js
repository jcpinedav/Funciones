/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function prin()
{

     $("body").append("<div id= 'contenedor'>");
     
     //$("#desarrollo").empty();
      $("#contenedor").append("<div id= 'menu'>");
       $("#contenedor").append("<div id= 'submenu'>");
      
        
      
     var idI;
        
         $("#desarrollo").append("<div id ='izq'>");
         $("#desarrollo").append("<div id ='der'>");
         
         var menu = mens();
                
                  $("#menu").append(menu) ;
                  
                  $("#menu").css({"position":"absolute",
                                  "border":"orange",
                                  "border-style":"solid",
                                  "width":"12em",
                                  "top":0,
                                  "left":0});
             var miz= 20;
             
             
              
              $("#izq").css({"position":"absolute","width":70,"top":"10em","left+":0+miz});
                
             $("#der").css({"position":"absolute","width":70,"top":"10em","left":120+miz});  
       
                
          $(".pri").click(function(){
              
          var atr = $(this).attr("id");
          
                   
            
           //var fun =atr.toString();
                   
           var id = atr.substring(1);
           
             idI =parseInt(id);
             
             var subMenu = subMen();
           
         $("#submenu").empty();
            $("#contenedor").append("<div id= 'submenu'>");
          $("#submenu").append( subMenu[idI]);
                        $("li.subMenu").css({"float":"left","width":"11em","text-align": "center;"});
                        
                          $("#submenu").css({"position":"absolute",
                                  "border":"orange",
                                  "border-style":"solid",
                                  "width":"55em",          //11em
                                   "top":0,
                                   "left":"12.1em",
                               "list-style-type":"none"});
                           
          $(".subMenu").click(function(){
            var atr2 = $(this).attr("id");
            
             // var ind =atr2.indexOf("#");
            
            var subt =atr2 .substring(1);
         //   var subt2 =atr2 .substring(ind+1);
         
                                 
           casosFactorizacion(idI,subt);
        });
        
               
              
          });
       
    
    
    
}//prin

 
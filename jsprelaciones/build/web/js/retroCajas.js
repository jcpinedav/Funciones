/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function retroCajas()
 {
     var bar;
     var expr;
     var reCa;
    this.cajas12 =   function(p,clase,div,factor,retro,ba,exp)
   {
             
        bar =ba;
        expr = exp;
       var dim1 = factor.length-1;
       var dim2 = factor[0].length-1;
       
        var caj='<table>';
     
        for(var i=0;i<factor.length;i++)
        {
              caj =caj+"<tr>";
            for(var j=0; j<factor[0].length;j++)
            {
             caj = caj+ "<td><input type ='text' class = '"+clase+"' id ='"+p+i+j+"'></td>";  
            }
            caj =caj+"</tr>";
        }
        
        caj=caj + '</table>';
         $("#der").append("<div id ='"+div+"'>");
         
        $("#"+div).append(caj);
        
         $("."+clase).css({"width":"2.5em"});
         
         var fl;
         
          var x = 0;
           var y = 0;
          var error = 0;
        
         $("."+clase).keypress(function(e){
                
                    if(e.keyCode ===13)
                    {
                        var atr = $(this).attr("id");
                        
                        var atr1 = atr[1];
                        
                         var atr2 = atr[2];
                         
                         var xs =parseInt( atr[1]);
                         var ys =parseInt( atr[2]);
                         
                         var user2 =$("#"+atr).val();
                         
                         var sis1;
                         x = parseInt(xs);
                         y = parseInt(ys);
                         
                          sis1 = factor[x][y].toString();
                          var user =user2.toString();
                          var userI, rest;
                          
                          userI = parseInt(user);
                          var sis =parseInt(sis1);
                        //  var numP = parseInt(factor[0][0]);
                          // *******************************
                         fl =event.which || event.keyCode;
                         
                       
                                               
                         if (y===0){
                             
                               if (sis1===user){
                                   
                                    alert(retro[0][0]); 
                                    
                                     $("#"+p+xs+ys).css({"background":"#cccccc"});
                                    y++;
                                   
                                //   alert("y: "+y+ " factor[0].length  "+factor[0].length);
                                     if(y === (factor[0].length))
                                    {
                                        x++;   
                                        y=0;
                                    }
                         
                                   // y=1;
                                    xs =x.toString();
                                    ys = y.toString();
                                    $("#"+p+xs+ys).focus();
                                    
                                    error=0;
                                   
                                 //  $("#"+p+i.toString()+j.toString())
                                   
                               }//sis1===user
                               else  //Respuesta equivocada columna 0
                               {
                                      error=1;
                                     alert(retro[0][1]); 
                                  
                               }
                             
                         }//(y===0.  columna 0)
                         else if(y===1){
                             
                               if (sis1===user){
                                  
                                    alert(retro[1][0]); 
                                    
                                      $("#"+p+xs+ys).css({"background":"#cccccc"}); 
                                                                       
                                      y++;
                                   
                                     if(y === (factor[x].length))
                                    {
                                        x++;   
                                        y=0;
                                    }
                         
                                       xs =x.toString();
                                       ys = y.toString();
                                       $("#"+p+xs+ys).focus();
                               }//sis1===user
                               else
                               {
                                   error=1;
                                    var var3 = factor[x][0];
                                    var var4 = factor[0][1];
                                   
                                   var f1Str = retro[1][1].toString(); 
                                //   var f1Str2 = retro[1][1].toString();
                                   
                                   var indVar = f1Str.indexOf("var3");
                                   
                                //   alert(" indVar = "+indVar);
                                   
                                   if(indVar ===-1)
                                   {
                                      var pf = parseInt(factor[0][0]);
                                   
                                      var divi= pf%userI;
                                     
                                                                      
                                      if(divi ===0)
                                      {
                                          alert(retro[1][1]);  
                                      }
                                     
                                     else 
                                     {
                                        alert(retro[1][2]);
                                     }
                                   
                                 //   
                                   }//-1
                                   else
                                   {
                                      var reem = retro[1][1].replace("var3",var3);
                                      var reem2 = reem.replace("var4",var4);
                                      alert(reem2);   
                                   }
                               }
                             
                         }//(y===1)
                         else if(y===2){
                              if (sis1===user){
                                  alert(retro[2][0]);  
                                  x++;
                                  y=0;
                                  xs =x.toString();
                                 ys = y.toString();
                                 $("#"+p+xs+ys).focus();
                              }
                              else
                              {
                                  alert(retro[2][1]); 
                              }
                             
                         }//y=2
                              
                    }//13
                    
                });//keypress
                
                
                  var id = p+dim1.toString()+dim2.toString();
                  $(document).ready(function(){
                       $("#"+id).focus(function(){
      
                     $("#aviso").empty();
                      
                     $("#der").append("<div id ='aviso'>");
                      $("#aviso").append("Presione ENTER para validar su respuesta.");
                      $("#aviso").css({"color": "green","border":"orange","border-style":"solid"});
   
                   });
 
                 });//document
                $("#"+id).keypress(function(e){
      
                  if(e.keyCode ===13)
                  {
                      var t= $("#"+p+"0"+"0").val();
                     //  alert("aquui: "+t);
                    //  $("#aviso").empty();
                      
                 //    $("#der").append("<div id ='aviso'>");
                     
                     var tempo ="";
                     var otrTem="";
                     var tod="";
                       for (var i=0;i<factor.length;i++)
                       {
                           for (j=0;j<factor[0].length;j++)
                           {
                               tempo = $("#"+p+i.toString()+j.toString()).val();
                               tod = tod+tempo;
                              
                               if(tempo !==factor[i][j].toString())
                               {
                                   error = 1;
                                   otrTem=otrTem+tempo;
                                    $("#"+p+i.toString()+j.toString()).css({"background":"red"});
                               }
                               else
                               {
                                   $("#"+p+i.toString()+j.toString()).css({"background":"#cccccc"});
                               }
                           }
                       }
                       if(error ===1)
                       {
                            $("#aviso").empty();
                             $("#aviso2").empty();
                          $("#der").append("<div id ='aviso2'>");
                      $("#aviso2").append("Las cajas con fondo rojo indican errores.  "+
                              " Corrija los errores para poder continuar."+
                              "<br><br>Para corregirlos haga click en la caja. "+
                              " Lea la retroalimentación y siga las sugerencias.<br><br>");
                               $("#aviso2").css("color", "green");
                               reCa ="Repite";
                             
                       }
                       else
                       {
                             $("#aviso2").empty();
                             $("#der").append("<div id ='aviso2'>");
                              $("#aviso2").append("<br>Presione para seguir con el siguiente paso");
                                  $("#aviso2").css("color", "green");
                              $("#aviso2").click(function(){
                                   $("#aviso2").empty();
                                    $("#der").append("<div id ='aviso2'>");
                                    $("#der").append("Siga el procedimiento de la parte izquierda<br><br>");
                                      $("#aviso2").css({"color": "green","position":"absolute",
                                          "left":"4em"});
                                      
                                  reCa ="Sigue";  
                                  
                              // exponenciales(bar,expr,retro); 
                                     
                                   
                              }) ;
                          
                       }
                      
                  }
                  
   
                   });//13
               
    };// cajas12
    
    this.valida = function()
    {
       return reCa; 
    };
    
         this.exponenciales = function(fac42, fac41,retro2)  //this. =
             {
                
                  baseExpo(fac42, fac41, "derIzq2","fact1","p","t","",retro2);
         
        
                var deriz = $("#derIzq").height();
      
                 $("#der").append("<div id = 'divPosi1'>");
                  $("#der").append("<div id = 'divPosi2'>");
                  
               $("#derIzq2").css({"position":"absolute",
                    "width":"35em",
                    "left":"2.1em","top":deriz+55});//cajas
                
                   $("#divPosi1").css({"position":"absolute",
                                       "left":"0em","top":deriz+75});//Número
                 
                //  $("#divPosi1").append(r2+": ");
                
          $(".fact1").css({"width":"1.3em","background":"#cccccc"});
     };//exponenciales()
            

     
 }//RetroCajas
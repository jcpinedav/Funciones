/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function temFactorizacion(r)
{
   
       var fa41;
        var fa42;
        var rs;
        
        var fa3;
        var fa2;
         var fa = new facto(r);
          var strFac;
          
           
         
    this.descomposicionFactIzq = function(raya)
    {
              
        rs =r;
        
          // alert(r);
         var fIzq1 = fa.divisores();
         var fIzq2= fa.dividendos();
         
         fa2 = fIzq1;
         fa3 = fIzq2;
        var fN1 = fa.exponente();      
         var fN2 = fa.base();
         
         fa41 = fN1;
          fa42 = fN2;
         
            var lado1 ='';
            var lado2 ='';
            
          
             //planti();
             for(var x=0;x<fa2.length;x++)
                {
                    lado1 = lado1+fa3[x]+"<br>";
                    lado2 = lado2+fa2[x]+"<br>";
                  //  $("#izq").append("<tr><div class ='td1'><td class ='sec'>"+fa3[x]+"</td></div><td>"+fa2[x]+"</td></tr>"); 
                }
         
             var todo ="<table id='tabla'>"+
             "Factores de "+r+
             "<tr><td><div id ='"+raya+"'>"+lado1+"</div></td><td>"+lado2+"</td></tr></table>";
     
           
          
          return todo;
     
     
    };
    
   function NumFormaFac()
    {
      var ast1 ="*";
      
    var lad1 ='';
    var lad2 ='';
     strFac=rs+": ";
     for(var x=0;x<fa41.length;x++)
                {
                     if(x ===(fa41.length-1))
                    {
                        ast1 ='';
                        
                       
                    }
                     strFac= strFac+fa42[x]+"<sup>"+fa41[x]+"</sup> "+ast1 + " ";
                   // 
                }
                  //$("#izq").append(strFac);
                 // $("body").append( strFac);
    };//numFac
    
    this.NumFormaFacIzq = function()
    {
       NumFormaFac();
       return strFac;
    };
    
      this.NumFormaFacDer= function()
    {
       NumFormaFac();
       return strFac;
    };
    
    this.cajas = function(factor,clase)
    {
    
    
             alert("Cajas: " + clase);
           var p="r";
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
        
          caj=caj +'</table>';
          
          return caj;
        
    
     //  cajas12(p,clase,div,factor,retro);
       
       //************************** Comienza caja ******************
       
       
        function cajas12(p,clase,div,factor,retro)
        {
             
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
        
          caj=caj +'</table>';
       
         $("#der").append("<div id ='"+div+"'>");
         
        $("#"+div).append(caj);
        
        $("#a00").val(factor[0][0]);
        
       // $("#a00").append(factor[0][0]);
          //alert(" caj  "+caj+"\nfactor.length "+factor.length+" \n "+factor[0].length);
        
         $("."+clase).css({"width":"2.5em"});
         
         var fl;
         
          var x = 0;
           var y = 0;
            var error =0;
        
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
                              " Para corregirlas haga click en la caja. "+
                              " Lea la retroalimentación<br><br>");
                      $("#aviso2").css("color", "green");
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
                                   exponenciales(); 
                                   
                              }) ;
                          
                       }
                      
                  }
                  
   
                   });//13
               
    }// cajas12
    
       function exponenciales()
             {
                  baseExpo(fa42, fa41, "derIzq2","fact1","p","t","",retro);
         
        
               // var deriz = $("#derIzq2").height();
                
                 var deriz = factor.length*20;
                
                alert(" height: "+deriz+"factor.length "+factor.length );
      
                 $("#der").append("<div id = 'divPosi1'>");
                  $("#der").append("<div id = 'divPosi2'>");
                  
               $("#derIzq2").css({"position":"absolute",
                    "width":"35em",
                    "left":"2.1em","top":deriz+75});//cajas
                
                   $("#divPosi1").css({"position":"absolute",
                                       "left":"0em","top":deriz+95});//Número
                 
                  $("#divPosi1").append(r2+": ");
                
          $(".fact1").css({"width":"1.3em","background":"#cccccc"});
             }//exponenciales()
            
       
       //***********************Termina caja ***************
    };//cajas

}
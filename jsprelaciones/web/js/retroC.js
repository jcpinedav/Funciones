/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function retroC()
{
    
     this.creaCaja = function(p,clase,factor)
     {
         var caj="<table>";
           
        for(var i=0;i<factor.length;i++)
        {
              caj =caj+"<tr>";
            for(var j=0; j<factor[0].length;j++)
            {
             caj = caj+ "<td><input type ='text' class = '"+clase+"' id ='"+p+i+j+"'></td>";  
            }
            caj =caj+"</tr>";
        }
        
        caj=caj + "</table>";
        return caj;
         
     };
     this.valida = function(factor,retro,clase,p,ba,exp)
     {
         var fl;
         
          var x = 0;
           var y = 0;
          var error = 0;
          
           var dim1 = factor.length-1;
            var dim2 = factor[0].length-1;
            
            var bar =ba;
            var expr = exp;
        
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
                
                 
     };//valida
     
}//retroC


 
 function baseExpoCaj(base, exponente, clase,p)
    {
        var sinCeros;
        var j=0;
     this.cajas = function()
    {
       
         // alert("opcion: "+p+" ");
      
          var dimCa =base.length+exponente.length;
          
          //  alert("base ff: "+base+ " exponente: "+exponente+ " dimCa: "+dimCa);
          
           var uno =[];      
          var red;
          
      
        
      ///  var fa = fao;
        
          var t1=0,t2=0;
     
           var pos=0;
                
         //  $("."+clase).css({"width":"2.5em"});
           
       
          var baEx="";
          
          
          //************************Prueba *********************
          
         
    
       for(var i=0;i<dimCa;i++)
        {
           
            
            red =i%2;
            if(red ===0)
            {
                baEx = baEx+ "<input type ='text' class ='"+clase+"' id ='"+p+"0"+i+"'>";
                              
           }
            else
                
             {
                 baEx = baEx+"<sup><input type ='text' class ='"+clase+"' id ='"+p+"0"+i+"'></sup>";
             
             }
            
        }
        
           //  alert("baEx  "+baEx +" exponente "+exponente);     
          return baEx;
      };//cjas
      
   
      
      this.baseExpValida = function(base,exponente,clase,p,retro,opcion)
      {
         
         // var fl=1;
          
         // var fac42=base;
         // var fac41= exponente;
          
         var dimCa =base.length+exponente.length;
      
               
          var uno =[];   
          
         
        var red;
        
        var fa = opcion;
        
        var t1=0,t2=0;
        //  $("#der").append("<div id ='"+div+"'>");
          
         
          
         var pos=0;
         
         //uno:  Matriz  unidimensinal formada con bases y exponentes
         
                
          for(var i=0;i<dimCa;i++)
        {
            red =i%2;
            if(red ===0)
            {
                
                uno[i]=base[t1];
                 t1++;
             }
            else
                
             {
                 uno[i]=exponente[t2];
                 t2++;
                
             }
            
        }
        
           
                 
          //************************ key press ************************
          //****************
          //*******
       
          $("."+clase).keypress(function(e){
               
              if(e.keyCode===13)
              {
                 // alert("Aquí "+div);
                  var gp = p.length;
                  var atr = $(this).attr("id");
                  
                
                  
                
                  var at = atr.substring(gp+1);//atr.substring(1);
                  var atsS=atr.substring(1,2);//atr.substring(0,1);
                  var ats = parseInt(atsS);
                  var atr2 ="#"+atr;
                  var ca = $(atr2).val();
               
                  
                  fl =event.which || event.keyCode;
                  
                  var user = ca.toString();//parseInt(ca);
                  var sis  =uno[at].toString(); //parseInt(uno[at]);
                  
                  var at2 =parseInt(at);
                  
                        
                 if (user ===sis)
                 {
                       
                       var even = at% 2;
                       if(even ===0)
                       {
                           even =0;
                       }
                       else
                       {
                           even = 1;
                       }
                       
                       var mens = retro[ats+fa][even].split("*");
                      
                        alert(mens[0]);
                          
                     if(even===0){   //Una base
                            
                            // alert(mens[0]);
                             
                       }
                     else   //Un exponente
                     {
                         // alert(mens[0]);
                           //var mens = retro[ats][at].split("*");
                           
                    }
                      var at21 = at2+1;
                      var atT ="#"+p+ats+at21;
                      $(atT).focus();
                      
                 }
                 else
                 {
                                             
                        var even = at% 2;
                       if(even ===0)
                       {
                           even =0;
                       }
                       else
                       {
                           even = 1;
                       }
                       
                       var mens = retro[ats+fa][even].split("*");
                        alert(mens[1]);
                          
                     if(even===0){   //Una base
                            
                            // alert(mens[1]);
                             
                       }
                     else   //Un exponente
                     {
                          alert(mens[1]);
                           //var mens = retro[ats][at].split("*");
                           
                    } 
                 }
                                  
              
              }
          });//13
      };//baseExpValida
      
         
      }//baseExpoCaj
      
      
      function botValidacion(id)
      {
           // var    id = idM;  
            
           //  alert("id  idM: "+id);
              var err=0;
         this.crearBot = function()
         {
             var men = "Haga clic para validar respuesta";
             var bot = "<input type ='button' id = '"+id+"' value ='"+men+
                  "'>";
         
          
          return bot; 
         };
         
         this.botValidaEvento = function(respSis,p,indice)
         {
            
           //  $("#"+id).click(function(){
                 
                
         
                 err=1;  //No hay error
                 var men="";
                 
              
                  
                 var user="";
                 var sis ="";
                 
                 var flag=0;
                 for(var i=0;i<respSis.length;i++)
                 {
                     for(var j=0; j<respSis[0].length;j++)
                    {
                        var idf= "#"+p+i+j;
                         user = $(idf).val();
                         
                         user = recorte(user);
                         sis =respSis[i][j].toString();
                       
                         sis = recorte(sis);
                         
                           alert(" user "+ user + " sis "+sis);
                       
                      /*   alert("Err respSis ["+i+"]["+j+"] = "+respSis[i][j] + 
                                 " sis = "+sis+" user = "+user+
                                 "\n\nidf =  "+idf);*/
                       
                       if( j === (respSis[0].length-1) && indice ==="max")
                        {
                           
                            flag =1;
                        }
                       if(user !== sis)
                         {
                            
                             err = 0;
                        
                             $("#"+p+i+j).css({"background":"red"});
                        
                         }
                       else
                         {
                              $("#"+p+i+j).css({"background":"#cccccc"});
                         }
                         
                        // alert("err :  "+err+ "respSis["+i+"]["+j+"] =  "+respSis[i][j]);
                   
                    }//for
                }//for
                 
                               
                 if(err ===1)
                 {
                       alert("No se presentaron errores en ninguna de sus respuestas");
                       if (flag ===1)
                       {
                           err=2;
                       }
                        
                      
                 }
                 else
                 {
                       men = "Se presentaron algunos errores, cajas con fondo rojo. "+
                       "Corríjalos y nuevamente presione el boton de validar la respuesta.";
                         alert(men);  
                 }
                 
                 
                 
             
          // });//click
         };  //botValidaEvento 
         
         this.error = function()
         {
             return err;
         };
       
      }
      
     
      //************************ 
      
    
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function casosFactorizacion(k,p)
{
    
     
    var func;
  
    var n=8;
    var m= 5;
    var pos =0;
    var t=0;
     var po=0;
   
   //n tema, m subtemas
          func = new Array(n);
          
           for(var j=0;j<8;j++)
           {
            func[j]= new Array(m);
           }
         func[0][0] = function()
        {
          //contextualizacion();
          var tem = tema2(0,0);
          planti2();
          $("#tem").append(tem);
        };
       func[0][1] = function()
        {
          //contextualizacion();
          var tem = tema2(0,1);
          planti2();
          $("#tem").append(tem);
        };
        func[0][2] = function()
        {
          //contextualizacion();
          var tem = tema2(0,2);
          planti2();
          $("#tem").append(tem);
        };
        func[0][3] = function()
        {
          //contextualizacion();
          var tem = tema2(0,3);
          planti2();
          $("#tem").append(tem);
        };
         
        func[1][0] = function()
        {
          //a elevado a la n
          
           var max = 4,min = 2;
           
           var tab2;
           var espa;
           var fa;
           var fac21;
           var fac22;
           
           var tem = tema2(1,0);
           
            planti();
            var retro =retroAlimentacion2(1,0);
           
            $("#tem").append(tem);
            
            resuelto();
            propuesto();
          
         function resuelto()
         {
            
            var r=  Math.floor(Math.random() * max)+ min;
            var r2=  Math.floor(Math.random() * max) + min;
            
              var num = Math.pow(r,r2);
              
            fa = new facto(num);                        
            var fa2 = fa.divisores();
            fac21 = fa.exponente();
            fac22 = fa.base(); 
            
            
              var ast1 ="*";
            
          
          espa ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
           var iz='';
             for(var x=0;x<fa2.length;x++)
                {
                     if(x ===fa2.length-1)//
                    {
                        ast1 ='';
                    }
                    iz = iz+fa2[x]+ast1;
                    
                  //  $("#der").append(fa4[x]+ast1);
                }
          
      
      ast1 ="*";
      
      var iz2='';
      for(var x=0;x<fac21.length;x++)
                {
                     if(x ===fac21.length-1)//
                    {
                        ast1 ='';
                    }
                    
                    iz2=iz2+fac22[x]+"<sup>"+fac21[x]+"</sup> "+ast1 + " ";
                   
                }
       
          iz = iz+" = "+iz2;
          // alert("Resuelto 3  ");
            
           var tab = "<table><tr><td><div id ='raya'>"+iz+espa+"</div></td></tr></table>";
           $("#izq").append(tab);
         }
         function propuesto()
         {
            var rs=  Math.floor(Math.random() * max) + min;
            var rs2=  Math.floor(Math.random() * max) + min;
             var num2 = Math.pow(rs,rs2);
            var fa3 = new facto(num2);      
            var fac4 = fa3.divisores();
            
            var fac41 = fa3.exponente();
            var fac42 = fa3.base();
             var ast1 ="*";
                   
            var de='',de2=''; 
         ast1 ="*";
       for(var x=0;x<fac4.length;x++)
                {
                     if(x ===(fac4.length-1))
                    {
                        ast1 ='';
                    }
                    de =de+fac4[x]+ast1;
                  //  $("#der").append(fac4[x]+ast1); 
                }
                de = de+" = ";
                  
                ast1 ="*";
                for(var x=0;x<fac41.length;x++)
                {
                     if(x ===(fac41.length-1))
                    {
                        ast1 ='';
                    }
                    de2 =fac42[x]+"<sup><input type ='text' id ='base'></sup> "+ast1 + " ";
                   // $("#der").append(fac42[x]+"<sup><input type ='text' id ='base'></sup> "+ast1 + " "); 
                }
                de = de+de2;
                
                
                var tab2= "<table><tr><td><div id ='raya'>"+de+espa+"</div></td></tr></table>";
                
                          
             //   $("#izq").append(tab);
               $("#der").append(tab2); 
                $("#base").css({"width":"1em","height":"1em","fontSize":8,"background":"#cccccc"});
                              
       $("#base").keypress(function(e){
                    if(e.keyCode ===13)
                    {
                        //alert("retro  y: "+retro);
                        var txt = $("#base").val();
                        
                        var fat =fac41.toString();
                        
                        var tx = txt.toString();
                       var men = retro[0].replace("var1",fac42[0]);
                        var men2 = men.replace("var2",fat);
                        
                         var men3 = retro[1].replace("var3",fac21);
                        var men4 = men3.replace("var4",fac22);
                         var men5 = men4.replace("var5",fac21);
                        var men6 = men5.replace("var6",fac42);
                  
                        if(tx ===fat)
                        {
                            if (confirm(men2)) {
                                func[1][0]();
                           } else {
                           txt = "Escoja otro tema!";
                      }
                           
                        }
                        else
                        {
                            alert(men6);
                        }
                    }
                });
                
            
         }
               
       
        }; //func0
        
          //var k=0;
          
       func[1][1] = function()
       {
           var max = 5,min = 1;
            var espa;
           
           //******************** Retroalimentación y contenido*********************************
            var retro =retroAlimentacion2(1,1);
            var tem = tema2(1,1);//rs[0]
            $("#tem").append(tem);  
             planti();
             
             resuelto();
             propuesto();
            
            function resuelto()
            {
               var r=  Math.floor(Math.random() * max)+ min;
               var r2=  Math.floor(Math.random() * max) + min;
               var ex= r+r2;
               var izqu;//; ="a <sup>"+ex+"</sup> = a<sup>"+r+"</sup> a<sup>"+r2+"</sup> ";
               izqu = sup("a",ex)+" = "+sup("a",r)+sup("a",r2);
                espa ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                
               var tab = "<table><tr><td><div id ='raya'>"+izqu+espa+"</div></td></tr></table>";
                $("#izq").append(tab);
            }
            
            function propuesto()
            {
                 var rs =[];
                 rs[0]=  Math.floor(Math.random() * max) + min;
                 rs[1]=  Math.floor(Math.random() * max) + min;
                 var ex2 = rs[0]+rs[1];
                 
                 var dere ="a <sup>"+ex2+"</sup> = a<sup><input type ='text' id ='re0' class = 'expo'"+
                 "value ='"+ rs[0]+"' ></sup> a<sup><input type ='text' id ='re1' class = 'expo'></sup>";
                 var tab2 = "<table><tr><td><div id ='raya'>"+dere+espa+"</div></td></tr></table>";
                
                 var men = retro[1].replace("var1",rs[0]);
                 var men2 = men.replace("var2",ex2);
                 $("#der").append(tab2);
                 
                  $(".expo").css({"width":"1em","height":"1em","fontSize":8,
                       "background":"#cccccc"});
                   
                   $("#re1").focus();
          
                    $(".expo").keypress(function(e){
             
              
                   if (e.keyCode ===13)
                   {
                     var atr = $(this).attr("id");
                     var id =atr[2];
                     var txt = $("#"+atr).val();
              
                     var idI = parseInt(id);
                     var txtI = parseInt(txt);
                                   
                     if(rs[idI] ===txtI)
                      {
                       
                         if(idI ===2)
                          {
                              idI=0;
                          }
                          $("#re"+(idI+1)).focus();
                          alert(retro[0]);
                      
                         if(idI === rs.length-1)
                           
                          {
                             func[1][1](); 
                          
                          }
                      
                      }
                      else
                      {
                          alert(men2);
                      }
                    
                    
                  }//13
          });
          
      
         
                     
         }
         
       };//func1
       
       
    func[1][2] = function()
    {
           //Multiplicación potencias
               planti();
             var  p0C = new Comple();
             
               var  r0 = p0C.numAzar();
               
           
           
               var r = p0C.numAzar();
               
              
         
                var deF = new faCoNum();
              
                
                deF.resuelto(r);
                
                
                  
                    var retro =retroAlimentacion2(1,2);
                    var tem = tema2(1,2);
                    
                    deF.propuestos (r,retro);
                    
                  
     
                
       };
     
       func[1][3]= function()
       {
           
          
            var tem = tema2(1,3);
              var inPo = 1;
              var  p0C;
        //*********************************** Primera tabla izquierda - izquierda **********     
        
          resueltos();
          propuestos();
          function resueltos()
          {
                p0C = new Comple();
             
               var  r0 = p0C.numAzar();
               
           
           
               var r1 = p0C.numAzar();
                
                var nu =r0.toString()+" + "+r1.toString();
                
               
                
               //  alert("nu "+nu);
                
                 var fc2=  new factorComun(nu);
                 var fc3 = fc2.elComun();
                 var fc = fc2.displayFacEx();
                  
                //  alert("ncad "+fc);
                
                  var ray1 ="ray1";  //Raya que separa los factores
                  var ray2 ="ray2";
                
                 var desco = new temFactorizacion(r0);
                var todo= desco.descomposicionFactIzq(ray1);
                var info2 = desco.NumFormaFacIzq ();//número forma factorial de la izquierda
                
                var pIz=todo+info2;//primero izquierda
            
                planti();
                
                
                
                  $("#izq").append("<div id ='res1'>");
                  $("#izq").append("<div id ='res2'>");
               $("#res1").append(pIz);
               
                $("#"+ray1).css({"border":"white","border-style":"solid"});
                $("#"+ray1).css({"border-right":"orange","border-style":"solid"});
                
                 $("#izq").append("Encuentre el  máximo común divisor (Mcd) entre los números "+
                        r0 +" y "+ r1+ "<br><br>");
            
      //******************** Segunda tabla ******************
      
           var descoS = new temFactorizacion(r1);
            var todoS= descoS.descomposicionFactIzq(ray2);
            var infoS = descoS.NumFormaFacIzq ();
            
            var sIz = todoS+infoS;//Segundo izquierda
               $("#res2").append(sIz);
               
                $("#res1").css({"position":"absolute","top":"1em","left":"0em"});
                $("#res2").css({"position":"absolute","top":"1em","left":"10em"});
            
            $("#"+ray2).css({"border":"white","border-style":"solid"});
             $("#"+ray2).css({"border-right":"orange","border-style":"solid"});
                       
           $("#res1").append("<br><br><br><br>Factor común: "+fc+" : "+fc3);
           
             var er = new facto(r0);
               var erf1= er.divisores(); //er: ejemplos resueltos, f: factores
      
               var erd1= er.dividendos(); // dividendos
               
               var expos = er.exponenciacion();
               
               var tabla = er.strFac();
               $(".an").css({"width":20});
             
           
             $("#izq").append("<div id ='res1'>");
           //    $("#res1").append(tabla+r0+" = "+expos); 
               
                $("#res1").css({"position":"absolute","top":"3em","left":"2em"});
               // 
               var er2 = new facto(r1);
      
               var erf2= er2.divisores(); //er: ejemplos resueltos, f: factores
      
               var erd2= er2.dividendos(); // dividendos
               
               var expos2 = er2.exponenciacion();
               
               var tabla2 =er2.strFac();
                              
               $("#izq").append("<div id ='res2'>");
             //  $("#res2").append(tabla2+r1+" = "+expos2); 
               
                  var cad = r0.toString()+"+"+r1.toString();
                 var fff = new factorComun(cad);
                 
                
               var fco = fff.elComun();//Coeficiente numérico del factor común
               
               
               
                 var faCo =fff.displayFacEx();//Factor común.
                 
                 //alert(" faCo "+faCo);
               
                $("#res1").append("<br><br><br><br><br><br>Factor común: "+faCo+": "+ fco);
                 $("#res2").css({"position":"absolute","top":"3em","left":"10em"});
              
              
          }//resueltos
           
            
              //******************* Ejercicio propuesto****************
             // *********** ******* Retroalimentación *****************
             var retro =retroAlimentacion2(1,3);
             
           //  alert(" retro : "+retro);
              
               $("#tem").append(tem);
               
                    
                function propuestos()
                {
                    var p0 = p0C.numAzar();
               
                        
                 var   p2 = p0C.numAzar();
                 
                var ep = new facto(p0);
      
               var epf1= ep.divisores(); //ep: ejemplos propuestos, f: factores
      
               var epd1= ep.dividendos(); // dividendos
               
               
               var factores1 = multi(epd1,epf1,"");
               
             
                   var ba =ep.base();
                   var exp =ep.exponente();
                   
                   
                 var caisC = new retroC();
                 
                 $("#der").append("Encuentre el máximo común divisor entre "+p0+
                         " y " + p2+"<br><br>");
                 
                 var cais = caisC.creaCaja("p","der1",factores1);
               
                            
                 var div ="div";
        
               $("#der").append(cais);
               
                caisC.valida(factores1 ,retro, "der1", "p" ,ba,exp);
               
                                       
                 $("#p00").val(p0);
                 $(".der1").css({"width":"2.5em"});
                 
                 
                 //*********************Crear botón ***************
                 
                  var id ="id";
                    var  botC = new botValidacion(id);
      
                            var bot = botC.crearBot();
                            
                            $("#der").append("<div id = 'divBot'>");
                            
                              $("#divBot").append(bot);
       
                         //  var  botC = new botValidacion();
                           
                           
                
                  
                 
                  var es;
                
                 //******************** Fin crear boton ****************
                  var  bot2C;
                  var bo2t;
                  $("#"+id).click(function(){
                      
                        botC.botValidaEvento(factores1,"p");
                         es =  botC.error();
                         var esI=parseInt(es);
                         
                         
                         if(esI ===1)
                         { 
                             poBa();
                             
                         }
                         
                         
                 });//click
                 
                 //*********************** Validación de cajas bases exponentes *
                 
                 
                               
               function poBa()
               {
                    $("#divBot").empty();
                               
                              var caC =  new baseExpoCaj(ba, exp, "clase","d");
                 
                              var ca =caC.cajas();
                   
                               $("#der").append("<br><br>"+p0+": "+ca);
                     
                              $(".clase").css({"width":"1.3em"});
                              
                              //*****************Eventos de la caja************
                              caC.baseExpValida(ba, exp, "clase","d",retro,"t");
                              
                              //*****  Crear boton ********
                                id ="id2";
                              bot2C = new botValidacion(id);
      
                              bo2t = bot2C.crearBot();
                            
                             $("#divBot").empty();
                            $("#der").append("<div id = 'divBot2'>");
                              $("#divBot2").append(bo2t);
                              
                               $("#"+id).click(function(){
                              
                              
                             //   var factores2 = multi(ba,exp,"");
                             
                             var factores2 =[];
                                
                              factores2[0] =  dendoSores(ba,exp);
                              
                            //  factores2[0] = factores1;
                      
                        bot2C.botValidaEvento(factores2,"d");
                         es =  botC.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                             poBa2();
                             
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                           
                   
                
               }//poba
               // var p2;
                    var ba2;
                   var exp2 ;
                    var factores4 =[];
               function poBa2()
               {
                   
                   
                   //  p2 = p0C.numAzar();
                    
                     var ep3 = new facto(p2);
      
                     var epf13= ep3.divisores(); //ep: ejemplos propuestos, f: factores
      
                    var epd13= ep3.dividendos(); // dividendos
               
               
                    var factores3 = multi(epd13,epf13,"");
                    
                      var caisC3 = new retroC();
                 
                     var cais3 = caisC3.creaCaja("q","der2",factores3);
                     
                      ba2 =ep3.base();
                      exp2 =ep3.exponente();
                       
                       
                          
                       
                         $("#der").append("<div id ='derDer'>");
        
                     $("#derDer").append(cais3);
                      $(".der2").css({"width":"2.5em"});
                        $("#q00").val(p2);
                                   
                  
                   
                       var div ="div3";
                     $("#derDer").css({"position":"absolute",
                                       "top":"3em",
                                       "left":"19em"});
                                                                
                    caisC3.valida(factores3 ,retro, "der2", "q" ,ba2,exp2);
                    
                     var esI=parseInt(es);
                     
                      id ="id3";
                             var bot3C = new botValidacion(id);
      
                           var   bo3 = bot3C.crearBot();
                           
                           
                            
                              $("#divBot2").empty();
                            $("#derDer").append("<div id = 'divBot3'>");
                              $("#divBot3").append(bo3);
                              
                               $("#"+id).click(function(){
                         
                      
                        bot3C.botValidaEvento(factores3,"q");
                         es =  bot3C.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                             poBa3();
                             
                         }
                   //alert("factores3 "+factores3);
                      });//click
                   
               }
               
               
         function poBa3()
               {
                            factores4[0] =  dendoSores(ba2,exp2);
                             var caC =  new baseExpoCaj(ba2, exp2, "klase","m");
                 
                              var ca =caC.cajas();
                              
                              
                   
                               $("#derDer").append("<br><br>"+p2+": "+ca);
                               
                                caC.baseExpValida(ba2, exp2, "klase","m",retro,"t");
                     
                             
                              
                                $(".klase").css({"width":"1.3em"});
                              
                              //*********************** Crear botones ************
                              id ="id4";
                             var bot4C = new botValidacion(id);
      
                           var   bo4 = bot4C.crearBot();
                           
                            
                            
                            
                              $("#divBot3").empty();
                            $("#derDer").append("<div id = 'divBot4'>");
                              $("#divBot4").append(bo4);
                              
                  $("#"+id).click(function(){
                                   
                                                               
                                bot4C.botValidaEvento(factores4,"m");
                                 es =  bot4C.error();
                                 
                                 if(es ===1)
                                 {
                                     poBa4();
                                     //alert("Buscar factor común ");
                                 }
                                 
                                
                          });//click
                   
               }//poBa3
               
               function poBa4()
               {
                     var cad = p0.toString()+" + "+p2.toString();
                     
                      $("#der").append("<div id ='derAbajo'>");
                  
                 var fff = new factorComun(cad);
                 
                
               var fco = fff.elComun();//Coeficiente numérico del factor común
               
               
               
                 var faCo =fff.displayFacEx();//Factor común.
                 var com = fff.displayProCo();
                 
                 var ba3C = new Comple();
                 
                 var ba3 = ba3C.capturaBase(faCo);
                 
                  var exp3= ba3C.capturaExpo(faCo);
                  
                  factores4[0] =  dendoSores(ba3,exp3);
                  
                             var caC =  new baseExpoCaj(ba2, exp3, "klase","n");
                 
                              var ca =caC.cajas();
                   
                               $("#derAbajo").append("<br><br>Factor común: "+ca+ "  ");
                               
                              
                               
                                caC.baseExpValida(ba3, exp3, "klase","n",retro,"t");
                                
                                  
                                
                                  $(".klase").css({"width":"1.3em"});
                                  
                  //******************************* boton ****************
                  
                             id ="id5";
                             var bot5C = new botValidacion(id);
      
                           var   bo5 = bot5C.crearBot();
                           
                           //Aquí se cae
                           
                              $("#divBot4").empty();
                            $("#derAbajo").append("<div id = 'divBot5'>");
                              $("#divBot5").append(bo5);
                              
                               $("#derDer").css({"background":"grey",
                                                 "width":"10em"});
                              
                          
                              
                          $("#"+id).click(function(){      
                               bot5C.botValidaEvento(factores4,"n");
                                 es =  bot5C.error();
                                 
                                 if(es ===1)
                                 {
                                     poBa5(com );
                                     //alert("Buscar factor común ");
                                 }
                                 
                         
               
                  });//click  
               }// poBa5();
               
               function poBa5(com)
               {
                     $("#divBot5").empty();
                   $("#derAbajo").append(" = <input type ='text' id ='fcomu'>");
                   
                     $("#fcomu").css({"width":"1.3em"});
                   
                   $("#fcomu").keypress(function(e){
                       
                       if (e.keyCode ===13)
                       {
                           var user = $("#fcomu").val();
                           var sis = com.toString();
                           
                           if( user ===sis)
                           {
                               alert("Perfecto esa es la respuesta");
                           }
                           else
                           {
                               alert("Se equivocó en los cálculos, revise.");
                           }
                       }//13
                       
                   });
               }
       
      
                }//propuestos
                        
                 
                 
       };//func3
       
       func[1][4] = function()
       { 
           planti();
          
            
             var subI=7;
             
                 
            var tipo = Math.floor(Math.random()*4)+1;         
            
             var  cad22 = new generaEjercicios();
             var cad = cad22.factorComun(tipo);
           
              var t2  ="Factorice la expresion "+cad+": <br><br>";//cad[pos]
              
                  
               
             var facCom = new  factorComun(cad);
             var res = facCom.display();  //Toda la factorización
             
             var faBas = facCom.displayFacEx();  //Factor común
             var restEx = facCom.displayResEx();  //Lo que va dentro del paréntesis
             var exmat =facCom.expEnMat();
             
             var enCad =  facCom.Cadorig();
             
           
         
         
          var nume = facCom.displayNume();
           
           var factores =[];
           var expone =[];
           var fa2=[];
           var ba2=[];
           var exp2=[];
             for(var i=0;i<nume.length;i++)   //Números que están en las cadenas
               {
                     factores[i] = new facto(nume[i]);
                     fa2[i] = factores[i].divisores();
                     expone[i] = factores[i].exponenciacion();
               }
               
                 $("#izq").append(t2+"");
           
           $("#izq").append("<table>");
           for(var t=0;t<nume.length;t++)
           {
                 $("#izq").append("<tr><td>"+enCad[t]+": "+exmat[t]+"</td></tr>");
           }
          $("#izq").append("</table>");
          
            var tod = "<br>"+faBas+" ("+restEx +"<br>"+res;
                        
              $("#izq").append(tod);
              
              $("#tem").append(tem);
          
          //   $("#izq").append();
             
              
               
           
           //**************************  Ejercicio propuesto ************************
           
           var  cad22 = new generaEjercicios();
           var  cad2 =cad22.factorComun(tipo);
            var tem = tema2(1,4);
                         
              var t22  ="Siguiendo los pasos del lado izquierdo, factorice esta expresion: "+
                       cad2+" <br><br>";//cad2[pos]
             var facCom2 = new  factorComun(cad2);
       
             var LetCo =facCom2.displayLetCo();//Primera letra
             
           //  
             
             var ProCo=[];
             
              ProCo[0] =facCom2.displayProCo();//Primer número
              
               //  var NoexpoLet =facCom2.displayNoExpoLetras();//Exponentes no factor común
               //  var ProNoCo =facCom2.displayProNoCo();
                // var LetNoCo =facCom2.displayLetNoCo();//letras no factor común
                   
                     var expoLet =facCom2.displayExpoLetras();
                   
                  //  var expS =[];
                    LetCo[0] = ProCo+LetCo[0];
                   
                            
             
             var nume2 = facCom2.displayNume();
             
              var enCad2 =  facCom2.Cadorig();
                   
           var facCo =[];
          facCo[0] = facCom2.mFactComun();
          var minis = [];
          minis[0] = facCom2.mMi();
             
         var NfacCo = facCom2.NmFactComun();//Bases no cumunes
          var Nminis = facCom2.NmMi();//Exponentes no comunes
       
             var signs =  facCom2.displaySignos();
           
             var restEx2 = facCom2.display();
             
             var ind1 =restEx2.indexOf("(");
             
             var ind2 =restEx2.indexOf(")");
             
             var res2 = restEx2.substring(ind1+1,ind2);
             
         //    var basEx = res2.split("+");
             
              var res3 = res2.replace(/-/g, "*-");
              var res21 = res3 .replace(/\+/g, "*+");
              
              var res22 = res21 .replace(/<sup>1<\/sup>/g, " ");
              
              var basEx = res22.split("*");
              
              var baa = new Comple();
              
         //     alert("basEx  0"+basEx [0]+"basEx  1"+basEx [1]);
              
           
              //*************************** Pruebita **************************
              
                //  var   cad3 = recorte(res22);          
           //  var res3 = cad3.replace(/-/g, "*-");
             
            //   var res21 = res3.replace(/\+/g, "*+");
               
         
               
               //   var cadSplit = res22.split("*");
                  
                           //************************** Fin pruebita**********************
              
              
              
            
        
             
           //  var baa2 =[];
            // var paa2 =[];
         
               
         
     
             
        $("#der").append(t22+"<br>"+
                     ""+
                      ""+
                     "<br> restEx2  "+restEx2 +"<br>");
             
               
          
         
         
          var factores2 =[];
           var expone2 =[];
           var fa22=[];
           
           var sgn =facCom2.displaySignos();
           
           // *************************** Retroalimentación ***************************
           
         
           var retro = retroAlimentacion2(1,4);
           
           
  
             for(var i=0;i<nume2.length;i++)   //Números que están en las cadenas
               {
                   
                     factores2[i] = new facto(nume2[i]);
                     fa22[i] = factores2[i].divisores();
                     expone2[i] = factores2[i].exponenciacion();
                     ba2[i]=factores2[i].base();
                     exp2[i]= factores2[i].exponente();
              
               }
        
        
         
           // ***************Bases y exponentes en una sola matriz
     
      
        var prueba ="";
       // var red;
        var k=0;
        var k2=0;
              
                $("#der").append(t22);
                 
                var nu =0;
                
                var nu2=" = ";
                
                var let =["d","b","c"];
                 var let2 =["q","s","v"];
                 var let3 =["r","g","n"];
                 
                var indice =0;
              //  poBa5();
                
                 poBa(0,let[0]);
                
                //******************************* Function poBa() ***********
                
                 function poBa()
               {
                   // $("#divBot").empty();
                               
                               var cl = "clase"    ;                       
                              var caC =  new baseExpoCaj(ba2[indice], exp2[indice], cl,let[indice]);
                 
                              var ca =caC.cajas();
                              
                               var imen =enCad2[indice].indexOf("<sup>");
                              var leta = enCad2[indice].substring(imen-1);
                              var sin = enCad2[indice].substring(1);
                   
                               $("#der").append(sin+": "+ca+" "+leta);//p0=
                     
                              $(".clase").css({"width":"1.3em"});
                              
                              //*****************Eventos de la caja************
                            
                             
                          //   alert(" máximo "+max);
                              caC.baseExpValida(ba2[indice], exp2[indice], cl,let[indice],retro,0);
                              
                              //*****  Crear boton ********
                              
                              var max="menos";
                              if(indice ===(ba2.length-1))
                             {
                                 max ="max";
                             }
                             var id ="id"+indice;
                             var bot2C = new botValidacion(id);
      
                             var bo2t = bot2C.crearBot();
                            
                             
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo2t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                               $("#"+id).click(function(){
                              
                              
                             //   var factores2 = multi(ba,exp,"");
                             
                             var factores2 =[];
                                
                              factores2[0] =  dendoSores(ba2[indice],exp2[indice]);
                      
                        bot2C.botValidaEvento(factores2,let[indice],max);
                        var es =  bot2C.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                             indice++;
                             
                             $("#divBot2").empty(); 
                             
                             $("#divBot2").append("<br><br><br>");
                           
                             poBa();
                           
                         }
                         else if(esI ===2)
                         {
                            
                              poBa2();
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                           
                   
                
               }//poBa
               
               function poBa2()
               {
                     var cl ="klase";
                     var caC3 =  new baseExpoCaj(facCo[0], minis[0], cl,"k");
                 
                     var ca3 =caC3.cajas();
                     
                     
                     $("#der").append("<div id = 'comu'>");
                         $("#comu").append("Común: "+ca3+" ");//p0=
                           $("."+cl).css({"width":"1.3em"});
                           
                            var max ="";
                           
                             caC3.baseExpValida(facCo[0], minis[0], cl,"k",retro,1);
                             
                              var id ="idt";
                             var bot3C = new botValidacion(id);
      
                             var bo3t = bot3C.crearBot();
                            
                            $("#divBot2").empty(); 
                            $("#der").append("<div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo3t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                               $("#"+id).click(function(){
                             var factores2 =[];
                              max ="";
                         factores2[0] =  dendoSores(facCo[0],minis[0]);
                        bot3C.botValidaEvento(factores2,"k",max);
                        var es =  bot3C.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                           
                              $("#divBot2").empty(); 
                             //$("#divBot2").append("<br><br><br>");
                            indice=0;
                            
                             var meni = "(";
                             var meniCss = meni.fontsize(8);
                              $("#comu").append(meniCss);//p0=
                             poBa3();
                             
                            
                         }
                       });//click
               }//poBa2
               
               function poBa3()
               {
                   var cl ="klase2";
                    var caC4 =  new baseExpoCaj(NfacCo[indice], Nminis[indice], cl,let2[indice]);
                    
                   // var meni = "(";
                 //   var meniCss = meni.fontsize(8);
                    
                     var meni2 = ")";
                    var meniCss2 = meni2.fontsize(8);
                 
                     var ca4 =caC4.cajas();
                     
                         $("#comu").append(ca4+signs[indice+1]);//p0=
                         $("."+cl).css({"width":"1.3em"});
                         $("#divBot2").empty(); 
                         
                           var max ="";                           
                           caC4.baseExpValida(NfacCo[indice], Nminis[indice], cl,let2[indice],retro,1);
                           
                 //************************ Crear botón **********************
                 
                       // max="menos";
                              if(indice ===(NfacCo.length-1))
                             {
                                 max ="max";
                             }
                             var id ="idt"+indice;
                             var bot4C = new botValidacion(id);
      
                             var bo4t = bot4C.crearBot();
                            
                             
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo4t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                               $("#"+id).click(function(){
                              
                              
                             //   var factores2 = multi(ba,exp,"");
                             
                             var factores2 =[];
                                
                              factores2[0] =  dendoSores(NfacCo[indice], Nminis[indice]);
                              
                            
                      
                        bot4C.botValidaEvento(factores2,let2[indice],max);
                        var es =  bot4C.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                             indice++;
                             
                             $("#divBot2").empty(); 
                             
                             $("#divBot2").append("<br><br><br>");
                           
                             poBa3();
                            
                            /* if(indice ===(ba2.length-1))
                             {
                                
                             }*/
                                
                             
                         }
                         else if(esI ===2)
                         {
                            $("#comu").append(meniCss2);
                              //alert("Pulse en el submenu para hacaer otro ejercicio");
                                 poBa4();
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                           
               }
                
                
                function poBa4()
                {
                     var cl ="klase5";
                     var caC5 =  new baseExpoCaj(LetCo, expoLet, cl,"o");
                 
                     var ca5 =caC5.cajas();
                     
                         var meni = "(";
                    var meniCss = meni.fontsize(8);
                      $("#der").append("<div id = 'comu2'>");
                         $("#comu2").append("Finalmente: "+ca5+meniCss);//p0=
                           $("."+cl).css({"width":"1.4em"});
                             var max ="";
                           caC5.baseExpValida(LetCo, expoLet, cl,"o",retro,2);
                           
                            var id ="idt0";
                             var bot5C = new botValidacion(id);
      
                             var bo5t = bot5C.crearBot();
                            
                            $("#divBot2").empty(); 
                            $("#der").append("<div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo5t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                               $("#"+id).click(function(){
                             var factores2 =[];
                             var max ="";
                         factores2[0] =  dendoSores(LetCo, expoLet);
                        bot5C.botValidaEvento(factores2,"o",max);
                        var es =  bot5C.error();
                         var esI=parseInt(es);
                         
                           if(esI ===1)
                         { 
                           
                              $("#divBot2").empty(); 
                             //$("#divBot2").append("<br><br><br>");
                            indice=0;
                            max ="menos";
                             // $("#comu2").empty();
                             poBa5();
                            
                         }
                       });//click
                }//poB4 4
                //
                function poBa5()
                {
                     
                   var bad  = new capturaBaExp(basEx [indice]);  //capturaBaExp(cad)
                   var bapa1 = bad.baexArr();  
                   
                                 
                    var bapa2 = bad.posArr();
                    
                      var cl ="klase6";
                      
                       // alert(" cl "+bapa1);
                     var caC6 = bad.cajas(let3[indice],cl) ;
                     
                     
                     
                   //    alert(" bapa1 "+bapa1);
                      
                        $("#der").append("<div id = 'comu2'>");
                         $("#comu2").append("cajas"+ caC6);//p0=
                 
                   //  $("#der").append("cajas "+caC6 +"<br><br>");
                     
                        $("."+cl).css({"width":"1.8em"});
                    
                  
                    
                    var meni = "";
                    var meniCss = meni.fontsize(8);
                    
                     var meni2 = signs[indice+1];
                                    
                       //  $("#comu2").append(meniCss+caC6+meni2);//p0=
                     
                          bad .baseExpValida(cl,let3[indice],retro,1);
                          
                        
                           
                 //************************ Crear botón **********************
                 
                             var max ="menos";
                             
                             
                                                        
                           //   $("#der").append(" bsl[indice]-1) = "+( baa2.length-1)+" indice = "+indice);
                              
                                 // alert("indice = "+indice+ "(basEx [indice].length-1)  = "+(basEx .length-1));                     
                              if(indice ===(basEx.length-1))
                             {
                                
                                 max ="max";
                             }
                             var id ="idt"+indice;
                             var bot6C = new botValidacion(id);
      
                             var bo6t = bot6C.crearBot();
                             
                                                         
                            
                             $("#divBot2").empty(); 
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo6t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                              var bai =[];
                              bai[0] = bapa1;
                              
                           
                              
                               $("#"+id).click(function(){
                              
                                                 
                        bot6C.botValidaEvento(bai,let3[indice],max);
                        
                        
                        var es =  bot6C.error();
                        
                        
                         var esI=parseInt(es);
                         
                          
                         var avi ="Pulse en el submenu Factor_Común para hacer otro ejercicio";
                         var aviCss= avi.fontcolor("orange");
                         
                         
                         alert("esI "+esI);
                         
                           if(esI ===1)
                         { 
                             indice++;
                             
                             $("#divBot2").empty(); 
                             
                             $("#divBot2").append("<br><br><br>");
                           
                             poBa5();
                        
                         }
                         else if(esI ===2)
                         {
                            $("#der").append("<div id ='avi'>");
                             $("#avi").append(aviCss);
                             // alert();
                                // poBa4();
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                }//poBa5
                //******************************* Fin function poBa()*********
                  
             
             var hebot =$("#facca").height()+250;
             
               $("#bot").css({"position":"absolute", "top":hebot}); 
             
             $("#bot").click(function(){
                  pos++;
                
                  if(pos >=(cad.length-1))
                  {
                      pos =0;
                  }
                 func[1][4]();
                
             });
            
       };
       
      // ************************** Trinomio ****************
      
      
  func[2][0] = function()
    {  
         //Trinomio
        planti();
        
         var faco = new arreglos();
          
          var fak = faco.arre1; 
          
          
           var numeroAzar = new generaEjercicios();
           
           var r1 = numeroAzar.numeroAzar() ;
         
        var fact = new facto(r1);
        
        var factus1 = fact.factores();
        var factus2 = fact.factores2();
        
        var resu;
        
           var tem = tema2(2,0);
              
          var fak2 = faco.arre2; 
                   
          var r2 = numeroAzar.numeroAzar() ;
                  
          var fact2 = new facto(r2);
          
           var factus12 = fact2.factores();
           var factus22 = fact2.factores2();
           
           var temN = tem.replace("var1",r2);
            
             $("#tem").append(temN); 
             
        resu = "<table border ='1'>";
        for(var i=0;i<factus1.length;i++)
        {
            resu = resu+"<tr><td>"+factus2[i]+"</td><td>"+factus1[i]+"</td></tr>";
        }
         resu= resu+"</table>";
         
    
        //  alert(tem);
        
         // var avi = "<br><br>Los números son: ";
        $("#izq").append(resu);
        
        var fatus =[];
        
        //****************Propo ************************
        
        //************************* Retroalimentación ************************
        
        var retro = retroAlimentacion2(2,0);
        
        var factis = multi(factus22,factus12,"");
        
              
         cajas("p","der1","derIzq",factis,retro);
      
    };// func[1][0]
     
    func[2][1] = function()
    {
             planti();
        var t2  =0;
        
         planti();
         
       
          var signo1 =  Math.floor(Math.random() * 2);
         var signo2 =  Math.floor(Math.random() * 2);
         var eRe = new trinomio(signo1,signo2);
         var sum12 = eRe.suma();
         var numer1 = eRe.numero1();
         var numer2= eRe.numero2();
         var num = eRe.producto();
         var num2;
         if(num <0)
         {
             num2 = -1*num;
         }
         else
         {
             num2= num;
         }
        
           var tem = tema2(2,1);
     $("#tem").append(tem); 
             $("#izq").append("Halle los factores del número "+num +
                     " y escriba en la caja de abajo los que sumados o restados den : "+sum12+"<br><br>");
             
       //************************ Ejemplo resuelto *************
       
        var fact = new facto(num2);
        
        var factus1 = fact.factores();
        var factus2 = fact.factores2();
        
        var operacion =[];
       
          var resu = "<table border ='1'>";
          
        for(var i=0;i<factus1.length;i++)
        {
             if(numer1 > 0 && numer2 > 0)
            {
                operacion[i] = factus1[i]+factus2[i];
            }
            
            else if(numer1 < 0 && numer2 < 0)
            {
                operacion[i] = factus1[i]+factus2[i];
            }
            
             else if((factus1[i] -  factus2[i] )>= 0)
            {
                 operacion[i] = factus1[i]-factus2[i];
            }
            
             else if((factus1[i] -  factus2[i])<0)
            {
                 operacion[i] = -1*(factus2[i]-factus1[i]);
            }
            
            resu = resu+"<tr><td>"+factus2[i]+"</td><td>"+factus1[i]+
                    "<td>"+ operacion[i]+"</td></td></tr>";
        }
         resu= resu+"</table>";
         
    var avi = "<br><br>Los números son: "+numer1+" y "+numer2;
        //  alert(tem);
        $("#izq").append(resu+avi);
        
         // signo1 =0;
        //  signo2 =0;
        
         //************************ ejercicio propuesto *************
          var eRe = new trinomio(signo1,signo2);
         var sum122 = eRe.suma();
         var numer12 = eRe.numero1();
         var numer22= eRe.numero2();
         var num2 = eRe.producto();
         var num3;
         
         if(num2 <0)
         {
             num3 = -1*num2;
         }
         else
         {
             num3 =num2;
         }
         // var num2 =44;
          var fact2 = new facto(num3);
          
           var factus12 = fact2.factores();
           var factus22 = fact2.factores2();
           
         var propo = "<table border ='1'>";
         var sig=factus12.length;
         var children =[];        
         var mod;
         var v=0,v2=0,v3=0;
         var operacion2 =[];
         
        for(var i=0;i<factus12.length;i++)
         {
             if(numer12 > 0 && numer22 > 0)
            {
                operacion2[i] = factus12[i]+factus22[i];
            }
            
            else if(numer12 < 0 && numer22 < 0)
            {
                operacion2[i] = factus12[i]+factus22[i];
                
            }
            
             else if((factus12[i] -  factus22[i] )>= 0)
            {
                 operacion2[i] = factus12[i]-factus22[i];
            }
            
             else if((factus12[i] -  factus22[i])<0)
            {
                 operacion2[i] = -1*(factus22[i]-factus12[i]);
            }
        
         }
         
         var opera=numer12*numer22;
         
         var menOp ="";
         var opi;
         
         if(opera < 0)
            {
                menOp ="restados";
                opi ="resta";
            }
           else
           {
              menOp ="sumados"; 
              opi ="suma";
           }
            
         
          var str = "(En la descomposición factorial no escriba los signos)";
          var result = str.fontcolor("green");
        
         $("#der").append("Halle los factores del número "+num2+
                  " y escriba en la caja de texto de abajo, los  que "+menOp+" den : "+sum122 +
                  " "+result+" <br><br>");
    
        var avi3 = "Nota: No olvide escribir el signo si el número es negativo.";
        
        var result2 = avi3.fontcolor("green");
          var avi2 = "<br><br>Los números son"+result2+
                  ": <input type ='text' class = 'prop2' id='q0' > y"+
                    " <input type ='text' class = 'prop2' id='q1' >";
        
      //   $("#der").append(propo+avi2);
         
         //*************************  Retro *********************************
         
         var mate = multi(factus22, factus12,operacion2);
         $("#izq").append("<br><br>"+mate);
         
         var clase ="mult", div ="div",p ="a";
         
         //*******************  Retroalimentación ***********************
         
          var retro = retroAlimentacion2(2,1);
         
         cajas(p,clase,div,mate,retro);
         
       //  var caw =[];
         
         var caw= [numer12,numer22];
          
          var height =$("#"+div).height();
        //  var width =window.self() ;
          
          var gr = 70+height;
          
     //  alert(" height "+height);
     
      var cat =[];
           
           for(var x=0; x<caw.length;x++)
           {
               cat[x] = "<input type = 'text' id ='p"+x+"' class ='clase'>";
               
           }
      var   cats =cat[0].toString() + " y "+cat[1].toString();
        var mensa="<br><br><span id ='mensa'>De la tabla anterior, ubique  los factores  de "+
                  num2+" cuya "+opi+
                " den  "+sum122+"   y escríbalos en las siguientes cajas:</span>"+cats+
                "<span id ='mensa2'>  </span>"+"<br><br>"+result2;;
        
       //var mensa2=
       
     
         $("#der").append("<div id = 'div2'>");
        
       
        
        
      //  mensa = mensa+mensa2;
      
   
               
         $("#der").append(mensa);
      
                       
            $(".clase").css({"width":"2.0em"});
            
            $(".clase").keypress(function(e){
               if(e.keyCode ===13) 
               {
                   var atr = $(this).attr("id");
                   var inic = atr.substring(1);
                   var sis = caw[inic].toString();
                   var user =$("#"+atr).val();
                   var nu =parseInt(inic);
                   
                   if(sis ===user)
                   {
                        alert(retro[3+nu][0]);
                   }
                   else
                   {
                       alert(retro[3+nu][1]);
                   }
                  
                   
               }//13
            });//$(".clase")
          
                         
     
         $(".prop2").css({"width":"1.8em"});
    };
    
    
      func[2][2] = function()
    {
        planti();
        var tem = tema2(2,2);
        
        
        $("#tem").append(tem); 
        
         var signo1 =  Math.floor(Math.random() * 2);
         var signo2 =  Math.floor(Math.random() * 2);
            
        //******************** Ejemplo resuelto *****************
         var eRe = new trinomio(signo1,signo2);
         var sum12 = eRe.suma();
         var numer1 = eRe.numero1();
          var numer2= eRe.numero2();
          
          var factorizado = eRe.perfecto();
          var eje2 = eRe.expresion();
          var num = eRe.producto();
        $("#izq").append(eje2+" <br><br>Siguiendo el tema anterior, halle los factores de "+num+
                          "  que sumados den  "+sum12+
                          ". Los números son: "+ numer1+ " y "+numer2+ "<br><br>Observe los signos, en el primer paréntesis se coloca el"+
                           " el primer signo, en el segundo el resultado de multiplicar el primer signo"+
                           " por el segundo signo.<br><br>"+
                           eje2+factorizado);
        
        //********************* Propuesto ***************
        
        var ejPro2 = new trinomio(signo1,signo2,1);
        var ejePro2 = ejPro2.expresion();
        var numP =ejPro2.producto();
        var sumP12 = ejPro2.suma();
          var numer12 = ejPro2.numero1();
          var numer22= ejPro2.numero2();
        var res = [];
        
         res[0] = new Array (2);
        
        res[0][0]= numer12;
        res[0][1]= numer22;
        
          res[1] = new Array (2);
        
        res[1][0] = ejPro2.pPar();
        
        res[1][1] = ejPro2.sPar();
        
     
        
       var men2 ="(Si reciba un "+
                 " mensaje de ERROR  en la primera caja, pruebe con el otro factor.  Si persiste el error,"+
                 " es porque no son los números.)";
         
         var men = men2.fontcolor("green");
        
       
         //***************************  Retroalimentación ******************
                    
                    var retro = retroAlimentacion2(2,2);
                    
          
          //alert(retro);  
                   
                   
        //****************  Primera dos cajas ***********************
                                      
                  var cajos =   new cajaSimple();
                  
                  var cajosi = cajos.grid("p","clase3","div4",res ,retro);
                  
                $("#der").append("<div id ='div4'>");
                
                  $("#der").append(ejePro2+" <br><br>Factores de "+numP+"  que sumados"+
                          " (o restados según el caso) den "+
                          sumP12+"  son:<br> "+
                           cajosi[0][0]+" y" +
                           cajosi[0][1] +" <br><br>"+men+"<br><br><br><br><br>"+
                            ejePro2+" = ("+cajosi[1][0]+")("+
                           cajosi[1][1]+")");
                                        
                cajos.rete();
               
                      
   //****************  Segunda  dos cajas ***********************
          
    };//22
   
   
      func[3][0] = function()
    {
       
         planti();
           var tem = tema2(3,0);
           
           //******************  Ejercicios realizados ********************
         var signo1 =  Math.floor(Math.random() * 2);
         var signo2 =  Math.floor(Math.random() * 2);
         var eRe = new trinomio(signo1,signo2);
               
        var eje2 = eRe.formaEspecial(signo1,signo2);//La expresión algebraica:8a2-10a-3
          
          var facti =eRe.formEspFac();//8,2,-12,3= 8*3 = 24: Numeros -12 y 2
          
        
          
          var facF = eRe.factorize();
          var facF2 = eRe.factorize2();
          
         var z = eRe.zeta();
          var conZ =eRe.conZ();
          
          var coef = eRe.formEspFac();
          var faZ =eRe.facZ();
          var facFin = eRe.facFin();
          
          var priFa0 = eRe.priFacto();
          
        
          
          faZ = ""+priFa0[6]+"("+priFa0[7]+")";
          
             // alert(" faZ = "+faZ);     
           var jas ="";
          if(typeof priFa0[8] ==="")
          {
              jas = priFa0[9]+")("+priFa0[10]+")";
          }
          else
          {
              jas= priFa0[8]+"("+
                         priFa0[9]+")("+priFa0[10]+")";
          }
        //  var fFin = eRe.faFin();
          
         // alert(" todos "+coef+"num24: " +coef[3]);faZ = 
         
         facFin=jas;
         
         $("#tem").append(tem );
          
        $("#izq").append(" Factorice la siguiente expresión: <br><br>"+facF2+"<br><br>Hacemos z= "+z+
                           "<br><br> Reemplazamos:  = "+conZ+"<br><br>Factorizando = "+faZ+"<br><br>"+
                           "Finalmente reemplazando a z: "+facFin);
                   
       //*********************************** Ejemplo propuesto *****************************************
                   //***************************  Retroalimentación *****************************
         
                         var retro = retroAlimentacion2(3,0);
                         
                       
         
                    //****************************Fin retroalimetanción **************************
         
           
         var eje22 = eRe.formaEspecial(signo1,signo2);
          var facti2 =eRe.formEspFac();
          
          var facF2 = eRe.factorize();
          var facF22 = eRe.factorize2();
          
         var z2 = eRe.zeta();
          var conZ2 =eRe.conZ();
          
          var coef2 = eRe.formEspFac();
          var faZ2 =eRe.facZ();
          var facFin2 = eRe.facFin();
          
           var priFa2 = eRe.priFacto();
           
         
            var desc =priFa2.length-7;
            
        
           // 
            // alert(" priFa cerca "+priFa2);
           var priFa=[];
           var e=0;
           
            
             for(var n=4; n<priFa2.length;n++)
             {
               if(priFa2[n] !=="")
                   {
                        priFa[e]= priFa2[n];  //e porque n comienza en 4
                        e++; 
                   }
             
            }
     
        var prifa =[];
        
       prifa[0] = new Array(1);
       prifa[0][0]= priFa[0];
       
        prifa[1] = new Array(1);
       prifa[1][0]= priFa[1];
       
           prifa[2] = new Array(2);
           prifa[2][0]= priFa [2];
            prifa[2][1]= priFa [3];
            
            var canti=0;
            
            if(priFa.length ===6)
            {
                canti =2;
                prifa[3] = new Array(canti);
                prifa[3][0]= priFa [4];
                prifa[3][1]= priFa [5];
            }
            else if (priFa.length ===7)
            {
                canti=3;
               prifa[3] = new Array(canti);
               prifa[3][0]= priFa [4];
                prifa[3][1]= priFa [5];
                prifa[3][2]= priFa[6];
            }
            
            
          /*  for(var i=0; i<prifa.length;i++)
            {
                $("#der").append(i+" ");
                for(var j=0;j<prifa[i].length;j++)
                {
                       $("#der").append(" "+prifa[i][j]);
                }
                
                $("#der").append("<br>");
            }*/
            
            
            //  alert("prifa: "+prifa+ " priFalen= "+priFa.length);
           
                      
            var  pa1Css="(";
             var  pa2Css=")";
             
              var  pa1="";
             var  pa2="";
             var br="<br><br>";
             var dosEn2 ="";
           
            
           var cajas=[];
           
         
             
          //alert(" priFa.length "+priFa.length);
          
           $("#der").append("Realice la siguiente factorización de dos en dos<br><br>"+
                         facF22+ " <br><br>");    
        var indice =0;
      var i =0;
      var cajs;
       var pa=" ";
         var pa2=" ";
        var baja ="<br><br>";
        
         var let3=["q","w","e","r"];
        
           var men =["z = ", "Reemplazando = ", " Factorizando = ","Reemplazando a z = ", 
                     "Reemplazando a z = ","","",""];
      poba();
    
  
    
   
    
     function poba()
                {
                    // alert("ds  adfa");
                  
                       var cl ="klass";
                       
                       var cad="15t<sup>3</sup>x<sup>2</sup> - 8t<sup>2 </sup>+ 4";
                     
                     
                       
                   var bad  = new capturaBaExp(cad);  //capturaBaExp(cad)
                       
                      
                     
                    
                //   var bapa1 = bad.baexArr();  
                   
                                 
                //    var bapa2 = bad.posArr();
                    
                     //(clase,p,retro,prifa,opcion)
                  
                     
                     var cac= bad.cajasSinExpo(let3[indice],cl,prifa[indice],indice) ;
                   
                   //    alert(" bapa1 "+bapa1);
               /*    var  pa1Css="(";
                    var  pa2Css=")";
                   if(indice ===2)
                   {
                      pa1Css="(";
                      pa2Css=")";
                   }
                   else
                   {
                       pa1Css="";
                       pa2Css="";
                   }
                    */
                      
                        $("#der").append("<div id = 'comu2'>");
                         $("#comu2").append(men[indice]+cac);//p0=
                         
                        
                      //  (clase,p,retro,prifa,opcion)
                     bad.validaSinExpo(cl, let3[indice],retro,prifa [indice],"1");
                     
                                         
                   //  $("#der").append("cajas "+caC6 +"<br><br>");
                     
                        $("."+cl).css({"width":"4.1em"});
                    
                  
                    
                     var meni = "";
                    var meniCss = meni.fontsize(8);
                    
                //     var meni2 = signs[indice+1];
                                    
                       //  $("#comu2").append(meniCss+caC6+meni2);//p0=
                     
                         // bad .baseExpValida(cl,let3[indice],retro,1);
                          
                        
                           
                 //************************ Crear botón **********************
                 
                          var max ="menos";
                             
                             
                     
                              if(indice ===(prifa.length-1))
                             {
                                
                                 max ="max";
                             }
                             
                             /*   alert("indice = "+indice + " prifa.length-1 = "+(prifa.length)+
                                        "\nmax: "+max);*/
                             var id ="idt"+indice;
                             var bot6C = new botValidacion(id);
      
                             var bo6t = bot6C.crearBot();
                             
                                                         
                            
                             $("#divBot2").empty(); 
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo6t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                              var bai =[];
                           bai[0] = prifa [indice];
                              
                           
                              
               $("#"+id).click(function(){
                              
                                                 
                        bot6C.botValidaEvento(bai,let3[indice],max);
                        
                        
                        var es =  bot6C.error();
                        
                        
                         var esI=parseInt(es);
                         
                          
                         var avi ="Presione este botón para hacer otro ejercicio.";
                         var aviCss= avi.fontcolor("white");
                         
                         
                        // alert("esI "+esI);
                         
                           if(esI ===1)
                         { 
                             indice++;
                             
                             $("#divBot2").empty(); 
                             
                            $("#divBot2").append("<br><br><br>");
                            $("#comu2").append("<br><br>");
                             poba();
                        
                         }
                         else if(esI ===2)
                         {
                            $("#der").append("<div id ='avi'>");
                             $("#avi").append(aviCss);
                             
                              $("#avi").css({"fontColor":"white","background":"grey"});
                             
                             $("#avi").click(function(){
                                 func[3][0]();
                             });
                             
                             
                             // alert();
                                // poBa4();
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                }//poBa5
                //******************************* Fin function poBa()*********
                  
     
      function validacion()
      {
            $("#p"+i).keypress(function(e){
            
             
             if(e.keyCode ===13)
             {
                
                 var atr = $(this).attr("id");
                 var ind = atr.substring(1);
                 var pl = atr.substring(0,1);
                 
                 var sis =priFa[ind].toString();
                 var user = $("#"+atr).val();
                 
                 
                 
                 sis = recorte(sis);
                 user = recorte(user);
                 
                 var i2= parseInt(ind)+1;
     
                 
                 if(sis === user)
                 {
                     alert(retro[i][0]); 
                   
                    i++;
                   
                    poba();
                   
                     
                 }
                 else
                 {
                     alert(retro[i][1]+" "+ priFa[i]);
                 }
                
             }
         });//keypress
        
      }
        
            
           $("#p1").css({"width":"4em"});
         
     
         //***************************** Fin ejemplo propuesto  
           
         
    };
    
   func[3][1] = function()
    {
        planti();
        var tem = tema2(3,1);
        
        
        $("#tem").append(tem); 
        
         var signo1 =  Math.floor(Math.random() * 2);
         var signo2 =  Math.floor(Math.random() * 2);
         
         //***************************  Retroalimentación *****************************
         
         var retro = retroAlimentacion2(3,1);
         
         
        
         //****************************Fin retroalimetanción **************************
         
          //******************** Ejemplo resuelto *****************
         var eRe = new trinomio(signo1,signo2);
         var sum12 = eRe.suma();
         var numer1 = eRe.numero1();
          var numer2= eRe.numero2();
          
          var factorizado = eRe.perfecto();
          var eje2 = eRe.expresion();
          var num = eRe.producto();
          
          eje2 = eRe.formaEspecial(signo1,signo2);
          var facti =eRe.formEspFac();
          
          var facF = eRe.factorize();
          var facF2 = eRe.factorize2();
          
         var z = eRe.zeta();
          var conZ =eRe.conZ();
          
          var coef = eRe.formEspFac();
          var faZ =eRe.facZ();
          var facFin = eRe.facFin();
          
         
        //  var fFin = eRe.faFin();
          
         // alert(" todos "+coef+"num24: " +coef[3]);
          
        $("#izq").append("Realice la siguiente factorización de dos en dos<br><br>"+
                         facF+ " = " +facF2+"<br><br> z= "+z+
                           "<br><br> Con z:  = "+conZ+"<br><br>Factorizando = "+faZ+"<br><br>"+
                           "Finalmente: "+facFin);
                   
  //******************************* ejercicios propuestos ***********************************
  
         var sum122 = eRe.suma();
         var numer12 = eRe.numero1();
          var numer22= eRe.numero2();
          
          var factorizado22 = eRe.perfecto();
          var eje22 = eRe.expresion();
          var num22 = eRe.producto();
          
          eje22 = eRe.formaEspecial(signo1,signo2);
          var facti2 =eRe.formEspFac();
          
          var facF2 = eRe.factorize();
          var facF22 = eRe.factorize2();
          
         var z2 = eRe.zeta();
          var conZ2 =eRe.conZ();
          
          var coef2 = eRe.formEspFac();
          var faZ2 =eRe.facZ();
          var facFin2 = eRe.facFin();
          
        //   var priFa = eRe.priFacto();
        
         var priFa2 = eRe.priFacto();
         
         var desc =priFa2.length-7;
         
         var priFa=[];
           var e=0;
           
            
             for(var n=0; n<priFa2.length;n++)
             {
               if(priFa2[n] !=="")
                   {
                        priFa[e]= priFa2[n];  //e porque n comienza en 4
                        e++; 
                   }
             
            }
            
           // $("#der").append("priFa: "+priFa+"  tam "+priFa.length+"<br>");
            
               var prifa =[];
               
              prifa[0] = new Array(4);
             prifa[0][0]= priFa[0];
             prifa[0][1]= priFa[1];
             prifa[0][2]= priFa[2];
             prifa[0][3]= priFa[3];
               
             prifa[1] = new Array(1);
             prifa[1][0]= priFa[4];
       
             prifa[2] = new Array(1);
             prifa[2][0]= priFa[5];
       
           prifa[3] = new Array(2);
           prifa[3][0]= priFa [6];
            prifa[3][1]= priFa [7];
            
            var canti=0;
            
            if(priFa.length ===10)
            {
                canti =2;
                prifa[4] = new Array(canti);
                prifa[4][0]= priFa [8];
                prifa[4][1]= priFa [9];
            }
            else if (priFa.length ===11)
            {
                canti=3;
               prifa[4] = new Array(canti);
               prifa[4][0]= priFa [8];
                prifa[4][1]= priFa [9];
                prifa[4][2]= priFa[10];
            }
            
                   
        for(var i=0; i<prifa.length;i++)
            {
                $("#der").append(i+" ");
                for(var j=0;j<prifa[i].length;j++)
                {
                       $("#der").append(" "+prifa[i][j]);
                }
                
                $("#der").append("<br>");
            }
            
            
                var let3=["q","w","e","r","t"];
                
                  var men =[facF2+" = " ,"z = ", "Reemplazando = ", " Factorizando = ","Reemplazando a z = ", 
                     "Reemplazando a z = ","","",""];
                 var indice =0;
      poba();
    
  
    
   
    
     function poba()
                {
                    // alert("ds  adfa");
                  
                       var cl ="klass";
                       
                       var cad="15t<sup>3</sup>x<sup>2</sup> - 8t<sup>2 </sup>+ 4";
                     
                     
                       
                   var bad  = new capturaBaExp(cad);  //capturaBaExp(cad)
                       
                      
                     
                    
                //   var bapa1 = bad.baexArr();  
                   
                                 
                //    var bapa2 = bad.posArr();
                    
                     //(clase,p,retro,prifa,opcion)
                  
                     
                     var cac= bad.cajasSinExpo(let3[indice],cl,prifa[indice],indice) ;
                   
                   //    alert(" bapa1 "+bapa1);
               /*    var  pa1Css="(";
                    var  pa2Css=")";
                   if(indice ===2)
                   {
                      pa1Css="(";
                      pa2Css=")";
                   }
                   else
                   {
                       pa1Css="";
                       pa2Css="";
                   }
                    */
                      
                        $("#der").append("<div id = 'comu2'>");
                         $("#comu2").append(men[indice]+cac);//p0=
                         
                        
                      //  (clase,p,retro,prifa,opcion)
                     bad.validaSinExpo(cl, let3[indice],retro,prifa [indice],"1");
                     
                                         
                   //  $("#der").append("cajas "+caC6 +"<br><br>");
                     
                        $("."+cl).css({"width":"4.1em"});
                    
                  
                    
                     var meni = "";
                    var meniCss = meni.fontsize(8);
                    
                //     var meni2 = signs[indice+1];
                                    
                       //  $("#comu2").append(meniCss+caC6+meni2);//p0=
                     
                         // bad .baseExpValida(cl,let3[indice],retro,1);
                          
                        
                           
                 //************************ Crear botón **********************
                 
                          var max ="menos";
                             
                             
                     
                              if(indice ===(prifa.length-1))
                             {
                                
                                 max ="max";
                             }
                             
                                alert("indice = "+indice + " prifa.length-1 = "+(prifa.length)+
                                        "\nmax: "+max);
                             var id ="idt"+indice;
                             var bot6C = new botValidacion(id);
      
                             var bo6t = bot6C.crearBot();
                             
                                                         
                            
                             $("#divBot2").empty(); 
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo6t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                              var bai =[];
                           bai[0] = prifa [indice];
                              
                           
                              
               $("#"+id).click(function(){
                              
                                                 
                        bot6C.botValidaEvento(bai,let3[indice],max);
                        
                        
                        var es =  bot6C.error();
                        
                        
                         var esI=parseInt(es);
                         
                          
                         var avi ="Presione este botón para hacer otro ejercicio.";
                         var aviCss= avi.fontcolor("orange");
                         
                         
                        // alert("esI "+esI);
                         
                           if(esI ===1)
                         { 
                             indice++;
                             
                             $("#divBot2").empty(); 
                             
                            $("#divBot2").append("<br><br><br>");
                            $("#comu2").append("<br><br>");
                             poba();
                        
                         }
                         else if(esI ===2)
                         {
                            $("#der").append("<div id ='avi'>");
                             $("#avi").append(aviCss);
                             
                              $("#avi").css({"fontColor":"white","background":"grey"});
                             
                             $("#avi").click(function(){
                                 func[3][1]();
                             });
                             
                             
                             // alert();
                                // poBa4();
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                }//poBa5
           
           //************************* prifa nuevo **********
           
           /*
               
           
           
           
         
           
         
        
            
        
           // 
            // alert(" priFa cerca "+priFa2);
           
     
     
        
      
            */
           
           //*********************fin prifa nuevo **********
           
                    
         /*   var  pa1Css;
             var  pa2Css;
             
              var  pa1;
             var  pa2;
             
            var dosEn2 =[];
            
            var desc =priFa.length-7;
            
            var br="";
            var men="";
           // alert ("priFa.length: "+priFa.length+" desc: "+desc);
          
           for(var b=0; b<priFa.length;b++)
          {
           
                  
              if(priFa[b]!=="")
              {
                  
                dosEn2[b] = "<input type ='text' class = 'trEsp2' id ='p"+b+"'>";   
                 
               
               // dosEn2 = dosEn2+men+pa1Css+"<input type ='text' class = 'trEsp2' id ='p"+b+"'>"+pa2Css+br;  
              }
          }
           var jas456 ="";
          if(typeof dosEn2[8] ==="undefined")
          {
              jas456 = "("+dosEn2[9]+")("+dosEn2[10]+")";
          }
          else
          {
              jas456= "("+dosEn2[8]+")("+
                         dosEn2[9]+")("+dosEn2[10]+")";
          }
                  
            $("#der").append("Realice la siguiente factorización de dos en dos<br><br>"+
                         facF2+ " = " +dosEn2[0]+"("+dosEn2[1]+")"+dosEn2[2]+
                         "("+dosEn2[3]+")"+
                         "<br><br>z = "+dosEn2[4]+"<br><br>"+
                         "Reemplazando a z = "+dosEn2[5]+"<br><br>"+
                         "Factorizando = ("+dosEn2[6]+")("+dosEn2[7]+
                         "<br><br>Finalmente = "+jas456);      
        $(".trEsp2").css({"width":"2.4em","border":"none","background":"#cccccc"}); 
        
         $("#p5").css({"width":"4.5em"});
        
         $(".trEsp2").keypress(function(e){
            
             
             if(e.keyCode ===13)
             {
                 var atr = $(this).attr("id");
                 var ind = atr.substring(1);
                 
                 var sis =priFa[ind].toString();
                 var user = $("#"+atr).val();
                 
                 sis = recorte(sis);
                 user = recorte(user);
                 
                 if(sis === user)
                 {
                     alert(retro[ind][0]); 
                 }
                 else
                 {
                     alert(retro[ind][1]);
                 }
                
             }
         });*/
        
    };
    
     func[3][2] = function()
    {
         
    var retro = retroAlimentacion2(3,2);
         planti();
        var tem = tema2(3,2);
        
        
        $("#tem").append(tem); 
        
         var signo1 =  Math.floor(Math.random() * 2);
         var signo2 =  Math.floor(Math.random() * 2);
         
      
         
          //******************** Ejemplo resuelto *****************
         var eRe = new trinomio(signo1,signo2);
         var sum12 = eRe.suma();//sum12 = numer1+numer2//los números que sumados o restandos
         var numer1 = eRe.numero1();
          var numer2= eRe.numero2();
          
        
          
         // var factorizado = eRe.perfecto();
        //  var eje2 = eRe.expresion();
       //   var num = eRe.producto();
          
         //   
          
         var  eje2 = eRe.formaEspecial(signo1,signo2);//El ejercicio
          var facti =eRe.formEspFac();  //números de factorización por agrupación
          
        
          
          var facF = eRe.factorize();//factorización por agrupación
          var facF2 = eRe.factorize2();// Agrupados de dos en dos
          
          
          
         var z = eRe.zeta();
          var conZ =eRe.conZ();
          
        //    alert(" facF = "+facF+ " facF2 = "+facF2+ " z = "+z+" conZ "+conZ);
          
          var coef = eRe.formEspFac();
          var faZ =eRe.facZ();
          var facFin = eRe.facFin();
           var priFa = eRe.priFacto();
           
         //   eRe.priFacto();
        //  var fFin = eRe.faFin();
          
         // alert(" todos "+coef+"num24: " +coef[3]);
         
          
        $("#izq").append(eje2+" <br><br> Se deben hallar los factores de  "+(coef[0]*coef[3])+
                          "  que sumados den  "+(coef[1]+coef[2])+
                          ". Los números son: "+ coef[1]+ " y "+coef[2]+ "<br><br>Observe cuidadosamente"+
                           " donde se escriben los números hallados."+
                           " <br><br>"+
                           eje2+" = "+facF+ "<br> = " +facF2+"<br><br> z= "+z+
                           "<br><br> Con z:  = "+conZ+"<br><br>Factorizando = "+faZ+"<br><br>"+
                           "Finalmente: "+facFin);
                   
                    
                   
  //******************************* ejercicios propuestos ***********************************
                   
      var sum12p = eRe.suma();
         var numer1p = eRe.numero1();
          var numer2p= eRe.numero2();
          
          var factorizadop = eRe.perfecto();
          var eje2p = eRe.expresion();
          var nump = eRe.producto();
          
          eje2p = eRe.formaEspecial(signo1,signo2);
          var factip =eRe.formEspFac();
          
          var facFp = eRe.factorize();
          var facF2p = eRe.factorize2();
          
         var zp = eRe.zeta();
          var conZp =eRe.conZ();
          
          var coefp = eRe.formEspFac();
          var faZp =eRe.facZ();
          var facFinp = eRe.facFin();
          
          var maExpr =eRe.ma2en2();
          var priFa2 = eRe.priFacto();
       
    
          var dosEn2 =[];
          var ele1 ="", ele2 ="";
          
          var pa1 ="";
          var pa2 ="";
          
          var var8=0;
          
         var men= " donde se escriben los números hallados."+
                           " <br><br>"+
                           eje2p;
                   
                   
     var men2="Observe a la izquierda (escriba el signo más o el signo menos en la misma"+
                        " caja de texto que el término algebraico) <br><br>"
                        +eje2p+" = "; 
                  
           var br ="";
          
          for(var b=0; b<maExpr.length;b++)
          {
          
              
           //   if(maExpr[b]!==1)
            //  {
                  
                //alert("tipo: "+typeof maExpr[b]);
                //dosEn2[b] = dosEn2+men+ele1+"<input type ='text' class = 'trEsp' id ='e"+b+"'>"+ele2+" "+br; 
                 dosEn2[b] = "<input type ='text' class = 'trEsp' id ='e"+b+"'>";  
             // }
          }
                   
       var  pa1Css;
       var  pa2Css;
    
        
        var dosL =dosEn2[0]+ " y "+dosEn2[1]+"<br><br>"+
                "<br><br><br>"+ eje2p + " = "+dosEn2[2]+"<sup> "+dosEn2[3]+"</sup> "+dosEn2[4]+" "+
                  dosEn2[5]+" "+ dosEn2[6]+"<br><br>";
       
        $("#der").append(eje2p+" <br><br> Esriba  los factores de  "+(coefp[0]*coefp[3])+
                          "  que sumados den  "+(coefp[1]+coefp[2])+
                          ". Los números son:"+
                           " = "+dosL+"");
                   
      
                     $(".trEsp").css({"width":"2.4em","border":"none","background":"#cccccc"});
                   
                   var dePru =[coefp[1],coefp[2]]; //Una matriz
                   
                  // 
                   
                  
            $(".trEsp").keypress(function(e){
                
               if(e.keyCode ===13)
               {
                   var atr = $(this).attr("id");
                   
                  
                   
                   var ind = atr.substring(1);
                   
                
                var txtCa = $("#"+atr).val();
                
                var user =txtCa.toString();
                var sis = maExpr[ind].toString();//dePru[ind].toString();
               
              
              user = recorte(user);
              
             sis = recorte(sis);
                
               // alert("sis: "+txtCa+ " user "+user+ " ind = "+ind + " atr = "+atr);
                
                if(sis  ===user) 
                {
                    alert(retro[ind][0]+" ");
                }
                else
                {
                    alert(retro[ind][1]);
                }
               }
            });//.trEsp
            
            
                         
   //******************************   Factor común dos en dos *******************
     
          var dosEn2Mat =[];
          
          
           
            
           for(var b=0; b<priFa2.length;b++)
          {
              if(priFa2[b]!=="")
              {          
                dosEn2Mat[b] = "<input type ='text' class = 'trEsp2' id ='p"+b+"'>";  
              }
            
          }
          var jas456 ="";
          
          if(typeof dosEn2Mat[8] ==="undefined")
          {
              jas456 = "("+dosEn2Mat[9]+")("+dosEn2Mat[10]+")";
          }
          else
          {
              jas456= "("+dosEn2Mat[8]+")("+
                         dosEn2Mat[9]+")("+dosEn2Mat[10]+")";
          }   
                   
            $("#der").append(eje2p + " = " +dosEn2Mat[0]+"("+dosEn2Mat[1]+")"+dosEn2Mat[2]+
                         "("+dosEn2Mat[3]+")"+
                         "<br><br>z = "+dosEn2Mat[4]+"<br><br>"+
                         "Reemplazando a z = "+dosEn2Mat[5]+"<br><br>"+
                         "Factorizando = ("+dosEn2Mat[6]+")("+dosEn2Mat[7]+
                         ")<br><br>Finalmente = "+jas456);  
                 
        $(".trEsp2").css({"width":"2.4em","border":"none","background":"#cccccc"}); 
         
        
         $("#p5").css({"width":"4.5em"});
        
         $(".trEsp2").keypress(function(e){
            
             
             if(e.keyCode ===13)
             {
                 var atr = $(this).attr("id");
                 var ind = atr.substring(1);
                 
                 var sis =priFa2[ind].toString();
                 var user = $("#"+atr).val();
                 
                 sis = recorte(sis);
                 user = recorte(user);
                 
                 
                   var indNu = parseInt(ind)+7;
                 // alert("ind+6 = "+indNu+" retro[ind+6] "+retro[ind+6]) ;  
                  
                
                 
                 if(sis === user)
                 {
                     alert(retro[indNu][0]); 
                 }
                 else
                 {
                     alert(retro[indNu][1]);
                 }
                
             }
         });
        
         
         //******************************  fin factor común de dos en dos *************
       // $(".trEsp2").css({"width":"2.4em"}); 
        
    
   //*****************************   Fin Factor común dos en dos 
         
         
    };
    
     func[4][0] = function()
    {    
         planti();
         var tem = tema2(4,0);
         
        // alert("tem: "+ tem);
       var cuadN = new generaEjercicios();
        
      var cuad2 = cuadN.trinomioPerfecto("+");
  

    var squareTerm2 = new trinomioPerfecto2(cuad2);
    
    var inPriOr =cuad2.indexOf("+");
    var priOr =cuad2.substring(0,inPriOr);
    
    var priOr2 =cuad2.substring(inPriOr+1);
    
     var inPriOr2 =priOr2.indexOf("+");
     
     var priOr3 = priOr2.substring(inPriOr2+1);
    
      var squareTerm = squareTerm2.primerTermino();
    
     var segundoTermino = squareTerm2.segundoTermino();
    
    var original1 = squareTerm2.displayoriginal();
      var alCuadrado =  squareTerm2.terminosAlCuadrado();
    
   var original1T =original1.replace("1<sup>1</sup>","");
   original1 =original1T;
   
   
   var alCuadradoT =alCuadrado.replace("1<sup></sup>*","");
   
  // alCuadrado = recorte(alCuadrado);
   alCuadrado=  alCuadradoT ;
  //  alert("alCuadrado "+alCuadrado);
    
    var alcua = "("+squareTerm+")<sup>2</sup>";
    
    // ************************************* Carga el tema ********************
            $("#tem").append(tem); 
            
    
         var  nalcua = cosasComunes(alcua);
         
        
       $("#izq").append("Exprese " +priOr +" como un término elevado al cuadrado "+
                      "<br><br>"+priOr  +" = "+original1+"<br>"+priOr  +" = "+alCuadrado+
                      "<br>"+priOr  +" = "+nalcua);
        //************************ Ejemplo propuesto ********************
       
         var retro = retroAlimentacion2(4,0);
    
        
       //  var cuad = cuadN.TerminoCuadrado();
         
            var desglo = squareTerm2.segundoTermino();
    
        
         
         var faccp = new factorComun(priOr3);
        
        var numerosp = faccp.displayNume();
      var  basp= faccp.NmFactComun();//= [];
     
       var  expp =[];
       expp [0] = faccp.mMi();
       
       var desInd = desglo.indexOf("<sup>");
       var desar =[];
        var desaNum;
        
        var subCa =  "<sup><input type = 'text' id ='j1' class ='terCuad2'></sup>)<sup>2</sup>";
        
       // alert(" desglo "+desglo);
       if(desInd  !==-1)
       {
            desar = desglo.split("<sup>");
           var desarInd= desar[1].indexOf("</sup>");       
           desaNum = desar[1].substring(0,desarInd); 
           
           var prDesa =desar[0].substring(0,1);
           var prDesaStr = desar[0].substring(1);
      
           if(prDesa ==="1")
           {
                desar[0] = prDesaStr;
           }
       }
       
       else
       {
           // desaNum =desglo;
           desar[0]=desglo;
           subCa=")<sup>2</sup>";
       }
       
      
      
    //  alert(" desar[0] "+desar[0]+" desaNum " +desaNum);
       
      // var ulTer = [];
      var ulTer  = [desar[0],desaNum];
      // ulTer [0][1] = desaNum;
       
       var ulCa = "(<input type = 'text' id ='j0' class ='terCuad2'>"+
                 subCa;
          
          
      // alert(" ulTer  "+ulTer);
       
        var intcad = parseInt(basp[0][0]);
       
       if( intcad===1 && basp[0].length >1)
      {
          //var pos = basp.indexOf(1);
           basp[0].splice(0, 1);
           expp[0].splice(0, 1);
          //  alert("basp[0] "+basp[0][0]+" expp  "+expp[0][0]);
      }
       //******************  Exponentes divididos ********************
       
          var expp2 = new Array(basp.length); //Cadena con los exponentes dividos entre 2
         
         // factores =[];
         
           for(var z=0;z<basp.length;z++)
         {
            expp2[z]=new Array(basp[z].length);
         }
         
         for(var x=0;x<basp.length;x++)
         {
             for(var y=0;y<basp[0].length;y++)
             {
           
                expp2[x][y] = expp[x][y]/2;
                if(expp[x][y]===1)
                {
                    expp2[x][y]=1;
                }
             }
         }
        
         
       
        //******************  Fin Exponentes divididos ********************
       
        
        var BaExp = basExpos(basp,expp);
         //alert("BaExp  "+BaExp);
          
       
        
        
      
          var p1 = "<span class ='pare'>(</span>";
          var p2 = "<span class ='pare'>)</span>";
          
        var paraRee="------------";
        
     
      var cajas = cajas2("q","terCuad",BaExp);//letra, clase,base, factor
       
      var BaExpp2 = basExpos(basp,expp2);
      
      
       
      var cajas3 = cajas2("w","terCuad",BaExpp2);//letra, clase,base, factor
      
     //  var cajas4 = cajas2("j","terCuad",BaExpp2);//letra, clase,base, factor
       
       
       var dosEl ="<sup><sup><input id='dosEl'></sup></sup>";
         
          $("#der").append("Exprese " +priOr3+" como un término elevado al cuadrado "+
                      "<br><br>"+priOr3 +" = "+cajas+"<br><br>"+priOr3 +" = "+p1+""+cajas3+                    
                       p2+""+dosEl+"<br><br>"+priOr3 +" = "+ulCa);
              
            $(".terCuad") .css({"width":"1.8em"}) ;
             $(".terCuad2") .css({"width":"1.8em"}) ;
              $("#dosEl") .css({"width":"1.8em"}) ;
             $(".pare").css({"font-size":"2.0em"});
             
            // alert(" retro "+retro);
            
            $(".terCuad2").keypress(function(e){
                if(e.keyCode ===13)
                {
                    var atr = $(this).attr("id");
                    
                    var inr = atr.substring(1);
                   // alert(" ulter: "+ulTer[inr]);
                    
                }//13
            
            });
       
       $("#dosEl").keypress(function(e){
            var user2 =$("#dosEl").val();
            if(e.keyCode ===13)
            {
                  if (user2 !=="2")
                  {
                     alert("Se equivocó, tenga en cuenta que siempre va al cuadrado.");
                  }
                  else
                  {
                        alert("Excelente");
                  }
                
            }//13
           
       });
       $(".terCuad") .keypress(function(e){
           if(e.keyCode ===13)
           {
               var atr = $(this).attr("id");
                 var user2 =$("#"+atr).val();  
                 
               var atr3 = $(this).attr("name");
                var atr2 = atr3.toString();
             
           // alert(" atr2 "+atr2);
             var user =user2.toString();
              var pc = atr.substring(0,1);
              
            
              var indc = atr.substring(1);
             
              var ins = indc.indexOf("_");
              
              var pind =indc .substring(0,ins);
               
              var sind = indc.substring(ins+1);
              
              var sis;
                
               switch(pc)
              {
                  case "q":// (pc==="v")
                  {
                        
                      sis =BaExp[pind][sind].toString();
                      
                      user = recorte(user);
                      sis  = recorte(sis);
                      
                     //  alert(" sis: "+sis+ " user: "+user);
                      
                    
                     if(user ===sis){
                         
                                            
                       if(atr2 === "base")
                       {
                           alert(retro[0][0] );
                       }
                       else
                       {
                          alert(retro[1][0] ); 
                       }
                        
                      }  
              
                      else
                       {
                            //alert("Hubo errores BaEx: "+BaExp[pind][sind] + "user "+user ); 
                            if(atr2 === "base")
                            {
                                alert(retro[0][1]+" sis: "+sis );
                            }
                            else
                            {
                                  alert(retro[1][1] ); 
                            }
                            
                       }
                       break;
                  }
                   case "w":// (pc==="v")
                  {
                       sis= BaExpp2[pind][sind].toString();
                       
                        user = recorte(user);
                         sis  = recorte(sis);
                   if(user ===sis){
                       
                        user = recorte(user);
                         sis  = recorte(sis);
                       
                       if(atr2 === "base")
                       {
                           alert(retro[2][0] );
                       }
                       else
                       {
                          alert(retro[3][0] ); 
                       }
                        
                      }  
              
                      else
                       {
                            //alert("Hubo errores BaEx: "+BaExp[pind][sind] + "user "+user ); 
                            if(atr2 === "base")
                            {
                                alert(retro[2][1] );
                            }
                            else
                            {
                                  alert(retro[3][1] ); 
                            }
                            
                 }
                    /* if(user ===sis){
                        alert("Perfecto, esa es la respuesta" );
                      }  
              
                      else
                       {
                            alert("Hubo errores BaEx: "+BaExpp2[pind][sind] + "user "+user ); 
                       }*/
                       break;
                  }
              }//switch
               
           }//13
           
           
       });//tercuad
    };
    func[4][1] = function()
    {
         var tem = tema2(4,1);
           
            planti();
            
             $("#tem").append(tem); 
           
           
               
            var fact = new generaEjercicios();
            
           var fact1 = fact.terminoLineal();
           var num1 =fact1[1];
            
           var fact2 = fact.terminoLineal();
            
            
                while(fact1[2]===fact2[2])
             {
                    fact2 = fact.terminoLineal();
             }
        
             var num2 =fact1[1];
             var prod1 = 2*fact1[1]*fact2[1];
               
           // alert("fact2[0] "+fact1[0] + " fact2[0] "+fact2[0]);
            
              $("#izq").append("Halle el producto de "+ fact1[0] + " por "+fact2[0] +": <br><br>"+
                      "(2)("+ fact1[0] +")("+fact2[0]+") = "+prod1+fact1[2]+fact2[2]); 
             
      //*******************************  Ejemplo propuesto ***************************
          
         var retro = retroAlimentacion2(4,1);
          fact1 = fact.terminoLineal();
          num1 =fact1[1];
            
           fact2 = fact.terminoLineal();
            
            
                while(fact1[2]===fact2[2])
             {
                    fact2 = fact.terminoLineal();
             }
        
             num2 =fact1[1];
             prod1 = 2*fact1[1]*fact2[1];
             
             /*  var res =[];
              res[0]=prod1;
              res[1]=fact1[2];
              res[2]=fact2[2];*/
        
             var res = prod1+fact1[2]+fact2[2];
              
              var caj ="<input type = 'text' class = 'prod' id =f0> ";
                      /*+
                       "<input type = 'text' class = 'prod' id =f1> "+
                       "<input type = 'text' class = 'prod' id =f2>";*/
              
                $("#der").append("Halle el producto de "+ fact1[0] + " por "+fact2[0] +": <br><br>"+
                      "(2)("+ fact1[0] +")("+fact2[0]+") = "+caj); 
              $(".prod").css({"width":"3.2em","border":"none","background":"#cccccc"}); 
              
               $(".prod").keypress(function(e){
                   if(e.keyCode ===13)
                   {
                       var atr = $(this).attr("id");
                       var nca = atr.substring(1);
                       var user =$("#"+atr).val();
                       var sis = res;
                       if(user===sis)
                       {
                          alert(retro[0][0]);//(" Muy bien, ese es el resultado. ");  
                       }
                       else
                       {
                          alert(retro[0][1]);/*(" Se presentaron errores, multiplica  "+
                                  " los factores numéricos y éstos, agréguele"+
                                  " los factores literales "+res);  */
                       }
                      
                   
                   }//13
               });
             
             
    };
    
    func[4][2] = function()
    {
        var si=" + ";
        trynom(si);
                 
    };
    
    func[4][3] = function()
    {
         var tem = tema2(4,3);
         
            var si=" - ";
        trynom(si);
          
    };//43
   
    
     func[5][0] = function()
    {
          planti();
         var tem = tema2(5,0);
         
        // alert("tem: "+ tem);
       var cuadN = new generaEjercicios();
        
      var cuad2 = cuadN.trinomioPerfecto("+");
  

    var squareTerm2 = new trinomioPerfecto2(cuad2);
    
    var inPriOr =cuad2.indexOf("+");
    var priOr =cuad2.substring(0,inPriOr);
    
     var original1 = squareTerm2.displayoriginal();
     
     //****************** Quitando unos **************
     
   var inOr= original1.indexOf("1<sup>1</sup>");
   
   var llet = "1<sup>1</sup>".length;
   
   var letra = original1.substring(13,14);
   
   var orTem="";
   
   if(inOr !==-1)
   {
       orTem = original1.replace("1<sup>1</sup>"+letra,letra);
   }
   else
   {
       orTem = original1;
       
   }
   
      original1 = orTem;
     
    // 
      var alCuadrado2 =  squareTerm2.terminosAlCuadrado();
    var alCuadrado = alCuadrado2.replace("1<sup></sup>*","");
    
     //****************** Fin  Quitando unos **************
  
    var squareTerm = squareTerm2.primerTermino();
    
     var squareTermSeg = squareTerm2.segundoTermino();//Ojo
     
  
    
    var alcua = "("+squareTerm+")<sup>2</sup>";
    
    
    
    // ************************************* Carga el tema ********************
            $("#tem").append(tem); 
            
    
         var  nalcua = cosasComunes(alcua);
       $("#izq").append("Exprese " +priOr +" como un término elevado al cuadrado "+
                      "<br><br>"+priOr  +" = "+original1+
                      "<br><br>"+priOr +" = "+alCuadrado+
                      "<br><br>"+priOr +" = "+nalcua);
               //************************ Ejemplo propuesto ********************
       
         var retro = retroAlimentacion2(5,0);
    
        
         var cuad = cuadN.TerminoCuadrado();
         
       //  var squareTermS = cuadN.primerTermino();
          
         //  alert(" squareTermS = "+squareTermS);
         
            var faccp = new factorComun(cuad);
            
             
        
        var numerosp = faccp.displayNume();
      var  basp= faccp.NmFactComun();//= [];
     
       var  expp =[];
       expp [0] = faccp.mMi();
       
        var intcad = parseInt(basp[0][0]);
       
       if( intcad===1 && basp[0].length >1)
      {
          //var pos = basp.indexOf(1);
           basp[0].splice(0, 1);
           expp[0].splice(0, 1);
          //  alert("basp[0] "+basp[0][0]+" expp  "+expp[0][0]);
      }
       //******************  Exponentes divididos ********************
       
          var expp2 = new Array(basp.length); //Cadena con los exponentes dividos entre 2
         
         // factores =[];
         
           for(var z=0;z<basp.length;z++)
         {
            expp2[z]=new Array(basp[z].length);
         }
         
         for(var x=0;x<basp.length;x++)
         {
             for(var y=0;y<basp[0].length;y++)
             {
           
                expp2[x][y] = expp[x][y]/2;
                if(expp[x][y]===1)
                {
                    expp2[x][y]=1;
                }
             }
         }
         
         
       
        //******************  Fin Exponentes divididos ********************
       
        
         var BaExp = basExpos(basp,expp);
      //  alert("BaExp  "+BaExp);
          
       // alert("basp "+basp+" expp " +expp+ " BaExp "+BaExp);
        
      
          var p1 = "<span class ='pare'>(</span>";
          var p2 = "<span class ='pare'>)</span>";
          
        var paraRee="------------";
        
     
       var cajas = cajas2("q","terCuad",BaExp);//letra, clase,base, factor
       
        var BaExpp2 = basExpos(basp,expp2);
        
        var po= operacionesComunes(basp,expp2);
        
        var cat="";
        var poStr="";
        var ele1="<sup>";
         var ele2="</sup>";
        for(var j=0;j<po.length;j++)
        {
            poStr =po[j].toString();
            
            poStr= recorte(poStr);
            var p0 =po[0].toString();
            
             if(j===1)
                    {
                      ele1="<sup>";
                      ele2="</sup>";
                    }
                    else
                    {
                        ele1="";
                        ele2="";
                    }
                    
                 if(poStr !=="")
                 {
                     cat =cat +ele1+"<input id='j0_"+j+"' class = 'terCuad' name ='base'>"+ele2;
                 }
        } ;
       
       var cajas3 = cajas2("w","terCuad",BaExpp2);//letra, clase,base, factor
       
       var dosEl ="<sup><sup><input id='dosEl'></sup></sup>";
         
          $("#der").append("Exprese " +cuad+" como un término elevado al cuadrado "+
                      "<br><br>"+cuad +" = "+cajas+"<br><br>"+cuad +" = "+p1+""+cajas3+
                       p2+""+dosEl+" <br>("+cat+")<sup>2</sup>");
              
               $(".final") .css({"width":"1.8em"}) ;
            $(".terCuad") .css({"width":"1.8em"}) ;
              $("#dosEl") .css({"width":"1.8em"}) ;
             $(".pare").css({"font-size":"2.0em"});
             
            // alert(" retro "+retro);
       
       $("#dosEl").keypress(function(e){
            var user2 =$("#dosEl").val();
            if(e.keyCode ===13)
            {
                  if (user2 !=="2")
                  {
                     alert("Se equivocó, tenga en cuenta que siempre va al cuadrado.");
                  }
                  else
                  {
                        alert("Excelente");
                  }
                
            }//13
           
       });
       $(".terCuad") .keypress(function(e){
           if(e.keyCode ===13)
           {
              
               var atr = $(this).attr("id");
                 var user2 =$("#"+atr).val(); 
                 
                  
                 
               var atr3 = $(this).attr("name");
                var atr2 = atr3.toString();
                
                // alert(" atr  "+atr );
             
          
             var user =user2.toString();
              var pc = atr.substring(0,1);
              
              
              var indc = atr.substring(1);
             
              var ins = indc.indexOf("_");
              
              var pind =indc .substring(0,ins);
               
              var sind = indc.substring(ins+1);
              
              var sis;
              
              
               
             
                
               switch(pc)
              {
                  case "q":// (pc==="v")
                  {
                       var men = retro[pind][sind].split("*");
                      sis =BaExp[pind][sind].toString();
                      
                   
                      
                   
                    
                    
                     if(user ===sis){
                       
                      // if(atr2 === "base")
                      // {
                           alert(men[0] );
                      // }
                     /*  else
                       {
                          alert(retro[1][0] ); 
                       }*/
                        
                      }  
              
                      else
                       {
                            //alert("Hubo errores BaEx: "+BaExp[pind][sind] + "user "+user ); 
                          // if(atr2 === "base")
                           // {
                                alert(men[1] );
                           // }
                           /* else
                            {
                                  alert(retro[1][1] ); 
                            }*/
                            
                       }
                       break;
                  }
                   case "w":// (pc==="v")
                  {
                       
                       sis= BaExpp2[pind][sind].toString();
                       
                       var tind = parseInt(pind)+1;
                       
                       // alert(" pind+1 "+tind);
                       
                       var men = retro[tind][sind].split("*");
                       
                      
                   if(user ===sis){
                       
                      // if(atr2 === "base")
                      // {
                           alert( men[0] );
                      // }
                    /*   else
                       {
                          alert(retro[1][0] ); 
                       }*/
                        
                      }  
              
                      else
                       {
                            //alert("Hubo errores BaEx: "+BaExp[pind][sind] + "user "+user ); 
                           // if(atr2 === "base")
                           // {
                                alert(men[1] );
                           // }
                          /*  else
                            {
                                  alert(retro[3][1] ); 
                            }*/
                            
                 }
                    /* if(user ===sis){
                        alert("Perfecto, esa es la respuesta" );
                      }  
              
                      else
                       {
                            alert("Hubo errores BaEx: "+BaExpp2[pind][sind] + "user "+user ); 
                       }*/
                       break;
                  }
                  
                   case "j":
                       {
                            var tind = parseInt(pind)+2;
                            
                            sis = po[sind];
                            
                             var men = retro[tind][sind].split("*");
                             
                           //alert("men1 "+men[1] +"men 0 "+men[0]);
                       
                          if(user ===sis)
                          {
                              alert(men[0]);
                          }
                          else
                          {
                               alert(men[1]);
                          }
                             
                         break;  
                       } 
              }//switch
               
           }//13
           
           
       });//tercuad
        
     
    };//funcion50
    
    func[5][1] = function()
    {
       //diferencia de cuadrados
        //*****************  Ejericicos resueltos ******************
       // var cuad = "4"+sup("a",6)+("-25")+sup("b",4);
       
       //************************* Generación de ejercicios ***************
        
        var diCua = new generaEjercicios();
        
        var cuadra = diCua.TerminoCuadrado();
        
        var cuadra2 = diCua.TerminoCuadrado();
        
      var  cuad =cuadra + " - "+cuadra2;
        
        
        //********************** Ejercicio propuesto ******************
        var cuadraP = diCua.TerminoCuadrado();
        
        var cuadra2P = diCua.TerminoCuadrado();
        
         var  cuadP =cuadraP + " - "+cuadra2P;
         
          
      
     //********************** Fin Ejercicio propuesto ******************
      
      
      
      //************************* Solución del cuadrado ***************
        
        var dif= new diferenciaCuadrado(cuad);
        
         var cad3=dif.Resolve();
         
        
      /*  var cad4= dif.difExponencial();
        var factores = dif.factors();*/
        
         //****************** ejercicio resuelto***********
         
         var bases = dif.bases1();
         var exponents = dif.exponentes1();
         
          var bases2 = dif.bases2();
         var exponents2 = dif.exponentes2();
         var literales = dif.litera();
         var exLit =  dif.expoLitera ();
         
         var basis = dif.difConExponente();
         var expona = dif.expoRaiz();
         
      //   var cdi = expona[0][0]+"<sup>"+expona[0][1]+"</sup>";
         
       //  var cdi2 = expona[1][0]+"<sup>"+expona[1][1]+"</sup>";
         
        
         
        
     /*    
         var nuC="";
         
         for(var k=0;k<bases.length;k++)
         {
             nuC = nuC+bases[k]+"<sup>"+exponents[k]+"</sup>";
         }
         nuC = nuC+literales[0]+"<sup>"+exLit[0]+"</sup>";
         
       
         
         
            var nuC2="";
         
         for(var k=0;k<bases2.length;k++)
         {
             nuC2 = nuC2+bases2[k]+"<sup>"+exponents2[k]+"</sup>";
         }
     
         nuC2 = nuC2+literales[1]+"<sup>"+exLit[1]+"</sup>";
         
       var   nuTot = nuC+" - "+nuC2;
       
     
       
        var nucN = nuTot.replace("1<sup>1</sup>","");
        
         var nucN2 = nucN.replace("1<sup>1</sup>","");
        
        nuTot=nucN2;*/
       
       
        //************************* Raiz cuadrada primer término ***********
         
      /*   var raizCuad = [];
         
          for(var k=0;k<exponents.length;k++)
         {
             if(exponents[k] !==1)
             {
                raizCuad[k] = exponents[k]/2; 
             }
             else
             {
                raizCuad[k]=1; 
             }
             
         }
         
          var nuC3="";
         
         for(var k=0;k<bases.length;k++)
         {
             nuC3 = nuC3+bases[k]+"<sup>"+raizCuad[k]+"</sup>";
             
         }
         
          var lo1 = exLit[0]/2;
          
         // alert(" nuC3 "+nuC3+" bases "+bases+" raizCuad "+raizCuad);
         
         if (lo1 ===0)
         {
             lo1="";
         }
         
         nuC3 = nuC3+literales[0]+"<sup>"+lo1+"</sup>";
         
         
         
        if( literales[0] !=="")
        {
             var nuC3N = nuC3.replace("1<sup>1</sup>"+literales[0],literales[0]);
        
             nuC3= nuC3N;
        }
         
       */
      
      
         
          //************************* Fin Raiz cuadrada primer término ***********
          
           //************************* Raiz cuadrada segundo término  ***********
         
      /*   var raizCuad2 = [];
         
          for(var k=0;k<exponents2.length;k++)
         {
             if(exponents2[k] !==1)
             {
                raizCuad2[k] = exponents2[k]/2; 
             }
             else
             {
                raizCuad2[k]=1; 
             }
             
         }
         
          var nuC4="";
         
         for(var k=0;k<bases2.length;k++)
         {
             nuC4 = nuC4+bases2[k]+"<sup>"+raizCuad2[k]+"</sup>";
         }
         
        
          var lo2 = exLit[1]/2;
         
         if (lo2 ===0)
         {
             lo2="";
         }
         nuC4= nuC4+literales[1]+"<sup>"+lo2+"</sup>";
         
         
         
         
         if( literales[1] !=="")
        {  
            var nuC4N = nuC4.replace("1<sup>1</sup>"+literales[1],literales[1]);
        
            nuC4= nuC4N;
            
        }*/
         
         
          var nuC3= dif.redCompleto();
          cad3 =dif.completo();
          var res = dif.cuadradoResuelto();
          var  lst = dif.last();
         
          //************************* Fin Raiz cuadrada primer término ***********
          
          //******************Fin Prueba ***********
       //alert("exLit[0]/2  "+lo1 +" exLit[1]/2 "+lo2);
     
       planti();
       
       
       
       var ter=0;
      var  pro =1;
       
  /*     for (var s=0;s< bases.length;s++)
               {
                    ter =bases[s];
                   if(!isNaN(ter))
                   {
                     ter =  Math.pow(bases[s],raizCuad[s]) ;
                      pro = pro*ter; 
                   }
                  
               }*/
    
      
      if(pro ===1)
      {
          pro ="";
      }
      
       // var pp = pro + literales[0]+"<sup>"+lo1+"</sup>";   
      //****************** Segundo producto **************
         var ter2=0;
      var  pro2 =1;
       
   /*    for (var s=0;s< bases2.length;s++)
               {
                    ter2 =bases2[s];
                   if(!isNaN(ter))
                   {
                     ter2 =  Math.pow(bases2[s],raizCuad2[s]) ;
                      pro2 = pro2*ter2; 
                   }
                  
               }*/
    
      
      if(pro2 ===1)
      {
          pro2 ="";
      }
              
   //   var pp2 = pro2 + literales[1]+"<sup>"+lo2+"</sup>";   
  //var cuD = "("+pp+" + "+pp2+")"+"("+pp+" - "+pp2+")";
   var tem = tema2(5,1);
    $("#tem").append(tem); 
            
        
      $("#izq").append("<br><br>"+"Factorice "+cuad+"<br><br>"+cuad+"  = "+cad3+
                       "<br><br>Se dividen los exponentes entre 2: <br><br> "+cuad+" = "+nuC3+
                        "<br><br>"+cuad+" = "+res+"<br><br>"+cuad+" = "+lst);
               
             //   alert("res  "+res );
     //******************************  Fin ejericicios resueltos ************************
     
     
      //*********************************** Ejemplos propuestos  ***********************
        var cuadp ;//
        
           cuadp =cuadraP + " - "+cuadra2P;
           
         var ulFil =  new todero(cuadraP);
         var ulfilN = ulFil.displayPro();//última fila de cajas
         
          var ulFil2 =  new todero(cuadra2P);
          var ulfilN2 = ulFil2.displayPro();
          
          var ulfil =[];
          
          ulfil[0] = new Array(3);
          
          ulfil[0][0] = ulfilN[0];
          
          ulfil[0][1] = ulfilN[1];
          
           ulfil[0][2] = ulfilN2[0];
           
            ulfil[0][3] = ulfilN2[1];
            
            
               ulfil[1] = new Array(3);
          
          ulfil[1][0] = ulfilN[0];
          
          ulfil[1][1] = ulfilN[1];
          
           ulfil[1][2] = ulfilN2[0];
           
            ulfil[1][3] = ulfilN2[1];
         
        // alert("ulfil "+ulfil);
        
        var difp= new diferenciaCuadrado(cuadp);
        
         var cad3=difp.Resolve();
         
         var prr = difp.difConExponente();
         
         var basSeg = difp.bases();
         var redSeg = difp.exponentesDividos();
         
         // var basSeg2 = difp.bases1();
         
        
         
         
          
          var prrRed= difp.expoRaiz();
          
         //  alert(" cuadp  "+cuadp);
          
          var lasTerm = operacionesComunes(basSeg,redSeg);
         
        // alert("lasTerm = "+lasTerm+ "basSeg[0] = "+basSeg[0] + " prrRed[0] = "+prrRed[0]);
         
          
        
      
      var cad="";
          
        // ********************* Completamente Nuevo ****************
        //
        //
      
       
       var tresNum =prr[0][0].toString()+prr[0][1].toString()+prr[0][2].toString();
       
       var lif = prr.length-1;
       
       var ad=" - ";
        var  ad2 = "- (";
         
      //   ad = ad2.fontsize(6);
         
          
         var ad22 =")";
         
           var adC = ad22.fontsize(6);
         
         var ele = "<sup>2</sup> ";
         
         for(var x=0;x<lif;x++)
            {
             for(var y=0;y< prr[x].length-1;y++)
               {
                 var pru = prr[x][y].toString();
                 var even =y%2;
                 
             
                 if(pru !== "1" || tresNum==="11")
                 {
                     if(tresNum==="11")
                     {
                        tresNum="" ;
                     }
                   
                     if(even ===0)
                     {
                         cad=cad+"<input type = 'text' class ='nu' id  ='k"+
                                 x+"_"+y+"'>";
                       
                     }
                     else
                     {
                       cad=cad+"<sup><input type = 'text' class ='nu' id = 'k"+x+"_"+y+
                                 "'></sup>";
                     }
            
               
              
               }//if
              
           }
           
           if(x===prr.length-3 )
           {
               ad ="";
           }
               cad=cad+ad;
         }//Primer for
         
     
        var tresNum2 =prrRed[0][0].toString()+prrRed[0][1].toString()+prrRed[0][2].toString();
         var cade="";
         var cade2 ="";
      
          ad2 = "- (";
          
          var sigCad =" - ";
         
          ad = ad2.fontsize(6);
         for(var x=0;x< prrRed.length-1;x++)
            {
             for(var y=0;y< prrRed[x].length-1;y++)
               {
                 var pru = prrRed[x][y].toString();
                 var even =y%2;
               
                 if(pru !== "1" || tresNum2==="11")
                 {
                     if(tresNum2==="11")
                     {
                        tresNum2="" ;
                     }
                   
                   
                     if(even ===0)
                     {
                         cade=cade+"<input type = 'text' class ='nu' "+
                                 "id  ='f"+
                                x +"_"+y+
                                 "'>";
                                  
                     }
                     else
                     {
                         cade=cade+"<sup><input type = 'text' class ='nu'"+
                                  "id  ='f"+
                                  x +"_"+y+
                                 "'></sup>";
                 
                 
                     }
            
               
              
               }//if
              
           }
           
            if(x===prr.length-2 )
           {
               ad ="";
               adC="";
               ele="";
               sigCad="";
           }
           cade=cade+adC+ele+ad;
          // cade2 = cade2+sigCad;
         }//Primer for
         
         
         //***************** Cajas sin  cuadrado ************************
         
          var tresNum2 =prrRed[0][0].toString()+prrRed[0][1].toString()+prrRed[0][2].toString();
            ad2 = " - ";
          
          var sigCad =" - ";
      
          ad = ad2.fontsize(6);
          cade2="";
          
          var multi =[];
          
          /* for(var y=0;y< 2;y++)
               {
                   multi[y] = new Array(prrRed[0].length);
               }*/
          
          var mult1 ="";
         for(var x=0;x< 2;x++)  //  for(var x=0;x< prrRed.length-1;x++)
            {
                multi[x] = new Array(prrRed[0].length);
             for(var y=0;y< prrRed[x].length-1;y++)
               {
                 var pru = prrRed[x][y].toString();
                 var even =y%2;
                 
               //  $("#der").append(" prrRed ["+x+"]["+y+"] = "+prrRed[x][y]);
               
                 if(pru !== "1" || tresNum2==="11")
                 {
                     if(tresNum2==="11")
                     {
                        tresNum2="" ;
                     }
                   
                   
                     if(even ===0)
                     {
                                      
                      cade2=cade2+"<input type = 'text' class ='nu' "+
                                 "id  ='d"+
                                x +"_"+y+"'>";
                        
                       mult1 =  mult1+ prrRed[x][y]+"*";
                       
                     }
                     else
                     {
                      
                       cade2 = cade2+"<sup><input type = 'text' class ='nu'"+
                                  "id  ='d"+
                                  x +"_"+y+"'></sup>";
                          
                      mult1 =  mult1+ "<sup>"+prrRed[x][y]+"</sup>";
                          
                          //ad="";
                     }
            
               
              
               }//if
            
           }//Segundo for
           
             multi[x] = mult1;
              mult1="";
           var pa;
          // alert(" y= "+x);
            if(x===0 )
           {
               pa =" - ";
               //  alert(" pa= "+pa);
           }
           else
           {
               pa ="  "; 
           }
            cade2 = cade2+pa;
           
          
         
       
         }//Primer for
       
       
       //********************* 0j90 
       
        multiCua(multi[0]);
         
       
      //  $("#der").append("<br>"+multi[0]+"<br>"+"<br>"+multi[1]+"<br>");
           //* ************ Fin Cajs  sin cuadrado ********************
           
             adC =ad22.fontsize(6);
          cade2 =cade2+adC;
          
          //*****************Sin cuadrados con + *********************** 
          
          var tresNum2 =prrRed[0][0].toString()+prrRed[0][1].toString()+prrRed[0][2].toString();
           ad2 = " - ";
          
          var sigCad =" - ";
      
          ad = ad2.fontsize(6);
          
          var nAd = "(";
          var GnAd =  nAd.fontsize(6);
         var  cade4=GnAd;
         for(var x=0;x< 2;x++)  //  for(var x=0;x< prrRed.length-1;x++)
            {
             for(var y=0;y< prrRed[x].length-1;y++)
               {
                 var pru = prrRed[x][y].toString();
                 var even =y%2;
                 
               //  $("#der").append(" prrRed ["+x+"]["+y+"] = "+prrRed[x][y]);
               
                 if(pru !== "1" || tresNum2==="11")
                 {
                     if(tresNum2==="11")
                     {
                        tresNum2="" ;
                     }
                   
                   
                     if(even ===0)
                     {
                                      
                      cade4=cade4+"<input type = 'text' class ='nu' "+
                                 "id  ='g"+
                                x +"_"+y+"'>";
                       
                     }
                     else
                     {
                      
                       cade4 = cade4+"<sup><input type = 'text' class ='nu'"+
                                  "id  ='g"+
                                  x +"_"+y+"'></sup>";
                          
                          //ad="";
                     }
            
               
              
               }//if
              
           }
           var pa;
          // alert(" y= "+x);
            if(x===0 )
           {
               pa =" + ";
               //  alert(" pa= "+pa);
           }
           else
           {
               pa ="  "; 
           }
            cade4 = cade4+pa;
           
           $("#der").append("<br>");
           //cade=cade;//+sigCad+adC+ele+ad;
         
         }//Primer for
       
          
             adC =ad22.fontsize(6);
          cade4 =cade4+adC;
           //*****************Fin sin cuadrados con + *********************** 
         var cade3 = cade2.replace(" - "," + ");
         
           ele = "<sup>2</sup> ";
           ad2 ="(";
            ad = ad2.fontsize(6);
           adC =ad22.fontsize(6);
           
        var pI = cuadp.indexOf("1");
        
         var tempo = cuadp.split("-");
         var uI = tempo[1].indexOf("1");//Segunda parte de la cadena
           
            //********************** Si viene un uno en primer término 
              var llet,unoLet;
              if(pI ===0)
              {
                  llet = cuadp.substring(1,2);
                  if(isNaN(llet))
                  {
                      unoLet = "1"+llet;
                      var cuadpT = cuadp.replace(unoLet,llet);
                      cuadp= cuadpT;
                  }
                  else
                  {
                     unoLet="";
                     unoLet="";
                  }
                 //cuadP=llet;
                  
              }
              else
              {
                  unoLet="";
                 llet=" "; 
              }
              
             
      //********************* Fin 1 en el primer término ********************
      
       //********************** Si viene un uno en segundo  término **********
                var llet2,unoLet2;
              if(uI  !==0)
              {
                  llet2 = tempo[1].substring(1,2);
                  
                 // alert(" llet2 = "+llet2+" tempo1 = "+tempo[1]);
                  if(isNaN(llet2))
                  {
                      unoLet2 = "1"+llet2;
                     var cuadpT = cuadp.replace(unoLet2,llet2);
                      cuadp= cuadpT;
                  }
                  else
                  {
                     unoLet2="";
                     llet2="";
                  }
                 //cuadP=llet;
                  
              }
              else
              {
                  unoLet2="";
                   llet2=" "; 
              }
            
              
             
      //********************* Fin 1 en el segundo término ********************
      
      var ulti ="(<input type ='text' class ='nu' id ='z0_0'>";
      
      var elMenos =" - ";
      
      if(ulfil[0][1].toString() !=="1")
      {
           ulti = ulti+"<sup><input type ='text' class ='nu' id ='z0_1'></sup> - ";
      }
      else
      {
         ulti =ulti+" - ";
      }
      
      
      //**********         segundo término primer factor **************
      
       var ulti2 ="<input type ='text' class ='nu' id ='z0_2'>";
      
      var elMenos =" - ";
      
      if(ulfil[0][3].toString() !=="1")
      {
           ulti2 = ulti2+"<sup><input type ='text' class ='nu' id ='z0_3'></sup>)";
      }
      else
      {
         ulti2 =ulti2+")";
      }
      
     
      
   /*   for(var t=0;t<ulfil.length;t++)
      {
          
      }*/
      
      //**************************** Última fila ***********************
      
        var ulti3 ="(<input type ='text' class ='nu' id ='z1_0'>";
      
      var elMenos =" - ";
      
      if(ulfil[1][1].toString() !=="1")
      {
           ulti3 = ulti3+"<sup><input type ='text' class ='nu' id ='z1_1'></sup> + ";
      }
      else
      {
         ulti3 =ulti3+" + ";
      }
      
      
      //**********         segundo término primer factor **************
      
       var ulti4="<input type ='text' class ='nu' id ='z1_2'>";
      
      var elMenos =" - ";
      
      if(ulfil[1][3].toString() !=="1")
      {
           ulti4 = ulti4+"<sup><input type ='text' class ='nu' id ='z1_3'></sup>)";
      }
      else
      {
         ulti4=ulti4+")";
      }
      
     var ultis ="<br><br>"+cuadp+" = "+ulti+ulti2+ulti3+ulti4;
      
      //************************* Fin Última fila ***********************
              
              $("#der").append("Factorice.  "+cuadp+"<br><br>");
              
               // alert("  llet2 "+ llet2+ " unoLet2 "+unoLet2 +" \ncuadp "+cuadp);
               
               
               
            $("#der").append(cuadp+" = "+cad+
                   "<br><br><br>"+cuadp+": "+ad+cade+adC+ele+
                  "<br><br>"+ad+cade2+cade4+ultis);//+adC+ad+cade3+adC
           
              $(".nu").css({"width":"2em"});
              
              
              var retro= retroAlimentacion2(5,1);
              
          
      $(".nu").keypress(function(e){
                  
                  
                  if(e.keyCode ===13)
                  {
                      var atr = $(this).attr("id");
                      
                      var pc =atr.substring(1);//Primer carácter
                      
                     var user = $("#"+atr).val();
                      
                     
                      
                      var ing = pc.split("_");
                      
                      var u = parseInt(ing [0]);
                       var d= parseInt(ing [1]);
                       
                      
                       
                       if(atr[0].toString()=== "k")
                       {
                            var sis =prr[u][d].toString();
                            
                            sis = recorte(sis);
                            
                            user = recorte(user);
                            
                            var men = retro[u][d].split("*");
                            
                           
                            
                           if(sis ===user)
                           {
                              alert(men[0]); 
                           }
                           else
                           {
                              alert(men[1]); 
                           }
                            
                       }
                       else if(atr[0].toString()=== "f")
                       {
                             var sis =prrRed[u][d].toString();
                             var men = retro[u][d].split("*");
                             
                               sis = recorte(sis);
                            
                            user = recorte(user);
                            
                           // alert("sis = "+sis+ " user = "+user);
                            
                           if(sis ===user)
                           {
                              alert(men[0]); 
                           }
                           else
                           {
                              alert(men[1] +" pc "+pc + " sis "); 
                           }
                            
                       }//f
                      
                     else if(atr[0].toString()=== "d")
                       {
                             var sis =prrRed[u][d].toString();
                             var men = retro[u][d].split("*");
                             
                               sis = recorte(sis);
                            
                            user = recorte(user);
                            
                            alert("sis = "+sis+ " user = "+user);
                            
                           if(sis ===user)
                           {
                              alert(men[0]); 
                           }
                           else
                           {
                              alert(men[1] +" pc "+pc + " sis "+sis); 
                           }
                            
                       }//d
                       
                        else if(atr[0].toString()=== "g")
                       {
                             var sis =prrRed[u][d].toString();
                             var men = retro[u][d].split("*");
                             
                               sis = recorte(sis);
                            
                            user = recorte(user);
                            
                            alert("sis = "+sis+ " user = "+user);
                            
                           if(sis ===user)
                           {
                              alert(men[0]); 
                           }
                           else
                           {
                              alert(men[1] +" pc "+pc + " sis "+sis); 
                           }
                            
                       }//g
                       
                        else if(atr[0].toString()=== "z")
                       {
                           
                           
                             var sis =ulfil[u][d].toString();
                             
                              alert(" ulfil[u][d] "+ulfil[u][d]);
                             
                              var nut = u+2;
                              
                               var men = retro[nut][d].split("*");
                              
                             //  alert("retro"+retro[1][0]+ " sis "+sis+ " nut "+nut+" d = "+d);
                             var men = retro[nut][d].split("*");
                             
                            
                             
                            //   alert(" retro[u+2][d] "+retro[u+2][d]);
                             
                               sis = recorte(sis);
                            
                            user = recorte(user);
                            
                         //   alert("sis = "+sis+ " user = "+user+" u+2 =  "+(u+2) + " d "+d+
                              //      " retro[u+2][d] "+retro[u+2][d]);
                            
                           if(sis ===user)
                           {
                              alert(men[0]); 
                           }
                           else
                           {
                              alert(men[1]+" sis: "+sis); 
                           }
                            
                       }//z
                      
                  }
                  
                 
                  
                  
                  
              });
              
              
         //********************** Fin completamente nuevo
          
       
    };
      func[6][0] = function()
    {
        
        
      
       planti();
       
        var tem = tema2(6,0);
         $("#tem").append(tem); 
       
       var cub = new generaEjercicios();
       var cubo = cub.cubo();
       
        var difCub = new diferenciaCubo(cubo);
       
       
       
       var exponenciacion = difCub.terminoCubo();  //Expresar los términos elevados al cubo
       
       var raizCub = difCub.raizCubica();
       var teMul = difCub.multiplicado();
       
       $("#izq").append(cubo+ " =  "+exponenciacion +" <b><br>"+cubo+ " =  ("+raizCub+
               ")<sup>3</sup> <br><br>"+cubo+ " =  ("+teMul+")<sup>3</sup>");
       
      
       
        //*********************************** Ejemplo propuesto ***********************
          var retro = retroAlimentacion2(6,0);
       var cubo = cub.cubo();
       
       var difCub = new diferenciaCubo(cubo);
       
       exponenciacion = difCub.terminoCubo();
       
       raizCub = difCub.raizCubica();
       
       teMul = difCub.multiplicado();
       
       var eleCub =[];
       
       eleCub[0] = exponenciacion;
       eleCub[1] = raizCub;
        eleCub[2] = teMul;
       
      // var base =difCub.bases();
      // var exponentes = difCub.exponentes();
       
       var ausweis =0;
       
       var le =["q","w","e","r"];
       
      // alert("Afuera eleCub[indice] "+typeof eleCub[ausweis]);
       
       poBa(eleCub,ausweis,le,cubo,retro);
       
   
         function poBa2()
                {
                     //    alert("eleCub[indice] "+eleCub[ausweis]+" indice = "+ausweis);
                   var bad  = new capturaBaExp(eleCub[ausweis]);  //capturaBaExp(cad)
                   
                  
                   var bapa1 = bad.baexArr();  
                   
               //    alert("bapa1 "+bapa1);
                   
                                 
                    var bapa2 = bad.posArr();
                    
                      var cl ="klase6";
                      
                       // alert(" cl "+bapa1);
                     var caC6 = bad.cajas(le[ausweis],cl,eleCub[ausweis]) ;
                     
                     var pa1 ="";
                     var pa2 ="";
                     
                     if(ausweis >0)
                     {
                       pa1 ="(";  
                       pa2 =")<sup>3</sup>";
                     }
                     
                   //    alert(" bapa1 "+bapa1);
                      
                        $("#der").append("<div id = 'comu2'>");
                         $("#comu2").append(cubo+" = "+pa1+ caC6+pa2);//p0=
                 
                   //  $("#der").append("cajas "+caC6 +"<br><br>");
                     
                        $("."+cl).css({"width":"1.8em"});
                    
                  
                    
                    var meni = "";
                    var meniCss = meni.fontsize(8);
                    
                   //  var meni2 = signs[indice+1];
                                    
                       //  $("#comu2").append(meniCss+caC6+meni2);//p0=
                     
                          bad .baseExpValida(cl,le[ausweis],retro,1);
                          
                        
                           
                 //************************ Crear botón **********************
                 
                             var max ="menos";
                             
                           //  var indice =0;
                                                        
                           //   $("#der").append(" bsl[indice]-1) = "+( baa2.length-1)+" indice = "+indice);
                              
             alert("ausweis = "+ausweis+ "(basEx [indice].length-1)  = "+(eleCub.length-1));             
                             if(ausweis ===(eleCub.length-1))
                             {
                                
                                 max ="max";
                             }
                             var id ="idt"+ausweis ;
                             var bot6C = new botValidacion(id);
      
                             var bo6t = bot6C.crearBot();
                             
                                                         
                            
                             $("#divBot2").empty(); 
                            $("#der").append("<br><div id = 'divBot2'>");
                            
                            
                              $("#divBot2").append(bo6t);
                              
                              $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                              var bai =[];
                              bai[0] = bapa1;
               
             
             $("#"+id).click(function(){
                              
                                                 
                        bot6C.botValidaEvento(bai,le[ausweis],max);
                        
                        
                        var es =  bot6C.error();
                        
                        
                         var esI=parseInt(es);
                         
                             alert("esI "+esI);
                         
                          
                         var avi ="Pulse este botón para hacer otro ejercicio";
                         var aviCss= avi.fontcolor("white");
                         
                         
                     
                         
                           if(esI ===1)
                         { 
                             ausweis++;
                             
                             $("#divBot2").empty(); 
                             
                             $("#divBot2").append("<br><br><br>");
                             
                              $("#comu2").append("<br>");
                           
                             poBa();
                        
                         }
                         else if(esI ===2)
                         {
                             $("#der").append("<div id ='avi'>");
                             $("#avi").append(aviCss);
                             
                              $("#avi").css({"fontColor":"white","background":"grey"});
                             
                             $("#avi").click(function(){
                                 func[6][0]();
                             });
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                }//poBa5
                //*******************
         //*********************************** Fin ejemplo propuesto ***********************
       
       
    };//60
    
    func[6][1] = function()
    {
         
        planti();
        //kubo(" - ");
        
       
          
      var cub = new generaEjercicios();   
      var difDeCubo = cub.diferenciaCubo();
      
      var difDeCubo2 = cub.diferenciaCubo();
      
       var potO =   new  kubo(difDeCubo,difDeCubo2);
       
    
   // var pot = potO.potencia();
   // var pot2 = potO.potencia2();
    var eleCub=[];
    var ausweis =0;
    var le=  ["q","w","e","r"];
    
    
    
  
    
   // eleCub[0][0]=potO.potencia();
    
     var bad  = new capturaBaExp(potO.potencia()); 
     var basexe = bad.baexArr();
     var raiz = new capturaBaExp(potO.raizCubica()); 
     var basRaiz = raiz.baexArr();
     
     var bad2  = new capturaBaExp(potO.potencia2()); 
     var basexe2 = bad2.baexArr();
     var raiz2 = new capturaBaExp(potO.raizCubica2()); 
     var basRaiz2 = raiz2 .baexArr();
     
    
     var tam = [];
     
     eleCub[0]= new Array(1);
     eleCub[0] = basexe.concat(basexe2);
     
     var  pos = bad.posArr();
     var  pos2 = bad2.posArr();
      
     eleCub[1]= new Array(1);
     
     eleCub[1]=basRaiz.concat(basRaiz2);
     alert(" eleCub[0] "+ eleCub[0]+
             "\n\n  eleCub[1]"+eleCub[1]);
     
     var cad="";
     for (var t=0;t<eleCub[0].length;t++)
     {
         if ( t===basexe.length)
         {
           cad =" - " ;
         }
         else
         {
             cad ="";
         }
           tam [t] =  cad;
     }
     
    //alert(" eleCub[1]: "+ eleCub[1]);
     
     //
     
   
     
    var cubo = potO.ejercicio()+" = ";
    var retro = new retroAlimentacion2(6,1);
    
    
       
       poBa(eleCub,ausweis,le,cubo,retro,bad,tam);
       //eleCub = matriz. ausweis: indice =0. le:letras. bad: objeto, paréntesis y signos
      
   
    };
    
     func[6][2] = function()
    {
          //var tem = tema2(6,2);
       // $("#tem").append(tem); 
        planti();
        
       
        
         var cub = new generaEjercicios();   
         var sumDeCubo = cub.sumsCubo();
         
          var sumDeCubo2 = cub.sumsCubo();
      
       kubo(sumDeCubo,sumDeCubo2);
       // kubo(" + ");
    };
    
     //*********************************** Fin ejemplo propuesto ***********************
     
      function poBa(eleCub,ausweis,le,cubo,retro,bad,tam)
                {
                    
                      // var cad="15t<sup>3</sup>x<sup>2</sup> - 8t<sup>2 </sup>+ 4";
                        //alert(" q eleCub[ausweis] "+eleCub[ausweis]);        
               //  var bad3  = new capturaBaExp(cad);  //capturaBaExp(cad)
                   
                  
               //    var bapa1 = bad.baexArr();  
                   
               
                   
                                 
                 //   var bapa2 = bad.posArr();
                    
                      var cl ="klase6";
                      
                  
                    // var caC6 = bad.cajas(le[ausweis],cl,eleCub[ausweis]) ;
                    
                   alert(" eleCub["+ausweis+"]"+eleCub[ausweis]);
                     
               var caMa = bad.cajasMatriz(le[ausweis],cl,eleCub[ausweis]);
               
               var po ="";
               var ca ="";
               for(var x=0; x<caMa.length;x++){
                   
                   ca = ca+tam[x]+caMa[x];
               }             
                            
                     var pa1 ="";
                     var pa2 ="";
                     
                     if(ausweis >1)
                     {
                       pa1 ="(" ; 
                       pa2 =")<sup>3</sup>"; //.fontsize(8);;
                     }
                     
                   //    alert(" bapa1 "+bapa1);
                   
                  
                      
                     $("#der").append("<div id = 'comu2'>");
                    $("#comu2").append(cubo+pa1+ ca+pa2);//p0=
                 
                   //  $("#der").append("cajas "+caC6 +"<br><br>");
                     
                    $("."+cl).css({"width":"1.8em"});
                    
                  
                    
                   var meni = "";
                   var meniCss = meni.fontsize(8);
               
                  bad .baseExpValida(cl,le[ausweis],retro,1);
                  
                 //************************ Crear botón **********************
               
                 var max ="menos";
                 if(ausweis ===(eleCub.length-1))
                  {
                      max ="max";
                  }
                  var id ="idt"+ausweis ;
                  var bot6C = new botValidacion(id);
      
                  var bo6t = bot6C.crearBot();           
                            
                  $("#divBot2").empty(); 
                  $("#der").append("<br><div id = 'divBot2'>");
                  $("#divBot2").append(bo6t);
                  $("#divBot2").css({"position":"absolute","left":"18em"});
                              
                  var bai =[];
                  bai[0] = eleCub[ausweis];
                  
                  $("#"+id).click(function(){
                      
                        bot6C.botValidaEvento(bai,le[ausweis],max);
                        var es =  bot6C.error();
                         var esI=parseInt(es);
                         
                          alert("es: "+esI) ;
                          
                         var avi ="Pulse este botón para hacer otro ejercicio";
                         var aviCss= avi.fontcolor("white");
                                              
                           if(esI ===1)
                         { 
                             ausweis++;
                             
                                                       
                             cubo="";
                           
                                poBa(eleCub,ausweis,le,cubo,retro,bad,tam);
                        
                         }
                         else if(esI ===2)
                         {
                             $("#der").append("<div id ='avi'>");
                             $("#avi").append(aviCss);
                             
                              $("#avi").css({"fontColor":"white","background":"grey"});
                             
                             $("#avi").click(function(){
                                 func[6][1]();
                             });
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                 
                 //********************** * Fin crear botón **************
                }//poBa5
                //*********
     
 
   
            func[k][p](); 
            
            
          
}//principal

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Comple()  //Complementos = colaboran
{
    /*
     *   matrizUniEnBidi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
     */
    
    
    this.matrizUniEnBidi = function(ma1,ma2 )
    {
          //alert("En densores");
            var dimensionNueva = ma1.length+ma2.length;
            
            var denSor= new Array(dimensionNueva.length);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            
            
            //alert(" baspF2 "+baspF);
         
          for(var j=0; j<dimensionNueva;j++)
            {
               denSor[j] = new Array(2);
              
            }
            
          var j=0;
        
            for(var i=0;i<ma1.length;i++)
           {
              
             // for(var j=0; j<2;j++)
             // {
                  denSor[2*i] = ma1[i];//base pares
                  denSor[2*i+1] = ma2[i];//exponente impares
                  
            // }
           
         }
               // denSor[0][0]=ma1[0][0];
                  //alert(" ma1: "+ma1[0] + " ma2 "+ma2+ " denSor[i][j] "+denSor);
          return  denSor;
        
    };//matrizUni
this.numero = function(numSt)
         {
             
            
               
            var num ="";
            
            var ind=numSt.indexOf("-");
            var ind2=numSt.indexOf("+");
            
            if (ind !==-1 || ind2 !==-1)
            {
                numSt= numSt.substring(1);
            }
           
            for(var i=0; numSt.length;i++)
            {
                if(!isNaN(numSt[i]))
                {
                    num = num+numSt[i];
                }
                else
                {
                    break;
                }
            }
            
            if (num ==='')
               {
                  // num=1;
                // alert("El número es: " + num );
               }
            else
              {
                  //num=1;
               // alert("No hay numero "  );
                
              } 
              var num2 =parseInt(num);
              
                if (isNaN (num2))
              {
                  num2 = 1;
              }
             
              return num2;
            };//numero
            
           this.capturaBase =  function(cad)
            {
                 
                var bases =[];
                var signs =[];
                var cad5 = cad;
                
                 var subin =cad5.substring(0,1);
                 if (subin ==="+" || subin ==="-")
                 {
                     cad5 = cad.substring(1);
                 }
                 
                 
                     var indice;// = cad5.indexOf("<");
                var cad2;// = cad5.substring(0,indice);
                var cad3;// = cad5.substring(indice);
                
                var sup;// ="</sup>".length;
                
              //  indice = cad3.indexOf("</sup>");
                
                 var cad4;// = cad3.substring(0,indice+sup);
                // cad5 = cad3.substring(indice+sup);
                var x=0;
                var bapo,signo;
                var w=0;
                
                indice = cad5.indexOf("<");
                if(indice ===-1)
                {
                    bases[0]=cad5;
                }
                else
                {
                    do{
                    
             
                 
                 //for(var x=0;x<3;x++)
                // {
                     indice = cad5.indexOf("<");
                     cad2 = cad5.substring(0,indice);//bases
                     //alert("cad2: "+cad2);
                     
                      cad3 = cad5.substring(indice);
                     sup ="</sup>".length;
                      indice = cad3.indexOf("</sup>");
                      cad4 = cad3.substring(0,indice+sup);
                       cad5 = cad3.substring(indice+sup);
                       
                       signo =cad2.substring(0,1) ;
                       
                        
                       
                       if(signo ==="-" || signo ==="+")
                       {
                          
                           bapo = cad2.substring(1);
                           w++;
                           signs[w]=signo;
                       }
                       else
                       {
                           bapo = cad2;
                       }
                        bases[x]= bapo;
                        x++;
                 
                      
                }while(cad5 !=='')//for
                  //**********************
                
                }
                
              
               return bases;
               /* var bases =[];
                var cad5 = cad;
                
                 var subin =cad5.substring(0,1);
                 if (subin ==="+" || subin ==="-")
                 {
                     cad5 = cad.substring(1);
                 }
                     var indice;// = cad5.indexOf("<");
                var cad2;// = cad5.substring(0,indice);
                var cad3;// = cad5.substring(indice);
                
                var sup;// ="</sup>".length;
                
              //  indice = cad3.indexOf("</sup>");
                
                 var cad4;// = cad3.substring(0,indice+sup);
                // cad5 = cad3.substring(indice+sup);
                var x=0;
                var w;
                var bapo,signo;
                var signs =[];
                do{
                    
             
                 
                 //for(var x=0;x<3;x++)
                // {
                     indice = cad5.indexOf("<");
                     cad2 = cad5.substring(0,indice);//bases
                     //alert("cad2: "+cad2);
                     
                      cad3 = cad5.substring(indice);
                     sup ="</sup>".length;
                      indice = cad3.indexOf("</sup>");
                      cad4 = cad3.substring(0,indice+sup);
                       cad5 = cad3.substring(indice+sup);
                       
                       signo =cad2.substring(0,1) ;
                       
                        
                       
                       if(signo ==="-" || signo ==="+")
                       {
                          
                           bapo = cad2.substring(1);
                           w++;
                           signs[w]=signo;
                       }
                       else
                       {
                           bapo = cad2;
                       }
                        bases[x]= bapo;
                        x++;
                 
                      
                }while(cad5 !=='')//for
                  //**********************
                
              
               return bases;*/
            };//function  captura base
            
  this.capturaExpo =  function(cad)
            {
               
                 cad = recorte(cad);
                 var exponentes =[];
                var cad5 = cad;
                var indice;// = cad5.indexOf("<");
                var cad2;// = cad5.substring(0,indice);
                var cad3;// = cad5.substring(indice);
                
                var sup;// ="</sup>".length;
                
              //  indice = cad3.indexOf("</sup>");
                
                 var cad4 ="z";// = cad3.substring(0,indice+sup);
                // cad5 = cad3.substring(indice+sup);
                var x=0;
                
                var granSup;
                var iT;
                var i=0;
              
              // for(var i=0;i<4;i++)
             
               do
                {
                  
                indice = cad5.indexOf("<sup>");
                granSup =("<sup>").length;
                
               
                
                iT =indice+granSup;
                
                  
                
                cad3 = cad5.substring(iT);//comiennza con el exponente
                
                  indice = cad3.indexOf("</sup>");
                 // granSup =("</sup>").length;
                  
                 // iT =indice+granSup;
           
                 cad4 =cad3.substring(0,indice);//¨primer exponente
                 
                   //   alert("   exponentes::: "+   exponentes[i]);
                 if(cad4 !=="")
                 {
                     exponentes[i] =  cad4;
                     i++;
                }
                 //*********** Comienza *************
                
                 cad5 = cad3.substring(indice);//bases
                 
                 
                 
                 if(cad4==="")
                 {
                     //  alert("Vacio ex: "+cad4);  
                 }
                 else
                 {
                     // alert("No es el valor: "+cad4);
                  }
             }while(cad4 !=="")
                 
                // alert("cad = "+cad + " exponentes "+exponentes);
               return exponentes;
                
                
            };//Captura exponente
            
     
          
            
 

     this.exp =  function (ncad) // Convierte los números en exponenciales
     {
           
         terminosDeExpr();
         
                       
             var nume =[];
            
          for(var i=0;i<ncad.length;i++)   //Obitene números que están en las cadenas
               {
                   nume[i]= this.numero(ncad[i]);
                                                      
                if(isNaN(nume[i]))  //Si no tiene número, escriba un 1.
                   {
                       nume[i]=1;
                       ncad[i] = "1"+ncad[i];
                   }       
               }//  for(var i=0;i<ncad.length;i++) 
               
              
                var factores =[];
           var expone =[];
           var fa2=[];
           var ncad2=[]; //Expresión algebraica con exponenciales
          
             for(var i=0;i<nume.length;i++)   //Números que están en las cadenas
               {
                   
                     factores[i] = new facto(nume[i]);
                     fa2[i] = factores[i].divisores();
                     expone[i] = factores[i].exponenciacion();
              
               }
         
            for(var i=0;i<ncad.length;i++)   //Números que están en las cadenas se expresan en términos de sus factores
               {
                  ncad2[i] =ncad[i].replace(nume[i],expone[i]);
              
               }
               
          
               return ncad2;
               
           function terminosDeExpr()
           {
                var cadAster2 =ncad;    
               var cadAster3 = cadAster2.replace(/-/g, "*-");
               var cadAster = cadAster3  .replace(/\+/g, "*+");
               
               
      
                ncad =cadAster.split("*");
      
                //return ncad;
            }    
     };//exp
     
     this.numAzar = function()
     { var p00 = Math.floor(Math.random() * 3+1);
                var p01 = Math.floor(Math.random() * 3+2);
                 var p02 = Math.floor(Math.random() * 7+2);
               
             var  p0 = p00*p01*p02;
               
               
                 var p10 = Math.floor(Math.random() * 3+1);
                var p11 = Math.floor(Math.random() * 3+2);
                 var p12 = Math.floor(Math.random() * 7+2);
                 
              var   p1 = p10*p11*p12;
              
              return p1;
         
     };
     
}//comple

function faCoNum()
{
    this.resuelto = function(r0)
    {
                           
                               
                  var ray1 ="ray1";  //Raya que separa los factores
                  var ray2 ="ray2";
                
               var desco = new temFactorizacion(r0);
             var todo= desco.descomposicionFactIzq(ray1);
              var info2 = desco.NumFormaFacIzq ();//número forma factorial de la izquierda
                
                         
                planti();
                
                
                
                  $("#izq").append("<div id ='res1'>");
                  $("#izq").append("<div id ='res2'>");
               $("#res1").append(todo);
               
                $("#"+ray1).css({"border":"white","border-style":"solid"});
                $("#"+ray1).css({"border-right":"orange","border-style":"solid"});
                
                /* $("#izq").append("Encuentre el  máximo común divisor (Mcd) entre los números "+
                        r0 +" y "+"<br><br>"); */ 
    };//resuelto
    
    this.propuestos = function(p0,retro)
    {
        //var p0 = p0C.numAzar();
               
                        
                // var   p2 = p0C.numAzar();
                 
                var ep = new facto(p0);
      
               var epf1= ep.divisores(); //ep: ejemplos propuestos, f: factores
      
               var epd1= ep.dividendos(); // dividendos
               
               
               var factores1 = multi(epd1,epf1,"");
               
             
                   var ba =ep.base();
                   var exp =ep.exponente();
                   
                   
                 var caisC = new retroC();
                 
                 $("#der").append("Encuentre el máximo común divisor entre "+p0+
                         " y " + "<br><br>");
                 
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
                              // bot2C = new botValidacion(id);
      
                             // bo2t = bot2C.crearBot();
                            // poBa2();
                             
                         }
                         
                        // alert("esI Nuevo "+esI+ " factores2 "+factores2);
                  });//click
                  
                  
                           
        
    }//poBa
};//propuesto 
}//principal



  function capturaBaExp(cad)
               {
                   //  alert(" b eleCub = "+cad);
                      var i =0;
                    var baex =[];
                    var pos =[];               
                  //  var cadRec = recorte(cad);
                    var cade = cad;
                    
                   var tem1 = cad.substring(0,1);
                    
                    if(tem1 === "-" || tem1 ==="+")
                    {
                       cade =  cad.substring(1);
                    }
                    else
                    {
                        //tem1 = cade;
                    }
                  
                     var   indice = cade.indexOf("<sup>");
                      
                     
                         
                         if (indice !==-1)
                         {
                              banConEx();
                         }
                         else
                         {
                             basSinEx();
                         }
                        
                
             function banConEx()
             {
                  
                for(var x=0;x<14;x++)
                {
               
                        indice = cade.indexOf("<sup>");
                 
                         
                         
                      if (indice !==-1){
                          
                            indice = cade.indexOf("<sup>");
                            
                            
                           baex[i] = cade.substring(0,indice);//recuperación de bases
                            pos[i]=0;
                            
                                           
                            //************* Lo que quedó ****************
                            var  resto = cade.substring(indice);
                            
                            var restoSinSu = resto.substring(5);//Quitar <sup>
                            
                            var BuscarSup = restoSinSu.indexOf("</sup>");//Buscar </sup>
                            
                           
                            
                            var exp = restoSinSu.substring(0,BuscarSup);
                            
                               //  alert(" indice   "+ indice + " cade: "+ baex[i] );    
                              i++;
                            baex[i] = exp;
                            
                             // alert("baex[i] qw: "+baex[0]+baex[1]);     
                                                        
                             pos[i]=1;
                             
                               
                             i++;
                            
                            var quedo = restoSinSu.substring(BuscarSup+6);
                            
                            cade = quedo;// Se repite
                            
                           
                            
                            if(cade ===' ')
                            {
                                break;
                            }
                            
                      
                         }      //if 
                        
                     }//for
                     //
                         //alert(" baex "+baex+ " cade: "+cade ); 
                }//banConEx   
                
                function basSinEx()
                {
                    baex[0]=cade;
                    pos[i]=0;
                }
               this.baexArr = function()
                        {
                              
                            return baex;
                        };
                            
                          this.posArr = function()
                        {
                            return pos;
                        };
                              
                 //****************************  cajas *********
                 
              this.cajas =  function (id,clase,prifa)
                  {
                 var cajis="";
                 
               //alert(" prifa.length "+prifa.length);
                 
                 for(var t=0;t<  prifa.length;t++)
                 {
                     // var capInt = parseInt(pos[t]);
                     
                     var capInt=0;
                     capInt = t % 2;
                      
                      //  alert("pos: "+pos+" dimensión pos "+pos.length+" capInt  "+capInt );
                     if(capInt ===0)
                     {
                         cajis =  cajis+"<input type ='text' id = '"+id+"0"+t+"' class = '"+clase+"'>";
                         
                     }
                     else
                     {
                         cajis = cajis+ "<sup><input type ='text' id = '"+id+"0"+t+
                                 "'  class = '"+clase+"'></sup>";
                         // $("body").append("<sup><input type ='cad' id = 'p"+t+"'></sup>");
                     }
                         
                 }//for
                 
                 return cajis;
                 
           };//Cajas con exponentes
              this.cajasMatriz =  function (id,clase,prifa)
                  {
                 var cajis=[];
                 
               //alert(" prifa.length "+prifa.length);
                 
                 for(var t=0;t<  prifa.length;t++)
                 {
                     // var capInt = parseInt(pos[t]);
                     
                     var capInt=0;
                     capInt = t % 2;
                      
                      //  alert("pos: "+pos+" dimensión pos "+pos.length+" capInt  "+capInt );
                     if(capInt ===0)
                     {
                         cajis[t] =  "<input type ='text' id = '"+id+"0"+t+"' class = '"+clase+"'>";
                         
                     }
                     else
                     {
                         cajis[t] =  "<sup><input type ='text' id = '"+id+"0"+t+
                                 "'  class = '"+clase+"'></sup>";
                         // $("body").append("<sup><input type ='cad' id = 'p"+t+"'></sup>");
                     }
                         
                 }//for
                 
                 return cajis;
                 
           };//Matriz Cajas con exponentes
           
           this.cajasSinExpo = function(id,clase,prifa,ind)
           {
               
               // indice para escribir paréntesis
                var cajis ="";
                
               var pa="";
               var pa2="";
                      //  alert("pos: "+pos+" dimensión pos "+pos.length+" capInt  "+capInt );
                  for(var t=0;t<  prifa.length;t++)
                 {
                      if (ind ===2 && t===1)
                      {
                          pa= ("(");
                          pa2 = (")");
                      }
                     
                      
                     else if (ind ===3 && prifa.length===3 && (t===1 || t===2))
                      {
                          pa= ("(");
                          pa2 = (")");
                      }
                   
                     
                     else  if (ind ===3 && prifa.length===2)
                      {
                          pa= ("(");
                          pa2 = (")");
                      }
                      else
                      {
                          pa= ("");
                          pa2 = ("");
                      }
                      
                         cajis =  cajis+pa+"<input type ='text' id = '"+id+"0"+t+"' class = '"+clase+"'>"+
                                  pa2;
                 }
                 
                 return cajis;
           };
           //*************************  Valida sin expo ************
           //
       this.validaSinExpo = function(clase,p,retro,prifa,opcion)
        {
         
        var uno =prifa; 
        
      
        var red;
        
        var fa = opcion;
        
        var t1=0,t2=0;
              
         var pos=0;
         
                           
          //************************ key press ************************
          //****************
          //*******
         
        //   alert("klase: "+clase+ " id: "+p+"retro = "+retro[0][0]+ " prifa: "+prifa + " opciom = "+opcion);  
          
       /*   $("#"+p+"00").keypress(function(e){
               alert("klase: "+clase);  
          });*/
            
          $("."+clase).keypress(function(e){
               
              if(e.keyCode===13)
              {
                 
                     //alert("retro: "+retro);   
                var atr = $(this).attr("id");
                  
                         alert("atr: "+atr);        
                  var at = atr.substring(2);//atr.substring(1);
                  var atsS=atr.substring(1,2);//atr.substring(0,1);
                  var ats = parseInt(atsS);
                  var atr2 ="#"+atr;
                  var ca = $(atr2).val();
                              
                  var user = ca.toString();//parseInt(ca);
                  
                  user  = recorte(user);
                  
                     // alert(" atr "+atr + " user "+user+" at "+at);
                  var sis  =uno[at].toString(); //parseInt(uno[at]);
                  
                  sis = recorte(sis);
                  
                  var at2 =parseInt(at);
                  
                alert("user: "+user + " sis: "+sis);
                var even =0;
             
                 if (user ===sis)
                 {
                      
                       var mens = retro[0][at].split("*");
                      
                        alert(mens[0]);
                    
                      var at21 = at2+1;
                   //   var atT ="#"+p+ats+at21;
                   
                    var atT ="#"+p+"0"+at21;
                      $("#"+p+"0"+at21).focus();
                     // alert(" atT "+atT+" atr"+atr);
                      
                 }
                 else
                 {
                     
                       var mens = retro[0][at].split("*");
                        alert(mens[1]);
                          
                 }
                                  
               
              }//13
          });//keypress
      };//baseExpValida
           //***************************Validación ********************
      this.baseExpValida = function(clase,p,retro,opcion)
      {
        
        var uno =baex; 
        var red;
        
        var fa = opcion;
        
        var t1=0,t2=0;
              
         var pos=0;
         
                     
          //************************ key press ************************
          //****************
          //*******
       
          $("."+clase).keypress(function(e){
               
              if(e.keyCode===13)
              {
                
                  //var gp = p.length;
                  var atr = $(this).attr("id");
                  
                                  
                  var at = atr.substring(2);//atr.substring(1);
                  var atsS=atr.substring(1,2);//atr.substring(0,1);
                  var ats = parseInt(atsS);
                  var atr2 ="#"+atr;
                  var ca = $(atr2).val();
               
                  
                // fl =event.which || event.keyCode;
                  
                  
                  
                  var user = ca.toString();//parseInt(ca);
                  
                     // alert(" atr "+atr + " user "+user+" at "+at);
                  var sis  =uno[at].toString(); //parseInt(uno[at]);
                  
                  sis = recorte(sis);
                  
                  var at2 =parseInt(at);
                  
                alert("user: "+user + " sis: "+sis);
             
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
                       alert("at: "+at + " even: "+even);
                       var mens = retro[at][even].split("*");
                      
                        alert(mens[0]);
                    
                      var at21 = at2+1;
                   //   var atT ="#"+p+ats+at21;
                   
                    var atT ="#"+p+"0"+at21;
                      $("#"+p+"0"+at21).focus();
                      alert(" atT "+atT+" atr"+atr);
                      
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
                       
                       var mens = retro[at][even].split("*");
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
      
         
                  
   }//capturaBaExp
           
            
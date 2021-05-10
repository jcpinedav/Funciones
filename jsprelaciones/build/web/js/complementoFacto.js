/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//kubo trynom
function complementoFacto()
{
    
}


  function trynom(si)
            {
                     var tem = tema2(4,2);
                     
                     var sig =si;
           
            planti();
            
             $("#tem").append(tem); 
             
               var cuadN = new generaEjercicios();
        
               var cuad2 = cuadN.TerminoCuadrado();
               
             
               
               var trin =cuadN.trinomioPerfecto(sig);
               
                 
               
                var cuadN2 = new generaEjercicios();
               
               var cuad3 = cuadN2.TerminoCuadrado();
               
               
               
            var factores = new factorComun(trin);
            
          
               
            var triPer =  new trinomioPerfecto2(trin);
                       
            var prim2 = triPer.primerTermino();
            var seg2 = triPer.segundoTermino();
            var prStr1 = triPer.ProductoStr1();
            var prStr2 = triPer.ProductoStr2();
            var literales = triPer.Letras();
            var literales2 = triPer.Letras2();
            var prodRe = triPer.Producto();
            var trinom = triPer.TrinomioPerfec(sig);
            
            var prim = cosasComunes("("+prim2+")");
            
            seg2 = recorte(seg2);
              var seg = "("+seg2+")";
              seg = recorte(seg);
               var seg3 = cosasComunes(seg);
           
           if(prStr2 ==="1" && seg3 !=="1")
           {
             prStr2="";  
           }
           
           trinom = "("+prStr1+literales+si+prStr2+
                            literales2+ ")<sup>2</sup>";
             
                $("#izq").append("Factorice: "+trin+
                         "<br><br>  "+prim + "<sup>2</sup> .......... "+
                           ""+seg3+ 
                           "<sup>2</sup><br><br> --- 2("+prStr1+literales + ")"+
                            "("+prStr2+
                            literales2+ ") = "+
                            prodRe+literales+literales2+"  ─> El resultado muestra que es "+
                            " un trinomio cuadrado perfecto<br><br>"+
                            trin+ " = "+ trinom);
                    
                    
                    
    // *********************************Fin ejemnplo propuesto ********************
    
    //************************ Ejemplo propuesto ********************
       
       var retro = retroAlimentacion2(4,2);
       
       //**************************** Prueba ********************
        var trin2 =cuadN.trinomioPerfecto(sig);
        
       // trin2= "64+" + " 80+ "+"25";
               
              
               
              //  var cuadN22 = new generaEjercicios();
               
             //  var cuad32 = cuadN22.TerminoCuadrado();
               
               
                //  trin2 = "64"+"80"+"25";
          //  var factores2 = new factorComun(trin2);
            
       
               
            var triPer2 =  new trinomioPerfecto2(trin2);
                       
            var prim2 = triPer2.primerTermino();
            var seg2 = triPer2.segundoTermino();
            var prStr12 = triPer2.ProductoStr1();
            var prStr22 = triPer2.ProductoStr2();
            
         
              
            var literales2 = triPer2.Letras();
            var literales22 = triPer2.Letras2();
            var prodRe2 = triPer2.Producto();
            var trino2m = triPer2.TrinomioPerfec("+");
            
            var bases = triPer2.bases();
            var exponentes =triPer2.exponentes();
            var exponentesDiv = triPer2.expoDivididos();
            
            var terminosOriginales =triPer2.displayTermoriginales();
          var desglo = [];
           desglo= triPer2.displayDesglose();
           
             
           var prodos =triPer2.Producto();
           
          var  priCom2;
           if(literales2 !=="")
           {
                priCom2  = prStr12 +literales2;
           }
           else
           {
               priCom2=prStr12;
           }
          
            var priCom = priCom2.toString();
           
       //  alert("literales2 = "+literales2+"priCom  = "+priCom+ "  prStr12 = "+prStr12);
           
          var bass1= capturaBase(literales2);
          var tt =capturaBase2(literales2);
            var tt2 =capturaBase2(literales22);
        var bass2= capturaBase2(seg2);
        
       var exponent =  capturaExpo2(literales2);
        var exponent2 =  capturaExpo2(literales22);
           
       
   
            
            prim2 =cosasComunes(prim2);
            
              desglo[0][0]= recorte(desglo[0][0]);
              
               
             desglo[0][1]= recorte(desglo[0][1]);
             
            
             
            desglo[0][0] =cosasComunes(desglo[0][0]);
            desglo[0][1] =cosasComunes(desglo[0][1]);
            
             
            
            desglo[1][0]= recorte(desglo[1][0]);
             desglo[1][1]= recorte(desglo[1][1]);
             
            
             
            desglo[1][0] =cosasComunes(desglo[1][0]);
            desglo[1][1] =cosasComunes(desglo[1][1]);
            
            desglo[2] = new Array(2);
              
              desglo[2][0]= desglo[0][0];
              desglo[2][1]= desglo[0][1];
              
              desglo[3] = new Array(2);
              
              desglo[3][0]= desglo[1][0];
              desglo[3][1]= desglo[1][1];
              
               
              
              desglo[4] = new Array(1);
              
             desglo[4][0]=prodos;
             // desglo[4][1]="";
              
              desglo[5] = new Array(2);
              
              desglo[5][0]= tt;;
              desglo[5][1]=exponent;
              
               desglo[6] = new Array(2);
              
              desglo[6][0]= tt2;;
              desglo[6][1]=exponent2;
                          
              //**************** ültima parte *********************
              
                desglo[7] = new Array(2);
              
              desglo[7][0]= desglo[0][0];
              desglo[7][1]= desglo[0][1];
              
              desglo[8] = new Array(1);  //Signo
              
               desglo[8][0]= "  "+sig+" ";
               
              
           
              desglo[9] = new Array(2);
              
              desglo[9][0]= desglo[1][0];
              desglo[9][1]= desglo[1][1];
              
         
       
         var p1 = "<span class ='pare'>(</span>";
          var p2 = "<span class ='pare'>)</span>";

      //************************Prueba ********************** 
      
     
       var im=0;
       
       
       
       var cajon =new Array(desglo.length);
       
        for(var v=0; v<desglo.length;v++)
        {
          
          cajon[v] = new Array(desglo[v].length);//desglo[z].length
        }
       
     
        // alert(" cajon.length " + cajon.length);
       
      for(var z=0;z<desglo.length;z++)
     {
     
      for(var v=0; v<desglo[z].length;v++)
      {
          //cajon[v] = new Array(desglo[z].length);
           
          im =v%2;
          if(desglo[z][v] !=="")
          
          {
              
              
            if(im !==0 && (desglo[z][v] !=="" || desglo[z][v] !=="1"))
            {
                 cajon[z][v] = "<input type ='text' id ='d"+z+"_"+v+"' class ='desglo'"+">";
            }
            else
            {
               cajon[z][v] = "<input type ='text' id ='d"+z+"_"+v+"' class ='desglo'>"; 
            }
          }
        //  cajon = cajon+"(<input type ='text' id ='d"+z+v+"' class ='desglo'>";
      }//Segundo for
      
   
  }//Primer for
  
  // alert("Prueba 2 ");
      
      //**********************Fin prueba ***************
         $("#der").append("Factorice: "+trin2+"<br><br>");
     
      var pareSt ="(";
      var pareSt2 =")";
      
      var pare =pareSt.fontsize(5);
      var pare2 =pareSt2.fontsize(5);
      
      $("#der").append(pare);
      
       var pa=0;
      var pareSt ="(";
      var pareSt2 =")";
     
     // **************Primera línea *****************
    for(var t=0;t<cajon[0].length;t++ )
    {
        pa = t%2;
           if(pa !== 0)
           {
               pare ="<sup>";
               pare2 ="</sup>";
           }
           else
           {
                pare ="";
               pare2 ="";
           }
        if (typeof cajon[0][t] !=="undefined" )
        {
          $("#der").append(pare+cajon[0][t]+pare2);  
        }
         
        
    }
     pare =pareSt.fontsize(5);
     pare2 =pareSt2.fontsize(5);
     $("#der").append(pare2+"<sup>2</sup> ----------------  ");
     
      $("#der").append(pare);
    
     for(var t=0;t<cajon[1].length;t++ )
    {
         pa = t%2;
           if(pa !== 0)
           {
               pare ="<sup>";
               pare2 ="</sup>";
           }
           else
           {
                pare ="";
               pare2 ="";
           }
        if (typeof cajon[1][t] !=="undefined" )
        {
          $("#der").append(pare+cajon[1][t]+pare2);  
        }
         
        
    }
    
   
     pare2 =pareSt2.fontsize(5);
    $("#der").append(pare2+"<sup>2</sup>");
   // **************Segund a línea primera parte*****************
   
    var pa=0;
      var pareSt ="(";
      var pareSt2 =")";
      
      var pare =pareSt.fontsize(5);
      var pare2 =pareSt2.fontsize(5);
    
     $("#der").append(" <br><br>  2");
    
     for(var q=2;q<4;q++ )
     {
         $("#der").append(pare); 
         for(var t=0;t<cajon[q].length;t++ )
        {
         pa = t%2;
           if(pa !== 0)
           {
               pare ="<sup>";
               pare2 ="</sup>";
           }
           else
           {
                pare ="";
               pare2 ="";
           }
          if (typeof cajon[q][t] !=="undefined" )
          {
             if(desglo[q][t] !=="")
             {
                 $("#der").append(pare+cajon[q][t] +pare2);  
             }
          
           }
         
        
        }//segundo for
          $("#der").append(pare2);  
     }//primer for
     
      pare2 =pareSt2.fontsize(5);
      $("#der").append(pare2+"  =   ");
      
      // **************Segund a línea  segunda parte*****************
      
     
      
       for(var q=4;q<7;q++ )
     {
         for(var t=0;t<cajon[q].length;t++ )
        {
             pa = t%2;
           if(pa !== 0)
           {
               pare ="<sup>";
               pare2 ="</sup>";
           }
           else
           {
                pare ="";
                pare2 ="";
           }
          if (typeof cajon[q][t] !=="undefined" )
          {
              
              var nuStr = desglo[q][t].toString();
             nuStr= recorte(nuStr);
               if(nuStr !=="")
               {
                  $("#der").append(pare+cajon[q][t]+pare2);  
                  
               }
             //  alert("desglo[q][t] "+desglo[q][t]);
          }
         
        
        }
     }
      $("#der").append("  --------> ¿Trinomio cuadrado perfecto?  ");
     // *************************Tercer línea *********************************
     
      pare =pareSt.fontsize(5);
      
     
      $("#der").append("<br><br>  "+trin2+" = "+pare);
     
       for(var q=7;q<cajon.length;q++ )
     {
         for(var t=0;t<cajon[q].length;t++ )
        {
             pa = t%2;
           if(pa !== 0)
           {
               pare ="<sup>";
               pare2 ="</sup>";
           }
           else
           {
                pare ="";
                pare2 ="";
           }
          if (typeof cajon[q][t] !=="undefined" )
          {
              
              var nuStr = desglo[q][t].toString();
               nuStr= recorte(nuStr);
               if(nuStr !=="")
               {
                  $("#der").append(pare+cajon[q][t]+pare2);  
                  
               }
             //  alert("desglo[q][t] "+desglo[q][t]);
          }
         
        
        }
     }
     pare2 =pareSt2.fontsize(5);
     var not2 ="Nota:  Una de las cajas es el signo.";
     var note = not2.fontcolor("green");
         $("#der").append(""+pare2+"<sup>2</sup>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+note);
      $(".desglo").css({"width":"2em"});
     
       // **************Fin tercera línea ****************
     
  
 
  
       var primero ="";
       var ba ="";
       var pa="";
       for (p=0;p<bases[0].length;p++)
       {
         
        
        if(typeof exponentes[0][p]  !=="undefined")
        {
            primero = primero  +sup(bases[0][p],exponentes[0][p]);
        }
          
          
       }
         var segundo ="";
           var ba2 ="";
       var pa2="";
       for (p=0;p<bases[0].length;p++)
       {
         // ba = ba+ bases[0][p];
        //  pa = pa+ exponentes[0][p];
         if(typeof exponentes[2][p]  !=="undefined")
        {
            segundo= segundo  +sup(bases[2][p],exponentes[2][p]);
        }
          
          
       }
       
       //**********************  caja Producto************************
       
     var br2 = " = ";
    
 //************************Fin caja producto
 
 
  
       var primero ="";
       var ba ="";
       var pa="";
       for (p=0;p<bases[0].length;p++)
       {
         // ba = ba+ bases[0][p];
        //  pa = pa+ exponentes[0][p];
        
      //  $("#der").append(" exponentes "+exponentes[0][p] );
        
        if(typeof exponentes[0][p]  !=="undefined")
        {
            primero = primero  +sup(bases[0][p],exponentes[0][p]);
        }
          
          
       }
         var segundo ="";
           var ba2 ="";
       var pa2="";
       for (var p=0;p<bases[0].length;p++)
       {
         // ba = ba+ bases[0][p];
        //  pa = pa+ exponentes[0][p];
         if(typeof exponentes[2][p]  !=="undefined")
        {
            segundo= segundo  +sup(bases[2][p],exponentes[2][p]);
        }
          
          
       }
       
       // ******************** Fin segunda caja ***************
       
              
       var dosEl ="<sup><sup><input id='dosEl'></sup></sup>";
         
          /*$("#der").append("Factorice: " +trin2+
                      "<br><br>"+cajon[0][0]+cajon[0][1]);*/
                           
       //******************************** Desglo primer término ************   
       
 
       
        $(".desglo").css({"width":"2em"});
        
  $(".desglo").keypress(function(e){
       
       if (e.keyCode ===13)
       {
             var atr = $(this).attr("id");
             
             var ele = atr.split("_");
           
             
             var pi1 = parseInt(ele[0].substring(1));
             var pi2 = parseInt(ele[1]);
             
             // desglo[4][0]=prodos;
             
             var sis = desglo[pi1][pi2].toString();
             
             sis = recorte(sis);
             
             
             
             var letra =atr [0];
             
            
             
             var user = $("#"+atr).val();
             if(user ===sis)
             {
                 alert(retro[pi2][0]+" sis "+sis+" pi1 "+pi1+ " pi2 "+pi2); 
             }
             else
             {
                alert(retro[pi2][1]+" sis "+sis+" pi1 "+pi1+ " pi2 "+pi2); 
             }
         
       }
      
      
        
    });
       //********************************Fin  Desglo primer término ************           
  }   //trynom
  
  function operacionesComunes(matBa,matEx) //Bases y exponentes
  {
      var numer =0;
      var prod2 =1;
      var lite="";
      var expoleto="";
      
      for(var x = 0;x<matBa.length;x++)
      {
          for(var y=0;y<matBa[x].length;y++)
         {
              if(!isNaN(matBa[x][y]))
                {
                    numer = Math.pow(matBa[x][y],matEx[x][y]) ;
                    prod2 =prod2*numer;
                }
                else
                {
                    lite = lite+matBa[x][y];
                    expoleto = matEx[x][y];
                    if(expoleto ===1)
                    {
                        expoleto ="";
                    }
                }
                  
         }//segundo for
      }
      var ps= prod2.toString()+lite;//primero y segundo
      if(prod2 ===1 && lite !=="")
      {
          ps = lite;
      }
      
      if(prod2 ===1 && lite ==="")
      {
          ps = "1";
      }
      var resu =[ps,expoleto];
      return resu;
     
  }
  
  
  
  function multiCua(mat)
           {
              
               var factis = mat.split("*");
               
               //************** Tiene <sup> ***********
               
              var bass =  capturaBase2(mat);
              var expo =capturaExpo2(mat);
              
              
            var re =  operacionesComunes(bass,expo);
             //  alert(" resu "+re + " factis = "+factis);
               
           }
           
 function todero(termino)
 {
     
      var num = numero(termino);
      
      var des = new facto(num);
      
    // var div =  des.divisores ();
      
      var bas = des.base();//Del número descompuesto
      
      var expo = des.exponente();//Del número descompuesto
    
      var n=2;
      var raiz = raizN(n);
      
        var pr = opera();
        
        //************Capturar literal ************
        
        var sup =termino.indexOf("<sup>");
        var casi =[];
        if(sup !==-1)
        {
           casi =termino.split("<sup>");
        }
        else
        {
            casi[0] =termino;
        }
        
        var numStr = num.toString();
        
        
        var indNum = casi[0].indexOf(numStr);
        
        
        
        // alert(" indNum: " +indNum+" casi[0] "+casi[0]+" numStr = "+numStr);
         
          
         
         var tamNum =numStr.length;
         
                     
             var mitad = parseInt(casi[1])/2;
             
             if(isNaN(mitad))
             {
                 mitad=1;
             }
     
          var letra ="";
         if (indNum !==-1)
         {
          letra = casi[0].substring(tamNum ); 
            // 
         }
         else
         {
             letra=casi[0];
         }
        
        var raizLetra = pr+letra ;
        
        if (pr.toString() === "1")
        {
           raizLetra=letra; 
        }
        
        var mul = [raizLetra,mitad];
        
     
        
        var ex= "";
        
   
     
     this.displayPro = function()
     {
         return mul ;
     };
       
       
       function opera()
       {
           var numer = 1;
           var prod=1;
           for(var t=0;t <bas.length;t++)
           {
              numer = Math.pow(bas[t],raiz[t]) ;
              prod =prod*numer ;
           }
           
           return prod;
         //var  numer = Math.pow(matBa[x][y],matEx[x][y]) ;
                 //   prod2 =prod2*numer 
       }//
       
      function raizN(n)
       {
           var divN=[];
           
          
           for(var t=0;t <bas.length;t++)
           {
              divN[t] =expo[t]/n;
              if(divN[t] <1)
              {
                  divN[t]=1;
              }
           }//for
           
           return divN;
       }
       
       
       function numero(numSt)
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
            }//numero
            
 };//todero
           
 
 
 
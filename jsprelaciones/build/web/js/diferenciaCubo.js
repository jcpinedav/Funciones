/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function diferenciaCubo(termino)
{
  //  alert(" termino "+termino);
    
     var fco;// =new  factorComun(termino);
     
     var bas;
      var    exp;
      var expp2;
      var prod=1;
     
     var cade3="";
     
         fco =new  factorComun(termino);
          
         bas= fco.NmFactComun();
         exp = fco.exponentes();
         
        // alert("En diferenciaCubo "+termino);
     
     
    this.terminoCubo =function()
    {
         
         
     
    
       var terExp = fco.displayFacEx();//términos en forma exponencial
       
        //  alert("difDeCubo "+termino+"\n\n terExp = "+terExp+ 
          //     " bas = "+bas);
    
   
    
   // alert(divDendo);
       
       return  terExp;
        
    };
    
    this.bases = function()
    {
        return bas;
    };
     this.exponentes= function()
    {
        return exp;
    };
    
    this.raizCubica= function()
    {
       expp2 = new Array(bas.length); //Cadena con los exponentes dividos entre 2
         
         // factores =[];
         var cad4 ="";
         var coN=1; //Coeficiente numérico
           for(var z=0;z<bas.length;z++)
         {
            expp2[z]=new Array(bas[z].length);
         }
         
         for(var x=0;x<exp.length;x++)
         {
             for(var y=0;y<exp[0].length;y++)
             {
           
                expp2[x][y] = exp[x][y]/3;
                if(expp2[x][y] <1)
                {
                    expp2[x][y]=1;
                }
                 cad4 =cad4+ sup(bas[x][y],expp2[x][y]);
             }
         } //for
         
         cade3=""; 
         var uno;
  for (var  q=0;q<expp2.length;q++)
         {
             for(var w=0;w<expp2[0].length;w++)
             {
                 uno  = parseInt(expp2[q][w]);
                   if(!isNaN( bas[q][w]))
                   {
                       coN = Math.pow(bas[q][w],expp2[q][w]) ;
                       prod =prod*coN;
                  
                   }
                  else
                   {
                   
                     if(uno===1)
                     {
                        expp2[q][w] =""; 
                     }
                    
                         cade3 = cade3+sup(bas[q][w],expp2[q][w]);
                   
                  }
             }
         }
         if(prod ===1)
         {
             prod="";
         }
         cade3 =prod+cade3;
      // $("#izq").append("producto "+cade3+"<br><br><br>");
         
         // var BaEx2 = basExpos(bas,exp);
          
         return  cad4;
    };//raiz cubica
    
    this.expReducido = function()
    {
       return expp2;
    };//expReducid
    this.multiplicado = function()
    {
        return cade3;
    };
    
    
}



function kubo(tryn,tryn2)
{
    planti();
    
    
    var ind1 =tryn.indexOf("-");
    var ind2 =tryn.indexOf("+");
    var indG =0;
    var sig ="";
    
    if(ind1 !==-1)
    {
        indG="-";
        sig ="+";
    }
    if(ind2!==-1)
    {
        indG="+";
        sig ="-";
    }
   
  
       var desglose = tryn.split(indG);
       
       var difDeCubo=tryn;//Ejercicio a resolver
       
       var diN = difDeCubo.replace("1 ","");
       
       difDeCubo=diN.replace("1 ","");;
       
   desglose[0] = recorte(desglose[0]);
       
    desglose[1] = recorte(desglose[1]);
       
     
       
       var difCub = new diferenciaCubo(desglose[0]);
        var difCub2 = new diferenciaCubo(desglose[1]);
        
       var exponenciacion = difCub.terminoCubo( );
       
        var raiz1 = exponenciacion.replace("1<sup>1</sup>","");
        
        exponenciacion=raiz1;
        
        var exponenciacion2 = difCub2.terminoCubo( );
        
         var raiz2 = exponenciacion2.replace("1<sup>1</sup>","");
        
        exponenciacion2=raiz2;
        
       
        
        var raizCub1 = difCub.raizCubica();
        
          var raz1 = raizCub1.replace("1<sup>1</sup>","");
        
          raizCub1=raz1;
        
       
        var raizCub2 = difCub2.raizCubica();
        
          var raz2 = raizCub2.replace("1<sup>1</sup>","");
        
       raizCub2=raz2;
        
         var teMul = difCub.multiplicado();
         var teMul2 = difCub2.multiplicado();
         
        
     //  alert(" teMul = "+teMul);
       // ******************* Obtener la raíz cúbica de cada factor ********
       
        //*******************  Elevar al cuadrado ********************
        
       
        
        var teMulba = capturaBase2(teMul);
        
        
         var teMulex = capturaExpo2(teMul);
         teMulba = recorte(teMulba);
      
           //*************** Ojo  de pronto el problema es teMulex *************
           
        var temp=0;
           
        if(isNaN(teMulba[0][0]))
        {
            temp = 1;
           
        }   
        else
        {
           temp =  parseInt(teMulba[0][0]);
        }
             var teMulbaCu =  temp  * temp;  
             if(indG ==="-")
             {
                  var tem = tema2(6,1);
                   $("#tem").append(tem); 
             }
             else
             {
                  var tem = tema2(6,2);
                   $("#tem").append(tem); 
             }
             
             $("#izq").append("Factorice: "+difDeCubo+" <br><br>Exprese el número"+
               " en sus factores: <br><br>"+difDeCubo+" = "+exponenciacion + 
                  " "+indG+" "+exponenciacion2+
                  " <br><br>Exprese los términos al cubo:<br><br> ("+raizCub1+")<sup>3</sup>"+
                  " "+indG+" ("+raizCub2+
                  ")<sup>3</sup> <br><br>Aplique la fórmula:<br><br>("+teMul+" "+indG+" "+
                  teMul2+")"+
                  "[("+teMul+")<sup>2</sup>"+sig+"("+teMul+")("+teMul2+")"+sig+
                  "("+teMul2+")<sup>2</sup>]"+
                  "<br><br>("+teMul+" "+indG+teMul2+")");
          
        
          
        var teMulexCu = 2 * teMulex;
        
       if(teMulexCu ===0)
        {
          teMulexCu=2;  
        }
        
         
      
        
        //****************  Segundo número *****************
        
       // 
        
         var teMul2ba = capturaBase2(teMul2);
         
         teMul2ba = recorte(teMul2ba);
         var teMul2ex = capturaExpo2(teMul2);
         
       var tem2=0;
           
        if(isNaN(teMul2ba[0][0]))
        {
            tem2 = 1;
           
        }   
        else
        {
           tem2 =  teMul2ba[0][0];
        }
          
        var teMul2baCu = tem2  * tem2; ;
        
        var teMul2exCu = 2 *teMul2ex;
        
        if(teMul2exCu ===0)
        {
            teMul2exCu=2;
        }
        
         
        //*************************** Producto *************************
        
        var produc = temp*tem2; 
        
        if(produc ===1)
        {
            produc="";
        }
        
       // alert("teMulba: "+teMulba+ " teMulba tam = "+teMulba.length);
        
        var teMulbaStr="";
        if (teMulba.length===1)
        {
            teMulbaStr=teMulba[0][0];
        }
        else
        {
            teMulbaStr=teMulba[1][0];
        }
        
        if(teMul2baCu===1)
        {
            teMul2baCu="";
        }
      //  alert("teMulba = "+teMulba+" teMulbaStr = "+teMulbaStr+" teMulbaStr tam = "+teMulba.length);
       
        //************************* Segundo término ****************
        
         var teMulbaStr2="";
        if (teMul2ba.length===1)
        {
            teMulbaStr2=teMul2ba[0][0];
        }
        else
        {
            teMulbaStr2=teMul2ba[1][0];
        }
        
         
          var teMulbaStr3="";
          
          var tebac = teMulbaCu;
          
          if(tebac===1)
          {
              tebac="";
          }
          
         // alert("teMulbaCu = "+teMulbaCu);
      
         var med = "("+tebac+teMulbaStr+ "<sup>"+teMulexCu+"</sup>"+
                    sig+produc+teMulbaStr+ "<sup>"+teMulex+"</sup>"+
                    teMulbaStr2+ "<sup>"+teMul2ex+"</sup>"+
                    " + "+ teMul2baCu+teMulbaStr2+                   
                    "<sup>"+teMul2exCu+"</sup>)";
        $("#izq").append(med);
    
          
 //***************************************  Ejemplo propuesto ************
 
  //alert("hola");
  var retro = retroAlimentacion2(6,1);
   
  var ind1 =tryn2.indexOf("-");
    var ind2 =tryn2.indexOf("+");
    var indG =0;
    
    if(ind1 !==-1)
    {
        indG="-";
    }
    if(ind2!==-1)
    {
        indG="+";
    }
   
  
       var desglose = tryn2.split(indG);
       
       var difDeCubo=tryn2;//Ejercicio propuesto
       
       desglose[0]= recorte(desglose[0]);
       
      // cosasComunes(desglose[0])
       
       var difCub = new diferenciaCubo(desglose[0]);
       
       
         
       var exponenciacion = difCub.terminoCubo();
    //   var exponenciacion2 = difCub.terminoCubo( );
       
       exponenciacion =recorte(exponenciacion);
     //  exponenciacion2 =recorte(exponenciacion2);
       
       
     //  var bp= new capturaBaExp(exponenciacion); 
       //var bpo = bp.baexArr();
       
      // alert(" exponenciacion "+typeof exponenciacion+" bp  = " +  bpo );
       
       var raizCub = difCub.raizCubica();
       
       var base =difCub.bases();
       var exponentes = difCub.exponentes();
       
     
        
       var expRed = difCub.expReducido();//Raiz cúbica
       
         var teMuls = difCub.multiplicado();
         
         var temulbas1 =[];
         
          temulbas1[0] =capturaBase2(teMuls);
           
          var temulexp1 =capturaExpo2(teMuls);
               
        var teMulbaCu2 = temulbas1[0][0]*temulbas1[0][0];
        
        var teMulexCu2 = 2 *temulexp1; 
       
        var BaEx = basExpos(base,exponentes);
           
            var div ="der1";
            var clase = "clase";
            var p ="z";
            
           var x="x";
           var nu =0;
           
        
          $(".difCuad").css({"width":"1.8em"});
         $(".difCuad2").css({"width":"1.8em"});
          $("#cu").css({"width":"1.8em"});
              var diN2 = difDeCubo.replace("1 ","");
              
               var diN=diN2.replace("1 ","");
               
               // difDeCubo=diN.replace("1 ","");;
       
             difDeCubo=diN;
        
        $("#der").append("Factorice: "+difDeCubo +"<br><br><br><br>");
        
        var des1 =[];
        
        des1[0]= new Array(1);
        
        des1[0][0]= desglose[0]+" - "+desglose[1];
        
        //**************** Primera caja  **********************
               
        
            //******************** Segundo  término *************
            
              desglose[1]= recorte(desglose[1]);
              var difCub2 = new diferenciaCubo(desglose[1]);
              
           var base2 =difCub2.bases();
           var exponentes2 = difCub2.exponentes();  
           var exponenciacion2 = difCub2.terminoCubo( );//  var exponenciacion2 = difCub2.terminoCubo( );
           
           exponenciacion2 = recorte(exponenciacion2);
           
            var raizCub2 = difCub2.raizCubica();
           var expRed2 = difCub2.expReducido();
           
            var teMuls2 = difCub2.multiplicado();
           var temulbas2 =capturaBase2(teMuls2);
           
          var temulexp2 =capturaExpo2(teMuls2);
          
          //*************  Segundo término al cuadrado ******************
          
            var teMulbaCu22 = temulbas2[0][0]*temulbas2[0][0];
        
             var teMulexCu22 = 2 *temulexp2;
     
     var BaEx2 = basExpos(base2, exponentes2);
     
     var sup = "";
     var sup2 = "";
     var pari=0;
     
     $("#der").append("(");
      for(var c=0;c<BaEx.length;c++)
           {
               for (var s=0;s< BaEx[c].length;s++)
               {
                   pari = s%2;
                   if(pari ===0)
                   {
                      sup ="";
                      sup2 ="";
                   }
                   else
                   {
                       sup ="<sup>";
                       sup2 ="</sup>";
                   }
                   
                  if( BaEx[c][s]  !=="1")
                  {
                      $("#der").append(sup+"<input type ='text'  class = 'BaExCl' id ='b"+c+
                           "_"+s+"'" +
                          ">"+sup2); 
                  }
                  
               }
           }
           $("#der").append(") - (");
           
           var li =BaEx.length;
         
      var sup21 = "";
     var sup22 = "";
     var pari2=0;
     for(var c=0;c<BaEx2.length;c++)
           {
               for (var s=0;s< BaEx2[c].length;s++)
               {
                    pari2 = s%2;
                   if(pari2 ===0)
                   {
                      sup21 ="";
                      sup22 ="";
                   }
                   else
                   {
                       sup21 ="<sup>";
                       sup22 ="</sup>";
                   }
                   
                       if( BaEx2[c][s]  !=="1")
                       {
                          $("#der").append(sup21+"<input type ='text'  class = 'BaExCl' id ='g"+(c+li)
                           +"_"+s+"'" +
                           "'>"+sup22);
                       }
               }
           }
           
     
      $("#der").append(")");
      
      
     
  
      des1[1]= new Array(1);
        
        des1[1][0]= "";
     nu =2;
  
         
        
       //************************* Fin 2 caja ************** 
      
      var poDiv = $("#der1").width();
      
      $("#div2").css({"position":"absolute","top":"3.6em","left":(poDiv+14),"width":"16em"});
      
       
      
      // ********************** Términos al cubo  cajas 3----------
      
      var BaEx3 = basExpos(base, expRed);
      nu=0;
             
           var BaEx4 = basExpos(base2, expRed2);
           
       var sup3 = "";
     var sup32 = "";
     var pari3=0;
     
     var li2 = li+BaEx2.length;
     
      $("#der").append(" <br><br>(");
      for(var c=0;c<BaEx3.length;c++)
           {
               for (var s=0;s< BaEx3[c].length;s++)
               {
                   pari3 = s%2;
                   if(pari3 ===0)
                   {
                      sup3 ="";
                      sup32 ="";
                   }
                   else
                   {
                       sup3 ="<sup>";
                       sup32 ="</sup>";
                       
                   }
                   var baaa= BaEx3[c][s].toString();
                   baaa = recorte(baaa);
                  
                    if( baaa  !=="1")
                    {
                           if( baaa  !=="")
                         {
                                $("#der").append(sup3+"<input type ='text'  class = 'BaExCl' id ='z"+
                                     (c+li2)+
                                "_"+s+"'" +
                                ">"+sup32); 
                         }
                           
                            
                     }
                 
               }
           }
           $("#der").append(")<sup>3</sup> - (");
         
      var sup41 = "";
     var sup42 = "";
     var pari4=0;
     
     var li3 = li2+BaEx3.length;
     for(var c=0;c<BaEx4.length;c++)
           {
               for (var s=0;s< BaEx4[c].length;s++)
               {
                    pari4 = s%2;
                   if(pari4 ===0)
                   {
                      sup41 ="";
                      sup42 ="";
                   }
                   else
                   {
                       sup41 ="<sup>";
                       sup42 ="</sup>";
                        
                   }
                   baaa= BaEx4[c][s].toString();
                   if( baaa !=="1")
                     {
                           if( baaa  !=="")
                           {
                                                              
                                $("#der").append(sup41+"<input type ='text'  class = 'BaExCl' id ='m"+
                                        (c+li3)+
                                 "_"+s+"'" +
                                 ">"+sup42);  
                          }
                          
                       }
                  
               }
           }
           
         $("#der").append(")<sup>3</sup>");  
         
        
           //************************ Tercera línea  *********************
           
          var pparte =  opera(base, expRed);
          
          var sparte =  opera(base2, expRed2);
          
          var terTerm =[pparte[0],pparte[1],sparte[0],sparte[1],
                       pparte[0],pparte[1],pparte[0],pparte[1],sparte[0],sparte[1],
                        sparte[0],sparte[1]];
          
       // alert(" terTerm  = "+terTerm);
          
          $("#der").append("<br><br>(<input type ='text' id ='c0' class = 'terLin'>");
         
          
         if(pparte [1] !=="")
         {
              $("#der").append("<sup><input type ='text' id ='c1' class = 'terLin'></sup>");
         }
          
           $("#der").append(" - <input type ='text' id ='c2' class = 'terLin' >");
           
        if(sparte [1] !=="")
         {
            $("#der").append("<sup><input type ='text' id ='c3' class = 'terLin' ></sup>)"); 
         }
        else
        {
            $("#der").append(")"); 
        }
          
          //****************  el otro factor********
          
            $("#der").append("[(<input type ='text' id ='c4' class = 'terLin' >");
          
           if(pparte [1] !=="")
         {
              $("#der").append("<sup><input type ='text' id ='c5' class = 'terLin' ></sup>)<sup>2</sup> "+sig+"");
         }
         else
         {
             $("#der").append(")<sup>2</sup>"+sig+"");
         }
         
         //****************  Término del medio **************
         
           $("#der").append("(<input type ='text' id ='c6' class = 'terLin'>");
          
           if(pparte [1] !=="")
         {
              $("#der").append("<sup><input type ='text' id ='c7' class = 'terLin' ></sup>)");
         }
         
         
           $("#der").append("(<input type ='text' id ='c8' class = 'terLin'>");
          
           if(sparte [1] !=="")
         {
              $("#der").append("<sup><input type ='text' id ='c9' class = 'terLin'></sup>)");
         }
         
          $("#der").append(" + (<input type ='text' id ='c8' class = 'terLin' >");
          
           if(sparte [1] !=="")
         {
              $("#der").append("<sup><input type ='text' id ='c9' class = 'terLin'>"+
                      "</sup>)<sup>2</sup>] <br><br>");
         }
         
         else
         {
             $("#der").append(")<sup>2</sup>]<br><br>");
         }
         
         //**********************Último término *****************
       /*  else
         {
             $("#der").append(")<sup>2</sup>"+sig+"<br><br>");
         }*/
          
          $(".terLin").css({"width":"2em"});
          
          
           //************************ Fin tercera línea  *********************
           //**********************  Se repiten baex3 y baex4 ******************
     
           
           //**********************Baex3 ******************************
          
      var  ba =   BaEx.concat(BaEx2);
      var  ba2 = ba.concat(BaEx3);
      var  bah = ba2.concat(BaEx4);
      
      //********************* Tercer línea ***********
      var ba4 =  bah.concat(BaEx3);
      var ba5 =  ba4.concat(BaEx4);
      
       var ba6 =  ba5.concat(BaEx3);
       
        var ba7 =  ba6.concat(BaEx4);
        var ba8 =  ba7.concat(BaEx4);
        
         var ba3 =  ba8.concat(BaEx4);
     
    $(".BaExCl").keypress(function(e){
             
             if(e.keyCode ===13)
             {
                 var atr = $(this).attr("id");
                 var subisT = atr.substring(1);
                 var subis = subisT.split("_");
                 var i= subis[0];
                 var j= subis[1];
                 var sis = ba3[i][j].toString();
                 var user = $("#"+atr).val();
                 
                 if (user === sis)
                 {
                     alert(retro[j][0]); 
                 }
                 else
                 {
                     alert(retro[j][1]); 
                 }
               
             }//
             
         });
        $(".BaExCl").css({"width":"1.3em"});    
          nu=2;
          
          
          var tebamu1 =[];
          
          tebamu1[0]= new Array(1);
          
          tebamu1[0][0]=temulbas1;
          
        
          
           var teexamu1 =[];
          
          teexamu1[0]= new Array(1);
          teexamu1[0][0]=temulexp1;
          
          var temuNo = "";
                
              if (temulbas2.length===1)
                      {
                         temuNo=temulbas2[0][0];
                       }
                  else
                 {
                     temuNo=temulbas2[1][0];
                 } 
                   
                   var texto = temulbas1.toString();
                    var text ="";
                    var num ="";
             for (var t=0;t<texto.length;t++)   
                {
                   
                    if(isNaN(texto[t]) ===true)
                    {
                        text = texto[t];
                    }
                    else
                    {
                        num = num + texto[t];
                    }
                    
                    
                    
                }
                      var num2 = parseInt(num);
                      num2 = Math.pow(num2,2);
          
           var bb = num2+ text;
              
                
                if(num ==="")
                {
                    bb=text;
                }
                
                 
                  
          //     alert(" num  = "+num + " num = "+num2);
                
                
               
                
                //************* El producto ************
                
                 var texto2 = temulbas2.toString();
                 
                // alert(" temulbas2 =  "+temulbas2);
                    var text2 ="";
                    var numN ="";
             for (var t=0;t<texto2.length;t++)   
                {
                   
                    if(isNaN(texto2[t]) ===true)
                    {
                        text2 = texto2[t];
                    }
                    else
                    {
                        numN = numN + texto2[t];
                    }
                    
                    
                    
                }
                      var numN2 = parseInt(numN);
                      numN2 = Math.pow(numN2,2);
                    
                    // var bb2= teMulbaCu22+ temuNo;
                    
                  
                     
                     var bb2 = numN2+ text2;
                     
                    //  var bb = num2+ text;
              
                
                if(numN ==="")
                {
                    bb2=text2;
                }
                
                  if(numN2 ===0)
                {
                    bb2=text2;
                }
                //*************Fin producto *********
                
             
                if(num ==="")
                {
                    num =1;
                }
                
                 if(numN ==="")
                {
                    numN =1;
                }
                 var produc2 = numN*num+text;
                 
                 
                 
                 if(produc2 ===1)
                 {
                     produc2 =text;
                 }
                 
                 if( teMulexCu2===0)
                 {
                   teMulexCu2=2;  
                 }
                 
                 if( teMulexCu22===0)
                 {
                   teMulexCu22=2;  
                 }
                 
              //  alert(" text2 "+text2);  //temuNo
                
                var nuevMat=[];
                nuevMat = [temulbas1,temulexp1,temulbas2,temulexp2,
                                  bb,teMulexCu2,produc2,temulexp1,text2,
                                  temulexp2,
                                  bb2,teMulexCu22];
                              
              
              var cad ="";
               var cc = [];
               for (var j=0; j< nuevMat.length;j++)
              {
                
                 var parid = j%2;
                 if(nuevMat[j].toString() !=="")
                 {
                 if (parid ===0)
                 {
                     cc[j] = "<input type ='text ' id ='t"+j+"' class ='dif' "+
                           ">" ;
                 }
                 else
                 {
                     cc[j] = "<sup><input type ='text ' id ='t"+j+"' class ='dif'"+
                             "></sup>" ;
                 }
                cad = cad+cc[j];
                 }//nuevMat
               
              }
              
              var ccStr = "";
              
             var siT = "";
              
             
              
              for(var y=0;y<4;y++)
              {
                var matSin2 = recorte(nuevMat[1].toString());
                /*  if(matSin2 ==="" && y===1)
                       {
                            siT=" "+indG+" "; 
                           
                       }
                       
                        else
                      {
                          siT ="";
                      }*/
        
                  if(y===1 || (y===0 && matSin2 ==="" ))
                      {
                         siT=" "+indG+" "; 
                      }
                      else
                      {
                          siT ="";
                      }
                  if(typeof cc[y]  !=="undefined")
                  {
                       
                      
                      
                        var matSin = recorte(nuevMat[1].toString());
                     
                      
                      ccStr =ccStr + cc[y]+siT;
                  }
                  
              }
              
            ccStr =ccStr + ")";
                       
            //  alert( "siT "+siT);
               var ccStr2 = "";
              
              for(var y=6;y<10;y++)
              {
                  
                  if(typeof cc[y]  !=="undefined")
                  {
                      if(y===1)
                      {
                         siT=" "+indG+" "; 
                      }
                      else
                      {
                          siT ="";
                      }
                      
                      ccStr2 =ccStr2 + cc[y]+siT;
                  }
                  
              }
              if(cc[5] ==="undefined")
              {
                  cc[5] ="";
              }
              ccStr2  =  ccStr2+"";
               $("#der").append("<br><br>("+ccStr+
                       "("+cc[4]+cc[5]+sig+                 //cc[6]+cc[7]+cc[8]+cc[9
                         ccStr2+
                        " + "+cc[10]+cc[11]+")");
              //$("#der").append(cad);
                
                            
              var indGG = indG.fontsize(8);
              
              var cad ="";
              
        
                          
              //************   Colocar cajas en pantalla **************
             //   $("#der").append("Factorice: "+tryn2+"<br><br><br><br>");
                
                 $("#der").append(cad); 
   
                   
                    $(".dif").css({"width":"2em","background":"#cccccc"});
                    
                    
                    
         $(".terLin").keypress(function(e){
             
             if(e.keyCode ===13)
             {
                 var atr= $(this).attr("id");
                 
               
                 var nu1 = atr.substring(1);
               //  var nu2 = atr.substring(inf+1);
                 var sis = terTerm[nu1].toString();//
                 var user = $("#"+atr).val();
                 
                 
                 
              if (user === sis)
                 {
                    alert(retro[nu1][0]);
                 }
                 
                 else
                 {
                    alert(retro[nu1][1]);  
                 }
                
             }
                          
        });//terlin
        
         $(".dif").keypress(function(e){
                    
                    if(e.keyCode ===13)
                    {
                              var atr = $(this).attr("id");
                           
                            // alert("atr"+atr);
                             var nu = parseInt(atr.substring(1));
                             var user2 = $("#"+atr ).val();
                             var user = user2.toString();
                             
                             var k= 12;
                             
                             var sis = nuevMat[nu].toString();
                             
                             if( sis ===user)
                             {
                                  alert(retro[nu+k][0]);
                             }
                             else
                             {
                                  alert(retro[nu+k][1]);
                             }
                       
                    }
                });//dif
        
        
        //******************* Funcion para crear bae3 y bae4 **********
        
        function baba(lim, bax)
        {
          
             for(var c=0;c<bax.length;c++)
           {
               for (var s=0;s< bax[c].length;s++)
               {
                 
                   
                   pari3 = s%2;
                   if(pari3 ===0)
                   {
                      sup3 ="";
                      sup32 ="";
                   }
                   else
                   {
                       sup3 ="<sup>";
                       sup32 ="</sup>";
                   }
                   baaa =bax[c][s].toString();
                   
                   baaa= recorte(baaa);
                     if( baaa !=="1")
                       {
                            if( baaa  !=="")
                            {
                                $("#der").append(sup3+"<input type ='text'  class = 'BaExCl' id ='z"+
                                  (c+lim)+
                                   "_"+s+"'" +
                                   ">"+sup32); 
                            }//vacio
                           
                       }//1
                           
                  
               }//s
           }//c
           
             //alert(" pro: = "+pro+ " li = "+li);
             
        }//baba
        
        function opera(bass,expoo) // alert(" res= "+res);
        {
               /* if(!isNaN(bas2[t][z]))
                {
                   num = Math.pow(bas2[t][z],exp[t][z]) ;
                    prod =prod*num;
                  
                }*/
              var pro=1;
            var lit ="";
            var ter;
             var lit2="";
             var i,j;
          
          for(var c=0;c<bass.length;c++)
           {
               for (var s=0;s< bass[c].length;s++)
               {
                    ter =bass[c][s];
                   if(!isNaN(ter))
                   {
                     ter =  Math.pow(bass[c][s],expoo[c][s]) ;
                      pro = pro*ter; 
                   }
                   else
                   {
                      // lit = bass[c][s];
                       lit2 = lit2+bass[c][s];
                       i=c;
                       j=s;
                   }
               }
           }
           
           if(pro ===1)
           {
               pro ="";
           }
           var unidos = pro+lit2;
           var res =[unidos,expoo[i][j]];
          
           
           return res;
           
          
        }//opera
                   
 
               
        //***************************  Cajas ****************
        
         $(".difCuad2").keypress(function(e){
            
            if(e.keyCode ===13)
            {
                 
                var atr = $(this).attr("id");
                var nu = atr.substring(1);
                var maNu = nu.split("_");
                
                var i= maNu[0];
                var j= maNu[1];
                
                var sis=BaEx[i][j].toString();
                var user2 = $("#"+atr ).val();
                var user = user2.toString();
                
                var nuC = parseInt(maNu[1])+1;
             
                var atr2 =p+maNu[0]+"_" +nuC;
                
                
                 var nu2Int= parseInt(j); 
                 var par =nu2Int % 2;
                 
                  
               //  var ret =retro[0][j];
                 
                 if(par ===0)
                 {
                     j = 2*j;
                     
                     
                    
                 }
                 else
                 {
                    j = 2*j+1; 
                 }
            
              var estado =  funRetro(sis, user,retro,par,0);
              if(estado ===1)
              {
                   $("#"+atr2 ).focus();
                 // alert(atr2);
              }
                
            }
            
        });
        
        this.potencia = function()
        {
            return exponenciacion;
        };
          
        this.potencia2 = function()
        {
            return exponenciacion2;
        };
        this.ejercicio = function()
        {
            return difDeCubo;
        };
        
        this.raizCubica = function()
        {
            return raizCub1;
        };
         this.raizCubica2 = function()
        {
            return raizCub2;
        };
       
}//cubo


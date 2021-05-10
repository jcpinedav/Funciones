/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function factorComun(cad)
{
   
     cad = recorte(cad);
     var resultado;
     var fcc;
     var factComun=[];
     var mi =[];
     var mi2 =[];
     var  factComun2 = [];
     
      var pCar = cad.substring(0,1);
      
     var sigInicial=pCar;
     var reem;
     var ncad =[];
     var nume =[];
     var ncad2;
     var compl =  new Comple();
     var bas =[];
     var exp =[];              
     var exponents =[];
     var signs =[];
     var signs2 =[];               
      var signo;
      var nu;
      var ncadOr =[];
      
     cambioSigno();
     convertirCadEnMat();
     localizaNume();
     reemplazarNumPorExp();
     obtenerBase();
     obtenerExponentes();
     
     
     function cambioSigno()
     {
         reem ="";
         if(pCar ==="-")
       {
         sigInicial ="-";
         
          for(y =0;y<cad.length;y++)
          {
               if(cad[y]==="-")
               {
                   reem = reem + "+";
               }
               
               else  if(cad[y]==="+")
               {
                   reem = reem + "-";
               }
               else
               {
                   reem = reem + cad[y];
               }
          }
        
      }
      else
      {
           sigInicial ="+";
          var ps="+";
          if(pCar !=="+")
          {
               reem = ps+cad;
          }
          else
          {
              reem = cad;
          }
         
      }
       
    
   
     }
      
      
      
     // $("#mod").append("<br>cad= "+cad +"<br><br>reem = "+reem);
       
       function convertirCadEnMat()   //Covertir cadena en matriz
       {
             var res3 = reem.replace(/-/g, "*-");
             var res2 = res3 .replace(/\+/g, "*+");
             var res =res2.substring(1);
              var inr = res.indexOf("*");
             var ncad1 =res.substring(0,inr);
           //  var ncad2 =res.substring (inr+1);
             // ncad =[];
      
             ncad =res.split("*");
             ncadOr =res.split("*");;
           
       }//CovertirCadEn Mat
    
    var siig;
       var vt;
                
            function localizaNume()
            {
                 //nume =[];
                          
               var tipo;
             
               // compl = new Comple();
              // var nume;
               
               for(var i=0;i<ncad.length;i++)   //Números que están en las cadenas
               {
                  // nume[i]= numero(ncad[i]);
                    nume[i]= compl.numero(ncad[i]);
                                                      
                   if(isNaN(nume[i]))
                   {
                       nume[i]=1;
                       ncad[i] = "1"+ncad[i];
                   }
                   
               
                               
               }//  for(var i=0;i<ncad.length;i++) 
            }//localizaNume()
           
               
              /* var numOriginal=[];
                for(var i=0;i<nume.length;i++)   //Números que están en las cadenas
               {
                   numOriginal[i]= nume[i];
                                                      
                     
               } */
        
       // ******************* reemplazarNumPorExp()************************
              
           
      
      //********************* Fin reemplazarNumPorExp() ***********************
            
           function reemplazarNumPorExp()
           {
             var factores =[];
             var expone =[];
             var fa2=[];
             ncad2=[];
             for(var i=0;i<nume.length;i++)   //Números que están en las cadenas
             {
                factores[i] = new facto(nume[i]);
                fa2[i] = factores[i].divisores();
                expone[i] = factores[i].exponenciacion();              
             }
         
            for(var i=0;i<ncad.length;i++)   //Números que están en las cadenas se expresan en términos de sus factores
               {
                  ncad2[i] =ncad[i].replace(nume[i],expone[i]);
                 // alert("  ncad2["+i+"] = "+  ncad2[i]);
               }
               
            
              var sig;
             for(var i=1;i<ncad2.length;i++)   //Números que están en las cadenas se expresan en términos de sus factores
               {
                   sig =ncad2[i].substring(0,1);
                  if(sig !=="-")
                  {
                      sig ="+";
                      ncad2[i] =sig+ncad2[i];
                  }
                 
              
               }
          
           
           }// **********reemplazarNumPorExp() *************
          
             
              
             //*********************** Obtener bases ******************  
             
             function obtenerBase()
             {
                 //var signs2 =[];
               
               // var nu;
                 var signs =[];
                 signs[0]="";//No escriba el primer signo
                var w=0;
            
              var comC=[];
            //    var  bp=[];
             //  var factores =[];  factores[i] = new facto(nume[i]);
                for(var x=0;x<ncad2.length;x++)
               {
                 signo = ncad2[x].substring(0,1);
                 signs[x]=signo;
                signs2[x]=signo;
              
                comC [x]= new Comple();
            
             
               bas[x] = comC[x].capturaBase(ncad2[x]);//capturaBase(ncad2[x]);
                  
                   // 
                }
             }
               
            
            // alert("bas "+bas);
               
           //*********************** Fin Obtener bases ******************    
           
           //*********************** Obtener exponentes ******************  
           
           function obtenerExponentes()
           {
               signs[0]="";
            
            signs2[0]="";
            
            var comE = new Comple();
            
           for(var m=0;m<ncad2.length;m++)
           {
               
              // exp[m] =capturaExpo(ncad2[m]);
               exp[m] =comE.capturaExpo(ncad2[m]);
               exponents[m] = comE.capturaExpo(ncad2[m]);
           } 
           }
           
         
           
            //*********************** Fin Obtener exponentes ******************  
       
         /*     $("#mod").append("<br>");
               $("#mod").append("<br>");
               
         
         
        
           //*  *            bases    **********
           
            $("#mod").append("<br>bases<br><br>");  */
            
  var  baseT = new Array(bas.length);
       
        for (var x=0; x<bas.length;x++)
        {
              baseT[x] =new Array(bas[x].length);
        }
    
    
      for (var y=0; y<bas.length;y++)
      {
        
         for (var x=0; x<bas[y].length;x++)
        {
            baseT[y][x] =bas[y][x];
            $("#mod").append(""+baseT[y][x] );
        }
          $("#mod").append("<br><br>");
      }
         $("#mod").append("exponentes<br><br>");  
         
        
         
         //*********************  exp *******************
               
     /* for (var y=0; y<exp.length;y++)
      {
         for (var x=0; x<exp[y].length;x++)
        {
            $("#mod").append(""+exp[y][x]);
        }
          $("#mod").append("<br>");
      }*/
          
       
    
         //************************ Factor no común ********************
         j=0;
         var t=0;
         //var i=0;i<bas[0].length;i++
         
         var noComun =[];
         var index1;
     
         var ind2;
       
         
          var flag = true;
        
          for(var k=1;k<ncad2.length;k++) 
           {
              
              for(var i=0;i<bas[0].length;i++)   //ncad2: Factores comunes sin exponentes
               {
                  
                   signo = bas[0][i].substring(0,1);
                   
                  
                   nu =bas[0][i];
               
                   ind2 = bas[k].indexOf(nu);
                   
                
                 
                 if (ind2 ===-1)
                  {
                      
                      index1 =noComun.indexOf(nu);
                      
                                          
                      
                      if (index1 === -1)
                      {
                          
                         noComun[t]=nu;
                         t++;
                      }
                      else
                      {
                         //  alert(" ya está en la matriz ");
                      }
                     
                  }//if
                // }
               }//primer for
               
            
           }//segundo for
           
               //************************ Fin Factor no común ********************
               
               //*********************** Factores comunes sin exponentes **********
        
    var j=0;       
    for(var i=0;i<bas[0].length;i++)   //ncad2: Factores comunes sin exponentes
               {
                   signo = bas[0][i].substring(0,1);
                   nu =bas[0][i];
               
                   ind2 = noComun.indexOf(bas[0][i]);
                   if(ind2 ===-1)
                   {
                       factComun[j] = bas[0][i];
                       j++;
                   }
               }
               
               
               //*********************** Fin Factores comunes sin exponentes **********
     
           //**************** Agregar exponentes a factores comunes *******************
           
            for(var m=0;m<ncad2.length;m++)
           {
               $("#mod").append(""+ncad2[m]+" ");
           }
           
        
              var expoCom =new Array(factComun.length) ;
              
              for(var x=0;x<factComun.length;x++)
             {
                
                expoCom [x] = new Array(ncad2.length);
           
             }
             
         // indices de los factores comunes
        var indEx =new Array(factComun.length) ;
              
              for(var x=0;x<factComun.length;x++)
             {
                
                indEx [x] = new Array(ncad2.length);
           
             }  
             
     var indOtros =new Array(factComun.length) ;
              
              for(var x=0;x<ncad2.length;x++)
             {
                
               indOtros[x] = new Array(ncad2.length);
           
             }  
     
      
   for (var z=0;z<factComun.length;z++)
   {
       for(var t=0;t<ncad2.length;t++)
       {
           ind = bas[t].indexOf(factComun[z]);
          
              expoCom[z] [t]= exp[t][ind];
              indEx[z][t] = ind;
            
       }
   }
   
     
   //******************* Viendo a expoCom ************
   $("#mod").append ("expoCom[ind][t]:<br>");
    for (var z=0;z<factComun.length;z++)
   {
       for(var t=0;t<ncad2.length;t++)
       {
          
              $("#mod").append(expoCom[z][t]);
         
       }
       
         $("#mod").append ("<br>");
   }
       
   
   //************** mínimo expoCom ******************
   //
   //  
    for (var x=0;x<expoCom.length;x++)
    {
      mi[x]= Math.min.apply(null, expoCom[x]); // 1
    } 
     
    //***************Factor común con sus exponentes **********
    var cero2=0;
    var uno2 =0;
    var facCoCom=[];
    var caden3="";
    var numer=1;
    var prod2 =1;
    
     mi2 =[];
    mi2 =mi;
   factComun2 = [];
    factComun2 = factComun;
    
    var facCoExp="";//Cadena factor comun con todos los exponentes
  
   var lett =[];
   var exLett =[];
   var f=0;
     for (var x=0;x<factComun2.length;x++)
    {
         cero2 =parseInt(mi2[x]);
                   if(cero2===0)
                   {
                      factComun2[x] =1; 
                   }
           uno2  = parseInt(mi2[x]);
         
          if(!isNaN(factComun2[x]))
                {
                    
                    numer = Math.pow(factComun2[x],mi2[x]) ;
                    prod2 =prod2*numer;
                    
                    
                    
                }
          else
                {
                    
                    
                     if(uno2===1)
                   {
                    caden3 = caden3+factComun2[x]; 
                   
                   }
                   else
                   {
                      caden3 = caden3+sup(factComun2[x],mi2[x]);  
                       
                   }
                   
                 lett[f]= factComun2[x];
                 exLett[f]=mi[x];//mi2
                 f++;
                }
                 
       facCoCom[x]= sup(factComun[x],mi[x]); // Factor común con todos sus exponentes
       
       facCoExp = facCoExp+facCoCom[x];
    } 
    
     // alert("Producto factor común: "+prod2+ " f Nuevo: "+ exLett);
  
    
    // ******************* Exponentes de los otros términos**************
    var inz;
    var ind;
    
       var exNo = "";
     for (var z=0;z< factComun.length;z++)
   {
       for(var t=0;t< exp.length;t++)
       {
           
           ind = bas[t].indexOf(factComun[z]);
           exp[t][ind] = parseInt(exp[t][ind]) -parseInt(mi[z]);
           
           if(isNaN (bas[t][ind]))
           {
                // exNo = exNo +exp[t][ind]+"*";
           }
         
          
       }
       
        // $("#mod").append ("<br>");
   }
   // Pruebas
   
  

   
    $("#mod").append("Exponentes cambiados "+exp.length+" :: "+exp[0].length+"<br><br>");
    var exponenteT = new Array(exp.length);
       
        for (var x=0; x<exp.length;x++)
        {
             exponenteT[x] =new Array(exp[x].length);
        }
    
    
    for (var q=0;q< exp.length;q++)
     {
       for(var w=0;w< exp[q].length;w++)
       {
           
           exponenteT[q][w] =exp[q][w];
           $("#mod").append(exp[q][w]);
           
          // alert("  exp[t][ind]: "+ exp[w]);
          
          
       }
         $("#mod").append ("<br>");
       
       }
       
        
       //******************** Mostrando Bases en división mod **********
       
      
       
        $("#mod").append ("<br>");
        
         $("#mod").append("Bases cambiadas <br><br>");
         
         var flag =false;
         
        var baSinNum ="";
            var exNo = "";
             var ast1 ="/";
             var ast2 ="*";
            
             var basRe=new Array(bas.length);
             for(var j=0;j<bas.length;j++)
             {
                 basRe[j] = new Array (bas[0].length);
             }
             
                var expRe=new Array(exp.length);
             for(var j=0;j<exp.length;j++)
             {
                 expRe[j] = new Array (exp[0].length);
             }
             
             var t=0;
             var y=0;
      for (var q=0;q< bas.length;q++)
       {
       for(var w=0;w< bas[q].length;w++)
       {
            if(w ===(bas[q].length-1))
            {
                ast2 ="";
            }
           if(isNaN(bas[q][w]) &&  exp[q][w] !==0)
           {
               baSinNum = baSinNum+bas[q][w]+ast2;
               exNo = exNo +exp[q][w]+ast2;
           }
            if(isNaN(bas[q][w]))
           {
                basRe[q][y] = bas[q][w];
                expRe[q][y] = exp[q][w];
                y++;
           }
           else
           {
               
           }
          
       }//for
        y=0;
       //aSinNum= "+  baSinNum+" exNo "+exNo);
            
             if(w ===(bas.length-1))
            {
                ast1 ="";
            }
         baSinNum  = baSinNum+ast1;
         exNo = exNo +"/";
         
         
        // $("#mod").append ("<br>");
       
       }
       
      
       var tt ="";
       var conteo =[];
       var ot=0;
      var  conty=0;
     var  exNot ="";
     var  exNot2 ="";
      for (var q=0;q< basRe.length;q++)
       {
           
           for(var w=0;w< basRe[q].length;w++)
           {
               if (typeof  basRe[q][w] === "undefined")
               {
                  basRe[q][w]="0";
                  expRe[q][w]="0";
               }
               else
               {
                   exNot = exNot+basRe[q][w]+"*";
                   exNot2 = exNot2+expRe[q][w]+"*";
                   ot++;
                   conteo[q] =ot;
               }
              
                 
           }//for
           
           ot =0;
            exNot = exNot+" "   ;
            exNot2 = exNot2+" "   ;
           
              /*if(typeof  basRe[q][conty] === "undefined")
              {
                 exNot =""; 
              }
                    
                  tt  = tt  +  exNot; */
       }//Segundo for
       
      
       
          var vari =exNot.split(" ");
          var pari =exNot2.split(" ");
          
         var baw =[];
         var paw =[];
         
          
            
           var pp2 = pari[1].substring(0,pari[0].length-1);
            
           for(var i=0;i<vari.length;i++)
           {
               var ttt = vari[i].substring(0,vari[i].length-1);
                var pp = pari[i].substring(0,pari[i].length-1);
               baw[i]= ttt.split("*");
               paw[i]= pp.split("*");
               //var ttt2 = vari[1].substring(0,vari[0].length-1);
           
           }
           
         
           
          // baw[0]= ttt.split("*");
         //  baw[1]= ttt2.split("*");
           
            
            paw[1]= pp2.split("*");
           
         var  cade1 = prod2+caden3;
 
    //***************Fin bases **************************
    
          
       var cade2 ="";
      
    var prod =1;
    var cade3="";
    var cade4="";
    var num=0;
    var cero=0;
    var uno=1;
    
    var bas2 = new Array(bas.length);
    
    for (var z=0;z<bas.length;z++)
    {
        bas2[z]= new Array(bas[z].length);
    }
    bas2 =bas;
    
    var cadRest ="";
   if (siig ==="-")
   {
      cadRest ="-" ;
   }
   
  // var lettNo =[];
    var lettNo  = new Array(exp.length);
   
     for(var j=0;j< exp.length;j++)
     { 
        lettNo [j] = new Array(exp[j].length);
     }
     
   var exLettNo = new Array(exp.length);
   
     for(var j=0;j< exp.length;j++)
     { 
        exLettNo[j] = new Array(exp[j].length);
     }
   var prods = [];
   f=0;
  var b=0;
  var h=0;
  var c=0;
  //var inter="##";

 //  alert("bas2 "+bas2+ " exp[t][z] "+exp);
     for(var t=0;t< exp.length;t++)
     {   
        cadRest = cadRest+signs2[t];
        cade4 = cade4 +"  "+signs2[t]+"  ";
        
        
      //alert("primero 6");
      for (var z=0;z< exp[t].length;z++)
      {
           exLettNo[t][z]=0;
             lettNo[t][z]=0;
          cadRest = cadRest+sup(bas2[t][z],exp[t][z]);
            cero =parseInt(exp[t][z]);
                   if(cero===0)
                   {
                      bas2[t][z] =1; 
                   }
           uno  = parseInt(exp[t][z]);
          
         
           if(!isNaN(bas2[t][z]))
                {
                   num = Math.pow(bas2[t][z],exp[t][z]) ;
                    prod =prod*num;
                  
                }
         else
                {
                   exLettNo[t][z]=exp[t][z];
                     if(uno===1)
                     {
                        exp[t][z] =1; 
                     }
                    
                   /*  if(isNaN(exp[t][z]))
                     {
                         exp[t][z]="";
                     }
                     
                     if(isNaN(bas2[t][z]))
                     {
                         bas2[t][z]="";
                     }*/
                     
                     
                     
                  cade3 = cade3+sup(bas2[t][z],exp[t][z]);
                  lettNo[t][z]=bas2[t][z];
                 //  lettNo[c][h]= bas2[t][z];
                 //  h++;
                   
                    b=1;
                }
                  
          cade2 = cade2+sup(bas2[t][z],exp[t][z]);
         
       }
      
      if(isNaN(prod))
      {
          prod = 1;
      }
 
       cade4 =cade4+prod+cade3;
       
      // alert("sigInicial = "+sigInicial + " cade4 = "+cade4+" \n producto = "+prod);
       
  
        if(b===1)
        {
           //lettNo=lettNo+"*";
           //exLettNo=exLettNo+"*";
           c=1;
        }
        b=0;
        
      
     
       prods[h] =prod;
       h++;
       prod =1;
       cade3="";   
   }     
   
  

          cadRest = cadRest+")";
          
            var BaseFacComun =[];
            
           var expFacComun =[];
           
            
            if(typeof lett[0] !==  "undefined")
            {
               
                 BaseFacComun[0] =sigInicial+prod2+lett[0];
            }
            else
            {
               
                 BaseFacComun[0] =sigInicial+prod2;
            }
         
          
        //  if(lett.length>1)
         // {
               for (var p=1;p<lett.length;p++)
               {
                   
                 BaseFacComun[p] = lett[p] ;
               }
               
               for (var v=0;v<exLett.length;v++)
               {
                     if(typeof exLett[v] ===  "undefined")
                       {
                            expFacComun[v] = 1 ;
                       }
                       else
                       {
                           expFacComun[v]=exLett[v];
                       }
                       
                        
               }
              
      
      
   
    //**************************************** Funciones ****************************************    
    
 
   
        function localizaEx(m)
        {
            
             var resto = ncad2[m];
               // var k=0;
               var ta ="<sup>".length;
                var ta2 ="</sup>".length;
               var ind3;
               var ind4;
               var po;               
               var ex =[];
               
              // resto = resto.substring(ind4+ta2);
               
               
               for(var i=0;i<(factComun.length);i++)   //exponentes de los factores comunes en el primer término
               {
                   
                    ind3= resto.indexOf(factComun[i]);
                    ind4= resto.indexOf("</sup>");
                    
                     po =ind3+ta+1;
                    
                    if(ind4<ind3)
                    {
                        if(ind4 !==-1)
                        {
                            resto = resto.substring(ind3);
                         
                          ind3= resto.indexOf(factComun[i]);
                          ind4= resto.indexOf("</sup>");
                          
                           po =ind3+ta+1;
                          
                           ex[i] = resto.substring(po,ind4);
                           
                            resto = resto.substring(ind4+ta2);
                         
                         // alert("ex: "+ex[i]+" po: "+po+ " ind4: "+ind4 +"  resto: "+resto);
                        }
                         
                         
                        
                    }
                    else
                    {
                        ex[i] = resto.substring(po,ind4);
                    
                     /// alert("ex: "+ex[i]+" po: "+po+ " ind4: "+ind4 +"  resto: "+resto);
                    
                        resto = resto.substring(ind4+ta2);
                        
                    }
              
               }//FOR
              
               return ex;
        }//localizaEx()
               
   
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
            
   function capturaBase(cad)
            {
                
                var bases =[];
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
                
              
               return bases;
            }//function  captura base
            
  function capturaExpo(cad)
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
                
                
            }//Captura exponente
           
    this.display = function()
    {
        if(sigInicial==="+")
        {
            sigInicial="";
        }
        resultado = sigInicial+cade1+"("+cade4+")";
        return resultado;
    };
    
   this.elComun =function()
   {
      
       return cade1;
   };
   
   this.noComun =function()
   {
      
       return cade4;
   };
   
   this.mFactComun = function()
   {
       return factComun;
   };
   
   this.funBaseFacComun= function()
   {
       return BaseFacComun;  //en matriz
   };
   
    this.mMi = function()
   {
       return mi;
   };
   
     this.NmMi = function()
   {
       return exponenteT;
   };
   
    this.NmFactComun = function()
   {
       return baseT;
   };
   
   this.displayFacEx = function(){
       
       //***  Muestra la expresión algebraica en forma exponencial *******
      return facCoExp; 
   };
   
   this.displayResEx = function()
   {
       return cadRest;
   };
   
   this.displayNume = function()
   {
       return nume;
   };
   
    this.displayNumOriginal = function()
   {
       
      // return numOriginal;
   };
   
    this.displaySignos= function()
   {
       return signs2;
   };
   
   this.displayProCo= function()
   {
       return prod2;;
   };
   
   this.displayProNoCo= function()
   {
       return prods;
   };
   
   this.displayLetCo= function()
   {
       return lett;
   };
   
    this.displayLetNoCo= function()
   {
       return lettNo;
   };
   
   this.displayExpoLetras= function()
   {
       return exLett;
   };
   
   this.displayNoExpoLetras= function()
   {
      
     return exLettNo;
   };
   
  this.exponentes = function ()
  {
    return exponents;  
  };
  
  this.expEnMat = function()
  {
      return ncad2;
  };
  this.Cadorig =  function()
  {
      return  ncadOr;
  };
  this.basesSinLetra = function()
  {
      return baw;
  };
  
  this.exBaSinLetra = function()
  {
   return  paw;  
  };
           
}//Clase principal


 function sup(b,e)
            {
               var exp = b+"<sup>"+e+"</sup>";
               
               return exp;
            }
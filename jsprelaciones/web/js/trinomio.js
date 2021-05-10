/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function trinomio(signo1,signo2)
    {
      
         var letras =["a","b","c","w","t","y","x"];
        
        var min =0;
        var max =7;
        var z;
        var r=  Math.floor(Math.random() * max)+ min;
        
        var coef=[];
        var facCo;
        var facCo2;
        var torize;
        var torize3;
        min = 1;
        max =10;
        var numer1 = Math.floor(Math.random() * max)+ min;
        var numer2 =  Math.floor(Math.random() * max)+ min;
        var faZ;
        var facCot2;
        var  facCoMa; 
        var prFactorizacion =[];
         var z2="";
        var si1;
        
        var si2;
        
        if (signo1 ===1)
        { 
            numer1 = -1*numer1;
           
            si1=-1;
        }
        else
        {
            si1=1;
        }
        
          if (signo2 ===1)
        {
            numer2 = -1*numer2;
            
             si2=-1;
        }
     else
        {
            si2=1;
        }
        
             
        var num = numer1*numer2;
        var sum12 = numer1+numer2;
        
        var tem;
        //****************** Propuesto **************
       
        
              
        if(sum12 < 0)
        {
            if(numer1 >0)
            {
                tem = numer1;
                numer1 =numer2;
                numer2 = tem;
            }
        }
        
     else if(sum12 >= 0)
        {
            if(numer1 <0)
            {
                tem = numer1;
                numer1 =numer2;
                numer2 = tem;
            }
        }
   
        
        var sign1;
        var sign2;
        
        if(sum12>0)
        {
            sign1="+";
        }
        else
        {
            sign1="";
        }
        
        
        var si = si1*si2;
        
        if (si>0)
        {
            sign2 = "+";
        }
        
       else  
        {
            sign2 = "";
        }
    
          var siN = num*sum12;
          var sigN;
          if (siN <0)
          {
              sigN ="";
          }
          else
          {
             sigN ="+"; 
          }
          
          if(sum12 ===0)
          {
             sign1="+";
             sigN ="";
          }
          var factorizado2;
       
         
         var nuM;
                
           var eje2 =   sup(letras [r],2)+sign1 +sum12 +letras [r] +sign2 +num;
           
         
           
           
         var factorizado =" = ("+letras [r]+ sign1  + numer1+")("+letras [r] + sigN +numer2+")";
         if(numer1 ===numer2)
         {
             factorizado2 = sup("("+letras [r]+ sign1  + numer1+")",2);
             factorizado =factorizado+" = "+factorizado2;
         }
         //alert("factgaores: "+ facc);
        
   this.formaEspecial = function(sig1,sig2)
        {
             var letras =["a","b","c","w","t","y","x"];
        
         min =0;
         max =7;
        
         r=  Math.floor(Math.random() * max)+ min;
        
        signo1=sig1;
        signo2=sig2;
       
        min = 1;
        max =4;
        numer1 = Math.floor(Math.random() * max)+ min;
       numer2 =  Math.floor(Math.random() * max)+ min;
      //  numer1 = Math.floor(Math.random() * max)+ min;
        var numer3 =  Math.floor(Math.random() * max)+ min;
        var numer4 = Math.floor(Math.random() * max)+ min;
       
        
          if (signo1 ===1)
        { 
                       
            si1=-1;
        }
        else
        {
            si1=1;
        }
        
          if (signo2 ===1)
        {
           // numer2 = -1*numer2;
            
             si2=-1;
        }
         
        numer2 = si1*numer2;
        numer4 = si2*numer4;
        
        var num14=numer1*numer4;
        var num23=numer2*numer3;
        
        var num13 = numer1*numer3;
        var num14Mas23 = num14+num23;
        var num24 = numer2*numer4;
        var sign;
        var sign2;
        
              
       if(num24 >=0)
       {
           sign ="+";
       }
       else
       {
           sign ='';
       }
       
     if(num14Mas23 >= 0)
       {
           sign2 ="+";
       }
       else
       {
           sign2 ='';
       }
        
         coef =[num13,num14,num23,num24];
         
          var expr2 = num13+sup(letras[r],2)+""+sign2+num14Mas23+letras[r]+""+sign+num24 ;
         
         var zeichnen ='';
         var zeichnen2 ='';
         var zeichnen4 ="4";
         
          var zeichnen3 ='';
         
         if(num24 >= 0)
         {
             zeichnen="+";
         }
         
         if(num14 >= 0)
         {
             zeichnen2="+";
         }
         
         if(num23 >= 0)
         {
             zeichnen3="+";
             //zeichnen4 ="+";
         }
         else
         {
             // zeichnen3="-";
              //zeichnen4="-";
         }
         
       
         
        //******************************* ********************************************
        var num13Tem =num13.toString();
        
        var num13I = parseInt(num13);
        
        if(num13I ===1)
        {
            num13Tem ="";
        }
        
         var num14Tem =num14.toString();
           var num14I = parseInt(num14);
        
        if(num14I ===1)
        {
            num14Tem ="";
        }
        else if(num14I ===-1)
        {
            num14Tem ="-";
        }
        
       // alert("num14I = "+num14I);
        var num23Tem =num23.toString();
          var num23I = parseInt(num23);
        
        if(num23I ===1)
        {
            num23Tem ="";
        }
         else if(num23I ===-1)
        {
            num23Tem  ="-";
        }
        // 23
        
        
       
          facCo = num13Tem+sup(letras[r],2)+zeichnen2+ num14Tem+letras[r]+
                  zeichnen3+num23Tem+letras[r]+zeichnen+num24; //Ej: 9b2-3b+6b-2
          
         
          
          facCoMa =[num14,num23,num13+letras[r],2,zeichnen2+num14+letras[r],zeichnen3+num23+
                      letras[r],zeichnen+num24];
          
         //   alert(" facCoMa = "+facCoMa);
          
              
          var pr = num13+sup(letras[r],2)+zeichnen2+num14+sup(letras[r],1);
     
          var seg = num23+sup(letras[r],1)+zeichnen+num24;
    
                  
         var facComun1 = new factorComun(pr);
         var facComunV11 =facComun1.display();
         
        
         var bases = facComun1.mFactComun();//bases del factor común:3c(3c-1)+4(3-1).  bases 3,c.  expo: 1,1
         var exFC =facComun1.mMi();
          
         var tempo;
      
    
         
          var facComun2 = new factorComun(seg);
         var facComunV21 =facComun2.display();//facComunV21
         
         
          var bases2 = facComun2.mFactComun();//bases del factor común: 8b(2b+1)+2(2b+1). base = 2. expo: 1
          var exFC2 =facComun2.mMi();//exponentes del factor común
          
             
        
       
          
       // ******************Quitar unos al primer termino:  facComunV11 *****************
        
        var facN = recorte(facComunV11);
        var indSin1 =facN.indexOf("<sup></sup>");
        
        var facComunV11N = facN.replace("<sup></sup>","");
        
       var facCoN1 = facComunV11N.replace("1"+letras[r],letras[r]);
        var facCoN12 = facCoN1.replace("(1"+letras[r],"("+letras[r]);
        
        // ******************Quitar unos al segundo termino:  facComunV11 ***************** 
        
        
         var facN2 = recorte(facComunV21);
        
         var facComunV21N=facN2.replace("<sup></sup>","");
        
          
          
            
         
         // var res3 = reem.replace(/-/g, "*-");
        // var res2 = res3 .replace(/\+/g, "*+");
       
         
          // var facCoN2t = facComunV21N.replace("<sup>1<sup>","");
          
           var facCoN2 = facComunV21N.replace("1(","(");
          
           var facCoN22 = facCoN2.replace("(1","(");
          
      
          torize = facCoN12+zeichnen3+facCoN22;
          
         
           
           var facComunV21N=torize.replace(/<sup>1<\/sup>/g,"");
           
           torize = facComunV21N;
           
           //  alert(" torize= "+torize);
          
          
           //alert(" torize "+torize+ "\n\n facCoN2  = "+facCoN2+"\n\n facCoN22 = "+facCoN22);
        
        
         //*******************  Determinando el valor de z ********************
          // var ind0 =facComunV21.indexOf("(");
          // var ind1 =facComunV21.indexOf(")");
          var ind0 = facCoN12.indexOf("(");
          var ind1 = facCoN12.indexOf(")");
          
          //****subCad0: Valor antes de paréntesis.  subCad1: Valor después del paréntesis ****
          
          var subCad0 =  facCoN12.substring(0,ind0);
          var subCad1 =  facCoN12.substring(ind0+1,ind1);
          
          //****************  Segundo término *****************
          
        
          
          var subCad =facComunV11.substring(ind1+2);
          var subCad2 =subCad.substring(ind0+2,ind1);
          
        //  var ind2 =subCad.indexOf("(");
          var ind3=subCad.indexOf(")");
          
                  
     //  z= facComun1.noComun();
       
            z = subCad1;
            
             //****subCad02: Valor antes de paréntesis.  subCad2: Valor después del paréntesis ****
             
               var ind02 = facCoN22.indexOf("(");
          
             var subCad02 =  facCoN22.substring(0,ind02);
             var sinUno="";
             
             if(subCad02==="")
             {
                 subCad02=1;
                 sinUno="";
             }
             else
             {
                sinUno= subCad02;
             }
             
             
            
            var zz = subCad0+"z"+zeichnen3+sinUno+"z";
            
           
             //  alert(" zz: "+zz);
      
     z2= z.replace(letras[r]+"<sup>1</sup>",letras[r]);
   
   //z =z2;
   
    
   // var z2 = z1.replace("</sup>","");
       
 // var z3 = z2.replace("1"+letras[r],letras[r]);
     
   // z2 = z3;
    //  var  z2 = z1;
      // alert("z2:"+z2);
       
         var strBas2=facComun1.funBaseFacComun();
         
         var baCo2=facComun2.funBaseFacComun();
        //prFactorizacion[0] = baCo;
        
         var strBas,strBas3;
         strBas =strBas2.toString();
        var tind = strBas.indexOf("+");
        var tind2;// = strBas2.indexOf("+1")
        var str4;
       
        
  //  alert(" strBas. "+strBas + " tind: " +tind+ typeof strBas);
        
        if(tind !==-1)
        {
            strBas3 =strBas.substring(1);
           
           // alert(" strBas3. "+strBas3+" strBas2 "+strBas2 );
        }
        
        else
        {
            strBas3 = strBas;
        }
        
         tind2  = strBas3.indexOf("1");
            if(tind2 !==-1)
            {
                str4 = strBas3.substring(1,2);
                
               // alert(" strBas4. "+str4+" isNaN(str4 "+isNaN(str4) );
                if(isNaN(str4))
                {
                    strBas =strBas3.substring(1); 
                }
                else
                {
                    strBas =strBas3;
                    // alert(" strBas. "+strBas );
                }
                
               
            }
            else
            {
              strBas =  strBas3;
            }
       prFactorizacion[0] = strBas;
     
       // prFactorizacion[0]= zz;
       prFactorizacion[1] = z2;
      // prFactorizacion[2] =zeichnen3;
      var bacoString = baCo2.toString();
      
         var baCo2T = bacoString.replace("+1","+");
         var baCo2T2 = baCo2T.replace("-1","-");
      
         baCo2= baCo2T2;
       
        prFactorizacion[2] =baCo2;
        
       // alert(" baCo2 "+baCo2);
        prFactorizacion[3] =z2;
        
         prFactorizacion[4] =z2;
         
          prFactorizacion[5]=zz;
     
       
      var el = facComun1.elComun();
      var el2 = facComun2.elComun();
      
  
          
          var torize2 = torize.replace(z2,"z");  
          
          var   torize3T = torize2.replace(z2,"z"); //expresión con z entre paréntesis: 2x(z)+1(z)
          
          //******************  Quitando paréntesis del primer término ****************
          
          var   torize3T2 = torize3T.replace("(",""); 
       
          var torize3T3  = torize3T2.replace(")","");  
           
            //******************  Quitando paréntesis del segundo término ****************
            
            var torize3T4  = torize3T3.replace("(","");  
            
           torize3 = torize3T4.replace(")","");  
           
          
           
          
           
           //*************************Fin quitando paréntesis **********
             var inz;
      var inz1 = torize3 .indexOf("+");
      
     // alert( " torize3 "+torize3);
      
      var inz2 =torize3 .indexOf("-");
      
      if(inz1 !==-1)
      {
          inz = "+";
      }
      else
      {
         inz = "-"; 
      }
    
       var indZ = torize3.indexOf(letras[r]);
       
       var pnum = torize3.substring(0,indZ);  //pnum:4. torize3: 4c(z)+12(z)
       var restante = torize3.substring(indZ+1);  // torize3 = 4c(z)+16z; restante: (z)+16(z)
       
             
        indZ = torize3.indexOf(inz);
       var inter = torize3.substring(indZ);//
       
         
       var indZ2 = inter.indexOf("z");  //restante:(z)-2(z).  inter: -2(z)
       
       var pnum2 = inter.substring(1,indZ2);//(z)-2(z).  pnum:3; pnum2: 2
       
       if(pnum2 ==="")
       {
           pnum2 =1;
       }
       
        if(pnum ==="")
       {
           pnum =1;
       }
             
    
       var numes =facComun2.displayNume();
       
       var faZ21 = pnum.toString()+sup(letras[r],1)+sup("z",1);
       
       var faZ22 = pnum2.toString()+sup("z",1);
   
      var faZ2 = faZ21+inz+faZ22;  // expresión a factorizar con z
      
        
     //**********************  Revisado *************
  
      //  faZ2 = "1"+sup("t",1)+sup("z",1)+"-"+"4"+sup("z",1);
      var faZ3= new factorComun(faZ2);//factorización de faz2
      
      
     var  faZ4s= faZ3.display();  //muestra el resultado de la factorización
     
    
     
    var  faZ4ss= faZ4s.replace("<sup>1</sup>","");
    
     var  faZ4sss= faZ4ss.replace("1z","z");
     
      var  faZ4T= faZ4sss.replace("1"+letras[r],letras[r]);
    
      faZ4T = recorte(faZ4T);
     
    
     
   
     
     var faZ4= faZ4T.replace("+",inz);
    
       //*********************Fin revisado **************
     
   var  faZ5 = faZ4.replace("1z","z");//Ok.
   
    var faZ5T =faZ5.replace("1"+letras[r],letras[r]);//Ok.
    
    faZ5 =faZ5T;
   
 //
    
     faZ5 = recorte(faZ5);
     
    
     
     //
     
    //  faZ = faZ5.replace("1","");
      
      faZ = faZ5;
     
      // alert("  faZ5 = "+ faZ5+" faZ : "+ faZ);
     
   
       
       //************************* Captura de cada elemento de faZ ***************************
       
       var indice = faZ.indexOf("(");
       
       var faZComun = faZ.substring(0,indice);  //factor común en z
       
       var ztem = faZComun.replace("1z","z");
       
       faZComun=ztem;
       
        
       var faZComun2 = faZ.substring(indice);
       
       var sinSup = faZComun2.replace("<sup></sup>","");
       
        var sinSup2 = sinSup.replace("(","");
        
         var sinSup3 = sinSup2.replace(")","");
         
         
         
          prFactorizacion[6] =faZComun; //común con z
          
        var  z3 = sinSup3.replace("1"+letras[r],letras[r]);
          
         sinSup3=z3;
            
          prFactorizacion[7] =sinSup3;//No común de  z.
          
          //*****************Captura de lo que hay antes de z.*****************
          
          indice = faZComun.indexOf("z");
         var subs =faZComun.substring(0,indice);
         prFactorizacion[8] =subs;   //8,9, 10 fin del ejercicio
         
         prFactorizacion[9] =z2;
         
          prFactorizacion[10] =sinSup3;
       
     
        //************************* fin captura de lo que hay antes de z ***************************
       
       facCot2 = faZ.replace("z","("+z2+")"); //cada expresión con el valor de z reemplazado
      
          
       
          var facFinal;
          
          //Quitar paréntesis
          var text ='';
          for (var x=0;x<torize3.length;x++)
          {
              if(torize3[x] !== "(")
              {
                  text = text + torize3[x];
              }
                  
          } 
          
          var text2 ='';
          for (var x=0;x<text.length;x++)
          {
              if(torize3[x] !== ")")
              {
                  text2 = text2 + text[x];
              }
                  
          } 
          
            
         var prUno =expr2.replace("1"+letras [r],letras [r]);
           var expr=prUno.replace("1"+letras [r],letras [r]);
           
          // alert("eje2: "+eje2); 
        return expr;
        
        };
        
         this.facFin = function ()
        {
            return facCot2;
        };   
        
         this.priFacto = function()
        {
          return   prFactorizacion; 
        };
        
        this.ma2en2 = function()
        {
          return  facCoMa; 
        };
        
       this.facZ= function ()
        {
            return faZ;
        }; 
        
        this.zeta = function ()
        {
            return z2;
        };
        
        this.conZ = function ()
        {
            return torize3;
        };
        this.formEspFac= function ()
        {
            return coef;
        };
        
        this.factorize = function()
        {
            return facCo;
        };
        
        this.factorize2 = function()
        {
            return torize;
        };
         this.expresion = function()
         {
             
           
             return eje2;
         };
         
          this.suma= function()
         {
             return sum12;
         };
          this.producto = function()
         {
             return num;
         };
         
          this.numero1 = function()
         {
             return numer1;
         };
         
          this.numero2 = function()
         {
             return numer2;
         };
         
         this.perfecto = function()
         {
             return factorizado;
         };
         
         this.pPar = function()
         {
              return letras [r]+ sign1  + numer1;
         };
         this.sPar = function()
         {
            return  letras [r] + sigN +numer2;
         };
    }//Principal
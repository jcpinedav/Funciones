/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function trinomioPerfecto(cad)
{
  //
   var cuad2 = cad;
   var squareTerm;
   var exp2 ;
   var cad4;
   
   this.terminoCuadrado = function()
   {
        var facc = new factorComun(cuad2);
        
        var numero = facc.displayNume();
         var  bas= facc.NmFactComun();//= [];
     
        var  exp =[];
         exp [0] = facc.mMi();// exp [0] = facc.mMi();
        // alert(" exp [0] "+exp [0]);
       
           var intcad = parseInt(bas[0][0]);
           
           //alert(" bas[0] "+bas[0]);
           
           if(intcad===1 && bas[0].length >1 )
           {
          //var pos = basp.indexOf(1);
            bas[0].splice(0, 1);
            exp[0].splice(0, 1);
          //  alert("basp[0] "+basp[0][0]+" expp  "+expp[0][0]);
           }
        
         
      var dosEl2 ="<sup>2</sup>";
         
           var p1 = "<span class ='pare'>(</span>";
          var p2 = "<span class ='pare'>)</span>";
          
          var cad3 ="";
          cad4="";
          
          exp2 = new Array(bas.length); //Cadena con los exponentes dividos entre 2
          
         for(var z=0;z<exp.length;z++)
         {
            exp2[z]=new Array(exp[z].length);
         }
          
          
         for(var x=0;x<exp2.length;x++)
         {
             for(var y=0;y<exp2[x].length;y++)
             {
                cad3 =cad3+ sup(bas[x][y],exp[x][y]);
                exp2[x][y] = exp[x][y]/2;
                if(exp[x][y]===1)
                {
                    exp2[x][y]=1;
                }
                
              cad4 =cad4+ sup(bas[x][y],exp2[x][y]);
             }
         }//for
         
        squareTerm =cad3+"<br><br>"+cuad2 +" = "+p1+""+cad4 +p2+""+dosEl2;
         
   
       return squareTerm;
          
   };//terminoCuadrado
   
   this.trinDesglosado = function()
   {
       var desglose = cuad2.split("+");
       var factDesglose=[];
       
       cuad2 =desglose[0];
       
       this.terminoCuadrado();
       factDesglose[0]= cad4;
       
       cuad2 =desglose[1];
       this.terminoCuadrado();
       factDesglose[1]= cad4;
       
        cuad2 =desglose[2];
       this.terminoCuadrado();
       factDesglose[2]= cad4;
       
      // alert(" cad4 "+cad4);
       
       return factDesglose;
   };//perfecto
   
   this.displaySquareTerm = function()
   {
       return exp2;
   };
   
   this.raizTermino = function()
   {
      return cad4; 
   };
}

function trinomioPerfecto2(cad)
{
    var trin =cad;
    
    //******************Modificación trin ******************
    
  
    
   
      var trinAs1 = trin.replace(/\+/g, "*+");
      
      var trinAs2 = trinAs1.replace(/-/g, "*-");
      
      var trinC = trinAs2.split("*");
      
      var sig1 = trinC[1].substr(0,1);
      var sig2 = trinC[2].substr(0,1);
    
      trin = recorte(trin);
        var lastInd1= trin.lastIndexOf("+");
      var lstTer= trin.substring(lastInd1+1,lastInd1+2);
    
      var flet = trinC[0].substring(0,1);
      
      trinC[2] = recorte(trinC[2]);
      
       var flet2 = trinC[2].substring(1,2);
       
       
       
        
       
    if(isNaN(flet))
    {
       trinC[0] = "1"+trinC[0];
    }
    
    var temo="";
    
    var trT= trinC[2].substring(1);
    
   if(isNaN(flet2))
    {
        trinC[2]= "+1"+trT;
    }
    
    trin =  trinC[0]+trinC[1]+ trinC[2];
  
     //****************** Fin Modificación trin ******************
  //  trin=sup("b",12)+"-"+"2"+sup("b",6)+"+"+"1"+sup("b",6);
        var factores = new factorComun(trin);
            
        
               var numerosp = factores.displayNume();
               var basp = factores.NmFactComun();
             //  var expo = factores.NmMi();
               var expo = factores.exponentes();
               var baso = factores.NmFactComun();
               
               var expoR1 =[];
               var expoR2 =[];
                var baex1 ="(" ;
               var baex2= "(";
               var tem1="";
               var flag="";
               var original1 ="";
               
               // var tem21O ="";
                var desglose1 =[];
                var desglose2 =[];
                var desglose3 =[];
                var desglose =[];
               
              var expoR=new Array(expo.length);
               
                    var intcad = parseInt(baso [0][0]);
   
                  var aster = "*"  ; 
               for(var x=0;x<expo[0].length;x++)
               {
                  expoR1[x] = expo[0][x]/2;
                  
                  flag =expoR1[x].toString();
                  
                  //alert(" expo[0][x] "+expo[0][x]);
                  var exInt = parseInt(expoR1[x]);
                  
                  if (exInt<1)
                  {
                     expoR1[x]=1; 
                  }
                 
                  if (exInt<2)
                  {
                     tem1=""; 
                  }
                  else
                  {
                     tem1=  expoR1[x].toString();
                  }
              
                  if( x===(expo[0].length-1))
                  {
                      aster ="";
                  }
                  baex1 = baex1+ sup(baso[0][x],tem1)+aster;
                  original1 = original1+ sup(baso[0][x],expo[0][x]);
               }
               
               baex1 = baex1+")<sup>2</sup>";
                   
               
                for(var x=0;x<expo[2].length;x++)
               {
                  expoR2[x] = expo[2][x]/2;
                    if (expoR2[x]<1)
                  {
                     expoR2[x]=1; 
                  }
                 
                  if (expoR2[x]<2)
                  {
                     tem1=""; 
                  }
                  else
                  {
                     tem1=  expoR2[x].toString();
                  }
                  
                  baex2 = baex2+ sup(baso[2][x],tem1);   
                               
                 
                  
               }
                baex2 = baex2+")<sup>2</sup>";
                
                //****************  Todos los exponentes divididos *********
                
                var tem13="";
                var   baex23="";
                               
                for(var t=0; t<expo.length;t++)
                {
                     expoR[t] = new Array(expo[t].length);
                }
                
                
                
              for (var y=0; y<expo.length;y++)
              {
                  
                 for(var x=0;x<expo[y].length;x++)
               {
                  
                  
                  if(baso [y][x] ==="" || typeof(baso [y][x]) ==="undefined")
                  {
                     expoR[y][x]=0; 
                     expo[y][x] =0;
                     baso [y][x]="0";
                  }
                  else
                  {
                     expoR[y][x] = expo[y][x]/2; 
                  }
                  
                
                    if (expoR[y][x]<1)
                  {
                     expoR[y][x]=1; 
                  }
             
                               
                 
                  
               }
              //  $("#izq").append("<br>");
             }//y    
         
   
            //*********************** fin todos los exponentes divididos *********
                 //   $("#izq").append("bbb expoR "+expoR[0]+ " expo "+expo[0]+" bases "+baso[0]+" <br><br>");    
           
              // ************************ *******************************
              // ***********************************
              //*****************************
              var tem21 ="";
              var prim="";
              var basUno ="";
              var ttt= isNaN("q");
              var num=1;
              var prod=1;
              var literales ="";
         //*************************** Primer término *******************
         
              
                for(var x=0;x<expoR1.length;x++)
               {
                   basUno =baso[0][x];  
                   ttt= isNaN(baso[0][1]);
                   if(baso[0][0]==="1" && ttt===true)
                   {
                      if(x===1)
                      {
                           basUno= baso[0][1];
                      }
                      else if(x===0)
                      {
                           basUno="";
                      }
                     
                   }
             
                           
                   if (expoR1[x]<2)
                  {
                     tem21=""; 
                  }
                  else
                  {
                     tem21=  expoR1[x].toString();
                  }
                 prim = prim+ sup(basUno, tem21);
                // alert("expoR1[x] "+expoR1[x]);
                 if(!isNaN(baso[0][x]))
                {
                   num = Math.pow(baso[0][x],expoR1[x]) ;
                    prod =prod*num;
                  
                }
                else
                {
                    
                   literales =  literales+sup(baso[0][x], tem21); 
                   //alert("Eld  producto es "+baso[0][x]);
                }
               
                      
               }  //for(var x=0;x<expoR1.length;x++)
               
            var termino = prod+literales;
            
           
                        
       // ********************************* segundo término *****************
       var tem22 ="";
        var seg="";
        var num2=1;
        var basDos="";
              var prod2=1;
              var literales2 ="";
         for(var x=0;x<expoR2.length;x++)
               {
                   basDos =baso[2][x];  
                   ttt= isNaN(baso[2][1]);
                   if(baso[2][1]==="1" && ttt===true)
                   {
                      if(x===1)
                      {
                           basDos= baso[2][1];
                      }
                      else if(x===0)
                      {
                           basDos="";
                      }
                     
                   }
                      
                   if (expoR2[x]<2)
                  {
                     tem22=""; 
                  }
                  else
                  {
                     tem22=  expoR2[x].toString();
                  }
                 seg = seg+ sup(basDos, tem22);
               
                 if(!isNaN(baso[2][x]))
                {
                   num2 = Math.pow(baso[2][x],expoR2[x]) ;
                    prod2 =prod2*num2;
                  
                }
                else
                {
                    
                   literales2 =  literales2+sup(baso[2][x], tem22); 
                  
                }
               
                      
               }
               // alert("Eld  producto2 es "+  prod2);
               
               
     
          var termino2 = prod2+ literales2;
        var prStr1= prod.toString();
        var prStr2= prod2.toString();;
        
         if(prod===1 && prim !=="1")
               {
                   prStr1="";
               }
             else if(prim ==="1")
               {
                 prim =1 ;
               }
               
         if(prod2===1 && prod2.length>1)
               {
                   prStr2="";
               }
          
         var prodRe = 2*prod*prod2; 
         
         
         
         //*****************************  termino original *****************
         
          
         var termOriginal1 = terminos(baso[0],expoR1);
     
          
       //   $("#izq").append("<br>original1 "+termOriginal1+"<br>");
       
      
         desglose[0]= desglose1;
         
             
      
         
        //   $("#der").append("<br><br>desglose[0] =  "+desglose[0]+ "<br><br>");
        
        
         
           var termOriginal2 = terminos(baso[2],expoR2);
           
            desglose[1]= desglose1;
           
                    
           var termOriginales =[termOriginal1,termOriginal2];
           
           //alert(" termOriginal1 "+termOriginal1+ " termOriginal2 "+termOriginal2);
          
            //******************************* Fin término original 1***************
         
     function terminos(basa, expa)
     {
           
             var  tem21O ="";
              var primO="";
              var basUnoO ="";
              var tttO= isNaN("q");
              var numO=1;
              var prodO=1;
              var literalesO ="";
              var litBase ="";
         
           for(var x=0;x<expa.length;x++)
               {
                   basUnoO =basa[x];  
                   tttO= isNaN(basa[1]);
                   if(basa[0]==="1" && tttO===true)
                   {
                      if(x===1)
                      {
                           basUnoO= basa[1];
                      }
                      else if(x===0)
                      {
                           basUnoO="";
                      }
                     
                   }
                           
                   if (expa<2)
                  {
                     tem21O=""; 
                  }
                  else if (isNaN(basa[x]))
                  {
                     tem21O=  expa[x].toString();
                  }
                  
                  
                 primO = primO+ sup(basUnoO, tem21O);
                 
                  
               
                 if(!isNaN(basa[x]))
                {
                      if(!isNaN(expa[x]))
                      {
                             numO = Math.pow(basa[x],expa[x]) ;
                              prodO =prodO*numO;
                            
                      }
                }
                else
                {
                    
                   literalesO =  literalesO+sup(basa[x], tem21O); 
                   litBase =litBase+ basa[x];
                   //alert("Eld  producto es "+baso[0][x]);
                }
               
                      
               }  //for(var x=0;x<expoR1.length;x++)
               
                // alert("prodO "+prodO + "  literalesO "+ literalesO+ "  tem21O"+ tem21O);
                
                /* alert("expoR1 "+expoR1+
                            "\n\n baso[2] = "+baso[0]+
                            " \n\n" +termOriginal1+" \n\ndesglose1 "+desglose1+
                            "\n\nprimO"+  primO +
                            "\n\nprodO "+prodO);*/
                 var prodLit =prodO+litBase;
                 
                  
                desglose1 = [prodLit,tem21O];
               
            var terminoO = prodO+literalesO;
            return terminoO;
     }
        
     this.displayDesglose = function()
     {
        return desglose;//prim; 
     };
     this.primerTermino = function()
     {
        return termino;//prim; 
     };
     
      this.segundoTermino = function()
     {
        return termino2; 
     };
     
      this.Letras = function()
     {
        return literales; 
     };
     this.Letras2 = function()
     {
        return literales2; 
     };
      this.Producto = function()
     {
        return  prodRe; 
     };
      this.ProductoStr1 = function()
     {
        return  prStr1; 
     };
     
     this.ProductoStr2 = function()
     {
        return  prStr2; 
     };
     
       this.TrinomioPerfec = function(sig)
     {
       //  alert("seg "+seg);
         var seg2 = seg.replace("<sup></sup>","");
       
         var triPer ="("+prim + ""+sig+""+seg2+")<sup>2</sup>";
        return  triPer ; 
     };
     
     this.bases = function()
     {
         return baso;
     };
     
      this.exponentes = function()
     {
         return expo;
     };
      this.expoDivididos= function()
     {
         //alert( typeof expoR );
         
          //alert(" expoR[x][y] = "+expoR);
         return expoR;
     };
     
     this.displayTermoriginales = function()
     {
         return termOriginales;
     };
     
       this.displayoriginal = function()
     {
         return original1;
     };
     
     this.terminosAlCuadrado = function()
     {
         return baex1;
     };
     
}
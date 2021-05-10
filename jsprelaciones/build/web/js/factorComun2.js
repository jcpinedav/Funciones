/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function factorComun2(cad)
{
      //var cadAster2 = cad;
    
       var cadAster = new Comple();
       
         var nume =[];
           var noComun =[];
           var factComun=[];
         var expoCom;
         var mi =[];
           var factorizado="";
       
     var   ncad = cadAster.exp(cad);
     
     $("body").append(ncad+"<br><br>");
     
    
     //var   ncad2 = cadAster.exp();
     var bas =[];
    
    var bas =[];
    var exp =[];
      for(var x=0;x<ncad.length;x++)
             {
                  bas[x] =  cadAster.capturaBase(ncad[x]);
                  exp[x] =  cadAster.capturaExpo(ncad[x]);
             }
          
   
    factoresNoComunes();
    baseComunes();
    expoComunes();
    minExpComunes();
    
  
    for(var x=0; x<factComun.length;x++)
    {
       
        factorizado = factorizado+factComun[x].toString()+"<sup>"+mi[x].toString()+"</sup>";
    }
  //  alert("factComun "+factComun+"  expoCom afuera "+expoCom);
   $("body").append("<br><br><br><br><br><br>factorizado "+factorizado+
           " mi "+mi+"<br><br>"+
           "factor común"+mi+"<br><br>");
     //  alert();
       
       
   
     //alert("ncad "+ ncad  );
     
     function factoresNoComunes()
     {
         
            var index1;
     
            var ind2;
            var nu;
             var t=0;
             var nu2;
          for(var k=1;k<ncad.length;k++) 
           {
              
              for(var i=0;i<bas[0].length;i++)   //ncad2: Factores comunes sin exponentes
               {
                  
                   //signo = bas[0][i].substring(0,1);
                   
                  
                   nu =bas[0][i].toString();
                   
                   nu2 = bas[k].toString();
               
                   ind2 =  nu2.indexOf(nu);
                   
            //    alert("nu = " + nu + "ind2 = "+ind2+" bas[k] = "+bas[k] );
                 
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
           
           // *****************mínimos exponentes de los términos comunes***********
           
          
           
        
     }// No comunes
     
     this.fcom = function()
     {
         // var cad = r0.toString()+"+"+r1.toString();
                  
                 var fff = new factorComun(cad);
                 
                
               var fco = fff.elComun();//Coeficiente numérico del factor común
               
               
               
                 var faCo =fff.displayFacEx();//Factor común. 
                 return faCo;
     };
     
     this.displayFaCom = function()//factor común
     {
           return factorizado;  
     };
     function baseComunes()
     {
         var nu,ind2, j=0;
         for(var i=0;i<bas[0].length;i++)   //ncad2: Factores comunes sin exponentes
               {
                 //  signo = bas[0][i].substring(0,1);
                   nu =bas[0][i];
               
                   ind2 = noComun.indexOf(bas[0][i]);
                   if(ind2 ===-1)
                   {
                       factComun[j] = bas[0][i];
                       j++;
                   }
               }
               
            
     }//baseComunes
     
      this.expoComunes = function()
     {
         // *************Declaración del vector***********
          var cero2=0;
    var uno2 =0;
    var facCoCom=[];
    var caden3="";
    var numer=1;
    var prod2 =1;
    
   var  mi2 =[];
  var  mi2 =mi;
  var factComun2 = [];
  var  factComun2 = factComun;
    
    var facCoExp="";//Cadena factor comun con todos los exponentes
  
   var lett =[];
   var exLett =[];
   var f=0;        
              var expoCom =new Array(factComun.length) ;
              
              for(var x=0;x<factComun.length;x++)
             {
                
                expoCom [x] = new Array(ncad.length);
           
             }
             
         // indices de los factores comunes
        var indEx =new Array(factComun.length) ;
              
              for(var x=0;x<factComun.length;x++)
             {
                
                indEx [x] = new Array(ncad.length);
           
             }  
             
     var indOtros =new Array(factComun.length) ;
              
              for(var x=0;x<ncad.length;x++)
             {
                
               indOtros[x] = new Array(ncad.length);
           
             }  
     
      var ind=-1;
   for (var z=0;z<factComun.length;z++)
   {
       for(var t=0;t<ncad.length;t++)
       {
           ind = bas[t].indexOf(factComun[z]);
          
              expoCom[z] [t]= exp[t][ind];
              indEx[z][t] = ind;
            
       }
   }
   
  
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
       alert("facCoExp");
  };//expocomunes
  
  function minExpComunes()
  {
     
     
     for (var x=0;x<expoCom.length;x++)
     {
       mi[x]= Math.min.apply(null, expoCom[x]); // 1
     }  
     
      alert(" expoCom= "+expoCom+"\n mi "+ mi);
  };
     
}//principal
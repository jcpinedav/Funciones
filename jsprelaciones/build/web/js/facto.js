/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function facto(num)
{
 
    //constructor
    
    var fac =2,r,i=0;
    var num2 = num;
    var fa =[];
    var fa2 =[];
     var factu =[];
     
      var fact1 =[];
               var fact2 =[];
         var factu1= [];
         
      constructor();   
         
    function constructor()
    {
        if(num !==0)
         {
           while (num2 !==1)
           {
              r = num2 % fac;
        
              if( r===0)
              {
                  fa[i]  = fac;
                  fa2[i] = num2;
                  num2 = num2/fac;
                  i++;
              }
              else
              {
                fac++;
              }
        
           } //while
    
    if (num===1)
        {
            fa[i] =1;
            fa2[i] = num2;
        }
    
        }
        else
        {
           alert("El cero no es válido.  Escriba otro número");
        }
    //}//1
    
    }

   this.divisores  = function ()
   {    
    return fa;//divisores
   };
   this.dividendos = function()
    {
       
        return fa2;
    };
    
   this.base = function()   //cuenta factores
    {
       var j=0;
       var con=0;
      this.divisores();
       
        factu[j]=1;
        factu1[j]=fa[j];
        for(var x=1;x<fa.length;x++)
       {
          con = fa[x-1];
       
          if(con ===fa[x])
          {
             factu[j]++;
          }
         else
          {
           j++;
           factu1[j] = fa[x];
           factu[j] =1;
         }
     }
     
   
   return factu1;
  };//cuentaFac
    
    this.exponente= function()
    {
        return factu;
    };
    this.exponenciacion = function()
    {
         var factos ='';
         
               var facte1 =this.base();
              var  facte =this.exponente();
           
          
                for(var x=0;x<factu.length;x++)
                {
                 //factos = factos+factu1[x]+"<sup>"+factu[x]+"</sup>";
                 factos = factos+facte1[x]+"<sup>"+facte[x]+"</sup>";
               
                  }
        return factos;
    };
    
     this.factores = function()
           {
               var fact=1;
               var ind =-1;
               var r=0;
               var div=1;
              // var num= 12;
               var i=0;
               
               
               while( ind ===-1)
               {
                   
                   r = num % fact;
                 
                   if(r ===0)
                   {
                       div = num/fact;
                       
                       fact1[i]=div;
                       fact2[i]= fact;
                       i++;
                       
                   }//fin if
                   fact++;
                   ind = fact1.indexOf(fact);//verificar que el valor no existe en el arreglo.
                   
               }//fin while
               
               
               return fact1;
               //alert("fac1: " + fact1+  " fac2: "+fact2);
           };
           
           this.factores2= function()
           {
                return fact2;
           };
           
    this.strFac = function()
    {
       
         var tabla ="<table border='1'>";
               for(var i=0;i<fa2.length;i++)
               {
                  tabla =tabla+"<tr><td class ='an'>"+fa2[i] + "</td><td class ='an'> "+fa[i]+"</td></tr>";
                 
               }
             tabla = tabla +"</table>";
             
        return tabla;
    };
}//clase principal



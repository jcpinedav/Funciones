/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function generaEjercicios()
  {
       var letras =["a","b","c","w","t","y","x"];
       var r;
       var r2;
       var rp;
       var cuad;
        var cuad2;
       var r11;
       var  r1;
       var tem;
       var lit;  
      // var cuadStr;
      
      function cuadro()
      {
         var nla  = Math.floor(Math.random()*3); //Numeros solamente:0.  Letras solamente: 1.  Ambos: 2.
         var eletra2 = Math.floor(Math.random()*5)+2;
         
         var eletra = eletra2*2;
         r11 =Math.floor(Math.random()*7);
       if (nla ===0)
       {
            r =Math.floor(Math.random()*12)+1;
            rp=r;
            r2 = Math.pow(r,2);
            cuad2 = r2.toString();
            lit =1;
            r1=1;
       }
       
       else if(nla ===1)
       {
           //r11 =Math.floor(Math.random()*7);
           r1 = letras[r11];
        
           // eletra2 = Math.floor(Math.random()*5)+2;
            // eletra = eletra2*2;
            cuad2 =sup(r1,eletra);
            lit =sup(r1,eletra2);
            rp=1;
            r =1;
       }
       else
       {
             r =Math.floor(Math.random()*13)+1;
              r1 = letras[r11];
               rp=r;
               r2 = Math.pow(r,2);
              // r=r2;
             //  alert("r "+r+"cuad2 " + cuad2+" letras[r11]"+letras[r11] );
        
           // eletra2 = Math.floor(Math.random()*5)+2;
           //  eletra = eletra2*2;
             cuad2 =r2+sup(r1,eletra);
              lit =sup(r1,eletra2);
            
       }
    
        return cuad2;
      }//cuadro
       
     this. TerminoCuadrado = function()
      {
          cuadro();
          
           
          return cuad2;
      };
      this.terminoLineal = function()
      {
         // var letras =["a","b","c","w","t","y","x"];
              
             var num1 = Math.floor(Math.random()*12+1);
           //  var num2 = Math.floor(Math.random()*12+1);
             var numLet =Math.floor(Math.random()*6+1);
             var numLet1 = letras[numLet];
          
             var fact =[];   //facts[0]: Primer factor.  Facts[1]: segundo factor
                              //facts[2]: Producto de los factores
                              // fact[2]: literal
             fact[0] = num1+numLet1;
             fact[1] = num1;
             fact[2]= numLet1;
            // facts[1] =    +num2+letras[numLet2];
            // facts[2] = 2*num1*num2;
             
             return fact;
      };
      
      this.trinomioPerfecto = function(sig)
      {
          var  term1 =   cuadro();
          var rf1=rp;
          var lite;
          if(lit !==1)
          {
             lite =lit;
          }
          else
          {
              lite ="";
          }
          
          var  term2 =   cuadro();
          var rf2=rp;
          var lite2;
          
          if(lit !==1)
          {
             lite2 =lit;
          }
          else
          {
              lite2 ="";
          }
          
          var pro = 2*rf1*rf2;
         
          var trin = term1 +"  "+ sig +"  "+pro+lite+lite2+" + "+term2;
          return trin;
        //  alert(" rf1  "+rf1);
          
      };
      
      this.numeroAzar = function()
      {
        
            var nr1 = Math.floor(Math.random()*3)+1;  //5,6,6
            var nr2 = Math.floor(Math.random()*4)+2;
            var nr3 = Math.floor(Math.random()*7)+2;
         
             r=nr1*nr2*nr3;
             
             return r;
        
      };
      
      this.cubo = function()
      {
           r = Math.floor(Math.random()*7)+1;
           var lc =Math.floor(Math.random()*12)+1; //exponente literal
          
           var cube = Math.pow(r,3);
           
            var cube2 = 3*lc;
           
           var subI = Math.floor(Math.random()*7);
           
           var termCubo =  cube+" " +sup(letras [subI],cube2);
           
           return termCubo;
           
           
          
      };
      this.diferenciaCubo = function()
      {
         
         var pri =   this.cubo();
         var seg = this.cubo();
         
         var difCubo = pri+ " - "+ seg;
         
         return difCubo;
      };
      
       this.sumsCubo = function()
      {
          var pri =   this.cubo();
         var seg = this.cubo();
         
         var sumCubo = pri+ " + "+ seg;
         
         return sumCubo; 
      };
      
      this.factorComun = function(tipo)
      {
          var fCo;
          var rl1 =Math.floor(Math.random()*7);
          
        
        
        
        var exl1 = Math.floor(Math.random()*9)+1;
        var exl2 = Math.floor(Math.random()*9)+1;
        var exl3 = Math.floor(Math.random()*9)+1;
        
          
          var sig1 = Math.floor(Math.random()*2);
          var sig2 = Math.floor(Math.random()*2);
          
          var s1,s2;
          
          if (sig1===0)
          {
              s1 ="+";
          }
          else
          {
             s1 ="-"; 
          }
           if (sig2===0)
          {
              s2 ="+";
          }
          else
          {
             s2="-"; 
          }
          
          var num1 = this.numeroAzar();
          var num2 = this.numeroAzar();
          var num3 = this.numeroAzar();
          
          
          if(tipo ===1)
          {
               fCo = num1+sup(letras[rl1],exl1)+
                    s1+num2+sup(letras[rl1],exl2)+
                    s2 +num3+sup(letras[rl1],exl3);
          }
          else if(tipo ===2)
          {
              fCo = num1+sup(letras[rl1],exl1)+
                    s1+num2+sup(letras[rl1],exl2);
          }
          
          else if(tipo ===3)
          {
             var rl2 =Math.floor(Math.random()*7);
             var rl3 =Math.floor(Math.random()*7);
             var ex1 =Math.floor(Math.random()*7)+1;
             var ex2 =Math.floor(Math.random()*7)+1;
             rl1 =Math.floor(Math.random()*7);
             
             while ( rl1===rl2 ||  rl1===rl3) {
                          rl3 =Math.floor(Math.random()*7);
                          rl2 =Math.floor(Math.random()*7);
              }
              
              fCo = num1+sup(letras[rl1],exl1)+sup(letras[rl2],ex1)+
                    s1+num2+sup(letras[rl1],exl2)+sup(letras[rl3],ex2);
          }
           else if(tipo ===4)
          {
             rl1 =Math.floor(Math.random()*7);
             var rl2 =Math.floor(Math.random()*7);
             var rl3 =Math.floor(Math.random()*7);
             var ex1 =Math.floor(Math.random()*7)+1;
             var ex2 =Math.floor(Math.random()*7)+1;
             
               while (rl1 ===rl2) {
                          rl2 =Math.floor(Math.random()*7);
              }
              
               while (rl2 ===rl3) {
                          rl3 =Math.floor(Math.random()*7);
              }
             
              fCo = num1+sup(letras[rl1],exl1)+sup(letras[rl2],ex1)+
                    s1+num2+sup(letras[rl3],exl2)+sup(letras[rl2],ex2);
          }
         
         // $("#izq").append("<br><br><br>tipo: "+tipo+" rl2 "+rl2+" rl3 "+rl3 + " r11 "+rl1);
            
         return fCo;
           
           
          
      };
        
  }//generaEjercicios()
                
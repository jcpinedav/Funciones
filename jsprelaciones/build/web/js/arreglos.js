/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function arreglos()
{
    //biblioteca de ejercicios 
    
    this.arre1 =[8,36,12,14,7];
    this.arre2 =[4,100,18,6,11];
    this.facCom =["18"+sup("x",2)+"-12"+sup("x",3)+"+2"+sup("x",1),
                  "1"+sup("y",1)+"+1"+sup("y",3),
                   "12"+sup("x",2)+"-27",
                   "36"+sup("x",2)+"-48"+sup("x",7),
                  "2"+sup("x",1)+"+12"+sup("x",3),
                  "8"+sup("x",5)+"+4"+sup("x",3),
                  "6"+sup("y",4)+"-15"+sup("y",3),
                  "5"+sup("a",1)+sup("b",1)+"-8"+sup("a",1)+sup("b",1)+sup("c",1)];
  this.facCom2 = ["24"+sup("y",2)+"-20"+sup("y",3)+"+2"+sup("y",1),
                  "1"+sup("t",2)+"+1"+sup("t",4),
                   "18"+sup("w",2)+"-24",
                   "28"+sup("r",3)+"-54"+sup("r",7),
                  "28"+sup("r",3)+sup("q",2)+"-54"+sup("r",7)+sup("q",3),
                   "24"+sup("r",1)+sup("q",1)+"+12"+sup("r",7)+sup("q",3),
                   "15"+sup("h",7)+"-10"+sup("h",6)];
  //  var cad ="18"+sup("x",2)+"-12"+sup("x",3)+"+2"+sup("x",1);
             // cad ="1"+sup("y",1)+"+1"+sup("y",3);
}

function subMen()
{
    //opciones del submenu
    
    var subMenu =[];
     subMenu[0] ="<li class ='subMenu' id ='e0'>Introducción</li>"+
                         "<li class ='subMenu' id ='e1'>Objetivo</li>"+
                        "<li class ='subMenu' id ='e2'>Metodología</li>"+
                        "<li class ='subMenu' id ='e3'>Prerrequisito</li>";
                
            subMenu[1] ="<li class ='subMenu' id ='s0'>Potencias</li> "+
                         " <li class ='subMenu' id ='s1'>Multiplicación_potencias</li> "+
                        " <li class ='subMenu' id ='s2'>Factores_numéricos</li> "+
                        " <li class ='subMenu' id ='s3'>M c d</li> "+
                         " <li class ='subMenu' id ='s4'>Factor_común</li>";
                
            subMenu[2] ="<li class ='subMenu' id ='t0'>Factores</li>"+
                         "<li class ='subMenu' id ='t1'>Suma_producto</sup></li>"+
                        "<li class ='subMenu' id ='t2'>Trinomio</li>"+
                        "<li class ='subMenu' id ='t3'>Evaluación</li>";
                
            subMenu[3] ="<li class ='subMenu' id ='c0'>Suma_F._Común</li>"+
                         "<li class ='subMenu' id ='c1'>Común_dos_en_dos</sup></li>"+
                        "<li class ='subMenu' id ='c2'>Trinomio</li>"+
                        "<li class ='subMenu' id ='c3'>Evaluación</li>";
                                      
            subMenu[4] ="<li class ='subMenu' id ='b0'>Al_cuadrado</li>"+
                         "<li class ='subMenu' id ='b1'>Términos_por_dos</sup></li>"+
                        "<li class ='subMenu' id ='b2'>Trinomio_más</li>"+
                        "<li class ='subMenu' id ='b3'>Trinomio_menos</li>"+
                        "<li class ='subMenu' id ='b4'>Evaluación</li>";
                
      subMenu[5] ="<li class ='subMenu' id ='d0'>Al_cuadrado</li>"+
                         "<li class ='subMenu' id ='d1'>Diferencia_de_cuadrados</sup></li>"+
                        "<li class ='subMenu' id ='d2'>Evaluación</li>";
                
     subMenu[6] ="<li class ='subMenu' id ='d0'>Términos_al_cubo</li>"+
                         "<li class ='subMenu' id ='d1'>Diferencia_de_cubos</sup></li>"+
                        "<li class ='subMenu' id ='d2'>Suma_de_cubos</li>"+
                        "<li class ='subMenu' id ='d3'>Evaluación</li>";
                        
 return subMenu;
}

function mens()
{
    //opciones del menú
         var menu ="<ul>"+
                          "<li class ='pri' id ='m0'>Contextualización</li>"+
                          "<li class ='pri' id ='m1'>Factor_común</li>"+
                          "<li class ='pri' id='m2'> Trinomio</li>"+
                          "<li class ='pri' id='m3'>Trinomio_especial</li>"+
                          "<li class ='pri' id='m4'>Trinomio_perfecto</sup></li>"+
                          "<li class ='pri' id='m5'>Diferencia_cuadrado</sup></li>"+
                          "<li class ='pri' id='m6'>Cubos</li>"+
                    "</ul>";
          return menu;
}
function planti()
     {
         //dibuja el espacio de trabajo donde saldra el ejercicio explicado y el ejercicio que resuelve el estudiante
         //todas las opciones lo llaman a excepción de contextualización
        
             $("#tem").empty();
              $("#desarrollo").empty();
          $("#contenedor").append("<div id ='tem'>");
           $("#contenedor").append("<div id= 'desarrollo'>");
      
           $("#tem").css({"position":"absolute","top":"2.8em","height":"16em",
                          "left":"14em","width":"47em"});
           
              
          
            
             
              $("#desarrollo").css({"position":"absolute","top":"-6em","left":"3em","width":"40em"});
                
                var top =$("#tem").height()+75;
                
               // alert("alto del tema: "+top);
              
               $("#desarrollo").append("<div id ='box'>");
               
                 $("#box").css({"border":"orange",
                     "border-style":"groove",
                     "height":"22em","position":"absolute",
                     "top":top,"width":"90em"});
           
     var ancho2 =$("#izq").width();
     var ancho = parseInt(ancho2);
      var tam = $("#box").height();
         $("#box").append("<div id ='izq'>");
         $("#box").append("<div id ='der'>");
           $("#der").css({"position":"absolute",
                        "border":"white",
                        "border-style":"solid",
                        "height":tam,
                        "width":ancho+50,
                        "top":"0em",
                        "left":"36em"
                    });
         $("#der").css({"border-left":"black","border-style":"solid"});
         
         $("#izq").css({"width":"20em"});
         
     
     }

//para la contextualización
function planti2(){
 
          $("#tem").empty();
          $("#desarrollo").empty();
          
            $("#contenedor").append("<div id= 'tem'>");
             $("#contenedor").append("<div id= 'desarrollo'>");
             
          //    $("#desarrollo").css({"position":"absolute","top":"4em","left":"14em","width":"40em"});
             
             // $("#desarrollo").append("<div id ='tem'>");
              
                $("#tem").css({"position":"absolute","top":"3em","height":"10em",
                    "width":"30em","left":"14em"});
                
                var top =$("#tem").height()+75;
  
  }



 //**************************  Colaboran **********************
 
   function dendoSores(ma1,ma2)  //Dividendos y divisores Mcd
    {
           //alert("En densores");
            var dimensionNueva = ma1.length+ma2.length;
            
            var denSor= new Array(dimensionNueva.length);
            
            
           alert(" baspF2 "+ma1+" ma2 "+ma2);
         
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
    }//dendoSores(ma1,ma2)
     function basExpos(baspF,exppF)
       {
          
           var BaEx2= new Array(baspF.length);
           
          //alert(" baspF2 "+baspF);
         
          for(var j=0; j<baspF.length;j++)
            {
               BaEx2[j] = new Array(2*baspF[j].length);
              
            }
         
        
         
         //alert("baEx : "+baEx);
         
        for(var i=0;i<baspF.length;i++)
        {
              
            for(var j=0; j<baspF[i].length;j++)
            {
             
                  BaEx2[i][2*j] = baspF[i][j];
                  BaEx2[i][2*j+1] = exppF[i][j];
             
               
            }
           
        }
        
       // alert("baEx2 : "+BaEx2+" baEx2 : "+baspF+" exppF : "+exppF);
         return BaEx2;
       }//basExpos
      
    function multi(diden, disor,varios)
    {
         var factores;
         //alert("diden: "+diden);
         factores = new Array(disor.length);
                
                for(var x=0;x<disor.length;x++)
                {
                   factores[x] = new Array(2);
                }
                
                //*************Dividendos *************
                  for(var x=0;x<diden.length;x++)
                {
                   factores[x][0] = diden[x];
                }
               
               //*************Divisores *************
               
               for(var x=0;x<disor.length;x++)
                {
                   factores[x][1] = disor[x];
                }
                if (varios !=="")
                {
                     for(var x=0;x<disor.length;x++)
                     {
                        factores[x][2] = varios[x];
                    }
                }
                return factores;
                
    }
    
    function cajas2(p,clase,factor)
    {
        // alert("factor "+factor);
        var caj=[];
        var tempo="";
        var k=2;
        var imp;
       var paren =")";
       
    //alert("clase "+clase);
        for(var i=0;i<factor.length;i++)
        {
             // caj =caj+"";
            for(var j=0; j<factor[0].length;j++)
            {
                
               imp =j%2;
               if(imp ===0)
               {
                    tempo= tempo+ "<input type ='text' class = '"+clase+"' id ='"+p+i+"_"+j+"'"+
                                  "name = 'base'>"; 
               }
               else
               {
                   tempo= tempo+ "<sup><input type ='text' class = '"+clase+"' id ='"+p+i+"_"+j+"'"+
                           "name ='expo'></sup>";
               }
            }
            caj[i]=tempo;
            tempo ="";
        }
      //  $("."+clase).css({"width":"2.5em"});
        return caj;
    }//cajas2
    
    function cajaSimple()
    {
        //***********  No son en columnas ni maneja exponentes *****************
        
        var p,clase,div,factor ,retro;
        
        this.grid = function(p1,clase1,div1,factor1,retro1)
        {
            
              p = p1;clase = clase1;div = div1;factor=factor1;retro = retro1;
              
            var caj = new Array(factor.length);
            for(var k=0;k<factor.length;k++)
             {
                 caj[k] = new Array(factor[k].length);
             }
            
          //  alert("caj.length = "+caj.length +" caj[0] .length = "+caj[0].length);
            for(var i=0;i<caj.length;i++)
             {
              //caj =caj+"<tr>";
             for(var j=0; j<caj[i].length;j++)
              {
                  caj[i][j] =  "<input type ='text' class = '"+clase+"' id ='"+p+i+j+"'>";  
              }
           // caj =caj+"</tr>";
            }
        
              return caj;
        };
       // var caj;
         
       //  $("#der").append("<div id ='"+div+"'>");
         
      //  $("#"+div).append(caj);
      
      this.rete = function()
      {
          
           $("."+clase).css({"width":"2.5em"});
           
         var fl;
         
            $("."+clase).keypress(function(e){
                
               
                    
                    if(e.keyCode ===13)
                    {
                        var atr = $(this).attr("id");
                        
                        var atr1 = atr[1];
                        
                         var atr2 = atr[2];
                         
                         var xs =parseInt( atr[1]);
                         var ys =parseInt( atr[2]);
                         
                         var user2 =$("#"+atr).val();
                         
                         var sis1;
                         var x = parseInt(xs);
                         var y = parseInt(ys);
                         
                          sis1 = factor[x][y].toString();
                          var user =user2.toString();
                          var userI, rest;
                          
                          userI = parseInt(user);
                          var sis =parseInt(sis1);
                          var numP = parseInt(factor[0][0]);
                        fl =event.which || event.keyCode;
                        
                          var ret = retro[x][y].split("##");
                         // alert(" ret[0] = "+ret[0]+ " ret[1] = "+ret[1]);
                          if (sis1===user){
                                   
                                    alert(ret[0]); 
                                    y++;
                                   
                                  if(y === (factor[0].length))
                                    {
                                        x++;   
                                        y=0;
                                    }
                         
                                   // y=1;
                                    xs =x.toString();
                                    ys = y.toString();
                                    $("#"+p+xs+ys).focus();
                                 
                               }//sis1===user
                               else
                               {
                                 
                                          alert(ret[1]);  
                                    
                               }
                      }//13
                      
                });//keypress
           
      };
        
        
     
        
    }
    function cajas(p,clase,div,factor,retro)
    {
       // alert(" retro  retro[0][1] caja: "+retro[0][1]);
       
       // cajas("h","der1","derIzq",factores1,retro);
       
      
        var caj='<table>';
     
        for(var i=0;i<factor.length;i++)
        {
              caj =caj+"<tr>";
            for(var j=0; j<factor[0].length;j++)
            {
             caj = caj+ "<td><input type ='text' class = '"+clase+"' id ='"+p+i+j+"'></td>";  
            }
            caj =caj+"</tr>";
        }
        
         $("#der").append("<div id ='"+div+"'>");
         
        $("#"+div).append(caj);
        
         $("."+clase).css({"width":"2.5em"});
         
         var fl;
         
         
        
         $("."+clase).keypress(function(e){
                
                    if(e.keyCode ===13)
                    {
                        var atr = $(this).attr("id");
                        
                        var atr1 = atr[1];
                        
                         var atr2 = atr[2];
                         
                         var xs =parseInt( atr[1]);
                         var ys =parseInt( atr[2]);
                         
                         var user2 =$("#"+atr).val();
                         
                         var sis1;
                         var x = parseInt(xs);
                         var y = parseInt(ys);
                         
                          sis1 = factor[x][y].toString();
                          var user =user2.toString();
                          var userI, rest;
                          
                          userI = parseInt(user);
                          var sis =parseInt(sis1);
                        //  var numP = parseInt(factor[0][0]);
                          // *******************************
                         fl =event.which || event.keyCode;
                                               
                         if (y===0){
                             
                               if (sis1===user){
                                   
                                    alert(retro[0][0]); 
                                    y++;
                                   
                                //   alert("y: "+y+ " factor[0].length  "+factor[0].length);
                                     if(y === (factor[0].length))
                                    {
                                        x++;   
                                        y=0;
                                    }
                         
                                   // y=1;
                                    xs =x.toString();
                                    ys = y.toString();
                                    $("#"+p+xs+ys).focus();
                                 
                               }//sis1===user
                               else  //Respuesta equivocada columna 0
                               {
                                     alert(retro[0][1]); 
                                     
                              
                                  
                               }
                             
                         }//(y===0.  columna 0)
                         else if(y===1){
                             
                               if (sis1===user){
                                  
                                    alert(retro[1][0]); 
                                                                       
                                      y++;
                                      
                                       
                                   
                                     if(y === (factor[x].length))
                                    {
                                        x++;   
                                        y=0;
                                    }
                         
                                       xs =x.toString();
                                       ys = y.toString();
                                       $("#"+p+xs+ys).focus();
                                       
                                   
                                 
                               }//sis1===user
                               else
                               {
                                    var var3 = factor[x][0];
                                    var var4 = factor[0][1];
                                   
                                   var f1Str = retro[1][1].toString(); 
                                //   var f1Str2 = retro[1][1].toString();
                                   
                                   var indVar = f1Str.indexOf("var3");
                                   
                                //   alert(" indVar = "+indVar);
                                   
                                   if(indVar ===-1)
                                   {
                                      var pf = parseInt(factor[0][0]);
                                   
                                      var divi= pf%userI;
                                     
                                                                      
                                      if(divi ===0)
                                      {
                                          alert(retro[1][1]);  
                                      }
                                     
                                     else 
                                     {
                                        alert(retro[1][2]);
                                     }
                                   
                                 //   
                                   }//-1
                                   else
                                   {
                                      var reem = retro[1][1].replace("var3",var3);
                                      var reem2 = reem.replace("var4",var4);
                                      alert(reem2);   
                                   }
                               }
                             
                         }//(y===1)
                         else if(y===2){
                              if (sis1===user){
                                  alert(retro[2][0]);  
                                  x++;
                                  y=0;
                                  xs =x.toString();
                                 ys = y.toString();
                                 $("#"+p+xs+ys).focus();
                              }
                              else
                              {
                                  alert(retro[2][1]); 
                              }
                             
                         }//y=2
                              
                    }//13
                    
                });//keypress
    }
    
    function baseExpo(base, exponente,div,clase,p,fao,men,retro)
    {
      
         var dimCa =base.length+exponente.length;
        
         var uno =[];      
        var red;
        
        var fa = fao;
        
        var t1=0,t2=0;
          $("#der").append("<div id ='"+div+"'>");
          
         
          
         var pos=0;
                
           $("."+clase).css({"width":"2.5em"});
           
         $("#"+div).append("<br>");
      
    //  $("#"+div).append("<table border ='1'>");
    
    if(men !=="")  //Mensaje
    {
       $("#"+div).append(men); 
    }
    
    
        for(var i=0;i<dimCa;i++)
        {
            red =i%2;
            if(red ===0)
            {
                $("#"+div).append("<input type ='text' class ='"+clase+"' id ='"+p+i+"'>");
                uno[i]=base[t1];
                t1++;
                
           }
            else
                
             {
                $("#"+div).append("<sup><input type ='text' class ='"+clase+"' id ='"+p+i+"'></sup>"); 
                 uno[i]=exponente[t2];
                 t2++;
                 
                 // alert(" im uno[i]:  "+uno[i] + " i: "+i);
             }
            
        }
        
        
        // $("#"+div).append("</table>"); 
          $("."+clase).css({"width":"1.3em"});
          var fl=1;
          
        
          //************************ key press ************************
          //****************
          //*******
          
          $("."+clase).keypress(function(e){
              
              if(e.keyCode===13)
              {
                 // alert("Aquí "+div);
                  var gp = p.length;
                  var atr = $(this).attr("id");
                  var at = atr.substring(gp);//atr.substring(1);
                  
                   
                  var at0=atr.substring(0,gp);//atr.substring(0,1);
                  
                       //alert(" atr "+atr ) ;            
                  var atr2 ="#"+atr;
                  
                  
                  var ca = $(atr2).val();
                  
                  fl =event.which || event.keyCode;
                              
                  var user = parseInt(ca);
                  var sis  = parseInt(uno[at]);
                  
                  var at2 =parseInt(at);
                                  
                  if(user ===sis)
                  {
                   //************* Si el índice es par es una base; a lo contrario es un exponente.
                   
                      var even = at% 2;
                      
                      if(even===0){   //Una base
                             var mens = retro[3][0].split("*");
                             alert(mens[0]);
                             
                      }
                      else   //Un exponente
                      {
                          var mens = retro[3][1].split("*");
                             alert(mens[0]); 
                      }
                      
                      
                      
                       var at21 = at2+1;
                       
                       
                      $("#"+at0+at21).focus();
                      
                                      
                      if (at2 ===(uno.length-1))
                      {
                         $("#"+atr).focus();
                        
                          if (fa==='w')
                          {
                              $("#t0").focus();
                          }
                          else if(fa ==="t")
                          {
                            //  $("#s01").focus();
                          }
                   }
                      
                      if(at2 ===(dimCa-1))
                      {
                         
                          pos ++;
                          if (pos ===(uno.length))
                          {
                              pos =0;
                          }
                             // func[0][3]();
                      }
                  }
                  else
                  {
                      if (fa==='t')
                      {
                          
                          var even = at% 2;
                      
                         if(even===0){   //Una base
                             var mens = retro[3][0].split("*");
                             alert(mens[1]);
                             
                         }
                         else   //Un exponente
                          {
                             var mens = retro[3][1].split("*");
                             alert(mens[1]); 
                          }
                      
                      }
                      else
                      {
                        
                      }
                          
                          
                     
                  }
                  
                   
              }
          });//13
         
   
               
    }
    
    function maBaExponentes(baL2,expL2)
    {
         var dimCa;// =ba2.length+exp2.length;  
        
         var baEx = new Array(baL2.length);
         for(var x=0;x<baL2.length;x++)
         {
             dimCa =baL2[x].length+expL2[x].length;  
             
                       
             baEx[x]= new Array(dimCa);
          
         }
         
         
        for(var i=0;i<baL2.length;i++)
          {
           for(var j=0;j<baL2[i].length;j++)
          
           {
               baEx[i][(2*j)]=baL2[i][j];
               baEx[i][(2*j+1)]=expL2[i][j];
               
        
          }//for1 
       }
         return baEx;
    }//maBaExponentes(ba2,exp2)
    function baseExpo2(baEx,div,clase,p,fao,l,matNum,nu,nu2,retro)
    {
        
       
           
         var uno =[];      
        var red;
        
        var fa = fao;
        
        var t1=0,t2=0;
          $("#der").append("<div id ='"+div+"'>");
          
                
           $("."+clase).css({"width":"2.5em"});
           
         $("#"+div).append("<br>");
         
   
   
   
    var even;
  
     var baja = "<br>";
     var paren1 ="";
      var paren2 ="";
     if (l===1)
     {
         baja ="";
         paren1 ="<span class ='gran'>(</span>";
         paren2 ="<span class ='gran'>)</span>";
     }
     var ot;
     
       
     
      $("#"+div).append(paren1);
        for(var i=0;i<baEx.length;i++)
        {
            if(nu===0)
            {
               $("#"+div).append(matNum[i]+ nu2);
            }
            else if(nu===2)
            {
               $("#"+div).append(matNum[i]+ nu2);
            }
        // 
        
      
          if (l===1)
         {
           ot =matNum[i];
         }
         else
         {
             ot ="";
         }
       //  alert("l: "+l+  "ot: "+ot+ " matNum[i] "+matNum+  "TIPO L" + typeof l );
         $("#"+div).append(ot);
           for(var j=0;j<baEx[i].length;j++)  
           {
               
               even = j%2;
               if (even ===0)
               {
                  $("#"+div).append("<input type ='text' class ='"+clase+
                       "' id ='"+p+i+"_"+j+"'>" ); 
               }
               else
               {
                  $("#"+div).append("<sup><input type ='text' class ='"+clase+
                       "' id ='"+p+i+"_"+j+"'></sup>");   
               }
               
                           
                      
           }
           $("#"+div).append(baja);
            
        }
         $("#"+div).append(paren2);
         
         $(".gran").css({"fontSize":40});
        // $("#"+div).append("</table>"); 
          $("."+clase).css({"width":"1.1em"});
          
          var fl=1;
          
          //  alert("Marca aquí ba"); 
          
          $("."+clase).keypress(function(e){
              
              if(e.keyCode===13)
              {
                  var gp = p.length;
                  var atr = $(this).attr("id");
                  var at = atr.substring(gp);//atr.substring(1);
                  
                     
                  var at0=atr.substring(0,gp);//atr.substring(0,1);
                   var at1=atr.substring(gp);
                                   
                  var atr2 ="#"+atr;
                  
                  atr2= recorte(atr2 );
                  fl =event.which || event.keyCode;
                                
                 var at1I = parseInt(at1[0]);
                 var at12I = parseInt(at1[1]);
                 
                 var at1Str = at1.toString();
                 
                 var i = at1Str.split("_");
                 
               
                  
                  
                  var ca = $(atr2).val();
                  
                
                var user = ca.toString();
                 // var sis  = parseInt(uno[at]);
                  
                  var sis =  baEx[i[0]][i[1]].toString();
                  
                 user = recorte(user);
                sis= recorte(sis);
                  
                  var at2 =parseInt(at);
                  
                 // alert(" user ="+user+" sis "+ sis);
                  
            // alert(" nu: "+nu+ " matNum "+matNum+ " p = "+p + " sis "+sis+" user = "+user);
                 if(user ===sis)
                  {
                      
                     // alert("entro) "+retro);
                      
                       var at21 = parseInt(i[1]) +1;
                       alert(retro[0][0]);//("Muy bien, continúe con la actividad. " +"#"+at0+at1I +at21);
                          
                          
                          
                      $("#"+at0+i[0] +"_"+at21).focus();
                      
                     
                    //  alert("#"+at0+i[0] +"_"+at21 + " atr = "+atr);
                                      
                      if (at2 ===(uno.length-1))
                      {
                        
                        
                          if (fa==='w')
                          {
                              $("#t0_0").focus();
                          }
                          else
                          {
                              $("#s0_1").focus();
                          }
                     }
                      
                     
                  }//sis
                  else
                  {
                      var bae= parseInt([i[1]])%2;
                     // alert("at0: "+at0);
                      if (at0==='q')//fa==='t'
                      {
                          if (bae ===0)
                          {
                             alert(retro[0][1]);   
                          }
                          else
                          {
                            alert(retro[1][1]);    
                          }
                          
                         
                      }
                      else if (at0==='u')
                      {
                          // alert("Adentro at0: ");
                          if (bae ===0)
                          {
                             alert(retro[2][1]);   
                          }
                          else
                          {
                            alert(retro[3][1]);    
                          }
                          // alert()//("No concuerdan.  Mire el ejemplo.  La base es el número y el exponente,"+
                              //" la cantidad  de veces que este se repite.");
                      }
                      
                       else if (at0==='b')
                      {
                         
                         
                          if (bae ===0)
                          {
                             alert(retro[4][1]);   
                          }
                          else
                          {
                            alert(retro[5][1]);    
                          }
                          
                        
                          // alert()//("No concuerdan.  Mire el ejemplo.  La base es el número y el exponente,"+
                              //" la cantidad  de veces que este se repite.");
                      }
                          
                          
                     
                  }
                  
                   
              }
          });
          
  
               
    }
    
    
    function cosasComunes(alcua)
    {
        //*****************Quita los unos *****************
     var antesInd = alcua.indexOf("<");
      var antesSub;
     if(antesInd !==-1)
     {
          antesSub =alcua.substring(1,antesInd);
          //var antesSub =alcua.substring(1,antesInd);
     }
     else
     {
         antesSub =alcua;
     }
     
    
     
      var antesInd2 = alcua.indexOf(")");
      
      var antesSub2="";
      
     
      
      if(antesInd2 !==-1)
      {
          antesSub2 =antesSub.substring(0,(antesInd2-1));
      }
      else
      {
         antesSub2= antesSub;
      }
     
     var nalcua="";
     
        var uno =antesSub2.indexOf("1");
        var snum = antesSub2.substring(1,uno +2);
         var esnum = isNaN(snum);
       
        
     if (uno !==-1 )
     {
         
         if(esnum===true)
         {
              nalcua = alcua.replace(1,"") ;
         }
         else
         {
            nalcua = alcua; 
         }
       
     }
     else
     {
        nalcua = alcua; 
     }
      return nalcua;    
    }  //cosasComunes
    
    
    
     function capturaBase2(cad)
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
                       
                        var signs=[];
                        var w=0;
                       
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
            
  function capturaExpo2(cadet2)
            {
             var cadet = cadet2.toString();
            
                 var exponentes =[];
                var cad5 = cadet;
                var indice;// = cad5.indexOf("<");
                var cad2;// = cad5.substring(0,indice);
                var cad3;// = cad5.substring(indice);
                
               // 
                
                var sup;// ="</sup>".length;
                
              //  indice = cad3.indexOf("</sup>");
                
                 var cad4 ="z";// = cad3.substring(0,indice+sup);
                // cad5 = cad3.substring(indice+sup);
                var x=0;
                
                var granSup;
                var iT;
                var i=0;
                
                var inCadet =cad5.indexOf("<sup>");
                
                if( inCadet ===-1)
                {
                    cadet2 = cadet2+"<sup>1</sup>";
                }
              
              // for(var i=0;i<4;i++)
             
               do
                {
                  
                indice = cad5.indexOf("<sup>");
                
                if(indice !==-1)
                {
                    
                }
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
                 
                 if(exponentes[0] ==="")
             {
                 exponentes[0]=1;
             }
                 
                 //alert("cadet2 "+cadet2+ " exponentes "+exponentes);
               return exponentes;
                
                
            }//Captura exponente
            
       //***************************** Funciona que captura un número en una cadena ******
       
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
              return num2;
            }//numero
            
       
       //************************ Fin número ************************
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
                          // w++;
                          // signs[w]=signo;
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
            //
            //
   //****************************  Funcion General *******************
   
   function baseExpoGen()
    {
      // var i;
       var clase;
        var fa;
        var baEx;
        var retro;
        var p;
        this.caja = function(baEx2,clase2,p2,fao,retro2)
        {
            clase =clase2;
            fa =fao;
            baEx = baEx2;
            retro = retro2;
            p=p2;
            
          $("#der").append("baEx2.length"+baEx2.length+" baEx2.length "+ baEx2[0].length);
        //   alert("baEx : "+baEx);
         /* $("#der").append("<div id ='"+div+"'>");
          
                
          
           
         $("#"+div).append("<br>");*/
         
   
   
   
    var even;
  
     var baja = "<br>";
     var paren1 ="";
      var paren2 ="";
   /*  if (l===1)
     {
         baja ="";
         paren1 ="<span class ='gran'>(</span>";
         paren2 ="<span class ='gran'>)</span>";
     }*/
    // var ot;
     
    //  $("#"+div).append(paren1);
    
     var cajetas=new Array(baEx.length);
     
     for(var k=0;k<baEx.length;k++)
        {
            cajetas[k] = new Array(baEx.length[k]);
        }
        for(var i=0;i<baEx.length;i++)
        {
          
         
           for(var j=0;j<baEx[i].length;j++)  
           {
               
               even = j%2;
               if (even ===0)
               {
                   cajetas[i][j] = "<input type ='text' class ='"+clase+
                       "' id ='"+p+i+"_"+j+"'>";
               }
               else
               {
                   cajetas[i][j] = "<sup><input type ='text' class ='"+clase+
                       "' id ='"+p+i+"_"+j+"'></sup>";
                //  $("#"+div).append();   
               }
               
                           
                      
           }
          // cajetas = cajetas + baja;
          // $("#"+div).append(baja);
            
        }
        
       // cajetas = cajetas + paren2;
        // $("#"+div).append(paren2);
         
         $(".gran").css({"fontSize":40});
        // $("#"+div).append("</table>"); 
       
         // alert("cajetas "+cajetas);
         return cajetas;
        };
       
          this.Ret = function()
          {
              
              
             
                 $("."+clase).css({"width":"1.1em"});
              $("."+clase).keypress(function(e){
                  
               
              
               var uno =[];      
            var red;
        
           // var fa = fao;
        
            var t1=0,t2=0;
               var fl=1; 
               
              
              if(e.keyCode===13)
              {
                  // alert("retro: "+retro);
                  var gp = p.length;
                  var atr = $(this).attr("id");
                  
                
                  var at = atr.substring(gp);//atr.substring(1);
                  
                     
                  var at0=atr.substring(0,gp);//atr.substring(0,1);
                  
               //   alert("¿Qué pasó 13 "+p+" at0: "+at0);
                   var at1=atr.substring(gp);
                                   
                  var atr2 ="#"+atr;
                  
                  atr2= recorte(atr2 );
                  fl =event.which || event.keyCode;
                                
                 var at1I = parseInt(at1[0]);
                 var at12I = parseInt(at1[1]);
                 
                 var at1Str = at1.toString();
                 
                 var i = at1Str.split("_");
                 
               
                 
                  
              //    var ca = $(atr2).val();
                   var ca = $(atr2).val();
                   // alert(" ca ="+ca.toString()+ " cjas "+atr2);
                    
                   
                
                var user = ca.toString();
                 // var sis  = parseInt(uno[at]);
                  
                  var sis =  baEx[i[0]][i[1]].toString();
                  
                  // alert("i[0] = "+ i[0]+" i[1] = "+i[1]+ " baEx: = "+baEx);
                  
                //  alert("user "+user+ " sis : "+sis );
                  
                 user = recorte(user);
                sis= recorte(sis);
                  
                  var at2 =parseInt(at);
                  
                
                  
            
                 if(user ===sis)
                  {
                      
                      
                      
                       var at21 = parseInt(i[1]) +1;
                       alert(retro[0][0]+" user = "+user +" sis = "+sis);//("Muy bien, continúe con la actividad. " +"#"+at0+at1I +at21);
                          
                          
                          
                      $("#"+at0+i[0] +"_"+at21).focus();
                      
                                      
                  }
                  else  //user
                  {
                      alert(retro[0][1]+" user = "+user +" sis = "+sis);
                  }
               
                   
              }//13
          });
          
  
                
          };
         
    }
    
    
    //************************Opera *************
    
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
        
      function sup(b,e)
            {
               var exp = b+"<sup>"+e+"</sup>";
               
               return exp;
            }  
        
       
     
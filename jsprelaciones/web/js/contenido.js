/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//titulos y contenido de las opciones
//i = tema y j=subtema
function tema2(i,j)
{
      
 var subtem2 = new Array (8);
 
    subtem2[0] = new Array (4);
    
    //cambiar el contenido de las opciones de contextualizaciÃ³n
    subtem2[0][0] ="<b>Introduccción</b><br>"+
                   "<br>El software básicamente contiene  tres partes: una en donde"+
                   " se presentan los conceptos de relaciones matematicas,la segunda muestra un"+
                   " ejemplo trabajado y otra en donde se hace una evaluación";
    subtem2[0][1] ="<b>Objetivo</b><br><br>Formar conceptualmente acerca de ls relaciones matematicas"+
                       " y el desarrollo de conocimiento procedimental para la resolución de"+
                   "<br>problemas que involucren estos conceptos";
    subtem2[0][2] ="<b>Metodología</b><br><br>Se utiliza para el aprendizaje de conceptos "+
                   " de relaciones matematicas, comienza dando definición del concepto; posteriormente,"+
                   " se presentan ejemplos trabajados en la parte izquierda."+
                   "  En la parte derecha"+
                   " se da un ejercicio para que e efectúe paso a paso de acuerdo"+
                   " con el ejemplo de la izquierda.  Siempre que el estudiante digite una "+
                    " una información y después de presionar enter, el programa provee "+
                    "retroalimentación sobre el"+
                   " resultado de las respuestas dadas."+
                   " <br><br>Aunque haya realizado los ejecicios bien ,"+
                   " es recomendable hacer muchos de estos, para poder aprender."+
                   " El  hacer un ejercicio bien indica que comprendió,"+
                   " para realmente aprender se debe efectuar una gran cantidad de éstos.";
    subtem2[0][3] ="<b>Prerrequisito</b><br><br> Saber leer comprensivamente  "+
                   " <br>Tener paciencia para realizar las actividades propuestas."+
                   "<br>Utiizar la reflexión como herramienta de aprendizaje";
                  
  
 subtem2[1] = new Array (4);
 
    subtem2[1][0] = "<b>Dominio</b><br><br>Expresar el dominio de la relación como el conjunto de todos los primeros números de los pares ordenados (el dominio son todos los valores de x)" +
                   "<br><br><b>Ejemplo </b> <br><br> Resuelva paso a paso el problema planteado a la derecha, de acuerdo "+
                   " con el desarrollo presentado en el lado izquierdo. ";
          
  subtem2[1][1]  = "<b>Multiplicación de potencias</b><br><br>a<sup>n + m</sup> = a<sup> n </sup> a <sup> m</sup>"+
                   "<br><br><b>ejemplo 1.2 </b> <br><br>Llena la caja de texto que no tiene información"+
                   " de la derecha, siguiendo "+
                   "el ejemplo de la izquierda";
  subtem2[1][2] =  "<b>Factores de coeficientes numéricos</b><br<<br>"+
                  "<br><br><b>ejemplo 1.3 </b> <br><br> Siguiendo los pasos del ejemplo"+
                  " expuesto en la izquierda, encuentre los factores del número dado a la derecha.";
  subtem2[1][3]  = "<b>Máximo común divisor</b><br><br>"+
                  "Para hallar el máximo común divisor (M c d), se descomponen los términos en sus"+
                  " factores primos y se escogen los factores comunes con exponentes más pequeños de estos términos."+
                  "<br><br><b>ejemplo 1.4 </b> <br><br> "+
                  "Siguiendo los pasos del lado izquierdo, encuentre el M c d de la "+
                  "expresión dada en el lado derecho.";
          
 subtem2[1][4]  = "<b>Factor común</b><br><br>"+
                  "El factor común  de una expresión algebraica, son los términos que"+
                  " se repiten en toda la expresión algebraica.  Para obtener el factor común de "+
                  " los números primero descomponga estos de acuerdo a lo aprendido "+
                    "anteriormente. El factor común son los factores con los"+
                  "   más exponentes pequeños:"+
                  " <br><br>Ejemplo 1.4 <br> 2ax + 6x = 2ax + 2*3 x= 2x (a+3)<br><br>"+
                  " Haga los ejercicios del lado derecho, siguiendo el ejemplo de la izquierda.";
          
subtem2[2] = new Array (3); 

    subtem2[2][0] = "<b>Rango</b><br><br>Expresar el dominio de la relación como el conjunto de todos los segundos números de los pares ordenados (el dominio son todos los valores de y)" +
        "<br><br>Ejemplo <br><br>Resuelva paso a paso el problema planteado a la derecha, de acuerdo con el desarrollo presentado en el lado izquierdo";
                  
 subtem2[2][1] =  "<b>Dos factores sumados</b><br><br> Ejemplo 2.2 <br><br>"+
                   "Siguiendo los pasos del ejemplo expuesto en"+
                  " la izquierda, escriba en la derecha, la suma de los factores y en la caja de texto de abajo,"+
                  " escriba la suma pedida .";
subtem2[2][2]  =  "<b>Trinomio</b><br><br>"+
                  "Para factorizar un trinomio se buscan los factores de un número que sumado o restado den"+
                 " el número que acompaña a la variable que no está elevada al cuadrado."+
                 "Ejemplo 2.3 <br><br>Factorice el trinomio de la parte derecha, siga el ejemplo dado en "+
                 " en la parte izquierda";
         
subtem2[3] = new Array (3); 
         
subtem2[3][0] ="<b>Factor comunes en forma de sumas o restas</b><br><br>Se puede igualar la expresión"+
               " a una variable y se realiza con los métodos aprendidos<br><br> Ejemplo 3.1<br><br>"+
               "Realice la factorización siguiendo los pasos de la parte izquierda";
       
subtem2[3][1] ="<b>Factor común de dos en dos</b><br><br>Se puede igualar la expresión"+
               " a una variable y se realiza con los métodos aprendidos<br><br> Ejemplo 3.2"+
               "<br><br>Realice la factorización siguiendo los pasos de la parte izquierda";
       
subtem2[3][2] ="<b>Trinomio</b><br><br>Se puede igualar la expresión"+
               " a una variable y se realiza con los métodos aprendidos<br><br> Ejemplo 3.3<br><br>"+
               "Realice la factorización siguiendo los pasos de la parte izquierda";
       
subtem2[4] = new Array (3);  

subtem2[4][0] = "<b>Expresar un número al cuadrado</b><br><br>"+
                "Para expresar un número al cuadrado, descomponga el número en sus"+
                " factores, expréselo en forma exponencial, divida ese exponente entre dos "+
                 " y luego todo el término lo eleva al cuadrado: x<sup>n</sup> = (x<sup>n/2</sup>)"+
                 " <sup>2</sup><br><br>Realice los ejercicios de la derecha, siguiendo el ejemplo "+
                 " de la izquierda.";
subtem2[4][1] ="<b>Multiplicación de dos términos por 2</b><br><br>"+
                "El resultado,r  de multiplicar k<sub>1</sub> a <sup>n</sup>"+
                " por k<sub>2</sub> b <sup>m</sup> por 2  es : <br><br>"+
                " r= 2*k<sub>1</sub> a <sup>n</sup>*k<sub>2</sub> b <sup>m</sup>"+
                "<br><br> Ejemplo 4.2<br><br>"+
               "Realice el  producto  siguiendo los pasos de la parte izquierda";

subtem2[4][2] = "<b>Reconocimiento de un trinomio perfecto</b><br><br>"+
        " Para reconocer un trinomio perfecto, sáquele las caudradas del primer y tercer término,"+
        " multiplique este resultado por 2, y si da el término del medio es un cuadrado perfecto. "+
        "<br><br>Siga los ejemplos de la izquierda para resolver el ejercicio de la derecha.";
        
        
subtem2[4][3] = "<b>Trinomio perfecto con menos</b><br><br>"+
                "Lo mismo que el caso anterior pero en lugar de sumar los términos los resta."+
                "<br><br>Siga los ejemplos de la izquierda para resolver el ejercicio de la derecha.";

subtem2[5] = new Array (3);  

subtem2[5][0] ="<b>Expresar un término al cuadrado</b><br><br>El término a <sup>n</sup>"+
               " expresado al cuadrado es: <br><br> (a <sup>n/2</sup>)"+
                "<sup>2</sup><br><br> Ejemplo 4.1<br><br>"+
               "Exprese el término al cuadrado  siguiendo los pasos de la parte izquierda";
       
subtem2[5][1] = "<b>Diferencia de cuadrados</b><br><br>"+
                "Para factorizar una diferencia de cuadrado, sáquele el cuadrado a cada término"+
                " y luego los escribe como se muestra: "+
                " <br><br> a<sup>2</sup> - b<sup>2</sup> = (a - b)(a + b)"+
                "<br><br> Ejemplo 5.1<br><br>"+
               "Realice el  producto  siguiendo los pasos de la parte izquierda";
subtem2[5][2] = "<b>Trinomio cuadrado perfecto</b><br><br>"+
                "Un trinomio cuadrado perfecto tiene la forma (k<sub>1</sub>x)<sup>2</sup>+"+
                 "2k<sub>1</sub>k<sub>2</sub>xy + (k<sub>2</sub>y)<sup>2</sup>"+
                 "<br><br>Para resolverlo siga el ejemplo: <br><br>Ejemplo 4.3<br><br>"+
                 "Realice la factorización siguiendo los pasos de la parte izquierda";
         
subtem2[6] = new Array (3);  

subtem2[6][0] ="<b>Expresar un término al cubo</b><br><br>El término a <sup>n</sup>"+
               " expresado al cubo es: <br><br> (a <sup>n/3</sup>)"+
                "<sup>3</sup><br><br> Ejemplo 6.1<br><br>"+
               "Exprese el término al cubo  siguiendo los pasos de la parte izquierda";
       
subtem2[6][1] = "<b>Diferencia de cubos</b><br><br>"+
                "Para factorizar una diferencia de cubo, sáquele el cubo a cada término"+
                " y luego aplica la fórmula que se muestra: "+
                " <br><br> a<sup>3</sup> - b<sup>3</sup> = (a - b)(a<sup>2</sup> + ab"+
                " + b<sup>2</sup>)"+
                "<br><br> Ejemplo 6.1<br><br>"+
               "Realice el  producto  siguiendo los pasos de la parte izquierda";
subtem2[6][2] = "<b>Sumade cubos</b><br><br>"+
                "Para factorizar una diferencia de cubo, sáquele el cubo a cada término"+
                 " y luego aplica la fórmula que se muestra: "+
                 "<br><br> a<sup>3</sup> - b<sup>3</sup> = (a + b)(a<sup>2</sup> - ab"+
                  "+ b<sup>2</sup>)"+
                "<br><br> Ejemplo 6.2<br><br>"+
                 "Realice la factorización siguiendo los pasos de la parte izquierda";
       
//alert(" subtem2[i][j]"+subtem2[4][0]);
 
   var subtem= [["<b>Potencias</b><br><br>  a<sup>n</sup> = <u>a. a. a. a. . . .a</u>"+
                   " <br>&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; n veces"+
                   "<br><br><b>ejemplo 1.1 </b> <br><br> Resuelva paso a paso el problema planteado a la derecha, de acuerdo "+
                   " con el desarrollo presentado en el lado izquierdo. ",
                   "<b>Multiplicación de potencias</b><br><br>a<sup>n + m</sup> = a<sup> n </sup> a <sup> m</sup>"+
                   "<br><br><b>ejemplo 1.2 </b> <br><br>Llena las cajas de texto de la derecha, siguiendo "+
                   "el ejemplo de la izquierda, use como primer número el ",
                  "<b>Factores de coeficientes numéricos</b><br<<br>"+
                  "<br><br><b>ejemplo 1.3 </b> <br><br> Siguiendo los pasos del ejemplo"+
                  " expuesto en la izquierda, encuentre los factores del número dado a la derecha.",
                  "<b>Máximo común divisor</b><br><br>"+
                  "Para hallar el máximo común divisor (M c d), se descomponen los términos en sus"+
                  " factores primos y se escogen los factores comunes más pequeños de estos términos."+
                  "<br><br><b>ejemplo 1.4 </b> <br><br> "+
                  "Siguiendo los pasos del lado izquierdo, encuentre el M c d de la "+
                  "expresión dada en el lado derecho."],
                  ["<b>Factores de un número</b><br><br>"+
                  "<br><br>Ejemplo 2.1 <br><br>Siguiendo los pasos del ejemplo expuesto en"+
                  " la izquierda, encuentre los factores del número dado a la derecha.",
                   "<b>Dos factores sumados</b><br><br> Ejemplo 2.2 <br><br>"+
                   "Siguiendo los pasos del ejemplo expuesto en"+
                  " la izquierda, escriba en la derecha, la suma de los factores y en la caja de texto de abajo,"+
                  " escriba la suma pedida .",
                  "<b>Trinomio</b><br><br>"+
                  "Para factorizar un trinomio se buscan los factores de un número que sumado o restado den"+
                 " el número que acompaña a la variable que no está elevada al cuadrado."+
                 "Ejemplo 2.3 <br><br>Factorice el trinomio de la parte derecha, siga el ejemplo dado en "+
                 " en la parte izquierda"]];
 

  myObj2 = {
  "name":"John",
  "age":30,
  "temas": subtem2[i][j]
 
 };
 
//document.getElementById("mod").innerHTML = myObj2.temas[0].name+"<br>"+ myObj2.temas[0].models[1];

//var tem= myObj.tema[i].titulo_tema+"<br><br>"+myObj.tema[i].Contenido;

var tem = myObj2.temas;

 
return tem;
}
/*
   ,
         
 */
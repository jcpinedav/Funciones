/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//***************************0j0 ************************



//esta retroalimentación lo llama todos los programas
function retroAlimentacion2(x,y)
{
    // x es el tema.  y es el subtema
   
    var retro =[];
 
  
  //********** Case 0:  Es contextualización, no necesita retroalimentación. ************
   
   switch (x) {
  case 1:
        {
           // switch(y)
          //  {
           // case 0:
              //  {
              if(y===0)
              {
                    retro[0]= "Excelente.  El var1 se está multiplicando var2  veces. \n\n Resuelva el"+
                      " siguiente ejercicio.";
              
                     retro[1]="Su respuesta no es correcta.  Observe que en la parte izquierda"+
                             " el exponente"+
                       " es var3  porque el var4 se multiplica var5 veces."+
                      "  ¿Cuántas veces se está multiplicando el var6?";
            } //y=0
            
            else if(y===1)
            {
                retro[0]="Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.";
                            
                retro[1]=" Está equivocado.  ¿cuánto le hace falta al número var1 para ser var2?";
            }
            
             else if(y===2)
            {
                retro[0] = new Array(2);
                retro[0][0]="Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.";
                            
                retro[0][1]= " Está equivocado.  El resultado se  obtienen de dividir los números"+
                             " inmediatamente anteriores";
                     
                  retro[1] = new Array(4);
                retro[1][0]="Muy bien.  Está comprendiendo el tema";
                retro[1][1]="El factor está mal. Aquí debe escribir el factor en orden ascendente"+
                             "(primero los más pequeños). Comience con números mayor que 1.";
                retro[1][2]= " El número escrito no es un factor del número dado porque no lo divide"+
                                 " exactamente.";                         
               retro[1][3] =" Se esperaba un factor más grande.  Revise los factores escritos.";
               
                retro[2] = new Array(3);
               retro[2][0]="Muy bien, ese es uno de los números";
               retro[2][1]="el número no corresponde. ";
               retro[2][2]= "Mire si es el otro. Si no corresponde es porque está "+
                                " equivocado.";
                        
               retro[3] = new Array(4);
               retro[3][0]="Muy bien, ese es la base*"+
                       "el número no corresponde.  Recuerde que la base es el número que"+
                       " se escribe una vez, aunque este número aparezca "+
                       " varias veces.";
               retro[3][1]="Muy bien, es el exponente que representa las veces que se repite la base.*"+
                           "La respuesta está equivocada.  Recuerde que el exponente"+
                       " representa las veces que se repite la base.";
               
               
                       /*"el número no corresponde.  Recuerde que la base el el número que"+
                       " que es solo un número.";*/
               
              // retro[4] = new Array(3);
               //retro[3][2]=
               //retro[3][3]=
            }
              
            else if(y===3){
                
                 retro[0] = new Array(2);
                
                retro[0][0]="Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.";
                retro[0][1]= " Está equivocado.  El resultado se  obtienen de dividir los números"+
                             " inmediatamente anteriores";
                     
                retro[1] = new Array(4);
                
                retro[1][0]="Muy bien.  Está comprendiendo el tema";
                 retro[1][1]= "El factor está mal. Aquí debe escribir el factor en orden ascendente"+
                             "(primero los más pequeños) que divida exactamente al factor del lado ."+
                             "del lado izquierdo.";
               retro[1][2] =    " El número escrito no es un factor del número dado porque no lo divide"+
                                 " exactamente.";
              retro[1][3]=  " Se esperaba un factor más grande.  Revise los factores escritos.";
              
                retro[3] = new Array(4);
               retro[3][0]="Muy bien, ese es la base*"+
                       "el número no corresponde.  Recuerde que la base es el número que"+
                       " se escribe una vez, aunque este número aparezca "+
                       " varias veces.";
               retro[3][1]="Muy bien, es el exponente que representa las veces que se repite la base.*"+
                           "La respuesta está equivocada.  Recuerde que el exponente"+
                       " representa las veces que se repite la base.";
               
                retro[4] = new Array(4);
               retro[4][0]="Muy bien, ese es la base*"+
                       "el número no corresponde.  Recuerde que la base es el número que"+
                       " se escribe una vez, aunque este número aparezca "+
                       " varias veces.";
               retro[4][1]="Muy bien, es el exponente que representa las veces que se repite la base.*"+
                           "La respuesta está equivocada.  Recuerde que el exponente"+
                       " representa las veces que se repite la base.";
              
                
            }      
         else if(y===4){
             {
                 retro[0] = new Array(2);
                 
                 retro[0][0]= "Muy bien, esa es la base pedida.*"+
                               "Se presentaron errores, debe decomponer el número en sus"+
                               " factores y escribir la base correspondiente.  Si tiene dudas, "+
                                "repase"+
                                " el tema Factores numéricos.";
                                 
                 retro[0][1] ="Muy bien, es el exponente que se esperaba.*"+
                                   "Se presentaron errores, escriba las veces"+
                               " que se repite la base correspondiente."+
                                "  Si tiene dudas, repase"+
                                " el tema Factores numéricos.";
                        
                 /*         retro[1] = new Array(2);
                        
                   retro[1][0]= "Muy bien, esa es la base pedida.*"+
                               "Se presentaron errores, debe escoger el factor"+
                               " que se repite en toda la expresión algebraica.  Si tiene dudas, "+
                                "repase"+
                                " el tema Mcd.";
                                 
                 retro[1][1] ="Muy bien, es el exponente que se esperaba.*"+
                                   "Se presentaron errores, escriba el "+
                               " el exponente más pequeño del factor."+
                                "  común. Repase"+
                                " el tema Mcd.";
                        
                     retro[2] = new Array(2);
                        
                  retro[2][0]= "Muy bien, esa es la base pedida.*"+
                               "Se presentaron errores, debe escribri"+
                               " la base en orden de aparición. "+
                                ""+
                                " ";
                                 
                 retro[2][1] ="Muy bien, es el exponente que se esperaba.*"+
                                   "Se presentaron errores, si es factor común "+
                               " reste los exponentes. A lo contrario, "+
                                "  escriba el mismo exponente."+
                                " ";
                        */
                
                 retro[1] = new Array(2);
                 retro[1][0]= "Muy bien, es el factor común.*"+
                              "Se equivocó. En orden de aparición, mire cuál es el factor"+
                               " común y escriba"+
                               " la base de ese factor.";;
                 retro[1][1] = "Muy bien, es el exponente más pequeño de los factores comunes.*"+
                               "Está errado,  escriba aquí el exponente más "+
                               " pequeño de la base escrita.";
                       
                 retro[3] = new Array(2);
                 retro[3][0]= "Muy bien, es el exponente más pequeño de los factores comunes.*"+
                               "Está errado,  escriba aquí el exponente más "+
                               " pequeño del factor común.";;
                 retro[3][1] = "Está errado,  escriba aquí el exponente más "+
                               " pequeño del factor común.";
                       
                   retro[4] = new Array(2);
                 retro[4][0]= "Muy bien, esa es la base pedida.";
                 retro[4][1] = "Revise, se equivocó.  Aquí va una base. "+
                               " No olvide escribirla en el orden como aparacen.";
                       
                 retro[5] = new Array(2);
                 retro[5][0]= "Muy bien, ese es el exponente disminuido.";
                 retro[5][1] = "Revise, se equivocó.  Escriba en este caja el exponente. "+
                               " del factor.  Si es factor común réstele el exponente que escribió"+
                               " en el factor común.";
                      
             }
         }
            
          break; 
      }
      
      case 2:
          {
              if(y===0)
              {
                  
                   retro[0] = new Array(3);
                  retro[0][0]="Correcto,  ese es el factor";
                  retro[0][1]= "Se equivocó, escriba los factores en orden ascendente. "+
                                " Primero los más pequeños. comenzando con el 1.";
                  retro[0][2]= "Tiene errores, el número digitado no es factor del número dado. ";
                  
                  retro[1] = new Array(3);
                  retro[1][0]="Excelente, es el factor pedido: ";
                  retro[1][1]= "Se equivocó ¿Qué número multiplicado por var3"+
                                 " es igual a var4?";
                  retro[1][2]= "Tiene errores, el número digitado no es factor del número dado. ";
              }//y0
              
              else if(y===1)
              {
                  retro[0] = new Array(3);
                  retro[0][0]="Correcto,  ese es el factor";
                  retro[0][1]= "Se equivocó, escriba los factores en orden ascendente. "+
                                " Primero los más pequeños. comenzando con el 1.";
                  retro[0][2]= "Tiene errores, el número digitado no es factor del número dado. ";
                  
                  retro[1] = new Array(3);
                  retro[1][0]="Excelente, es el factor pedido: ";
                  retro[1][1]= "Se equivocó ¿Qué número multiplicado por var3"+
                                 " es igual a var4?";
                  retro[1][2]= "Tiene errores, el número digitado no es factor del número dado. ";
                  
                    retro[2] = new Array(2);
                  retro[2][0]="Muy bien.  La operación está bien hecha.";
                  retro[2][1]= "Se equivocó, Revise el resultado. "+
                                " de la operación.";
                        
                    retro[3] = new Array(2);
                  retro[3][0]="Muy bien.  El número esta bien.";
                  retro[3][1]= "Se equivocó, Escriba el otro número, "+
                                " si recibe mensaje de error, busque en la tercera columna."+
                                " de la suma o resta  de los factores que den el resultado pedido";
                        
                    retro[4] = new Array(2);
                  retro[4][0]="Muy bien.  El número esta bien.";
                  retro[4][1]= "Se equivocó, Escriba el otro número, "+
                                " busque en la tercera columna."+
                                " de la suma o resta  de los factores que den el resultado pedido";
              
              }
              else if(y===2)
              {
                  retro[0] = new Array(2);
                  retro[0][0]="Correcto,  ese es el número##"+
                          "Se equivocó, siga el procedimiento descrito en Suma_producto "+
                                " y de la tercera columna escoja los números pedidos.";
                  retro[0][1]= "Perfecto, identificó el número correspondiente.##"+
                          "Se presentaron errores, siga el procedimiento del subtema"+
                         "  anterior para determiar los números.";
                 
                  retro[1] = new Array(2);
                  retro[1][0]="Perfecto, el primar factor esta bien formado.##"+
                         "Se presentaron errores.Utilizando los números"+
                         "  identificados, exprese el factor de manera similar al."+
                         " ejemplo de la izquierda.";
                  retro[1][1]="Muy bien, identificó bien el segundo factor.##"+
                         "Tiene errores, mire el ejemplo de la izquierda"+
                         "  para construir el factor.";
              }
              
                 
          }//cse 2
          break;
  case 3:
          {
                          
            if(y===0)
              {
                  retro[0] = new Array(2);
                  retro[0][0]="Correcto,  ese es el valor de z*"+
                              "Se equivocó, z se iguala al  factor común."+
                              " Mire el ejemplo a la izquierda. ";
                  retro[0][1]= ""+
                                " ";
                                    
                  retro[1] = new Array(2);
                  retro[1][0]="Perfecto, reemplazó bien a z.*"+
                               "Se presentaron errores, en lugar de la expresión en paréntesis, "+
                               "escriba z";
                  retro[1][1]=" Mire el ejemplo ubicado a la izquierda de la pantalla.";
                 
                  retro[2] = new Array(2);
                  retro[2][0]="Perfecto, ese es el factor común.*"+
                              "Se presentaron errores, ¿Cuáles son los factores que se "+
                             "  repiten en la expresión.  Siga el ejemplo a su izquierda.";
                  retro[2][1]="Se presentaron errores, ¿Cuáles son los factores que se "+
                         "  repiten en la expresión.  Siga el ejemplo a su izquierda.";
                 
                   retro[3] = new Array(3);
                  retro[3][0]="Excelente, eso son los factores no comunes.*"+
                             "Escriba los factores no comunes, si hay números"+
                             " saque el factor común con el procedimiento aprendido"+
                             ".  Mire el ejemplo.";
                  retro[3][1]="Muy bien*Escriba los factores no comunes, si hay números"+
                             " saque el factor común con el procedimiento aprendido"+
                             ".  Mire el ejemplo.";
                     
                   retro[3][2]="Excelente*Escriba los factores no comunes, si hay números"+
                             " saque el factor común con el procedimiento aprendido"+
                             ".  Mire el ejemplo.";
                 
                   retro[4] = new Array(2);
                  retro[4][0]="Perfecto, ese es el resultado cuando se reemplaza a z";
                  retro[4][1]="Se presentaron errores, escriba el número si hay a lo contrario "+
                         "  el valor de z.  Siga el ejemplo a su izquierda.";
                 
                 retro[5] = new Array(2);
                  retro[5][0]="Perfecto, z es el factor común.";
                  retro[5][1]="Se presentaron errores, reemplace a z. "+
                         "  Siga el ejemplo a su izquierda.";
                 
                  retro[6] = new Array(2);
                  retro[6][0]="Perfecto, el factor está bien escrito.";
                  retro[6][1]="Se presentaron errores, escriba el último factor "+
                         "  del término anterior.";
              }
              else if(y===1)
              {
                   retro[0] = new Array(2);
                  retro[0][0]="Correcto,  ese es el factor de los dos primeros términos.";
                  retro[0][1]= "Se equivocó, saque el factor común de los. "+
                                " dos primeros términos.  Siempre mire el ejemplo a su izquierda.";
                                    
                  retro[1] = new Array(2);
                  retro[1][0]="Perfecto,  esos son los factors que quedan.";
                  retro[1][1]="Compare estos factores con el factor común. Escriba los"+
                         " que quedan. Mire el ejemplo ubicado a la izquierda de la pantalla.";
                 
                  retro[2] = new Array(2);
                  retro[2][0]="Perfecto, ese es el factor común.";
                  retro[2][1]="Se presentaron errores, ¿Cuáles son los factores que se "+
                         "  repite en la expresión.  Siga el ejemplo a su izquierda.";
                 
                   retro[3] = new Array(2);
                  retro[3][0]="Excelente, eso son los factores no comunes.";
                  retro[3][1]="Escriba los factores no comunes, si hay números"+
                             " saque el factor común con el procedimiento aprendido"+
                             ".  Mire el ejemplo.";
                 
                   retro[4] = new Array(2);
                  retro[4][0]="Perfecto, ese es el resultado cuando se reemplaza a z";
                  retro[4][1]="Se presentaron errores, escriba el número "+
                         "  Siga el ejemplo a su izquierda.";
                 
                 retro[5] = new Array(2);
                  retro[5][0]="Perfecto, z es el factor común.";
                  retro[5][1]="Se presentaron errores, reemplace a z. "+
                         "  Siga el ejemplo a su izquierda.";
                 
                  retro[6] = new Array(2);
                  retro[6][0]="Perfecto, el factor está bien escrito.";
                  retro[6][1]="Se presentaron errores, escriba el último factor "+
                         "  del término anterior.";
                 
                  retro[7] = new Array(2);
                  retro[7][0]="Excelente, eso son los factores no comunes.";
                  retro[7][1]="Escriba los factores no comunes, si hay números"+
                             " saque el factor común con el procedimiento aprendido"+
                             ".  Mire el ejemplo.";
                     
               
                   retro[8] = new Array(2);
                  retro[8][0]="Perfecto, ese es el resultado cuando se reemplaza a z";
                  retro[8][1]="Se presentaron errores, escriba el número si hay a lo contrario "+
                         "  el valor de z.  Siga el ejemplo a su izquierda.";
                 
                 retro[9] = new Array(2);
                  retro[9][0]="Perfecto, z es el factor común.";
                  retro[9][1]="Se presentaron errores, reemplace a z. "+
                         "  Siga el ejemplo a su izquierda.";
                 
                  retro[10] = new Array(2);
                  retro[10][0]="Perfecto, el factor está bien escrito.";
                  retro[10][1]="Se presentaron errores, escriba el último factor "+
                         "  del término anterior.";
                     
              }
              if(y===2)
              {
                  
                  retro[0] = new  Array(2);
                   retro[0][0]="Muy bien, ese es el factor.";
                  retro[0][1]="Error, no coincide con el factor del número"+
                         " Si tiene dudas, estudie nuevamente el tema trinomio +"+
                         "Suma - producto. \n\nATENCIÓN: Recuerde probar"+
                     " con el otro factor en la primera caja";
             
               retro[1] = new  Array(2);
                   retro[1][0]="Muy bien, ese es el otro factor.";
                  retro[1][1]="Error, no coincide con el factor del número"+
                         " Si tiene dudas, estudie nuevamente el tema trinomio +"+
                         "Suma - producto. ";
                 
                   retro[2] = new  Array(2);
                   retro[2][0]="Muy bien, ese es el factor.";
                  retro[2][1]="Error, aquí debe ecribir el primer término de la expresión"+
                         " algebraica, sin el cuadrado";
                 
                    retro[3] = new  Array(2);
                   retro[3][0]="Muy bien, ese es el exponente.";
                  retro[3][1]="Se equivocó, el exponente va "+
                         " al  cuadrado porque es un trinomio cuadrado.";
                 
                    retro[4] = new  Array(2);
                    retro[4][0]="Muy bien, el término está bien escrito";
                    retro[4][1]="Hay errores, utilice  "+
                         " los números hallados.  Escriba el signo del número.";
                 
                  
                   retro[5] = new  Array(2);
                   retro[5][0]="Muy bien, ese es el factor.";
                  retro[5][1]="Error, aquí debe el otro número con su literal"+
                         " y el signo.";
                 
                    retro[6] = new  Array(2);
                   retro[6][0]="Muy bien, ese es el último término que es un número.";
                  retro[6][1]="Se equivocó, escriba aquí el último termino que es un"+
                         " número.";
                 
                    retro[7] = new  Array(2);
                    retro[7][0]="Muy bien, el término está bien escrito";
                    retro[7][1]="Hay errores, Escriba el factor comúbn de los dos   "+
                         " primeros términos.";
                 
                  retro[8] = new  Array(2);
                    retro[8][0]="Muy bien, el término está bien escrito";
                    retro[8][1]="Debe escribir lo que queda después de sacar el "+
                         " factor común.";
                 
                    retro[9] = new  Array(2);
                    retro[9][0]="Muy bien, el término está bien escrito";
                    retro[9][1]="Hay errores, Escriba el factor comúbn de los dos   "+
                         " últimos términos.";
                 
                  retro[10] = new  Array(2);
                    retro[10][0]="Muy bien, el término está bien escrito";
                    retro[10][1]="Se presntaron errores. Debe escribir lo que queda"+
                            " después de sacar el "+
                         " factor común.";
                 
                   retro[11] = new  Array(2);
                    retro[11][0]="Muy bien, ese es el valor de z";
                    retro[11][1]="Se equivocó. El valor de z es  "+
                         " el factor común de la nueva expresión (¿Que se."+
                         " repite en los términos?)";
                 
                 
                   retro[12] = new  Array(2);
                    retro[12][0]="Muy bien, el reempalzo está bien hecho";
                    retro[12][1]="Se equivocó. En lugar  "+
                         " de los paréntesis y su información "+
                         " escriba z.";
                 
                    retro[13] = new  Array(2);
                    retro[13][0]="Muy bien, se ve que domina el factor común";
                    retro[13][1]="Se presentarom errores.   "+
                         " obtenga el factor común de la nueva expresión "+
                         ".";
                 
                  retro[14] = new  Array(2);
                    retro[14][0]="Perfecto, eso es lo queda";
                    retro[14][1]="Hay errores.   "+
                         " ¿Qué queda después de sacar el factor común? "+
                         ".";
                 
                  retro[15] = new  Array(2);
                    retro[15][0]="Muy bien, el reempalzo está bien hecho";
                    retro[15][1]="Se equivocó. En lugar  "+
                         " de los paréntesis y su información "+
                         " escriba z.";
                 
                    retro[16] = new  Array(2);
                    retro[16][0]="Muy bien, se ve que domina el factor común";
                    retro[16][1]="Se presentarom errores.   "+
                         " obtenga el factor común de la nueva expresión "+
                         ".";
                 
                  retro[17] = new  Array(2);
                    retro[17][0]="Perfecto, eso es lo queda";
                    retro[17][1]="Hay errores.   "+
                         " ¿Qué queda después de sacar el factor común? "+
                         ".";
                 
              }
              
                 
          }
          break;
        case 4:
          {
                 if(y===0)
                 {
                   retro[0] = new Array(2);
                 retro[0][0] = "Muy bien.  Esa es la base que se esperaba.";
                  retro[0][1] = "Se presentaron errores. Si hay un número debe descomponerlo, como"+
                          " se hizo en temas anteriores.  Los literales escríbalos igual.";
                   retro[1] = new Array(2);
                   retro[1][0] = "Muy bien.  Esa son las veces que se repite el exponente.";
                  retro[1][1] = "Se equivocó. Si descompuso el número, escriba las veces."+
                          " que se repite la base, como se hizo en temas anteriores.  "+
                          "Los literales escríbalos con el mismo exponente.";
                  
                 retro[2] = new Array(2);
                 retro[2][0] = "Muy bien.  Esa es la base que se esperaba.";
                  retro[2][1] = "Se presentaron errores. Escriba la misma base de ."+
                          " la parte anterior.";
                   retro[3] = new Array(2);
                   retro[3][0] = "Muy bien.  El exponente se divide en 2.  Equivale a sacar."+
                           " la raíz cuadrada";
                  retro[3][1] = "Se equivocó. Divida el exponente entre dos."+
                          "   "+
                          "";
                 retro[4] = new Array(2);
                   retro[4][0] = "Muy bien.  Se debe elevar cuadrado"+
                           " la raíz cuadrada";
                  retro[4][1] = "Se equivocó. Eleve el término al cuadrado."+
                          "   "+
                          "";  
                 }//y=0
                 if(y===1)
                 {
                      retro[0] = new Array(2);
                      
                      retro[0][0] ="Muy bien, el producto está bien hecho. ";
                      retro[0][1] =" Se presentaron errores, multiplica  "+
                                  " los factores numéricos y éstos, agréguele"+
                                  " los factores literales ";
                      
                     
                 }//y=1
                 if(y===2)
                 {
                     retro[0] = new Array(2);
                      
                      retro[0][0] ="Excelente. ";
                      
                      retro[0][1] =" Se presentaron errores, descomponga el primer  "+
                                  " término para conocer sus bases."+
                                  " Mire el ejemplo. "; 
                          
                    retro[1] = new Array(2);
                      
                      retro[1][0] ="Muy bien, es el exponente. ";
                      
                      retro[1][1] =" Se equivocó, divida el exponente  "+
                                  " entre dos."+
                                  " Mire el ejemplo. "; 
                     retro[2] = new Array(2);
                      
                      retro[2][0] ="Excelente. ";
                      
                      retro[2][1] =" Se presentaron errores, descomponga el primer  "+
                                  " término para conocer sus bases."+
                                  " Mire el ejemplo. "; 
                          
                    retro[3] = new Array(2);
                      
                      retro[3][0] ="Muy bien, es el exponente. ";
                      
                      retro[3][1] =" Se equivocó, divida el exponente  "+
                                  " entre dos."+
                                  " Mire el ejemplo. "; 
                     retro[4] = new Array(1);
                      
                      retro[4][0] ="Muy bien. Ese es el producto ";
                      
                      retro[4][1] =" Se equivocó, multiplique  "+
                                  " los términos numericos y luego este resultado por 2."+
                                  " Mire el ejemplo. "; 
                          
                      retro[5] = new Array(2);
                      
                      retro[5][0] ="Muy bien. Ese es el producto ";
                      
                      retro[5][1] =" Se equivocó, multiplique  "+
                                  " los términos numericos y luego este resultado por 2."+
                                  " Mire el ejemplo. "; 
                 }//y=2
                if(y===3)
                 {
                     
                 }//y=3
          }
          break;
          
    case 5:
          {
               if (y===0)
              {
                   retro[0] = new Array(4);
                 retro[0][0]= "Perfecto, siga así*"+
                         "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala.";;
                 // retro[0][1]= 
          
                //  retro[1] = new Array (2);
                  
                  retro[0][1]= "Excelente, el exponente está bien escrito*"+
                          "Tiene errores, ahí debe escribir el exponente."+
                  " Recuerde las vecesque se repite la base.  Si es el exponente del  "+
                  " del literal, escríbalo igual.";
          
                  retro[0][2]= "Correcto, es una base*"+
                          "Tiene errores, ahí debe escribir la base ."+
                  " Recuerde es el número o el literal  "+
                  " que se escriba una vez.";
          
                  retro[0][3]= "Correcto, ya identifica bien los exponentes*"+
                          "Tiene errores, ahí debe escribir el exponente."+
                  " Si tiene dudas realice nuevamente los ejercicios  "+
                  " para que se acuerde del procediiento.";
          
               retro[1] = new Array(4);
               
                 retro[1][0]= "Perfecto, siga así*"+
                         "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala.";;
                
                  retro[1][1]= "Excelente, el exponente está bien escrito*"+
                          "Tiene errores, ahí debe escribir el exponente."+
                  " Recuerde las vecesque se repite la base.  Si es el exponente del  "+
                  " del literal, escríbalo igual.";
          
                 retro[1][2]= "Correcto, es una base*"+
                           "Tiene errores, ahí debe escribir la base ."+
                  " Recuerde es el número o el literal  "+
                  " que se escriba una vez.";
          
                  retro[1][3]= "Correcto, ya identifica bien los exponentes*"+
                          "Tiene errores, ahí debe escribir el exponente."+
                  " Si tiene dudas realice nuevamente los ejercicios  "+
                  " para que se acuerde del procediiento.";
               
               retro[2] = new Array(2);
               
                retro[2][0]= "Perfecto, esa es la base base pedida  .Siga así*"+
                         "Tiene errores, Escriba el número junto con la una base."+
                         "  El número es el resultado de hacer las operaciones"+
                  " ";
           
                retro[2][1]= "Bien, siga así. Ya reconoce los exponentes.*"+
                         "Tiene errores, Escriba el número junto con la una base."+
                         "  El número es el resultado de hacer las operaciones"+
                  " ";
                
                  
                  
              }
              
             else if (y===1)
              {
                   retro[0] = new Array(6);  //Una base
                   retro[0][0]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[0][1]= "Perfecto, esa es el exponente."+
                         "*"+"Se equivocó, Escriba el exponente del número o el exponente del literal."+
                          "  según sea el caso.  Recuerde que es las veces que se repite"+
                          "  la base";
                 retro[0][2]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[0][3]=  "Perfecto, esa es el exponente."+
                         "*"+"Se equivocó, Escriba el exponente del número o el exponente del literal."+
                          "  según sea el caso.  Recuerde que es las veces que se repite"+
                          "  la base";
                  
                  retro[0][4]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[0][5]=  "Perfecto, esa es el exponente."+
                         "*"+"Se equivocó, Escriba el exponente del número o el exponente del literal."+
                          "  según sea el caso.  Recuerde que es las veces que se repite"+
                          "  la base";
                 
                  retro[1] = new Array(4);  //Una base
                   retro[1][0]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[1][1]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[1][2]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[1][3]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 
                   retro[1][4]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 retro[1][5]= "Perfecto, esa es la base del número descompuesto, o en su defecto"+
                         " el literal."+
                         "*"+"Tiene errores, Si es un número, debe descomponerlo y escribir."+
                          "  su base."+
                         "  Si es un literal (letra), escríbala";
                 
                     retro[2] = new Array(4);  //Una base
                   retro[2][0] = "Perfecto, las operaciones están bien efectuadas*"+
                           "Tiene errores.  Escriba aquí el resulatdo de hacer las "+
                           " operciones con los números. \n\n"+
                           "Si hay un literal escríbalo después del número en la misma"+
                           "  caja de texto.\n\n Revise que haya realizado bien las operaciones"+
                           " y si hay un literal, asegúrese de escribirlo bien."+
                           "\n\nSi no hay números escriba el literal solamente";
                   
                    retro[2][1] = "Perfecto, el exponente se dividió entre dos*"+
                           "Tiene errores.  Aquí escribir el exponente del "+
                           " literal dividido en 2.";
                   
                    retro[2][2] = "Perfecto, las operaciones están bien efectuadas*"+
                           "Tiene errores.  Escriba aquí el resulatdo de hacer las "+
                           " operciones con los números del segundo término. "+
                           "Observe:\n\n"+
                           "Si hay un literal escríbalo después del número en la misma"+
                           "  caja de texto.\n\n Revise que haya realizado bien las operaciones"+
                           " y si hay un literal, asegúrese de escribirlo bien."+
                           "\n\nSi no hay números escriba el literal solamente";
                   
                    retro[2][3] = "Perfecto, el exponente se dividió entre dos*"+
                           "Tiene errores.  Aquí escribir el exponente del "+
                           " literal del segundo término dividido en 2.";
                   
                        retro[3] = new Array(4);  //Una base
                       retro[3][0] = "Perfecto, las operaciones están bien efectuadas*"+
                           "Tiene errores.  Escriba aquí el resulatdo de hacer las "+
                           " operciones con los números. \n\n"+
                           "Si hay un literal escríbalo después del número en la misma"+
                           "  caja de texto.\n\n Revise que haya realizado bien las operaciones"+
                           " y si hay un literal, asegúrese de escribirlo bien."+
                           "\n\nSi no hay números escriba el literal solamente";
                   
                    retro[3][1] = "Perfecto, el exponente se dividió entre dos*"+
                           "Tiene errores.  Aquí escribir el exponente del "+
                           " literal dividido en 2, lo mismo que en el primer factor.";
                   
                     retro[3][2] = "Perfecto, las operaciones están bien efectuadas*"+
                           "Tiene errores.  Escriba aquí el resulatdo de hacer las "+
                           " operciones con los números del segundo término. "+
                           "Observe:\n\n"+
                           "Si hay un literal escríbalo después del número en la misma"+
                           "  caja de texto.\n\n Revise que haya realizado bien las operaciones"+
                           " y si hay un literal, asegúrese de escribirlo bien."+
                           "\n\nSi no hay números escriba el literal solamente";
                   
                     retro[3][3] = "Perfecto, el exponente se dividió entre dos*"+
                           "Tiene errores.  Aquí escribir el exponente del "+
                           " literal dividido en 2, lo mismo que en el primer factor.";
                   
                   
              
              }
              
          }
          break;
   case 6:
          {
              if (y===0)
              {
                  retro[0] = new Array(2);
                   retro[0][0]= "Perfecto, siga así";
                  retro[0][1]= "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala";
          
                 retro[1] = new Array(2);
                 retro[1][0]= "Perfecto, el exponente está bien escrito";
                 retro[1][1]= "Tiene errores, ahí debe escribir el exponente."+
                         "  de la base escrita"+
                " ¿Cuántas veces se repite esa base.";
        
                retro[2] = new Array(2);
                 
                 retro[2][0]= "Perfecto, esa es la base pedida";
                  retro[2][1]= "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                " descomponerlo. Si es un literal (letra), escríbala";
        
                 retro[3] = new Array(2);
        
                 retro[3][0]= "Perfecto, esa es el exponente.";
                  retro[3][1]= "Tiene errores, ahí debe escribir el exponente. "+
                          " dividido en 3."+
                "  Esto equivale a sacar la raíz cúbica de un término.";
        
                  retro[4] = new Array(2);
               
                  retro[4][0]= "Perfecto, esa es la base base pedida  .Siga así*"+
                         "Tiene errores, Escriba el número junto con la una base."+
                         "  El número es el resultado de hacer las operaciones"+
                  " ";
          
               //  retro[5] = new Array(2);
           
                  retro[4][1]= "Bien, siga así. Ya reconoce los exponentes.*"+
                         "Tiene errores, Aquí el exponente original dividdo entre 3."+
                         "  Eso equivale a la raíz cúbica"+
                  " ";
          
                  /* retro[5][1]= "Bien, siga así. Ya reconoce los exponentes.*"+
                         "Tiene errores, Escriba el número junto con la una base."+
                         "  El número es el resultado de hacer las operaciones"+
                  " ";*/
              }
              else  if (y===1)
              {
                    retro[0] = new Array(2);
                 retro[0][0]= "Perfecto, siga así";
                  retro[0][1]= "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala";
          
                   retro[1] = new Array(2);
                 retro[1][0]= "Perfecto, el exponente está bien escrito";
                 retro[1][1]= "Tiene errores, ahí debe escribir el exponente."+
                         "  de la base escrita"+
                " ¿Cuántas veces se repite esa base.";
        
                 retro[2] = new Array(2);
                 
                 retro[2][0]= "Perfecto, esa es la base pedida";
                  retro[2][1]= "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                " descomponerlo. Si es un literal (letra), escríbala";
             
                  retro[3] = new Array(2);
                  
                  retro[3][0]= "Muy bien, el exponente está bien.";
                  retro[3][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                 retro[4] = new Array(2);
                 
                 retro[4][0]= "Perfecto, esa es la base pedida";
                  retro[4][1]= "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                " descomponerlo. Si es un literal (letra), escríbala";
             
                  retro[5] = new Array(2);
                  
                  retro[5][0]= "Muy bien, el exponente está bien.";
                  retro[5][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                 retro[6] = new Array(2);
                  
                  retro[6][0]= "Muy bien, el exponente está bien.";
                  retro[6][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                retro[7] = new Array(7);
                  
                  retro[7][0]= "Muy bien, el exponente está bien.";
                  retro[7][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
              retro[8] = new Array(2);
                  
                  retro[8][0]= "Muy bien, el exponente está bien.";
                  retro[8][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                retro[9] = new Array(2);
                  
                  retro[9][0]= "Muy bien, el exponente está bien.";
                  retro[9][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                retro[10] = new Array(2);
                  
                  retro[10][0]= "Muy bien, el exponente está bien.";
                  retro[10][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                retro[11] = new Array(2);
                  
                  retro[11][0]= "Muy bien, el exponente está bien.";
                  retro[11][1]= "Tiene errores, ahí debe escribir el exponente de la "+
                " base que escribió.";
        
                   //**************Última línea *****************
                    retro[12] = new Array(2);
                  
                  retro[12][0]= "Muy bien, el término está bien escrito.";
                  retro[12][1]= "Tiene errores, ahí debe escribir la base "+
                " que puede tener un número y un literal, o solo e literal si el "+
                " coeficiente numérico es 1.";
        
                  retro[13] = new Array(2);
                  
                  retro[13][0]= "Muy bien, el exponente está bien.";
                  retro[13][1]= "Tiene errores, ahí debe escribir el exponente"+
                " del literal  que escribió.";
        
                   retro[14] = new Array(2);
                  
                  retro[14][0]= "Muy bien, aquí va la raíz cúbica del segundo término.";
                  retro[14][1]= "Tiene errores, allí debe escribir la raíz cúbica del"+
                          " segundo término, "+
                          " acompañado "+
                    "  del literal  correspondiente.  Si el coeficiente numérico es 1,"+
                    " ecriba el literal.";
            
              retro[15] = new Array(2);
                  
                  retro[15][0]= "Muy bien, ese es factor.";
                  retro[15][1]= "Tiene errores, debe dividir el exponente original entre 3. "+
                    "";
            
              
              retro[16] = new Array(2);
                  
                  retro[16][0]= "Muy bien, ese término se eleva al cuadrado.";
                  retro[16][1]= "Tiene errores, debe elevar el término al cuadrado y en la"+
                    " misma caja de texto, escribir el literal correspondiente.";
            
                   retro[17] = new Array(2);
                 retro[17][0]= "Perfecto, el exponente del literal se multiplica por 2.";
                  retro[17][1]= "Está equivocado, debe multiplicar el "+
                    " exponente del literal por 2.";
            
                retro[18] = new Array(2);
                 retro[18][0]= "Excelente, esta es la raíz cúbica del primer término.";
                  retro[18][1]= "Tiene errores, debe ecribir la raíz cubica del primer término"+
                    " \n\nRecuerde: Primero el coeficiente numérico y luego el literal.";
            
                   retro[19] = new Array(2);
                 retro[19][0]= "Perfecto, este es el exonente del literasl.";
                  retro[19][1]= "Está equivocado, debe escribir "+
                    " exponente del literal, después de dividir por 3 el  exponente del segundo "+
                    " término original.";
               
              }
               else  if (y===2)
              {
                  
              }
              
              
          }
          break;
  // else if(2)
   
 
}//switch


return retro;
}






/*function retroAlimentacion(x,y)
{
    // alert("x: "+x);
    var day;
    var retro;
  // alert("x "+x+ " y "+y);
  
  //********** Case 0:  Es contextualización, no necesita retroalimentación. ************
   
   switch (x) {
  case 1:
        {
            switch(y)
            {
            case 0:
                {
                    
                     retro=["Excelente.  El var1 se está multiplicando var2  veces. \n\n Resuelva el"+
                      " siguiente ejercicio.",
                       "Su respuesta no es correcta.  Observe que en la parte izquierda el exponente"+
                       " es var3  porque el var4 se multiplica var5 veces."+
                      "  ¿Cuántas veces se está multiplicando el var6?"];
                break;
                }
                
            case 1:
                 {
                  retro = ["Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.",
                            " Está equivocado.  ¿cuánto le hace falta al número var1 para ser var2?"];
                 }                   
                 break;
                 
            case 2:
                   {
                   retro = [["Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.",
                            " Está equivocado.  El resultado se  obtienen de dividir los números"+
                             " inmediatamente anteriores",
                               ""],
                            ["Muy bien.  Está comprendiendo el tema",
                            "El factor está mal. Aquí debe escribir el factor en orden ascendente"+
                             "(primero los más pequeños). "+
                             "",
                             " El número escrito no es un factor del número dado porque no lo divide"+
                                 " exactamente.",
                              " Se esperaba un factor más grande.  Revise los factores escritos."],
                            ["Muy bien, ese es uno de los números","el número no corresponde. "+
                                    "Mire si es el otro. Si no corresponde es porque está "+
                                " equivocado."],
                            ["",""]];  
                 
                        break;
                   }
               case 3:
                   {
                   retro = [["Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.",
                            " Está equivocado.  El resultado se  obtienen de dividir los números"+
                             " inmediatamente anteriores",
                               ""],
                            ["Muy bien.  Está comprendiendo el tema",
                            "El factor está mal. Aquí debe escribir el factor en orden ascendente"+
                             "(primero los más pequeños) que divida exactamente al factor del lado ."+
                             "del lado izquierdo.",
                             " El número escrito no es un factor del número dado porque no lo divide"+
                                 " exactamente.",
                              " Se esperaba un factor más grande.  Revise los factores escritos."]];  
                   
                        break;
                   }
                   case 4:
                   {
                   retro = [["Perfecto, esa es la respuesta esperada.  Continúe con el ejercicio.",
                            " Está equivocado.  Descomponga el número en sus factores"+
                             " y escriba la base",
                               ""],
                            ["Muy bien.  Está comprendiendo el tema",
                            "No es correcto, escriba aquí, las veces"+
                             " que se repite la base. Ese es el exponente.",
                             " El número escrito no es un factor del número dado porque no lo divide"+
                                 " exactamente.",
                              " Se esperaba un factor más grande.  Revise los factores escritos."],
                           ["Excelente, esa es la base pedida.",
                              "Se presentaron errores, aquí van las bases comunes de la "+
                                  " expresión algebraica.  Primero van los ceoficientes"+
                                 " númericos y después los literales"],
                          ["Muy bien, ese es el mínimo exponente del factor común",
                              "Revise, se equivocó.  Aquí va el exponente más pequeño de este"+
                                  " factor común."],
                           ["Perfecto, esa es la base pedida.",
                              "Se presentaron errores, aquí van las mismas bases de la  "+
                                  " expresión algebraica. "],
                          ["Muy bien, el exponente está bien disminuido",
                              "Revise, se equivocó.  Al exponente se le resta el exponente"+
                                  " que tenga la base correspondiente en el factor común."]];  
                   
                     break;
                        
                       
                   }
             //break;
            }//y
             
      }//switch
   
   
  case 2:
  {
        switch(y)
        {
            case 0:
                {
                  retro = [["Correcto,  ese es el factor",
                  "Se equivocó, escriba los factores en orden ascendente. "+
                   " Primero los más pequeños. comenzando con el 1.",
                  "El número var1 no es factor de var2"],
                  ["Excelente, es el factor pedido: ",
                         "Se equivocó ¿Qué número multiplicado por var3"+
                                 " es igual a var4?",
                          "Escriba en esta columna descendte, primero los más grna",
                         " algo 2"]];
                }//20
                
                 
               break;
         case 1:
                {
                  retro = [["Muy bien ese es el factor",
                  "Se equivocó, escriba los factores en orden ascendente. "+
                   " Primero los más pequeños. comenzando con el 1.",
                  "El número var1 no es factor de var2"],
                  ["Muy bien es el factor pedido: ",
                         "Se equivocó ¿Qué número multiplicado por var3"+
                                 " es igual a var4?",
                         " algo 2"],
                 ["Muy bien, ese es el resultado de la suma ",
                 "Se equivocó en la ope1, revise."],
                ["Muy bien, ese es el número"," Se equivocó"]];
                }//21
                
                 
               break;
       case 2:
                {
                     
                   retro =[["Correcto, ese es el factor.",
                            "Error, no coincide con el factor del número"+
                           " Si tiene dudas, estudie nuevamente el tema anterior.\n\nRecuerde probar"+
                           " con el otro factor en la primera caja",
                        ""],
                     ["Muy bien, ese es el factor.",
                     "Error, no coincide con el factor del número"+
                         " Si tiene dudas, estudie nuevamente el tema anterior.\n\nRecuerde "+
                     " probar con el otro factor en la primera caja"],
                     ["Muy bien ese es el factor pedido.",
                     " Su respuesta esta equivocada.  Revise: \n\n1. Si la letra coincide"+
                     "\n2.  Los signos corresponden.\n El número escrito es un  factor"],
                     ["Excelente ese es el factor pedido.",
                     " Su respuesta esta equivocada.  Revise: \n\n1. Si la letra coincide"+
                     "\n2.  Los signos corresponden.\n 3. El número escrito es un  factor"+
                    " 4.  El orden de los números."]];  
                }//22
                
                 break;
           }
      break;
  } //swtich
         
  case 3:
        {
           // alert("x: "+x + " y: "+y);
            retro =[[ "Muy bien, es el factor común",
	                "Se presentaron errores, la información proveída no es el factor"+
                        " común de los dos primeros términos.  Revise, si tiene dudas repase"+
                        " nuevamente la factorización."],
                        ["Muy bien, estos son los factores no comunes.",
                         "Hubo equivocaciones, en esta caja escriba el término completo."+
                         "  Si tiene dudas estudie nuevamente la factorización."],
                         ["Excelente, ese es el factor pedido.",
                         "La respuesta no es correcta.  **Tenga en cuenta que debe escribir"+
                         " el factor común con su signo. No es signo del factor común."+
                         "**  El factor común no corresponde a los dos últimos términos."  +
                         "repase nuevamente el tema de factorización."],
                        ["Muy bien, esos son los factores.",
                          "Tiene errores; revise, en caso de dudas estudie nuevamente el tema."],
                        ["Perfecto, z es el factor común","Tiene errores, z es el factor común."],
                        ["Muy bien, esa es la expresión esperada", "Tiene errores, z es el factor "+
                          " común  forma de expresión algebraica (en forma de suma o resta)."],
                        [" Muy bien", " Está incorrecto.  Obtenga el factor común de la expresión anterior."],
                         ["Perfecto, esa es la solución","Corrija se presentaron errores. Escriba lo que"+
                                     " queda después de sacar el factor común."],
                        ["Muy bien ","Este factor está mal escrito, mire el ejemplo de la dereccha"],
                        ["Perfecto, ese es el valor de z.","Tiene errores reemplace a z."],
                        ["Excelente, esta es la expresión que acompaña a z.","Se equivocó, escriba aquí"+
                                " la expresión que compaña a z."]];
           break;
           
        }//3
     retro = "Tuesday";
    break;
  case 4:
       {
      
       }//case 4
    break;
  case 5:
    retro = "Thursday";
    break;
  case 6:
  { retro =[["Perfecto, siga así",
             "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala"],
             ["Excelente, ese es el exponente pedido.",
              "En la descomposición del número cuál es el exponente correspondiente"+
                   " a esa base.  Si es un literal escriba el exponente que lo acompaña."],
            ["Muy bien, siga así",
             "Tiene errores, ahí debe escribir una base.  Si es número primero debe"+
                  " descomponerlo. Si es un literal (letra), escríbala"],
             ["Excelente, ese es el exponente pedido.",
              "Tiene errores debe dividir cada exponente entre 3."]];
    break;
      
  }//6
   
  case 7:
    retro= "Saturday";
}


return retro;
}*/

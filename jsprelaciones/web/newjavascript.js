/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function capturaBaExp(cad)
               {
              
                    var baex =[];
                    var pos =[];               
                  //  var cadRec = recorte(cad);
                    var cade = cad;
                    var i=0;
                   var tem1 = cad.substring(0,1);
                    
                    if(tem1 === "-" || tem1 ==="+")
                    {
                       cade =  cad.substring(1);
                    }
                    else
                    {
                       // tem1 = cade;
                    }
                     alert("i: "+i);
                     var   indice = cade.indexOf("<sup>");
                       
                         alert("cade: "+cade);
                         if (indice !==-1)
                         {
                              banConEx();
                         }
                         else
                         {
                             basSinEx();
                         }
                        
                
             function banConEx()
             {
                for(var x=0;x<4;x++)
                {
                  indice = cade.indexOf("<sup>");
                   
                  //   indice = cade.indexOf("<sup>");
                 
                          alert("i: "+i);
                         
                      if (indice !==-1){
                          
                          // indice = cade.indexOf("<sup>");
                           baex[i] = cade.substring(0,indice);//recuperación de bases
                            pos[i]=0;
                            
                                 alert("i: "+i);                       
                            //************* Lo que quedó ****************
                            var  resto = cade.substring(indice);
                            
                            var restoSinSu = resto.substring(5);//Quitar <sup>
                            
                            var BuscarSup = restoSinSu.indexOf("</sup>");//Buscar </sup>
                            
                           
                            
                            var exp = restoSinSu.substring(0,BuscarSup);
                            
                         
                              i++;
                            baex[i] = exp;
                            
                              alert("i: "+i);
                                                        
                             pos[i]=1;
                             i++;
                             
                             alert("i: "+i);
                            
                            var quedo = restoSinSu.substring(BuscarSup+6);
                            
                            cade = quedo;// Se repite
                            
                            if(cade ===' ')
                            {
                                break;
                            }
                            
                      
                         }      //if 
                        
                     }//for
                     //
                         
                }//banConEx   
                
                function basSinEx()
                {
                    baex[0]=cade;
                    pos[i]=0;
                }
                this.baexArr = function()
                   {
                      return baex;
                   };
                            
               this.posArr = function()
                  {
                    return pos;
                  };
                              
                             
                  
               }//capturaBaExp
           
            
        
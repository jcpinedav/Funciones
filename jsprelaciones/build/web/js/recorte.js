/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recorte(txt)
   {
       var txtR="";
       var j;
       
       var txt2 =txt;
       
       if(typeof txt2 !=="string")
       {
           txt = txt2.toString();
       }
        
       for (j=0;j < txt.length;j++)
           {
            
           if(txt[j]!==" ")
                   {
                    
                   
                    
               txtR= txtR+txt[j];
               
                   }
        
           }
           
               
       return txtR;
   }
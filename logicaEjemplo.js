var aleatorio = Math.floor(Math.random()*8)+12
var radio;
const opcion = document.querySelectorAll("#opciones");
const button = document.querySelector("#verificar");
var selected;
var correctos = 0;
button.addEventListener("click", function(evento){
    var myModal1 = new bootstrap.Modal(document.getElementById('incorrecto'), {
        keyboard: false
      })
    var myModal2 = new bootstrap.Modal(document.getElementById('correcto'), {
        keyboard: false
      })
    var myModal3 = new bootstrap.Modal(document.getElementById('finalizado'), {
        keyboard: false
      })
    opcion.forEach((aux)=>{
        if(aux.checked){
            selected = ".Opcion" + aux.value
        }
    })
    const imagen = document.querySelector(selected)
    selected = imagen.src.substring(imagen.src.length-14, imagen.src.length-6)
        if(selected === "Correcta"){
            correctos += 1
            if(correctos < 10){
            myModal2.show()
            const button2 =  document.querySelector("#cerrarmodal")
            button2.addEventListener("click", function(evento){
                aleatorio = Math.floor(Math.random()*8)+12
                var cadenaimg = "imagen"+aleatorio
                var cadenarst = "Correcta"+aleatorio
                document.querySelector("#pregunta").src = "Imagenes/TiposDeFunciones/Ejercicios/" + cadenaimg+".jpg"
                const respuestas = document.querySelectorAll("#respuestas")
                var opcionesDeRespuesta = ["Incorrecta1"+aleatorio,"Incorrecta2"+aleatorio, "Incorrecta3"+aleatorio, cadenarst]
                opcionesDeRespuesta.sort(function() { return Math.random() - 0.5 });
                console.log(opcionesDeRespuesta)
                for(var i = 0;i<4;i++){
                    respuestas[i].src = "Imagenes/TiposDeFunciones/Ejercicios/"+opcionesDeRespuesta[i]+".gif"
                }
            })
            }else{
                myModal3.show()
                const button3 = document.querySelector("#reiniciarConteo")
                button3.addEventListener("click", function(evento){
                    correctos = 0
                })
            }
        }else{
            myModal1.show()
        }
})



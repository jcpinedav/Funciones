const ejercicios = 10;
var aleatorio = Math.floor(Math.random()*(ejercicios - 2))+12
var radio;
const opcion = document.querySelectorAll("#opciones");
const button = document.querySelector("#verificar");
var selected;
var correctos = 0;
var generados = []
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
    var check;
    opcion.forEach((aux)=>{
        if(aux.checked){
            selected = ".Opcion" + aux.value
            check = aux
        }
    })
    const imagen = document.querySelector(selected)
    selected = imagen.src.substring(imagen.src.length-14, imagen.src.length-6)
        if(selected === "Correcta"){
            correctos += 1
            if(correctos < ejercicios){
            myModal2.show()
            aleatorio = Math.floor(Math.random()*(ejercicios - 2))+12
            while(generados.includes(aleatorio) && correctos < (ejercicios - 1)){
                aleatorio = Math.floor(Math.random()*(ejercicios - 2))+12
            }
            const button2 =  document.querySelector("#cerrarmodal")
            button2.addEventListener("click", function(evento){
                check.checked = false
                generados.push(aleatorio)
                var cadenaimg = "imagen"+aleatorio
                var cadenarst = "Correcta"+aleatorio
                document.querySelector("#pregunta").src = "Imagenes/Dominio/" + cadenaimg+".jpg"
                const respuestas = document.querySelectorAll("#respuestas")
                var opcionesDeRespuesta = ["Incorrecta1"+aleatorio,"Incorrecta2"+aleatorio, "Incorrecta3"+aleatorio, cadenarst]
                opcionesDeRespuesta.sort(function() { return Math.random() - 0.5 });
                for(var i = 0;i<4;i++){
                    respuestas[i].src = "Imagenes/Dominio/"+opcionesDeRespuesta[i]+".gif"
                }
            })
            }else{
                myModal3.show()
                const button3 = document.querySelector("#reiniciarConteo")
                button3.addEventListener("click", function(evento){
                    correctos = 0
                    generados = []
                })
            }
        }else{
            myModal1.show()
        }
})


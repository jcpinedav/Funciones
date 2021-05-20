var aleatorio = Math.floor(Math.random()*100)+11
var radio;
const opcion = document.querySelectorAll("#opciones");
const button = document.querySelector("#verificar");
var selected;

button.addEventListener("click", function(evento){
    opcion.forEach((aux)=>{
        if(aux.checked){
            selected = ".Opcion" + aux.value
        }
    })
    const imagen = document.querySelector(selected)
    selected = imagen.src.substring(imagen.src.length-14, imagen.src.length-6)
    console.log(selected)
    if(selected === "Correcta"){
        aleatorio = Math.floor(Math.random()*89)+11
        var cadenaimg = "imagen"+aleatorio
        var cadenarst = "Correcta"+aleatorio
        document.querySelector("#pregunta").src = "Imagenes/" + cadenaimg
        const respuestas = document.querySelectorAll("#respuestas")
        var opcionesDeRespuesta = ["Incorrecta1"+aleatorio,"Incorrecta2"+aleatorio, "Incorrecta3"+aleatorio, cadenarst]
        opcionesDeRespuesta.sort(function() { return Math.random() - 0.5 });
        console.log(opcionesDeRespuesta)
        for(var i = 0;i<4;i++){
            respuestas[i].src = "Imagenes/"+opcionesDeRespuesta[i]+".jpg"
        }
    }
})
let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")
const form = document.getElementById("formPropuesta")

boton.addEventListener("click", function () {

    votos = votos + 1

    textoVotos.innerText = "Votos: " + votos

    //console.log("voto registrado")
})

form.addEventListener("submit", function (e) {

    let nombre = document.getElementById("nombre").value
    let idea = document.getElementById("idea").value

    if (nombre == "" || idea == "") {
        alert("Datos de la propuesta invalidos")
    }else{
        alert("¡Propuesta enviada!")
    }

    event.preventDefault();

})
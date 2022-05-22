const nombre = document.getElementById("name")
const email = document.getElementById("mail")
const asunto = document.getElementById("about")
const texto = document.getElementById("text")

function enviarFormulario(){

    let bandera = false
    let mensaje = ""

    if (nombre.value === null || nombre.value === "") {

        mensaje = "Se esperaba un nombre\n"
        bandera = true

    }else{
        console.log(nombre.value)
    }
    if (email.value === null || email.value === "") {

        mensaje += "Se esperaba un correo electronico\n"
        bandera = true

    }else{
        console.log(email.value)
    }
    if (asunto.value === null || asunto.value === "") {

        mensaje += "Se esperaba un asunto para el correo\n"
        bandera = true

    }else{
        console.log(asunto.value)
    }
    if (texto.value === null || texto.value === "") {

        mensaje += "Se esperaba un texto para el correo\n"
        bandera = true

    }else{
        console.log(texto.value)
    }
    if (bandera == true) {
        alert(mensaje)
    }

    return false;
}

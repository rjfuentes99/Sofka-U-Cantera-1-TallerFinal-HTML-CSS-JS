const boton1 = document.getElementById("par")
const boton2 = document.getElementById("impares")
const boton3= document.getElementById("predeterminado")
const lista = document.querySelectorAll("li:nth-child(even)")
const lista2 = document.querySelectorAll("li:nth-child(odd)")


console.log(lista)
console.log(lista2)

boton1.addEventListener("click", cambiarColoresPares)
boton2.addEventListener("click", cambiarColoresImpares)
boton3.addEventListener("click", cambiarColoresPredeterminados)


function cambiarColoresPredeterminados(){
    lista.forEach(elemento => {
        elemento.style.backgroundColor = "white"
    });
    lista2.forEach(elemento => {
        elemento.style.backgroundColor = "white"
    });
}
function cambiarColoresPares() {
    lista.forEach(elemento => {
        elemento.style.backgroundColor = "grey"
    });
    lista2.forEach(elemento => {
        elemento.style.backgroundColor = "white"
    });
}

function cambiarColoresImpares() {
    lista.forEach(elemento => {
        elemento.style.backgroundColor = "white"
    });
    lista2.forEach(elemento => {
        elemento.style.backgroundColor = "brown"
    });
}

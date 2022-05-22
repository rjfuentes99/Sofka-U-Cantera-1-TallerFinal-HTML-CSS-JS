const nav = document.getElementById("containernav");
const info = document.getElementById("containerinfo");
const texto = document.querySelectorAll("p");
const titulo = document.querySelectorAll("h1");
const subtitulo = document.querySelectorAll("h2");
const subtituloh3 = document.querySelectorAll("h3");
const panel = document.getElementById("panel");
const panel2 = document.getElementById("panel2");
const textoBotones = document.querySelectorAll("button");

 // Cambiar el tema a la pagina

function cambiarColores(x) {
  if (x.value == 1) {
      
    nav.style.backgroundColor = "hsl(227, 10%, 10%)";
    info.style.backgroundColor = "#1C2B2D";
    if(panel){
        panel.style.backgroundColor = "black"
    }
    if(panel2){
        panel2.style.backgroundColor = "black"
    }
    cambiarColorTexto("white");
    cambiarColorSubtitulo("#345B63");
    cambiarColorSubtituloh3("#D4ECDD");
    localStorage.setItem("tema", "default");

  } else if (x.value == 2) {

    nav.style.backgroundColor = "#363062";
    info.style.backgroundColor = "#212121";
    if(panel){
        panel.style.backgroundColor = "black"
    }
    if(panel2){
        panel2.style.backgroundColor = "black"
    }
    cambiarColorTitulo("white");
    cambiarColorTexto("#E9D5DA");
    cambiarColorSubtitulo("#827397");
    cambiarColorSubtituloh3("#4D4C7D");
    localStorage.setItem("tema", "purple");

  } else if (x.value == 3) {

    nav.style.backgroundColor = "#8D8DAA";
    info.style.backgroundColor = "#F24A72";
    if(panel){
        panel.style.backgroundColor = "#8D8DAA"
    }
    if(panel2){
        panel2.style.backgroundColor = "#8D8DAA"
    }
    cambiarColorTitulo("hsl(227, 10%, 10%)");
    cambiarColorTexto("hsl(227, 10%, 10%)");
    cambiarColorSubtitulo("#DFDFDE");
    cambiarColorSubtituloh3("#4D4C7D");
    localStorage.setItem("tema", "red");
    
  } else if (x.value == 4) {

    nav.style.backgroundColor = "#FFD36E";
    info.style.backgroundColor = "#006778";
    if(panel){
        panel.style.backgroundColor = "transparent"
    }
    if(panel2){
        panel2.style.backgroundColor = "transparent"
    }
    cambiarColorTextoBotones("black");
    cambiarColorTitulo("white");
    cambiarColorTexto("white");
    cambiarColorSubtitulo("#FFD36E");
    cambiarColorSubtituloh3("#00AFC1");
    localStorage.setItem("tema", "yellow");
  }
} 

function cambiarColorTexto(color) {
  texto.forEach((CadaTexto) => {
    CadaTexto.style.color = color;
  });
}
function cambiarColorTitulo(color) {
  titulo.forEach((Titulo) => {
    Titulo.style.color = color;
  });
}
function cambiarColorSubtitulo(color) {
  subtitulo.forEach((CadaSubtitulo) => {
    CadaSubtitulo.style.color = color;
  });
}
function cambiarColorSubtituloh3(color) {
  subtituloh3.forEach((CadaSubtituloH3) => {
    CadaSubtituloH3.style.color = color;
  });
}
function cambiarColorTextoBotones(color) {
  textoBotones.forEach((CadaTextoBoton) => {
    CadaTextoBoton.style.color = color;
  });
}

// Mantener el estilo en la pagina


document.addEventListener("DOMContentLoaded", function() {
  const selectColores = document.getElementById("selectColor");
  tema = localStorage.getItem("tema");
  if (tema === "default") {
    cambiarColores({ value: 1 });
    selectColores.options.item(0).selected = "selected";
  }
  if (tema === "purple") {
    cambiarColores({ value: 2 });
    selectColores.options.item(1).selected = "selected";
  }
  if (tema === "red") {
    cambiarColores({ value: 3 });
    selectColores.options.item(2).selected = "selected";
  }
  if (tema === "yellow") {
    cambiarColores({ value: 4 });
    selectColores.options.item(3).selected = "selected";
  }
});



 // Funcionalidad del acordeon
const elementosAcordeon = document.querySelectorAll(".acordeon");
elementosAcordeon.forEach((elementos) => {
  elementos.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    console.log(e.target);
    let panel = e.target.nextElementSibling;
    console.log(panel);
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

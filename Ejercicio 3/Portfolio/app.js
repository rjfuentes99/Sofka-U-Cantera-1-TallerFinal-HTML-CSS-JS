window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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

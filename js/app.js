// DARK MODE

// SE DECLARA LA CONSTANTE QUE ES EL ELEMENTO DEL DOM
const btnSwitch = document.querySelector("#switch");

// FUNCIÓN DE EVENTO
btnSwitch.addEventListener("click", () => {
  
  // AL DAR CLICK SE AGREGA O SE QUITA LA CLASE "DARK" AL BODY
  document.body.classList.toggle("dark");
  // AL DAR CLICK SE AGREGA O SE QUITA LA CLASE "ACTIVE" AL BOTÓN
  btnSwitch.classList.toggle("active");

  // guardar el modo dark en local storage con una variable y un valor
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }

});


/*
al empezar o actualizar la página pregunta si esta establecida la variable "dark-mode" con el valor de "true" 
en local storage significa que esta previamente seleccionado el modo dark, si esta establecida agrega la clase dark al body y la clase active al botón y si no (else) se la remueven ambas clases a los elementos
*/ 
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}



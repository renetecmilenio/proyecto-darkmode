// DARK MODE

// SE DECLARA LA VARIABLE CONSTANTE QUE ES EL ELEMENTO "BOTON" DEL DOM (DOCUMENT OBJECT MODEL)
const btnSwitch = document.querySelector("#switch");

// FUNCIÓN ESCUCHA DE EVENTO "CLICK" APLICADO AL BOTON MEDIANTE LA VARIABLE CONTANTE QUE SE GUARDÓ
btnSwitch.addEventListener("click", () => {
  /*
  document = el documento en si osea la pagina actual
  body = es una "propiedad" del documento con la cual accedes al cuerpo del documento
  classList = "propiedad" que enlista las clases que se establecieron en el objeto que se establezca
  toogle = "método" que agrega o remueve el "token" que se le pase como parámetro  
  */
  document.body.classList.toggle("dark"); // AL DAR CLICK AL "BOTON" SE AGREGA O SE QUITA LA CLASE "DARK" AL BODY

  btnSwitch.classList.toggle("active"); // AL DAR CLICK "BOTON" SE AGREGA O SE QUITA LA CLASE "ACTIVE" AL BOTÓN

  // ----------------

  // condicional que guardar el modo dark en local storage mediante una variable (dark-mode) y un valor (true/false) esto al dar click en el boton

  /*
contains() = "Método" devuelve verdadero si la lista contiene el token dado; de lo contrario, falso.
localStorage = "Propiedad"  te permite acceder al objeto local Storage; los datos persisten almacenados en navegador
setItem = "Método" cuando reciba una clave y un valor, añadirá estos al almacén, o actualizará el valor si la clave ya existe.
*/
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true"); //
  } else {
    localStorage.setItem("dark-mode", "false");
  }

});

/*
  COMO NO ESTA DENTRO DE UN EVENTO Al empezar o actualizar la página esta "CONDICIONAL"  valida si esta establecida la variable "dark-mode" con el valor de "true" en local storage, si la condicion da verdaderA significa que previamente se seleccionó el modo dark y agrega la clase "dark" al body y la clase "active" al botón y si no (else) se la remueven ambas clases a los elementos
  */
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark"); // A DIFERENCIA DEL MÉTODO "TOOGLE" SOLO SE "AGREGA" (NO INTERCAMBIA) LA CLASE "DARK" AL BODY
  btnSwitch.classList.add("active"); // A DIFERENCIA DEL MÉTODO "TOOGLE" SOLO SE "AGREGA" (NO INTERCAMBIA) LA CLASE "ACTIVE" AL BOTÓN
} else {
  document.body.classList.remove("dark");// A DIFERENCIA DEL MÉTODO "TOOGLE" SOLO SE "REMUEVE" (NO INTERCAMBIA) LA CLASE "DARK" AL BODY
  btnSwitch.classList.remove("active"); // A DIFERENCIA DEL MÉTODO "TOOGLE" SOLO SE "REMUEVE" (NO INTERCAMBIA) LA CLASE "ACTIVE" AL BOTÓN
}

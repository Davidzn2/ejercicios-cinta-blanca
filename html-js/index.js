let nombre = document.getElementById('nombre')
let tarjeta = document.getElementById('tarjeta')
let mostrarNombre = document.getElementById('mostrarNombre')
let boton = document.getElementById('boton')

function mostrar(){
    // Quitar clase invisible
    tarjeta.classList.remove('invisible')
    let textoNombre = nombre.value
    // Mandamos el texto a las etiquetas h
    mostrarNombre.innerHTML = "Hola, " + textoNombre

}
boton.addEventListener('click', mostrar)


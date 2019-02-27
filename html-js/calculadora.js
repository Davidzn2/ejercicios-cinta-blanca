// Jalamos en variables todos los datos de los inputs
let sumaA = document.getElementById('ASum')
let sumaB = document.getElementById('BSum')
let ARest = document.getElementById('ARest')
let BRest = document.getElementById('BRest')
let ADivi = document.getElementById('ADivi')
let BDivi = document.getElementById('BDivi')
let AMult = document.getElementById('AMult')
let BMult = document.getElementById('BMult')

// Jalamos en variables el boton
let botonSuma = document.getElementById('botonSuma')
let botonResta = document.getElementById('botonResta')
let botonDivision = document.getElementById('botonDivision')
let botonMultiplicacion = document.getElementById('botonMultiplicacion')

// Jalamos los H2 en los que pondremos el resultado
let resultadoSum = document.getElementById('resultadoSuma')
let resultadoRest = document.getElementById('resultadoResta')
let resultadoMult = document.getElementById('resultadoMultiplicacion')
let resultadoDivi = document.getElementById('resultadoDivision')

function suma(){
    resultadoSum.innerHTML = (Number(sumaA.value) + Number(sumaB.value))
}
function resta(){
    resultadoRest.innerHTML = (Number(ARest.value) - Number(BRest.value))
}
function division(){
    resultadoDivi.innerHTML = (Number(ADivi.value) / Number(BDivi.value))
}
function multipliciacion(){
    resultadoMult.innerHTML = (Number(AMult.value) * Number(BMult.value)) 
}

botonSuma.addEventListener('click', suma)
botonResta.addEventListener('click', resta)
botonDivision.addEventListener('click', division)
botonMultiplicacion.addEventListener('click', multipliciacion)
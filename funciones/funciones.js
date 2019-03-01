// function saludarAlMundo(){
//     console.log("Hola Mundo")
// }
// saludarAlMundo()

// function suma(a,b){
//     c = a + b
//     return c
// }
// console.log(suma(4,2))

function minian(edad, genero, nombre){

    if (edad >= 13 && genero == "Hombre"){
        var cuenta = true
    } else{
        var cuenta = false
    }
    if(cuenta==true){
        var a = "Felicidades "+ nombre +" cuentas para minian, Jazak U Baruj"
    }else{
        var a = "Perdon, no cuentas para minian"
    }
    return a
}

var David ={
    nombre :"David",
    genero: "Hombre",
    edad: 23
}
var Jaim ={
    nombre :"Jaim",
    genero: "Hombre",
    edad: 12
}
var Juan ={
    nombre :"Juan",
    genero: "Hombre",
    edad: 13
}
var Pepe ={
    nombre :"Pepe",
    genero: "Hombre",
    edad: 18
}
console.log(minian(David.edad, David.genero, David.nombre))
// function saludarAlMundo(){
//     console.log("Hola Mundo")
// }
// saludarAlMundo()

// function suma(a,b){
//     c = a + b
//     return c
// }
// console.log(suma(4,2))

function minian(edad, genero){
    if (edad >= 13 && genero == "Hombre"){
        var cuenta = true
    } else{
        var cuenta = false
    }
    if(cuenta==true){
        var a = "Felicidades campeon cuentas para minian, Jazak U Baruj"
    }else{
        var a = "Perdon, no cuentas para minian"
    }
    return a
}
var Joe = [13, "Hombre"]
console.log("Joe: "+ minian(Joe[0], Joe[1]))
var David = minian(13,"Hombre")
var Jaim = minian(10, "Hombre")
var Moshe = minian(22, "Hombre")
var Batia = minian(18, "Mujer")

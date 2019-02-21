// Imprime el valor del contador que aumenta en cada iteración
for (var i=1; i <= 10; i++ ){
    console.log(i)
}

var top_peliculas = [
    "El Padrino",
    "Sueño de Fuga",
    "Milla Verde",
    "Inception",
    "The Shining",
    "2001: Odisea",
    "Barry Lyndon"
]
console.log("Larga")
// Imprime cada pelicula adentro del arreglo top_peliculas
for (var i=0; i<top_peliculas.length; i++){
    console.log(top_peliculas[i]);
}
console.log("Resumida")
// forma resumida de imprimir del arreglo
for (var i in top_peliculas){
    console.log(top_peliculas[i])
}


var string = "hola amiguitos, como estan??"
for (i in string){
    if(string[i] == " "){
        string[i++] = string[i++].toUpperCase()
        
    }
}   



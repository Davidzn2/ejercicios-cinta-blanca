var platillos =[
    "Empanada",
    "Tostada",
    "Garnacha",
    "Tamal",
    "Picadillo",

]

for(var i = 0; i < platillos.length; i++){
    console.log(platillos[i])
}
for (var i = 0; i < platillos.length; i++){
    if(platillos[i]=="Garnacha" || platillos[i]=="Tamal"){
        console.log(platillos[i])
    }
}

for(var i = 0; i < platillos.length; i++){
    if( i%2 != 0){
     console.log(platillos[i])   
    }
}

for(var i = 0; i < platillos.length; i=i+2){
    console.log(platillos[i])
}

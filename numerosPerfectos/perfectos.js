for(i = 1;i<500;i++){
    let divisores = 0
    for(b = 1; b < i; b++){
        // console.log(i)
        if (i % b == 0){
            // console.log(b)
            divisores = b + divisores
        }
        if (divisores == i){
            console.log(i + " es Perfecto")
        } 
    }
}
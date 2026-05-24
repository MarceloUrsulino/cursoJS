function gerar(){
    let res = document.getElementById('res')
    let cont = 0

    for(numero = 1; numero <= 100; numero++){
        if(numero % 2 == 0){
            res.innerHTML +=`${numero}- `
            cont ++
        }
    }
   
     res.innerHTML += `<br>Total de pares: ${cont}`

}
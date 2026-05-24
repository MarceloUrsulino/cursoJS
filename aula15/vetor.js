let valores = [8,1,7,4,2,9]
valores.push(1)
valores.sort()
//console.log(valores)

/* 
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])


for(let pos = 0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores [pos]}`)
}


for( let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

*/

let pos = valores.indexOf(8)

if(pos == -1){
    console.log('nao existe')
}else{
    console.log(`o valor esta na posicao ${pos}`)
}
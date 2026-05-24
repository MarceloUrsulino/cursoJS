var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`agora são exatamente ${hora}:${minutos}h.`)

if(hora < 12){
    console.log('bom dia')
}else if(hora <= 18 ){
    console.log('boa tarde')
}  else{
    console.log('boa noite')
}

function verificar(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if( num.value.length == 0){
        window.alert('[ERRO] Digite um número')
        
    }else{
        let n = Number(num.value)
        if(n % 2 == 0){
        res.innerHTML = 'Número par.'

     } else{
        res.innerHTML = 'Número ímpar'
     }
  }

}
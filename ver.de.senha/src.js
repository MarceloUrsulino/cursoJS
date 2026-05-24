function verificar(){

    let txs = document.getElementById('txtse')
    let res = document.getElementById('res')

    res.innerHTML = ''

    if(txs.value.length == 0 ){
        window.alert('Campo vazio')

     }else if(txs.value.length < 6){
        res.innerHTML = 'Senha fraca!'

     }else if(txs.value.length < 10 && txs.value.length >= 6){
        res.innerHTML = 'senha media'
     }else{
        res.innerHTML = 'senha forte'
     }

}
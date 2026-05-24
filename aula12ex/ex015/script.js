function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    //Se o campo estiver vazio OU se o ano digitado for maior que o ano atual, mostre um alerta de erro
    if( fano.value.length == 0 || Number(fano.value) > ano){//
        window.alert('verifique os dados acima e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if( fsex[0].checked){
            genero = 'homem'
        } else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`

    }

}
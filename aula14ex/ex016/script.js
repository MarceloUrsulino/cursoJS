function contar() {
    var i = window.document.querySelector('#txti')
    var f = window.document.querySelector('#txtf')
    var p = window.document.querySelector('#txtp')
    var res = window.document.getElementById('res')
// Verifica se algum dos campos está vazio
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
         window.alert('[EERO] Falta dados.')

    }else{
        res.innerHTML = 'contando... '
      // Converte o valor inicial de string para número
        var ini = Number(i.value)
        var fim = Number(f.value)
        var pas = Number(p.value)
        // Verifica se o passo é zero ou negativo (inválido)
        if(pas <= 0){
            window.alert('passo ivalido, considerando passo 1')
            pas = 1
        }
        // Verifica se o início é menor que o fim (contagem crescente ex: 1 ao 10)
        if( ini < fim){
            // For que começa no início e vai até o fim somando o passo a cada volta
            for(var c = ini; c <= fim; c += pas){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{
            // Se o início for maior que o fim (contagem decrescente ex: 10 ao 1)
            for(var c = ini; c >= fim; c -= pas){
                res.innerHTML += `${c} \u{1f449}`
            }

        }
         // Exibe a bandeira no final da contagem
        res.innerHTML += `\u{1f3c1}`


    }
       
}

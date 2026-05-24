/**
function calcular(){
    // Pega o número digitado pelo usuário e converte para número
    var num = Number(document.getElementById('txtnu').value)
      // Seleciona a div onde a tabuada vai aparecer
    var res = document.getElementById('res')
     // Limpa o conteúdo da div antes de exibir a tabuada
    res.innerHTML = ""
    // Loop que começa em 1 e vai até 10 somando 1 a cada volta
    for(var c = 1; c<=10; c++){
       // Multiplica o número digitado pelo contador atual
        var r = num * c
         // Exibe a linha da tabuada na div e quebra a linha com br
        res.innerHTML += `${num} x ${c} = ${r} <br>`
    }

}
    **/

function tabuada(){
  let num = document.getElementById('txtn')
   // Seleciona o select onde a tabuada vai aparecer como opções
  let tab = document.getElementById('seltab')
// Verifica se o campo está vazio
  if(num.value.length == 0){
      // Se estiver vazio exibe alerta pedindo para digitar um número
    window.alert('por favor digite um número')
     
  }else{
     // Converte o valor digitado para número
    let n = Number(num.value)
// Inicia o contador em 1
    let c = 1
     // Limpa as opções anteriores do select
    tab.innerHTML = ''
     // Loop que vai de 1 até 10
    while (c <= 10){
      // Cria um novo elemento option no HTML
      let item = document.createElement('option')
       // Define o texto que aparece na opção ex: "2 x 3 = 6" 
      item.text = `${n} x ${c} = ${n*c}`
       // Define o valor interno da opção
      item.value = `tab${c}`
      // Adiciona a opção criada dentro do select
      tab.appendChild(item)
       // Incrementa o contador para não criar loop infinito
      c++

    }

  }

}
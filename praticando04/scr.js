let nom = document.querySelector('#nome')
let pre = document.querySelector('#preco')

let resli = document.querySelector('#lista')
let resto = document.querySelector('#total')

let carrinho = []

function vazio (no){
    if(no.length == 0){
        return true
    }else{
        return false
    }
}
function jtl(no, pre){
    if(pre.indexOf(no)  != -1){
        return true
    }else{
        return false
    }1
}
function adicionar(){
    // Verifica se o nome está vazio, o preço está vazio ou o produto já está na lista
    if(nom.value.length == 0 || pre.value.length == 0 || jtl(nom.value, carrinho)){
        window.alert('Campo vazio ou já adicionado')
    // Verifica se o preço é zero ou negativo
    }else if(Number(pre.value) <= 0){
        window.alert('Preço iválido')
    }else{
        // Adiciona o nome do produto no array
        carrinho.push(nom.value)
          // Adiciona o preço do produto no array
        carrinho.push(Number(pre.value))
        // Inicia o total em zero
        let total = 0
         // Cria um elemento <p> na memória
        let item = document.createElement('p')
        // Define o texto do <p> com o nome e preço formatado com 2 casas decimais
        item.innerHTML =`${nom.value} - R$ ${Number(pre.value).toFixed(2)}`
        // Adiciona o <p> dentro da div lista na tela
        resli.appendChild(item)
         // Loop que percorre só os preços do array (posições ímpares: 1, 3, 5...
        for(let i = 1; i < carrinho.length; i += 2){
         // Soma cada preço no total
        total = total + carrinho[i]
          // Exibe o total atualizado na div total
    }
         resto.innerHTML = `Total: R$ ${total.toFixed(2)}`
        // Limpa o input do nome
         nom.value = ''
          // Limpa o input do preço
         pre.value = ''

    }
}


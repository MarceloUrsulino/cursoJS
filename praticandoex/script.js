let pro = document.querySelector('#produto')
let list = document.querySelector('#lis')
// Cria um array vazio para guardar os produtos adicionados
let produtos = []
// Função que verifica se o campo está vazio
function vazio(n){
     // Se o tamanho do texto for 0 significa que está vazio
    if(n.length == 0){
        return true
    }else{
        return false
    }
}
// Função que verifica se o produto já está na lista
function jtl(n, l){
    // indexOf retorna -1 se não encontrar, qualquer outro número se encontrar
    if(l.indexOf(n) != - 1){
        return true
    }else{
        return false
    }
}

function adicionar(){
     // Verifica se o campo está vazio OU se o produto já está na lista
    if(vazio(pro.value) || jtl(pro.value, produtos)){
         // Se alguma condição for verdadeira exibe alerta
        window.alert('campo vazio')

    }else {
        // Adiciona o produto no array
        produtos.push(pro.value)
         // Cria um novo elemento option no HTML
        let item = document.createElement('option')
         // Define o texto que aparece na lista
        item.text = pro.value
        // Adiciona o item dentro do select
        list.appendChild(item)
        // Limpa o input para o usuário digitar outro produto
        pro.value = ''
       
    }
}
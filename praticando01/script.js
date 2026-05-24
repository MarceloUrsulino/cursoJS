let am = document.querySelector('#txt1')
let li = document.querySelector('#lista')
let amigos = []
// Função que verifica se o nome já está na lista
// n = nome digitado, l = array de amigos
function jatemna(n, l){
     // indexOf procura o nome n dentro do array l
    // se encontrar retorna a posição, se não encontrar retorna -1
    if(l.indexOf(n) != -1){
        return true  // nome já está na lista
    } else {
        return false  // nome não está na lista
    }
}
function adicionar(){
     // Verifica se o campo está vazio OU se o nome já está na lista
    // am.value.length == 0 → campo vazio
    // jatemna(am.value, amigos) → passa o nome digitado e o array para a função verificar
    if(am.value.length == 0 || jatemna(am.value, amigos)){
        // Se qualquer uma das condições for verdadeira exibe alerta
        window.alert('Campo vazio ou amigo já adicionado!')
    }else{
         // Adiciona o nome digitado no array
        amigos.push(am.value)
        // Cria um novo elemento <p> no HTML
        let item = document.createElement('p')
         // Define o texto do <p> com o nome digitado
        item.innerHTML = am.value
        // Adiciona o <p> dentro da div lista
        li.appendChild(item)
         // Limpa o input para o usuário digitar outro nome
        am.value = ''
    }
}
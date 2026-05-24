let num = document.getElementById('fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
// Cria um array vazio para guardar os números adicionados
let valores = []
// Função que verifica se o número é válido (entre 1 e 100)
function isnumero(n){
    // Se o número for maior ou igual a 1 E menor ou igual a 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true // retorna verdadeiro, é válido
    }else{
        return false// retorna falso, é inválido
    }

}
// Função que verifica se o número já existe na lista
function inlista(n, l){
     // indexOf retorna -1 se não encontrar o número na lista
    if(l.indexOf(Number(n)) != -1){
        return true// retorna verdadeiro, já está na lista
    }else{
        return false // retorna falso, não está na lista
    }

}

function adicionar(){
        // Verifica se o número é válido E se não está na lista ainda
    if(isnumero(num.value) && !inlista(num.value, valores)){
         // Adiciona o número no array
        valores.push(Number(num.value))
        // Cria um novo elemento option no HTML
        let item = document.createElement('option')
        // Define o texto que aparece na lista
        item.text = `valor ${num.value} adicionado`
        // Adiciona o item na lista visual
        lista.appendChild(item)
        // Limpa o resultado anterior
        res.innerHTML = ''

    }else{
        // Se o número for inválido ou já estiver na lista exibe alerta
         window.alert('valor ivalido ou ja encontrado na lista')
    }
    // Limpa o input após adicionar
    num.value = ''

    // Coloca o cursor de volta no input para o usuário digitar outro número
    num.focus()
}

function finalizar(){
     // Verifica se há valores na lista antes de finalizar
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
          // Total de números adicionados
        let tot = valores.length
         // Começa assumindo que o primeiro valor é o maior e o menor
        let maior = valores[0]
        let menor = valores[0]
          // Variáveis para guardar a soma e a média
        let soma = 0
        let media = 0
         // Loop que percorre todos os valores do array
        for(let pos in valores) {
              // Soma todos os valores
            soma += valores[pos]
            // Se o valor atual for maior que o maior encontrado até agora atualiza
            if(valores[pos] > maior)
                maior = valores[pos]
             // Se o valor atual for menor que o menor encontrado até agora atualiza
            if(valores[pos] < menor)
                menor = valores[pos]
        }
         // Calcula a média dividindo a soma pelo total
        media = soma / tot
        // Exibe todos os resultados na div
        res.innerHTML =''
        res.innerHTML += `<p> ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> somando todos os valores fica ${soma}</p>`
        res.innerHTML += `<p> a media dos valores acima é ${media}</p>`
    }
}

let lis = document.querySelector('#lista')
let nomes = ['Ana', 'João', 'Maria']

function adicionar(){
    for(let n = 0; n < nomes.length; n++){
        let item = document.createElement('p')
        item.innerHTML = nomes[n]
        lis.appendChild(item)

    }
}
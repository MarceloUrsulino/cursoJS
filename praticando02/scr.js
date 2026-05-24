let filme = document.querySelector('#txtfi')
let res = document.querySelector('#lista')
let filmes = []

function jtl(n, f){
    if(f.indexOf(n) != -1){
        return true
    }else{
        return false
    }  
}

function adicionar(){
    if(filme.value.length == 0 || jtl(filme.value, filmes)){
        window.alert('Campo vazio ou nome já adicionado.')
    }else{
        filmes.push(filme.value)
        let item = document.createElement('p')
        item.innerHTML = filme.value
       res.appendChild(item)
        filme.value = ''
    }
}
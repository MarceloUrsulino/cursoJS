let nom = document.querySelector('#nome')
let nu = document.querySelector('#num')

let res = document.querySelector('#lista')

let contatos = []

function jtl(n1, n){
    if(n.indexOf(n1) != -1){
        return true
    }else{
        return false
    }    
}

function vazio(n){
    if(n.value.length == 0){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(nom.value.length == 0 || nu.value.length == 0 || jtl(nom.value, contatos)){
        window.alert('Campo vazio ou contato já adicionado')
        }else if(nu.value.length < 8){
                window.alert('Número ínvalido.')
            }else{
                    contatos.push(nom.value)
                    contatos.push(Number(nu.value))
                    let item = document.createElement('p')
                    item.innerHTML = `${nom.value} - ${nu.value}`
                    res.appendChild(item)
                    nom.value = ''
                    nu.value = ''
                    nom.focus ()

            }    
}
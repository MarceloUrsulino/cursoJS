let eve = document.querySelector('#ev')
let data = document.querySelector('#data')
let res = document.querySelector('#lista')
let evento = []

function vazio(e){
    if(e.value.length == 0 ){
        return true
    }else{
        return false
    }
}
function emlista(e1,e){
    if(e.indexOf(e1) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(eve.value.length == 0 || data.value.length == 0 || emlista(eve.value, evento)){
        window.alert('Campo vazio ou já adicionado')
    }else{
        evento.push(eve.value)
        evento.push(data.value)
        let item = document.createElement('p')
        item.innerHTML = `${eve.value} - ${data.value}.`
        res.appendChild(item)
        eve.value = ''
        data.value = ''
        eve.focus ()
    }
}

// MELHOR DESEMPENHO

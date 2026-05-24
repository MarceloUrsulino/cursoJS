let ta = document.querySelector('#txt1')
let res = document.querySelector('#lista')

let tarefas = []

function adicionar(){
    if(ta.value.length == 0){
        window.alert('Campo vazio')
    }else{
        tarefas.push(ta.value)
        let item = document.createElement('p')
        item.innerHTML = ta.value
        res.appendChild(item)
        ta.value = ''

    }
    

    
}
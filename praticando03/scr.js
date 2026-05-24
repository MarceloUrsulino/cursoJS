
let n1 = document.querySelector('#nome')
let n2 = document.querySelector('#nota')
let li = document.querySelector('#lista')

let aluno = []

function vazio(n){
    if(n.length == 0){
        return true
    }else{
        return false
    }
}
function jtl(n, no) {
    if(no.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function cadastrar(){
    if(n1.value.length == 0 || n2.value.length == 0|| jtl(n1.value, aluno)){
        window.alert('Campo vazio ou já adicionado')
    }else if(Number(n2.value) < 0 || Number(n2.value) > 10){
        window.alert('Nota inválida, digite entre 0 e 10')
    }else if(Number(n2.value) >= 7){
        aluno.push(n1.value)
        let item = document.createElement('p')
        item.innerHTML = `${n1.value} - nota ${n2.value}: aprovado!`
        li.appendChild(item)
        n1.value = ''
        n2.value = ''
        
    }else{
        aluno.push(n1.value)
        
        let item = document.createElement('p')
        item.innerHTML = `${n1.value} - nota ${n2.value}: reprovado!`
        li.appendChild(item)
        n1.value = ''
        n2.value = ''
    }
    
}

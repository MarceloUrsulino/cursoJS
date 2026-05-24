function calcular(){
    let n1 = document.getElementById('txt1')
    let n2 = document.getElementById('txt2')
    let n3 = document.getElementById('txt3')

    let res = document.getElementById('res')

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        window.alert('ERRO preencha os campos')
    }else{
        let nx1 = Number(n1.value)
        let nx2 = Number(n2.value)
        let nx3 = Number(n3.value)
        
        nota = (nx1 + nx2 + nx3) / 3
        if( nota < 7 ){
            res.innerHTML = `<p>Reprovado, sua média foi: ${nota.toFixed(1)}</p>`
        }else{
            res.innerHTML = `<p>Aprovado, sua média foi: ${nota.toFixed(1)}</p>`
        }
    }
}
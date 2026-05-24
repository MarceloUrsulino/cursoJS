function calcular(){
     // Pega o preço digitado, troca vírgula por ponto e converte para número
var pre = Number(document.querySelector('#txtpreco').value.replace(',', '.'))
 // Pega o desconto digitado, troca vírgula por ponto e converte para número
var des = Number(document.querySelector('#desconto').value.replace(',', '.'))
 // Seleciona a div onde o resultado vai aparecer
var Ress = document.getElementById('res')
    // Calcula o valor do desconto: preço multiplicado pela porcentagem dividida por 100
var resul = pre * (des / 100)
 // Calcula o preço final: preço original menos o valor do desconto
var precoFinal = pre - resul
 // Verifica se o desconto digitado é maior que 50%
if(des > 50){
    // Se for maior que 50% exibe mensagem de desconto inválido
    Ress.innerHTML = `Desconto inválido, máximo 50%.`
}else {
     // Se for válido exibe o valor economizado e o preço final com 2 casas decimais
    Ress.innerHTML = `Você economizou R$ ${resul.toFixed(2)} e o preço final é R$ ${precoFinal.toFixed(2)}`
}

}
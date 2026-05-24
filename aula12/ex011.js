// Declara a variável idade com o valor 68
var idade = 68
// Exibe no console a idade usando template literal
console.log(`voce tem ${idade} anos.`)
// Verifica se a idade é menor que 16
if(idade < 16) {
    console.log('não vota')
// Senão verifica se é menor que 18 OU maior que 67
}else if( idade < 18 || idade > 67){
     console.log('voto opcional')
 // Se não entrou em nenhuma condição acima 
}else{
    // Significa que tem entre 18 e 67 anos, voto obrigatório
    console.log('voto obrigatorio')
}

function carregar() {
// Seleciona a div onde a mensagem de hora vai aparecer
var msg = window.document.getElementById('msg')
// Seleciona a imagem que vai mudar de acordo com o período do dia
var img = window.document.getElementById('imagem')
  // Pega a data e hora atual do sistema
var data = new Date()
  // Extrai só a hora atual (0 a 23)
var hora = data.getHours()
 // Extrai os minutos e garante 2 dígitos (ex: 03 ao invés de 3)
var minutos = String(data.getMinutes()).padStart(2, '0')
 // Exibe a hora e minutos atuais na div
msg.innerHTML = `agora são ${hora}:${minutos} horas.`
 // Verifica se é de manhã (entre 0h e 11h)
if( hora >= 0 && hora < 12){
    //bom dia
     // Muda a imagem para a foto da manhã
    img.src ='img-manha.jpg'
     // Muda o fundo da página para a cor da manhã
    document.body.style.background = '#e2cd9f'
     // Verifica se é de tarde (entre 12h e 17h)
}else if( hora >= 12 && hora < 18){
    //boa tarde
     // Muda a imagem para a foto da tarde
    img.src = 'img-tarde.jpg'
     // Muda o fundo da página para a cor da tarde
    document.body.style.background = '#b984gf'
     // Se não for manhã nem tarde, é de noite
}else{
    //boa noite
     // Muda a imagem para a foto da noite
    img.src = 'img-noite.jpg'
      // Muda o fundo da página para a cor da noite
    document.body.style.background = '#515154'
}
}
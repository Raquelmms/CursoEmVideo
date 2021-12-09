function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
//let hora = data.getHours()
let hora = data.getHours()
  
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.scr = 'morningsky.jpg'
    document.body.style.background = '#89ACD4'
    //BOM DIA
} else if (hora >=12 && hora <=18) {
    img.src = 'afternoonsky.jpg'
    document.body.style.background = '#FF9845'
    //BOA TARDE
} else {
    img.src = 'nightsky.jpg'
    document.body.style.background = '#00081A'

    //BOA NOITE
}
}
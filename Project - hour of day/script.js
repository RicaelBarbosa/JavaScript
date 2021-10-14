function carregar() {
var msg = document.getElementById('msg')
var foto = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
    //BOM DIA
    foto.src = 'manha.jpg'
    document.body.style.backgroundColor = '#467389'
    }
    else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    foto.src = 'tarde.jpg'
    document.body.style.backgroundColor = '#efc384'
    }
    else {
    foto.src = 'noite.jpg'
    document.body.style.backgroundColor = '#24434c'
    //BOA NOITE
    }
}
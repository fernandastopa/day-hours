function load () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 12 && hora <= 18) {
        img.src = 'afternoon.jpg'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#b77a60'
    } else if (hora > 18 && hora <= 23) {
        img.src = 'evening.jpg'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#1d515d'
    } else {
        img.src = 'morning.jpg'
        msg.innerHTML += ' Bom tarde!'
        document.body.style.background = '#ecd2a9'
    }
}
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if ((hora >= 0 && hora < 12) || (hora == 24)) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
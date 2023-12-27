function rankeads(victory, defeat) {
    let rank = victory - defeat
    return rank
}

let victory = rankeads(97, 40)

if (victory < 10) {
    rank = 'Ferro'
} else if (victory >= 10 && victory <= 20) {
    rank = 'Bronze'
} else if (victory >= 21 && victory <= 50) {
    rank = 'Prata'
} else if (victory >= 51 && victory <= 80) {
    rank = 'Ouro'
}else if (victory >= 81 && victory <= 90){
    rank = 'Diamante'
}else if (victory >= 91 && victory <= 100){
    rank = 'Lendário'
}else {
    rank = 'Imortal'
}
console.log (`O Héroi tem saldo de: ${victory} e esta no nivel de: ${rank}`)


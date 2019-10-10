let fedorPoints = 19;
let petrPoints = 15;

if ( fedorPoints <= 21 && !( fedorPoints > 21) && !( fedorPoints < petrPoints) && !(petrPoints > 21) && !(fedorPoints === petrPoints) ) {
    console.log("Федя выиграл со счетом " + fedorPoints + "!!")
} else if (fedorPoints === petrPoints) {
    console.log("Ничья ребятки, давайте заного)")
} else {
    console.log("Петя выиграл со счетом " + petrPoints + "!!!")
}
let fedorPoints = 15;
let petrPoints = 19;

if ( fedorPoints <= 21 && !( fedorPoints > 21) && ( fedorPoints > petrPoints) && !(fedorPoints === petrPoints) ) {
    console.log("Федя выиграл со счетом " + fedorPoints + "!!")
} else if (fedorPoints === petrPoints) {
    console.log("Ничья ребятки, давайте заного)")
} else {
    console.log("Петя выиграл со счетом " + petrPoints + "!!!")
}
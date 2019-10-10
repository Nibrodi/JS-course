let fedorPoints = 20; //введите значения очков Федора
let petrPoints = 19; //введите значение очков Петра

if ( fedorPoints <= 21 && !( fedorPoints > 21) && ( fedorPoints > petrPoints) && !(fedorPoints === petrPoints) ) {
    console.log("Федя выиграл со счетом " + fedorPoints + "!!")
} else if (fedorPoints === petrPoints) {
    console.log("Ничья ребятки, давайте заного)")
} else {
    console.log("Петя выиграл со счетом " + petrPoints + "!!!")
}
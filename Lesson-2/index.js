let fedorPoints = 21; //введите значения очков Федора
let petrPoints = 23; //введите значение очков Петра

if ( fedorPoints <= 21 && ( fedorPoints > petrPoints || petrPoints > 21) && !(fedorPoints === petrPoints) ) {
    console.log("Федя выиграл со счетом " + fedorPoints + "!!")
} else if (fedorPoints > 21 && petrPoints > 21) {
    console.log("Победителей походу сегодня нет(");
 } else if (fedorPoints === petrPoints) {
    console.log("Ничья ребятки, давайте заного)")
} else {
    console.log("Петя выиграл со счетом " + petrPoints + "!!!")
}
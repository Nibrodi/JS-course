let fedorPoints = 20;
let petrPoints = 21;
// Меняем переменные, не стесняемся :)
const blackTarget = 21;
let winnerName = "";
let result = "";

if (isNaN(petrPoints) || isNaN(petrPoints)) {  // добавил проверку на число
    result = "Ошибка данных, пожалуйста, введите число."
} else if (fedorPoints === petrPoints) {
    result = "В игре зафиксированна ничья!";
} else if (petrPoints > blackTarget) {
    if (fedorPoints <= blackTarget) {
        winnerName = "Фёдор";
    }
    else if (fedorPoints < petrPoints) {
        winnerName = "Фёдор";
    }
    else {
        winnerName = "Ошибка, надо дописать программу";
    }
} else if (fedorPoints > blackTarget) {
    if (petrPoints <= blackTarget) {
        winnerName = "Пётр";
    }
    else if (petrPoints < fedorPoints) {
        winnerName = "Пётр";
    }
    else {
        result = "Ошибка, надо дописать программу";
    }
} else if (petrPoints > fedorPoints) {
    winnerName = "Пётр";
} else {
    winnerName = "Фёдор";
}
// Применение switch тут не оправдано, просто решил поработать с этим типом ветвления, знаю, что можно было короче :)
switch (winnerName) {
    case "Фёдор":
        result = "Победил Фёдор! Поздравляем!";
        break;
    case "Пётр":
        result = "Победил Пётр! Поздравляем!";
        break;
}
// вывод результата
console.log(result);
let fedorPoints = 21;
let petrPoints = 22;

if (fedorPoints <= 21 && !( fedorPoints > 21) && ( fedorPoints > petrPoints)) {
    console.log('Федор победил!');
} else if ((fedorPoints > 21 ) && (petrPoints > 21)) {
    console.log('Это перебор!');
} else if (fedorPoints === petrPoints) {
    console.log('Ничья!');
} else {
    console.log('Петр победил!');
}

//пж загружайте файл в формате js) будет проще его грядеть, тк я сначала подумала что вы вообще приложили левый html) в целом работа выполнена хорошо, но есть ошибка в логике. прикладываю файл исправленный:
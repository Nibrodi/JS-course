/* 1. Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
Алгоритм решения:
1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка. Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую (та, которая съедена, становится wasEaten=true, а та, которую покормили, — point++). */

class Bird {   //создаем класс
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
}
const bird1 = new Bird('Bird1'); //перечесляем птиц
const bird2 = new Bird('Bird2');
const bird3 = new Bird('Bird3');
const bird4 = new Bird('Bird4');
const bird5 = new Bird('Bird5');
const bird6 = new Bird('Bird6');
const bird7 = new Bird('Bird7');
const bird8 = new Bird('Bird8');
const bird9 = new Bird('Bird9');
const bird10 = new Bird('Bird10');
const birds = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10]; //создаем массив из птиц
do {
    const predatorBird = Math.floor(Math.random() * (birds.length - 1)); //выбираем рандомную птицу, которая кого-то съест
    const killer = birds[predatorBird]; //обозначаем выбранную птицу-убийцу
    killer.points++; //присваиваем ей поинты
    const saveBird = birds.splice(predatorBird, 1); //удаляем птицу из массива
    const whoWin = Math.floor(Math.random() * (birds.length - 1)); //выбираем птицу, которую съедят
    const victim = birds[whoWin]; //обозначаем бедолагу
    victim.wasEaten = true; //убиваем окончательно
    birds.splice(whoWin, 1); //удаляем ее из массива
    birds.splice(0, 0, killer); //оставляем птицу в массиве, если deleteCount = 0, то птица остается
    console.log(`Пернатый убийца по имени ${killer.name} съел другую птицу! ${victim.name} покинула этот мир....`);
} while (birds.length > 1); //проверяем есть ли в массиве еще данные и выводим заново
console.log(''); //пробел)
console.log(`Ох!!! Птица по имени ${birds[0].name} уничтожила все свое семейство, съев при этом ${birds[0].points} своих собратьев!! Как тебе такие задания по JS Илон Маск?!!`);
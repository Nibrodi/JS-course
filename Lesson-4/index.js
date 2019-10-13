function foo(a) {

    let sum = a;

    function num(b) {
        sum *= b;
        return num;
    }

    num.toString = function() {
        return sum;
    };

    return num;
}
alert("Привет! Сейчас будут выведены ответы функций из 4го задани по JS.")
alert("Ввод foo(5)(2) нам выдал ответ фунции - " + foo(5)(2) ); // 10
alert("Ввод foo(5) нам выдал ответ фунции - " + foo(5) ); // 5
alert("Ввод foo(2)(1)(3)(4) нам выдал ответ фунции - " + foo(2)(1)(3)(4) ); // 24
alert("Ввод foo(252) нам выдал ответ фунции - " + foo(252) ); // 252
alert("Ввод foo(22)(7)(3)(2) нам выдал ответ фунции - " + foo(22)(7)(3)(2) ); // 924


const a = 10;
let s = ' a';
s += a;
console.log(s);

let b = 15;
let x = true;
let y = 1;
console.log( b + 1 );
console.log( b + x );
console.log( b + y );


let li = [1, 2, 3, 4, 5, 6, 7, 8];
li.splice(3, 3);
console.log( li );
li.push(10, 5e+9);
console.log( li );

let ob = { numbers: ''};
ob.numbers = li.join( '; ' );
console.log(ob);

li[7] = li[4];
li[8] = li[4];
ob.newNumbers = li.join( '; ' );
console.log(ob);

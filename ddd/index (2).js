const fedorPoints = 22;
const petrPoints = 23;

if(fedorPoints <= 21) {
    if(fedorPoints > petrPoints || petrPoints > 21) {
        console.log('Федя победил!');
    }
    else if (fedorPoints < petrPoints && petrPoints <= 21) {
        console.log('Петя победил!');
    }
    else {
        console.log('Победила дружба!');
    }
}
else if(petrPoints <= 21) {
    console.log('Петя победил!');
}
else {
    console.log('Оба проиграли');
}
// -----------------   !!! Случайное целое число от min до max !!!
let secret = Math.floor(1 + Math.random() * (10 + 1 - 1));

let out = document.querySelector('.out');
let attempts = document.querySelector('.attempts');
let attemptsNum = 5;
let tries = 0;
let numberButtons = document.querySelectorAll('.numberButton');
let message = '';

for (let item of numberButtons) {
    item.addEventListener('click', () => {
        //  item.getAttribute('data') // получение атрибута нажатой кнопки
        guessNum(+item.getAttribute('data')) // атрибут в форме строки  переводим в число!
    })
}

//  function Start 
let start = document.querySelector('.start');
start.addEventListener('click', startFn);

function guessNum(num) {

    if (tries == attemptsNum) {
        out.innerHTML = 'Ran out of attempts!';
        return;
    }

    if (num === secret) {
        out.innerHTML = 'Congratulations! You guessed it!';
        attempts.innerHTML = 'click Start!';
        return;
    } else if (num > secret) {
        message = 'smaller';
    } else if (num < secret) {
        message = 'larger';
    }
    out.innerHTML = `You didn\'t guess, try again. <br> try a ${message} number`;

    ++tries;
    attempts.innerHTML = attemptsNum - tries;

    console.log('num ==', num);
    console.log('secret ==', secret);
    console.log('tries =', tries);
}

function startFn() {
    tries = 0;
    secret = Math.floor(1 + Math.random() * (10 + 1 - 1));
    out.innerHTML = 'Start';
    attempts.innerHTML = attemptsNum;
}




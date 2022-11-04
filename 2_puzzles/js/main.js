let input = document.querySelector('.input');
let amount = document.querySelector('.amount');

var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        input.value = '';
        console.log(this.tries)
        if (this.tries <= 1 && str.toLowerCase() !== this.correctAnswer) {
            alert('Колличество попыток закончилось!');
            this.tries--;
            amount.innerHTML = this.tries
            return;
        }
        if (str.toLowerCase().includes(this.correctAnswer)) {
            alert('Вы Угадали  , Поздравляем! правильный ответ ' + this.correctAnswer);
            amount.innerHTML = 0;
        } else {

            alert(`Ответ не верный, попробуйте еще раз.`);
            this.tries--;
            amount.innerHTML = this.tries
            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if (this.tries) {
                alert(`Подсказка: ${hint}`);
            }
        }
        console.log(this.tries)
    },
}

window.onload = function () {
    document.querySelector('#riddle').innerHTML = riddle.question;
}

function check() {
    const guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
}

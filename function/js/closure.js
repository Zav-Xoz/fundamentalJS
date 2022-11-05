// CLOSURE  ЗАМЫКАНИЕ
// 1. Функции которые возвращаются из других функций
// 2. Возвращаемая функция запоминает scope ( Область видимости вазвращаемых переменныхS)

function hello(name) {
    const helloName = () => console.log('hello', name);
    return helloName;
}

const helloSerhii = hello('Srhii');
helloSerhii();

const helloJonh = hello('Jonh');
helloJonh();

// ---------------------------------------------

function outer() {
    let counter = 0;

    function incrementCounter() {
        console.log(++counter);
    }
    return incrementCounter;
}
const myCountr1 = outer();
console.log('-------- counter 1')
myCountr1();
myCountr1();
myCountr1();

const myCountr2 = outer();
console.log('-------- counter 2')
myCountr2();
myCountr2();
myCountr2();
myCountr2();
myCountr2();
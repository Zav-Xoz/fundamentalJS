// !!!!!   RECURSION


// ФУНКЦИЯ ВЫЗЫВАЕТ САМА СЕБЯ
// 1. БАЗОВОЕ УСЛОВИЕ (Терминальное ) выход
// 2. Правило движения по рекурсии

function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}
console.log(factorial(3));

// -----------------------------------------------------
// возвращает 5 экземпляров
let counter = 0;
function repeater(char) {
    counter++;
    if (counter === 5) {
        counter = 0;
        return char;
    }
    return char + repeater(char);
}
console.log(repeater('X'));


// --------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getLength(array) {
    if (array.pop() === undefined) return 0;

    return 1 + getLength(array);
}

console.log(getLength(arr));
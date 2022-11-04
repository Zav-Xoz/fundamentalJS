// Варианты Записи  

// 1
// Function Declaration 
sum(3, 4) // !!!!! Work 
function sum(a, b) {
    return a + b;
}

// 2
// Function Exppression
const sumX = function () {
    return a + b;
}

    // 3
    // IIFE   (Immediately - invoked function expfession)
    (function (a, b) {
        return a + b;
    })(5, 34)

//4
// Arrow function

const sum = (a, b) => {
    return a + b;
}

const sum2 = (a, b) => a + b;
const sum3 = x => x + 2;

// ----------------------------------------------------------------------------------
// функции высшего порядка , колбек функции
function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i])) newArray.push(array[i]);
    }
    return newArray;
}
const numbers = [1, 2, 3, 4, 5];

function isOdd(num) {
    return num % 2 !== 0;
}
function isEven(num) {
    return num % 2 === 0;
}

// Для проверки   логи
console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]

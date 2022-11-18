// ERRORS
//  EXEMPLE
// ---------------------------Creat Errors
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('В функцию переданы не числа, для сложения!')
    }
    return a + b;
}
// ---------------------------Handler  Errors ( Обработчик и вывод)
try {
    sum();                     // вызов
    console.log('!!!!!'); // ПРИ ОШИБКЕ НЕ ОТОБРАЗИТЬСЯ_ НЕ ВЫПОЛНИТЬСЯ!!! код остановиться!
} catch (err) {
    console.error(err.message) //вывод
}
console.log('End')
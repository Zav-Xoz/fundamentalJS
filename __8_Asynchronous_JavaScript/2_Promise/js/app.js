// Promise      ----  ОБЕЩАНИЕ дождаться выполнения асинхронной операции, и потом продолжить работу с тем что было в асинхронности 
// resolve      ----  решение  - ответ сервера
// reject       ----  отклонено      - ошибка
console.log('---------------------------------------------------------------');

// const promise = new Promise((resolve, reject) => {
//     resolve('resolve');
//     // reject('reject');
// });

// promise
//     .then((res) => {
//         console.log('then :', res);
//     })
//     .catch((err) => {
//         console.log('catch :', err);
//     });

// console.log('log');

console.log('----------------------------- ДОКА ---------------------------------');
let myFirstPromise = new Promise((resolve, reject) => {
    // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
    // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
    // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
    setTimeout(function () {
        resolve("Success!"); // Ура! Всё прошло хорошо!
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
    // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
    console.log("Ура! " + successMessage + " Это Таймера вывод");
});
console.log('-------------------- Лущенко А ---------------------------');

let a = 7;
console.log(a);
// задаем асинхронную опреацию  прим. Таймер или Ajax
// setTimeout(() => {
//     a = 99;          // отработает чере 2 сек и назанчит через 2 сек
//     console.log(a); //  что бы дождаться операции  придумали промисы - что бы не было ада колбеков
//     console.log('-------------------- Лущенко А ---------------------------');
// }, 2000);



let ppp = new Promise(function (resolve, reject) {
    // задаем асинхронную опреацию  прим. Таймер или Ajax
    setTimeout(() => {
        resolve(a = 99);          // отработает чере 2 сек и назанчит через 2 сек
    }, 2000);
});

ppp.then(() => console.log(a));

console.log('-------------------- fetch это обертка над Promise ---------------------------');


let newPromise = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1')
        .then(data => {
            // console.log(data)
            resolve(data.text());
        })
});
let newPromise2 = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Sergii')
        .then(data => {
            // console.log(data)
            resolve(data.text());
        })
});

Promise.all([ppp, newPromise, newPromise2, myFirstPromise]).then(data => {
    console.log('Promise.all ', data);
    console.log('Promise.all ', data[0]);
    console.log('Promise.all ', data[1]);
    console.log('Promise.all ', data[2]);
    console.log('Promise.all Таймер ', data[3]);
})

// newPromise.then(data => {
//     console.log('ответ Сервера 1', data);
// })
// newPromise2.then(data => {
//     console.log('ответ Сервера 2', data);
// })
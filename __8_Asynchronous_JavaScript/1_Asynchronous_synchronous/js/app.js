// Asynchronous JavaScript
// ОЧередь Вызовов => Стек вызова => вывод или действие


// Callback Stack => Concole        a = 1  , c = 2
// Callback Stack => WebAPIs => Event Loop => Console    b = 3


console.log('Hi there, me first');                       // a = 1 

setTimeout(() => console.log('When is may turn?'), 0);   // b = 3

console.log('Am I Last in the queue?');                  //c = 2
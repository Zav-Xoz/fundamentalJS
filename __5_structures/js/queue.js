// FIFO , FILO
 
//Queue === ОЧЕРЕДЬ  (первый подход)
//- -------                                   FILO === first in, first out
// первым пришел , первым ушел.


// PUSH / shift
const arr = [];
arr.push(11);
arr.push(22);
arr.push(33);

console.log(arr);

arr.shift();
console.log(arr);
//   ------------------------------------     node ./js/main.js

// Steck   ===    Стек   ( второй подход)
//        ------------------                    FILO === first in, last out 
// первым пришел  , ешел последним.
// push / pop 

const arr2 = [];
arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);
arr2.push(5);

console.log(arr2);

arr2.pop();
arr2.pop();
console.log(arr2);
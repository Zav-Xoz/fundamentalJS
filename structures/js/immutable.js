// Immutable  ИММУТАБЕЛЬНОСТЬ -не изменяемость !!!
const arr = [1, 2, 3, 4, 5];

// don`t use pop, push, shift, unshift, sort , reverse

const newArr = arr.slice(0, 4);   //  [1, 2, 3, 4];     var === pop
const newArr2 = [0, ...arr];      //   [0, 1, 2, 3, 4, 5];  ... === unshift(0);

const obj = {
    a: 1,
    b: 2,
    c: 3,
}

//obj.d = 4; // !!!!!!!!!  mutation
//obj.a = 0; // !!!!!!!!!  mutation

const newObj = {
    ...obj,
    a: 0,
    d: 4,
};   // NEW  { a: 0, b: 2, c: 3, d :4}  !!!!! immutable !!!
console.log(obj);
console.log(newObj);
console.log(obj);
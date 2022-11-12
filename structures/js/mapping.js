// MAPPING

// map   ||  forEach      !!! immutable   - не изменяют массив!!!

// ------------------------------------------------ forEach 
const number = [1, 2, 3, 4, 5, 6, 7, 8];

//forEach  === для каждого  ( в основном применяет функцию , создается отдельно или анономная в качестве параметра)
// ------------------------------------------------
// const newArr = [];
// function dabble(num) {
//     newArr.push(num * 2);
// }
// number.forEach(dabble);
// console.log(newArr);
// ------------------------------------------------
function print(element, index, array) {
    console.log(`index = ${index} : element = ${element} `);
}
number.forEach(print);

// ------------------------------------------------ map

function dabbleNum(num) {
    return num * 2;
}
const result = number.map(dabbleNum);
console.log(result);
// Destructuring
// ИЗВЛЕКАЮЩЕЕ ПРИСВАИВАНИЕ   

//  Массивы по порядку вытягиваются


const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];

// const madrid = cities[0];

// const [madrid, amst, paris] = cities;
// console.log(madrid, amst, paris);

const [madrid, amst, ...otherCities] = cities;
console.log(madrid, amst, otherCities);    // Madrid Amsterdam [ 'Paris', 'Berlin', 'Kiev' ]

// ----------------------- продвинутое извлечение с заменой если не существует изначально
const numbers = [1, 2, [3, 4], 110, 120, 130];
const [
    a = 21,             // значение по умолчанию  если не существует значение
    b = 22,             // значение по умолчанию  если не существует значение
    [c = 23, d = 24]    // значение по умолчанию  если не существует значение
] = numbers || [];      // значение по умолчанию  если не существует значение
console.log(a, b, c, d);  // 1 2 3 4
// -----------------------

let x = 10;
let y = 20;

[y, x] = [x, y];

console.log(y, x);   //10 20  


// ----Object ----Object ----Object ----Object ----Object ----Object
// обьекты ватягиваются по ключам

const devoloper = {
    id: 1,
    fullName: 'John Doe',
    skills: ['HTML', 'CSS', 'JavaScript'],
    area: 'frontend',
    languages: {
        english: 'B2',
        spanish: 'native',
        hebrew: 'A1',
    },
}

const area = 'Full-stack';

const {
    area: areaDeveloper = '',
    id = null,
    languages: {
        spanish
    },
    ...otherProp
} = devoloper;

console.log(area, areaDeveloper, id, otherProp);
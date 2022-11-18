// JSON - JavaScript Object Notation 
// ! ни каких кометариеев  - ни каких функций
// только данные 
//  Все в двойных ковычках
// Без последней запятой

const str = `{
    "firstName" : "mikhail",
    "age": "36",
    "skills": ["Java"],
    "languages": {
        "key": "value"
    }
}`;

const obj = JSON.parse(str);
console.log(obj.firstName); // mikhail
console.log(obj.skills);    // [ 'Java' ]
console.log(obj);
// -------------------------------------------------------
const object = { a: 1, b: 2, c: 'ccc', }
const json = JSON.stringify(object);
console.log(json);    //    {"a":1,"b":2,"c":"ccc"}
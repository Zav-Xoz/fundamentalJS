// RegExp    РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

// Создаение 
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

// 
const str = 'JavaScript is cool! Everybody should learn JavaScript';
// поиск в строке  , i - флаг независимо от регистра.
console.log(/javascript/i.test(str));  // true
// замена в строке  , i - флаг независимо от регистра.  , g - флаг глобально , по всей строке.
console.log(str.replace(/javascript/ig, 'React.JS'));
// вернет массив если найдет значение  ,если нет Null
//  i - флаг независимо от регистра.  , g - флаг глобально , по всей строке.
console.log(str.match(/javascript/ig)); // [ 'JavaScript', 'JavaScript' ]
// Пример проверки шаблона
// Google  >>> email regex js
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

console.log(validateEmail('webzavhoz@gmail.com'));
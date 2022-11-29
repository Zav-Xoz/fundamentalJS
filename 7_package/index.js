import { addOne, sum } from './modules/first';
import { firstName } from './modules/second';

console.log(addOne(3));
console.log(sum(2, 2));
console.log(firstName);
console.log(`Hello from entry point. ${firstName}`);

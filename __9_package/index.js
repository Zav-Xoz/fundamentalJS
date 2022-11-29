import { addOne, sum } from './modules/first';
import { firstName } from './modules/second';

import print from './modules/third';

console.log(addOne(43));
console.log(sum(2, 2));

console.log(`Hello from entry point. ${firstName}`);

print();
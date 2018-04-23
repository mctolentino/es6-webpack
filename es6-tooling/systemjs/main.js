import {sum, kebabCase, filter} from 'npm:lodash';
import {addTax} from './checkout.js';

console.log(kebabCase('hey it works!'));
console.log(addTax(120, 0.13));
console.log(filter([1,2,3], (value) => {return value===4}))
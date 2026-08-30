import {vat, withVat} from './money.js';

const bill=1000;

console.log(`Vat rate = ${vat}`)

console.log(withVat(bill));
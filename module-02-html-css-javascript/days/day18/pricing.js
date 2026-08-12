// const vat = 0.15
// export const withVat = n=> n + (n * vat); 

// export const format= p => `${p.tofixed(2)} ETB`;

// export default function total(order){

//     const {price, qty} = order
//     const total = prices.reduce((s, price)=> s=price*qty, 0);
// };
const VAT_RATE = 0.15;

export const withVat = (n) => n + n * VAT_RATE;

// Fixed case sensitivity: toFixed
export const format = (p) => `${p.toFixed(2)} ETB`;
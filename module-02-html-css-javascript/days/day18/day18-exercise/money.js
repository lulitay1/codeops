export const vat = 0.15;

export function withVat(price){
    let total = price + price * vat
    return total;
}
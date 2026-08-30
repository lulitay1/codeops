function Vat(amount,rate=0.15){
    const vat=amount*rate
    return vat
}

//Arrow function implementation of the above function
const vat =(amount, rate=0.15)=> amount*rate

//---2-----
function Closure_fun(){
    let count=0;
    return (
        function increment(){
            return count +=1
        }
    )
}

//console.log(count); //return count not defined because it's (private).

const counter = Closure_fun()

console.log(counter()); //increments count to 1
console.log(counter()); //increments count again to 2

//comment - count stays private because we can not access it without calling the function 
//it was created in. This is the concept of closure. it is inside outer function's scope.
// Only the returned inner function can access and modify it.

function discountBy(rate){
     return (
        function (price) {
        return price - (price * rate);
        } )
}

const memberPrice = discountBy(0.10);
const salePrice = discountBy(0.30);

console.log(memberPrice(1000)); // 900
console.log(salePrice(1000));   // 700

//--------4--------

//Higher order function which takes function as a parameter needs an actual 
//actual function as an argument when called.
function applyToAll(list, fn) {
    const results = [];

    for (const item of list) {
        results.push(fn(item));
    }

    return results;
}

const prices = [100, 200, 500, 1000];

const pricesWithVAT = applyToAll(prices, function (price) {
    return price * 1.15; // 15% VAT
});

console.log(pricesWithVAT);
// [115, 230, 575, 1150]


// -------5-----------
const cities = [
    "Addis Ababa",
    "Dire Dawa",
    "Bahir Dar",
    "Hawassa",
    "Mekelle"
];

cities.forEach(function (city, index) {
    console.log(`${index + 1}. ${city}`);
});

//For each does something (fun) for each member of the array.
//In this case it's displaying them as list with number.


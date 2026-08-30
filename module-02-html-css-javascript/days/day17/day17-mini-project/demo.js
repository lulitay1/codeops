import createLoyalty from './loyalty.js'
// const createLoyalty = require("./loyalty.js");

// Create a normal loyalty card
const card = createLoyalty();

card.earn(250); // 25 points
console.log("Balance after earning:", card.balance());

card.redeem(10);
console.log("Balance after redeeming:", card.balance());

// Try to redeem more points than available
card.redeem(100);
console.log("Balance after large redemption:", card.balance());


// Create another card with a different earn rule
// Holiday rule: double points
const holiday = createLoyalty(
    etb => Math.floor(etb / 10) * 2
);

holiday.earn(250);

console.log("Holiday card balance:", holiday.balance());


// Demonstrate that each card has its own independent balance
console.log("Normal card balance:", card.balance());
console.log("Holiday card balance:", holiday.balance());
//----1-----------

prices = [200, 300, 1000, 2000]

let withVat = prices.map(item => item + item* 0.15)
console.log(`prices after vat = [${withVat}]`);

let small = prices.filter(item=> item<1000);
console.log(`Less than 100 = [ ${small} ]`);

let total = prices.reduce((sum, item)=> sum += item, 0 );
console.log(`Total = ${total}`);

//------2-----------
const customer = {
    name: "Abebe",
    city: "Addis Ababa",
    balance: 2000
}

for (const [key, value] of Object.entries(customer)) { 
  console.log(key, value); 
}

//---------3------
// const {name} = customer;
function greet({ name , city }) {
     return `Selam ${name} from ${city}` ; } 
console.log(greet(customer) )

//----4----
const withPhone = { ...customer, city: "Bahir Dar", phone: "0911-----" };
console.log(withPhone);
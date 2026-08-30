import { transactions } from "./transactions.js"; 
import { totalByType } from "./report.js"; 

const formatted_debit = (`Total Debits: ${totalByType(transactions, "debit")} ETB`); 
console.log(formatted_debit);

const credit = (`Total Credits: ${totalByType(transactions, "credit")} ETB`); 
console.log(credit);

//Updated first element with spread 
//nested spread to access the object key from inside
const updated = [...transactions, {...transactions[0], amount:1000}] 
const updated_debit = (`updated Debits: ${totalByType(updated, "debit")} ETB`); 
console.log(updated_debit);


let bill_one = "1000";
let bill= Number(bill_one);
let party_size = 7;
let tipped_bill;
let service = "Tele_birr";
let fee;

bill >= 300? tipped_bill= bill+ (bill*0.1): tipped_bill= bill + (bill * 0.05) 

per_person= tipped_bill/ party_size
console.log(`Bill = ${bill} ETB \nTipped bill = ${tipped_bill} ETB, \n`+`Each person's share = ${per_person} ETB`)

switch(service){
    case 'CBE':
        fee = bill * 0.05;
        break;
    case 'Tele_birr':
        fee = bill * 0.07;
        break;
    default:
        fee = 0;
        break;
}
console.log(`Fee for service = ${fee} ETB \nTotal after service= ${tipped_bill + fee} ETB`)
 

This project aims to focus on 
1. Array methods
2. Object destructuring 
3. Module importing and exporting

# reports.js file
This file has a function where the main calculation of total is done. It's then exported.
There were map, filter and reduce methods in this function.
1. filter method filtered the array elements based on transaction type.
2. reduce by destructuring the amount for each element calculated the total in each transactions type.

# transactions.js
stores an array of object with two transaction type (Debit and Credit). This is then exported.

# app.js
This is the main file where the above functions are imported and called to make a formatted total receipt of the two transaction types.

Made a new receipt by inside this file by updating the transaction arry using spread. We had to use nested spread because the array was an array of objects.
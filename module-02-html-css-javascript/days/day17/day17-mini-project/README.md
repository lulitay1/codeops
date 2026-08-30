 README explaining how the balance stays private. 
 - In this project we created createLoyalty() function which a HOF 
 - HOF is a function which takes a function as a parameter or returns a function.
 - In this case createLoyalty() function does both.

- It creates a variable called point which stores the balance.
- Since the variable is defined inside the function it is private.
- It returns three functions that exposes this private point variable.
- If you try to console.log point it will throw an error.
- You can update it with the earn and redeem functions and you can access it with balance       function but you can never access or update it directly.

- We kept the function file loyalty.js  as a clean function but exported it.
- demo.js file imported it and did all the console logging.
- This is the concept of module, importing and exporting.
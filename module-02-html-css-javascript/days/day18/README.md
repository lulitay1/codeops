Requirements
• Export withVat and format from pricing.js.
• Import them into summary.js.
• Use reduce to total each order’s items (destructure { price, qty }).
• Use map + spread to attach a total field to each order.
• Use filter to list only orders over 500 ETB.
• Print a formatted summary and the grand total

Checklist
✓ Exported withVat and format from pricing.js.
✓ Imported them into summary.js.
✓ Used reduce to total each order’s items (destructure { price, qty })
✓ destructured { price, qty } to extract and use them in the calcuation
✓ Used map(new array from order) + spread(copy order and add total) to attach a total field to each order's item key.
✓ Use filter on total to list only orders over 500 ETB.
✓ Printted a formatted summary and the grand total

Project brain storming

This project built and Addis market order summary
order.js
We created an array of objects in the order.js file first.
orders array is a sample data for orders we had two order objects here in this array.
Each order object contained id, customer and items keys.
Each items key was itself an array with 3 objects.
Each item object had 3 keys wih name, price and quantity of items. 
This nesting was neccessary because there needed to be many items to have a total calculation within each orders.

pricing.js
Inside pricing.js we created the calcukation of pricing and format to present the price in two arrow functions.
the pricing was calculated by withvat function and this function was named exported.
The format arrow function used string literal and tofixed built in function and also ETB to show the price, we imported and called it in summary.js for total prices and grand prices that were displayed. Everytime we need to display a price we import and call this const.

summary.js
This file is where all functions and lists of arrays were imported to be used here.
we called pricing for the orders.
we were required to use reduce, destructure, spread and map.
We mapped the order array in to a new one that includes total in the items key
We used spread to copy the first order array and included withvat(total) as another key of items
We filtered totals over 500 using filter
We used reduce on total to calculate the grandtotal for all orders
We finally called format which we imported to log the total price, prices over 500 and the grand total in a formatted way.

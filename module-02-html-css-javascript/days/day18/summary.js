import { withVat, format } from "./pricing.js";
import { orders } from "./orders.js";

//Calculate total for each order using map, spread, reduce, destructuring
const ordersWithTotals = orders.map((order) => {
  const subtotal = order.items.reduce(
    (sum, { price, qty }) => sum + price * qty,
    0
  );

  console.log(subtotal);
  return {
    ...order,
    total: withVat(subtotal)
  };
});

// orders over 500 ETB using destructuring
const highValueOrders = ordersWithTotals.filter(({ total }) => total > 500);

// grand total of all orders
const grandTotal = ordersWithTotals.reduce(
  (sum, { total }) => sum + total,
  0
);

// Print summary
console.log("--- ALL ORDERS ---");
ordersWithTotals.forEach(({ id, total }) => {
  console.log(`Order #${id} Total: ${format(total)}`);
});

console.log("\n--- ORDERS OVER 500 ETB ---");
highValueOrders.forEach(({ id, total }) => {
  console.log(`Order #${id} Total: ${format(total)}`);
});

console.log(`\nGrand Total: ${format(grandTotal)}`);
console.log(ordersWithTotals);
const {price, qty} = orders[0].items[0]
console.log (price, qty)

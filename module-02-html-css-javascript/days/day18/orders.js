// order = [
//      {item: Banana , price: 20 , qty:5 },
//      {item: Apple , price: 40 , qty:2},
//      {item: Cake , price: 50 , qty:1}
// ]// Wrapped items inside an order object structure so we can test filtering
export const orders = [
  {
    id: 1,
    customer: "Order A",
    items: [
      { item: "Banana", price: 20, qty: 5 },
      { item: "Apple", price: 40, qty: 2 },
      { item: "Cake", price: 50, qty: 1 }
    ]
  },
  {
    id: 2,
    customer: "Order B",
    items: [
      { item: "Coffee (kg)", price: 400, qty: 2 },
      { item: "Honey", price: 300, qty: 1 }
    ]
  }
];
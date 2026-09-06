import { cartReducer } from "./CartReducer";

const initialState = {
  items: [],
};

const dish = {
  id: 1,
  name: "Kitfo",
  price: 350,
};

console.log("ADD:", cartReducer(initialState, {
  type: "add",
  dish,
}));

const stateWithDish = cartReducer(initialState, {
  type: "add",
  dish,
});

console.log("REMOVE:", cartReducer(stateWithDish, {
  type: "remove",
  id: 1,
}));

console.log("CLEAR:", cartReducer(stateWithDish, {
  type: "clear",
}));
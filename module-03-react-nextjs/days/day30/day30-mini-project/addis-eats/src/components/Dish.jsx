import { useContext } from "react";
import { CartContext } from "./CartProvider";

function Dish({ dish }) {
  const { dispatch } = useContext(CartContext);

  function handleAdd() {
    dispatch({
      type: "add",
      dish,
    });
  }

  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.price} ETB</p>

      <button onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default Dish;
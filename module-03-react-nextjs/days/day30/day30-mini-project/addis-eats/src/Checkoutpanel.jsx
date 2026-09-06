import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CheckoutPanel() {
  const { items, dispatch, total } = useContext(CartContext);

  function handleClear() {
    dispatch({ type: "clear" });
  }

  return (
    <section>
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((dish) => (
            <div key={dish.id}>
              <span>
                {dish.name} - {dish.price} ETB
              </span>

              <button
                onClick={() =>
                  dispatch({
                    type: "remove",
                    id: dish.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: {total} ETB</h3>

          <button onClick={handleClear}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default CheckoutPanel;
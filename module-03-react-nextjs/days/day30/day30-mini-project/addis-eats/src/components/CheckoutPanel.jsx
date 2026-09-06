import { useContext } from "react";
import { CartContext } from "../CartProvider";

function CheckoutPanel() {
  const { items, total, dispatch } = useContext(CartContext);

  function handleRemove(cartItemId) {
    dispatch({
      type: "remove",
      id: cartItemId,
    });
  }

  function handleClear() {
    dispatch({
      type: "clear",
    });
  }

  return (
    <section className="checkout-panel">
      <h2>Your Order</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div
                className="cart-item"
                key={item.cartItemId}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price} ETB</p>
                </div>

                <button
                  onClick={() => handleRemove(item.cartItemId)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>Total: {total} ETB</strong>
          </div>

          <button onClick={handleClear}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default CheckoutPanel;
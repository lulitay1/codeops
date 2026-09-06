import { useContext } from "react";
import { CartContext } from "../CartProvider";

function CartBadge() {
  const { items } = useContext(CartContext);

  return (
    <span className="cart-badge">
      Cart: {items.length}
    </span>
  );
}

export default CartBadge;
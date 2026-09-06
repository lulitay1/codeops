import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CartBadge() {
  const { items } = useContext(CartContext);

  return (
    <div>
      🛒 Cart: {items.length}
    </div>
  );
}

export default CartBadge;
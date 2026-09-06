import { CartProvider } from "./CartProvider";
import Menu from "./components/Menu";
import CartBadge from "./CartBadge";
import CheckoutPanel from "./CheckoutPanel";

function App() {
  return (
    <CartProvider>
      <header>
        <h1>Addis Eats</h1>
        <CartBadge />
      </header>

      <main>
        <Menu />
        <CheckoutPanel />
      </main>
    </CartProvider>
  );
}

export default App;
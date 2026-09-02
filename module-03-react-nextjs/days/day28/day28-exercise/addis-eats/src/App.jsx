import { useState } from "react";
import Menu from "./Menu";
import DeliveryForm from "./DeliveryForm";
import menu from "./data";
import './index.css'

function App() {
  const [orderTotal, setOrderTotal] = useState(0);

  function handleAdd(price) {
    setOrderTotal(
      (currentTotal) => currentTotal + price
    );
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">WELCOME TO</p>

        <h1>Addis Eats</h1>

        <p>
          Authentic Ethiopian food delivered to your door.
        </p>
      </header>

      <Menu
        dishes={menu}
        orderTotal={orderTotal}
        onAdd={handleAdd}
      />

      <DeliveryForm orderTotal={orderTotal} />
    </main>
  );
}

export default App;
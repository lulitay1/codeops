import { useEffect, useState } from "react";
import Menu from "./Menu";
import DeliveryForm from "./DeliveryForm";
import "./index.css";

function App() {
  const [dishes, setDishes] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    fetch("/dishes.json")
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }, []);

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
        dishes={dishes}
        orderTotal={orderTotal}
        onAdd={handleAdd}
      />

      <DeliveryForm orderTotal={orderTotal} />
    </main>
  );
}

export default App;
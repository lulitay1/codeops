import { useState } from "react";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import "./index.css";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [orderTotal, setOrderTotal] = useState(0);

  function handleAdd(price) {
    setOrderTotal(
      (currentTotal) => currentTotal + price
    );
  }

  return (
    <ThemeContext.Provider value="light">
    <main>
      <header className="hero">
        <p className="eyebrow">WELCOME TO</p>

        <h1>Addis Eats</h1>

        <p>
          Authentic Ethiopian food delivered to your door.
        </p>
      </header>

      <Menu
        orderTotal={orderTotal}
        onAdd={handleAdd}
      />

      <OrderForm orderTotal={orderTotal} />
    </main>
    </ThemeContext.Provider>
  );
}

export default App;
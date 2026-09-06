import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { fetchDishes } from "../api";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadDishes() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchDishes(
          category,
          controller.signal
        );

        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadDishes();

    return () => {
      controller.abort();
    };
  }, [category]);

  function handleAdd(price) {
    setOrderTotal(
      (currentTotal) => currentTotal + price
    );
  }

  const categories = [
    "All",
    "Main",
    "Vegan",
    "Starter",
    "Grill",
  ];

  if (loading) {
    return <p>Loading the menu...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <input
        ref={searchRef}
        type="search"
        placeholder="Search dishes..."
        aria-label="Search dishes"
      />

      <CategoryBar
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={dishes}
        onAdd={handleAdd}
      />

      <p className="order-total">
        Order Total: <strong>{orderTotal} ETB</strong>
      </p>

      <OrderForm />
    </section>
  );
}

export default Menu;
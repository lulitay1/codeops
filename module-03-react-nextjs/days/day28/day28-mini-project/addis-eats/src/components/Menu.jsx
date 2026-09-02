import { useState } from "react";
import PropTypes from "prop-types";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function handleAdd(price) {
    setOrderTotal((currentTotal) => currentTotal + price);
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <CategoryBar
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={filteredDishes}
        onAdd={handleAdd}
      />

      <p className="order-total">
        Order Total: <strong>{orderTotal} ETB</strong>
      </p>

      <OrderForm />
    </section>
  );
}

Menu.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      spicy: PropTypes.bool,
    })
  ).isRequired,
};

export default Menu;
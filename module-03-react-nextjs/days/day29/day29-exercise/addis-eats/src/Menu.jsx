import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes, orderTotal, onAdd }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === selectedCategory
        );

  useEffect(() => {
    document.title = `${filteredDishes.length} dishes`;
  }, [filteredDishes]);

  return (
    <section className="menu-section">
      <div className="menu-header">
        <div>
          <h2>Our Menu</h2>
          <p>Choose your favorite dishes.</p>
        </div>

        <p className="order-total">
          Order Total: <strong>{orderTotal} ETB</strong>
        </p>
      </div>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <DishList
        dishes={filteredDishes}
        onAdd={onAdd}
      />
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
  orderTotal: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Menu;
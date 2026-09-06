import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ orderTotal, onAdd }) {
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchInputRef = useRef(null);

  // Focus the search input after the menu has finished loading
  useEffect(() => {
    if (!loading) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  // Load dishes whenever the selected category changes
  useEffect(() => {
    const controller = new AbortController();

    async function loadDishes() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/dishes.json", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(
            "Could not load the menu. Please try again."
          );
        }

        const data = await res.json();

        setDishes(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadDishes();

    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  // Loading state
  if (loading) {
    return <p>Loading the menu...</p>;
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  // Get all available categories
  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  // Filter dishes for display
  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === selectedCategory
        );

  return (
    <section className="menu-section">
      <div className="menu-header">
        <div>
          <h2>Our Menu</h2>

          <p>
            Choose your favorite dishes.
          </p>
        </div>

        <p className="order-total">
          Order Total: <strong>{orderTotal} ETB</strong>
        </p>
      </div>

      <input
        ref={searchInputRef}
        type="search"
        placeholder="Search dishes..."
        aria-label="Search dishes"
      />

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
  orderTotal: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Menu;
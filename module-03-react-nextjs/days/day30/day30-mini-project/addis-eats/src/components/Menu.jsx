import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useFetch } from "../useFetch";

function Menu() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const searchInputRef = useRef(null);

  const {
    data: dishes,
    loading,
    error,
  } = useFetch("/dishes.json");

  // Focus the search field after the menu has loaded.
  useEffect(() => {
    if (!loading) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  const categories = [
    "All",
    ...new Set(
      dishes.map((dish) => dish.category)
    ),
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) =>
            dish.category === selectedCategory
        );

  // Stable callback for the memoised CategoryBar/DishList
  // related rendering path.
  const handleCategorySelect = useCallback(
    (category) => {
      setSelectedCategory(category);
    },
    []
  );

  if (loading) {
    return (
      <section className="menu-section">
        <p>Loading the menu...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="menu-section">
        <p className="error">{error}</p>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <div className="menu-header">
        <div>
          <h2>Our Menu</h2>

          <p>
            Choose your favorite dishes.
          </p>
        </div>
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
        onSelect={handleCategorySelect}
      />

      <DishList
        dishes={filteredDishes}
      />
    </section>
  );
}

export default Menu;
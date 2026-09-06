import { useEffect, useRef, useState } from "react";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchRef = useRef(null);

  // 7. Focus search input when component mounts
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  // 2, 3, 4, 5, 6. Fetch dishes
  useEffect(() => {
    const controller = new AbortController();

    async function loadDishes() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/dishes.json", {
          signal: controller.signal,
        });

        // 4. Check if request was successful
        if (!res.ok) {
          throw new Error("Could not load the menu.");
        }

        const data = await res.json();

        // Filter after fetching
        const shown =
          category === "All"
            ? data
            : data.filter(
                (dish) => dish.category === category
              );

        setDishes(shown);
      } catch (err) {
        // Ignore cancellation errors
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadDishes();

    // 6. Cancel previous request
    return () => {
      controller.abort();
    };
  }, [category]);

  // 1. Update browser title whenever shown dishes change
  useEffect(() => {
    document.title = `${dishes.length} dishes`;
  }, [dishes]);

  // 3. Loading early return
  if (loading) {
    return <p>Loading menu...</p>;
  }

  // 3 & 4. Error early return
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h2>Our Menu</h2>

      {/* 7. Search input */}
      <input
        ref={searchRef}
        type="search"
        placeholder="Search dishes..."
      />

      {/* 5. Category */}
      <div className="category-bar">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Main")}>
          Main
        </button>

        <button onClick={() => setCategory("Vegan")}>
          Vegan
        </button>

        <button onClick={() => setCategory("Starter")}>
          Starter
        </button>

        <button onClick={() => setCategory("Grill")}>
          Grill
        </button>
      </div>

      {/* Empty state */}
      {dishes.length === 0 ? (
        <p>No dishes in this category yet.</p>
      ) : (
        dishes.map((dish) => (
          <div className="dish" key={dish.id}>
            <h3>
              {dish.name}{" "}
              {dish.spicy && <span>• Spicy</span>}
            </h3>

            <p>{dish.price} ETB</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Menu;
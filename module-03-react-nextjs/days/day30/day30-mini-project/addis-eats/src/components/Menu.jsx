import { useState } from "react";
import useFetch from "../useFetch";

function Menu() {
  const [category, setCategory] = useState("All");

  const url =
    category === "All"
      ? "/dishes.json"
      : `/dishes.json?category=${category}`;

  const { data, loading, error } = useFetch(url);

  const dishes =
    category === "All"
      ? data
      : data.filter((dish) => dish.category === category);

  return (
    <div>
      <h1>Our Menu</h1>

      <div>
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Main")}>
          Main
        </button>

        <button onClick={() => setCategory("Drink")}>
          Drink
        </button>
      </div>

      {loading && <p>Loading menu...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          {dishes.map((dish) => (
            <div key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.price} ETB</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ name, price, currency = "ETB", spicy = false }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <div className="dish">
      <div>
        <h3>
          {name}{" "}
          {spicy === true && (
            <span className="spicy-badge">• Spicy</span>
          )}
        </h3>

        <p>
          {price} {currency}
        </p>
      </div>

      <div className="dish-actions">
        <span>Added: {count}</span>

        <button onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  spicy: PropTypes.bool,
};

export default Dish;
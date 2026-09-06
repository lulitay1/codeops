import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../ThemeContext";
function Dish({ name, price, currency = "ETB", spicy = false, onAdd }) {
  const [count, setCount] = useState(0);

  const theme = useContext(ThemeContext);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);
    onAdd(price);
  }

  return (
    <div className={`dish ${theme}`}>
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
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default Dish;
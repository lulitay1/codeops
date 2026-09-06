import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../CartProvider";

function Dish({
  name,
  price,
  spicy,
  currency = "ETB",
  dish,
}) {
  const { dispatch } = useContext(CartContext);

  function handleAdd() {
    dispatch({
      type: "add",
      dish,
    });
  }

  return (
    <div className="dish">
      <div>
        <h3>
          {name}{" "}
          {spicy === true && (
            <span>• Spicy</span>
          )}
        </h3>

        <p>
          {price} {currency}
        </p>
      </div>

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
  }).isRequired,
};

export default Dish;
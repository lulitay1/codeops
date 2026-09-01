import PropTypes from "prop-types";
import Card from "./Card";
import Dish from "./Dish";

function Menu({ dishes, category }) {
  const filteredDishes = dishes.filter(
    (dish) => dish.category === category
  );

  if (filteredDishes.length === 0) {
    return <p>No dishes found in this category.</p>;
  }

  return (
    <section>
      <h2>{category} Dishes</h2>

      {filteredDishes.map((dish) => (
        <Card key={dish.id}>
          <Dish
            name={dish.name}
            price={dish.price}
            spicy={dish.spicy}
          />
        </Card>
      ))}
    </section>
  );
}

export default Menu;
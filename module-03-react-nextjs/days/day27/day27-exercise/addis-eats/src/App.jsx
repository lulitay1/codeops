import Header from "./Header";
import Dish from "./Dish";
import Card from "./Card";
import './assets/style.css'

const dishes = [
    {
    id: 1,
    name: "Doro Wot",
    price: 450,
    category: "Main",
    spicy: true
    },
    {
    id: 2,
    name: "Kitfo",
    price: 500,
    category: "Main",
    spicy: true
    },
    {
    id: 3,
    name: "Tibs",
    price: 400,
    category: "Main",
    spicy: false
    },
    {
    id: 4,
    name: "Shiro Wot",
    price: 250,
    category: "Main",
    spicy: true
    },
      {
    id: 3,
    name: "Sambusa",
    price: 80,
    category: "Starter",
    spicy: false,
  },
    
];

function App() {

    const category = "Starter";

    const filteredMenu = dishes.filter(
        (item) => item.category === category
    );

    if (filteredMenu.length === 0) {
        return <p>No dishes found in this category.</p>;
    }


    return (
    <div>

        <Header />

        <main>

            <h2>Our Menu</h2>
            <section className="dish-grid">
            <h2>{category} Dishes</h2>

            {filteredMenu.map((item) => (
                <Card key={item.id}>
                <Dish
                    name={item.name}
                    price={item.price}
                    spicy={item.spicy}
                />
                </Card>
            ))}
            </section>

            </main>

        </div>
    );
}

export default App;
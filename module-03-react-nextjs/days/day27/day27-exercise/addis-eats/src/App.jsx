import Header from "./Header";
import Dish from "./Dish";
import './assets/style.css'

function App() {

    const dishes = [
        {
            id: 1,
            name: "Doro Wot",
            price: 450,
            spicy: true
        },
        {
            id: 2,
            name: "Kitfo",
            price: 500,
            spicy: true
        },
        {
            id: 3,
            name: "Tibs",
            price: 400,
            spicy: false
        },
        {
            id: 4,
            name: "Shiro Wot",
            price: 250,
            spicy: true
        }
    ];

    return (
        <div>

            <Header />

            <main>

                <h2>Our Menu</h2>
            <section className="dish-grid">

                {dishes.map((dish) => (
                    <Dish
                        key={dish.id}
                        name={dish.name}
                        price={dish.price}
                        spicy={dish.spicy}
                    />
                ))}
            </section>

            </main>

        </div>
    );
}

export default App;
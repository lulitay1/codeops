import Header from './components/Header.jsx';
import Dish from './components/Dish.jsx';
import './assets/css/style.css'



function App() {

const menu =[
  {id:1, name: "Doro Wot", price: 200},
  {id:2, name: "Tibs", price: 250},
  {id:3, name: "Shiro", price: 150}
]
  return (
        <>
            <Header />

            <main>
                <h2>Our Menu</h2>

                <section className="menu">
                    {menu.map((item) => (
                        <Dish
                            key={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export default App;

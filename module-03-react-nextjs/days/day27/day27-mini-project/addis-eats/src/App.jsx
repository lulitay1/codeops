import Menu from "./components/Menu";
import menu from "./data";
import './assets/css/style.css';

function App() {
  return (
    <main>
      <h1>Addis Eats</h1>

      <Menu dishes={menu} category="Main" />
    </main>
  );
}

export default App;
import Menu from "./components/Menu";
import Header from "./components/Header";
import menu from "./data";
import "./assets/css/style.css";

function App() {
  return (
    <main>
      <Header />

      <Menu dishes={menu} />
    </main>
  );
}

export default App;
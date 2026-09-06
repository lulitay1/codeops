import CartBadge from "./CartBadge";

function Header() {
  return (
    <header>
      <div>
        <h1>Addis Eats</h1>
        <p>Traditional Ethiopian food</p>
      </div>

      <CartBadge />
    </header>
  );
}

export default Header;
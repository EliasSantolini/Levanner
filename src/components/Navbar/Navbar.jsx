import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div>
          <h1 className="Titulo">Levanner</h1>

          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

const Navbar = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <nav className="Navbar">
        <div>
          <Link to="/">
            <h1 className="Titulo">Levanner</h1>
          </Link>
          <Link to="/category/hombre" className="Link" style={{ margin: 10 }}>
            Perfumes para hombres
          </Link>
          <Link to="/category/mujer" className="Link">
            Perfumes para mujeres
          </Link>
          <Link to="/category/unisex" className="Link" style={{ margin: 10 }}>
            Perfumes Unisex
          </Link>
        </div>
        <CartWidget quantity={totalQuantity} />
      </nav>
    </div>
  );
};

export default Navbar;

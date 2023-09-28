import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import  { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div>
          <h1 className="Titulo">Levanner</h1>
          <CartWidget />
          <div className="categorias">
            <Link
              className="hombre"
              to="/category/hombre"
              style={{ margin: 50 }}
            >Perfumes para hombres
            </Link>
            <Link className="Link" to="/category/mujer">
              Perfumes para mujeres
            </Link>
            <Link className="Link" to="/" style={{ margin: 50 }}>
              Ver Todos
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

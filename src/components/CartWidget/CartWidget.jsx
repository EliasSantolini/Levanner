import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css";

const CartWidget = ( quantity ) => {
  return (
    <Link to={"/cart"} className="cart">
      <img
        src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
        alt="CartWidget"
        className="Cart"
      />
      <h4 className="numero">{quantity}</h4>
    </Link>
  );
};

export default CartWidget;

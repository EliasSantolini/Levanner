import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import "./ItemCart.css";
import CartItemCounter from "./CartItemCounter";

const ItemCart = ( id, name, quantity, price ) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article style={{ display: "flex", justifyContent: "space-around" }}>
      <h3>{name}</h3>
      <h5>precio: ${price}</h5>
      <CartItemCounter />
      <h4>cantidad: {quantity}</h4>
      <h4>Subtotal: ${price * quantity}</h4>
      <button className="option" onClick={() => removeItem(id)}>
        ❌
      </button>
    </article>
  );
};

export default ItemCart;

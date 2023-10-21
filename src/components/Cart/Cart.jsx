import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import CartList from "../CartList/CartList";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Productos en su carrito</h1>
      <CartList cart={cart} />
    </div>
  );
};

export default Cart;

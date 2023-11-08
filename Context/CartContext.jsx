/* import { getToPathname } from "@remix-run/router"; */
import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };


  const removeItem = (id) => {
    const cartUpdate = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdate);
  };

  const GetTotalQuantity = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity;
    });

    return accu;
  };

  const totalQuantity = GetTotalQuantity();

  return (
    <CartContext.Provider value={[ cart, addItem, totalQuantity, removeItem ]}>
      {props.Children}
    </CartContext.Provider>
  );
};

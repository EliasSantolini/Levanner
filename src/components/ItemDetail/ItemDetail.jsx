import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";

const ItemDetail = ( id, name, img, price, category, desc, stock ) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    console.log("agregue al carrito: ", quantity);

    setQuantity(parseInt(quantity));

    addItem({ id, name, quantity, price });
  };

  return (
    <div className="div">
      <h4>{name}</h4>
      <p>{category}</p>
      <img src={img} alt={name} style={{ width: 200 }} />
      <p>$ {price}</p>
      <p>Descripcion: {desc}</p>
      {quantity > 0 ? (
        <Link to={"/Cart"}>Terminar Compra</Link>
      ) : (
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetail;

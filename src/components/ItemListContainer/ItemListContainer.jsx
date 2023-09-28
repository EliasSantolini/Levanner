import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList"; 
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [ products , setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 className="titulo">¡Bienvenidos a la perfumeria Levanner!</h1>
      { <ItemList products={products} /> }
      
    </div>
  );
};

export default ItemListContainer;

import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { db } from "../../Services/Firebase/firebaseConfig.jsx";

const ItemListContainer = (greeting) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const productsRef = collection(db, "products");
      const cd = getFirestore
      console.log(cd)
      try {
        const snapshot = await getDocs(productsRef);

        const productsAdapted = snapshot.docs.map((doc) => {
          const fields = doc.data();

          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

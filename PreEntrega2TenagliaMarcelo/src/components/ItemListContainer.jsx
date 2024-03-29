import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoriaId
      ? query(collection(db, "products"), where("categoria", "==", categoriaId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return (
    <div className="galeria">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

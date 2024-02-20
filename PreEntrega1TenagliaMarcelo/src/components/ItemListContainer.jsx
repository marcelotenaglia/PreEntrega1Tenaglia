import { useState, useEffect } from "react";
import { getProduct } from "./Catalogo";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

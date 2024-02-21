import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "./Catalogo";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductByCategory : getProducts ;

    asyncFunc(categoriaId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

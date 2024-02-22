import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "./Catalogo";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductByCategory : getProducts;

    asyncFunc(categoriaId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoriaId]);

  return (
    <div className="galeria">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

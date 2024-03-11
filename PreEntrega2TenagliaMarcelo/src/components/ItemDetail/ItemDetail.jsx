import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  name,
  imagen,
  categoria,
  descripcion,
  precio,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad);

    const item = {
      id,
      name,
      precio,
    };

    addItem(item, cantidad);
  };

  return (
    <article>
      <header>
        <h1>{name}</h1>
      </header>
      <picture>
        <img src={imagen} alt={name} />
      </picture>
      <section>
        <p>categoria: {categoria}</p>
        <p>descripcion: {descripcion}</p>
        <p>precio: ${precio}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar Compra
          </Link>
        ) : (
          <Counter initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;

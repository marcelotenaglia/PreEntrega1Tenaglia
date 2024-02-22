import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, imagen, price, stock }) => {
  return (
    <div className="article">
      <article>
        <header>
          <h2>{name}</h2>
        </header>
        <picture>
          <img src={imagen} alt={name} />
        </picture>
        <section>
          <p>Precio: {price}</p>
          <p>Stock disponible: {stock}</p>
        </section>
        <footer>
          <Link to={`/item/${id}`}>Ver detalle</Link>
        </footer>
      </article>
    </div>
  );
};

export default Item;

import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, imagen, precio, stock }) => {
  return (
    <div className="item">
      <article className="article">
        <header>
          <h2 className="title">{name}</h2>
        </header>
        <picture>
          <img src={imagen} alt={name} />
        </picture>
        <section>
          <p className="precio">${precio}</p>
          <p className="stock">{stock} unidades disponibles</p>
        </section>
        <footer>
          <button>
            <Link to={`/Item/${id}`}>Ver detalle</Link>
          </button>
        </footer>
      </article>
    </div>
  );
};

export default Item;

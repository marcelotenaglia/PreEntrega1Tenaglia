import { Link } from "react-router-dom";

const Item = ({ id, name, imagen, price, stock }) => {
  return (
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
  );
};

export default Item;

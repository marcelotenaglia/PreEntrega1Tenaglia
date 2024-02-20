import "./Item.css";

const Item = ({ id, name, precio, img, stock }) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>precio: ${precio}</p>
        <p>stock disponible: {stock}</p>
      </section>
      <footer>
        <button>Ver detalles</button>
      </footer>
    </article>
  );
};

export default Item;

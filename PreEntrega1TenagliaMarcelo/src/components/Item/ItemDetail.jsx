import "./ItemDetail.css";
import Counter from "../Counter/Counter";

const ItemDetail = ({ id, name, precio, img, stock }) => {
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
        <Counter
          initial={1}
          stock={10}
          onAdd={(cantidad) => console.log("cantidad agregada:", cantidad)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;

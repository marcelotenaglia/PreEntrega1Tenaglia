import "./ItemDetail.css";
import Counter from "../Counter/Counter";

const ItemDetail = ({
  id,
  name,
  imagen,
  categoria,
  descripcion,
  precio,
  stock,
}) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={imagen} alt={name} />
      </picture>
      <section>
        <p>categoria: {categoria}</p>
        <p>precio: ${precio}</p>
        <p>descripcion: {descripcion}</p>
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

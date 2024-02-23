import "./ItemDetail.css";
import Counter from "../Counter/Counter";

const ItemDetail = ({
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
        <Counter
          initial={1}
          stock={stock}
          onAdd={(cantidad) => console.log("cantidad agregada:", cantidad)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;

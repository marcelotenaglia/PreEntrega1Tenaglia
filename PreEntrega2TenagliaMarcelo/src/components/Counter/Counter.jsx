import { useState } from "react";
import "./Counter.css";

const Counter = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="button is-danger" onClick={quitar}>
          {" "}
          -{" "}
        </button>
        <h1 className="cantidad">cantidad: {cantidad} </h1>
        <button className="button is-link" onClick={agregar}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button
          className="button is-medium"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;

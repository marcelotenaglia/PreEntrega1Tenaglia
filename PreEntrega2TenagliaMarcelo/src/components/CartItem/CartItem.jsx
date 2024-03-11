import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

export const CartItem = ({ item }) => {
  const { id, name, precio, cantidad } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p>Cantidad: {cantidad}</p>
      <p>Precio x unidad:{precio} </p>
      <p>Subtotal: {cantidad * precio}</p>
    </div>
  );
};

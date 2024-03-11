import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

export const CartItem = ({ item }) => {
  const { id, name, precio, cantidad } = item;

  return (
    <div className="cart-item">
      <h2 className="title">{name}</h2>
      <p className="cantidad">Cantidad: {cantidad}</p>
      <p className="price">Precio x unidad:{precio} </p>
      <p className="subtotal">Subtotal: {cantidad * precio}</p>
    </div>
  );
};

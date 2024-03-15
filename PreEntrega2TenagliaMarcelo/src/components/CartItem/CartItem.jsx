import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
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

// export const CartItem = ({ item }) => {
//   const removeItem = useContext(CartContext);

//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>cantidad: {item.quantity}</p>
//       <p>subtotal: {item.quantity * item.price}</p>
//       <button onClick={() => removeItem(item.id)}> eliminar </button>
//     </div>
//   );
// };

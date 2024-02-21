import "./ItemList.css";
import Item from "../ItemDetail/ItemDetail";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;

import ItemListContainer from "../ItemListContainer";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ product }) => {
  return (
    <div className="ListGroup">
      {product.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
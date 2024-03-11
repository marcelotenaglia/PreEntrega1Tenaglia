import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div>
        {" "}
        {<FaCartPlus size={25} />} {totalQuantity}{" "}
      </div>{" "}
    </Link>
  );
};

export default CartWidget;

//<div className="button"> {<FaCartPlus size={25} />} 1 </div>;

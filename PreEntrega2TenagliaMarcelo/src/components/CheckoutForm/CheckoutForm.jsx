import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import { Formik, Form, Field } from "formik";

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const comprar = (data) => {
    const order = {
      cliente: data,
      products: cart,
      total: total,
    };

    const orderRef = collection(db, "orders");

    addDoc(orderRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <div className="OrdenGenerada">
        <h1 className="OrdenGeneradah1"> Muchas gracias por tu compra </h1>
        <p className=""> Numero de pedido es : {orderId} </p>
      </div>
    );
  }
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "El correo electrónico es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Correo electrónico inválido";
    }
    return error;
  };

  return (
    <div className="ContainerCheck">
      <div className="H1 Check">
        <h1 className="CheckoutH1"> Checkout </h1>
      </div>
      <Formik
        initialValues={{ nombre: "", telefono: "", email: "" }}
        onSubmit={(values) => comprar(values)}
      >
        <Form className="FromCheck">
          <label className="LabelCheck">
            Nombre
            <Field className="InputCheck" type="text" name="nombre" />
          </label>
          <label className="LabelCheck">
            Telefono
            <Field className="InputCheck" type="text" name="telefono" />
          </label>
          <label className="LabelCheck">
            Email
            <Field
              className="InputCheck"
              type="email"
              name="email"
              validate={validateEmail}
            />
          </label>
          <div className="LabelCheck">
            <button type="submit" className="ButtonCheck">
              Generar orden
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutForm;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>Error 404 not found</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

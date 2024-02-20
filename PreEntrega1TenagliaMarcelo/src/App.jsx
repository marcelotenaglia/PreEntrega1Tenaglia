import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Counter from "./components/Counter/Counter";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greetings={"Bienvenidos"} />
      </div>
    </>
  );
}

export default App;

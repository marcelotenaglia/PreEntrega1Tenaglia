import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./components/LogoMuebleria.png";
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <div>
        <NavBar
          img={Logo}
          inicio="Inicio"
          muebles="Muebles"
          blanqueria="Blanqueria"
          camping="Camping"
        />
        <ItemListContainer greetings="Bienvenidos" />
      </div>
    </>
  );
}

export default App;

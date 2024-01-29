import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Logo from "./components/LogoMuebleria.png"
import ItemListContainer from './components/ItemListContainer'


function App() {
  
  return (
    <>
      <div class="principal-container"> 
 
        <NavBar img={Logo} inicio="Inicio" muebles="Muebles" blanqueria="Blanqueria" camping="Camping"/>
        <ItemListContainer greetings="Bienvenidos"/>        

      </div>
        
    </>
  )
}

export default App

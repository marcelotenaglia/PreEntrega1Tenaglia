import CartWidget from "./CartWidget";
import "./NavBar.css";
import Logo from "./LogoMuebleria.png";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} />
          <p>Muebleria Rollan</p>
        </div>
        <a className="button is-link is-light"> inicio </a>
        <a className="button is-link is-light"> muebles </a>
        <a className="button is-link is-light"> blanqueria </a>
        <a className="button is-link is-light"> camping </a>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;

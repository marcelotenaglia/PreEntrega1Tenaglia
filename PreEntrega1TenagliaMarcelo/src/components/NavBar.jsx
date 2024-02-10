import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar({ img, inicio, muebles, blanqueria, camping }) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={img} />
          <div>Muebleria Rollan</div>
        </div>
        <a className="button is-link is-light"> {inicio} </a>
        <a className="button is-link is-light"> {muebles} </a>
        <a className="button is-link is-light"> {blanqueria} </a>
        <a className="button is-link is-light"> {camping} </a>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;

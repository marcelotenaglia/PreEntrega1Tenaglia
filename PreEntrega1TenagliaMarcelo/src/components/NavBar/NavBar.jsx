import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Logo from "./LogoMuebleria.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <Link to="/">
            <p>Muebleria Rollan</p>
          </Link>
        </div>
        <NavLink to={`/`} className="button is-link is-light">
          {" "}
          inicio{" "}
        </NavLink>
        <NavLink to={`/categoria/muebles`} className="button is-link is-light">
          {" "}
          muebles{" "}
        </NavLink>
        <NavLink
          to={`/categoria/blanqueria`}
          className="button is-link is-light"
        >
          {" "}
          blanqueria{" "}
        </NavLink>
        <NavLink to={`/categoria/camping`} className="button is-link is-light">
          {" "}
          camping{" "}
        </NavLink>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;

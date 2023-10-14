import "./NavBar.css";
import img from "./jana-logo.png";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/">
            <img src={img} alt="logo" />
        </Link>
      </div>
      <ul>
        <Link to="/preguntasfrecuentes">Preguntas Frecuentes</Link>
        <Link to="/About">Sobre Nosotros</Link>
      </ul>
      <div className="CartWidget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

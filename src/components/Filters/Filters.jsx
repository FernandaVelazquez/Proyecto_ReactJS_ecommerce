import "./Filters.css";
import { Link } from "react-router-dom";

const Filters = () => {
  return (
    <div className="Filters">
      <ul>
        <Link to="/category/Camas">CAMAS</Link>
        <Link to="/category/Collares">COLLARES</Link>
        <Link to="/category/Indumentaria">INDUMENTARIA</Link>
        <Link to="/">TODOS LOS PRODUCTOS</Link>
      </ul>
    </div>
  );
};

export default Filters;

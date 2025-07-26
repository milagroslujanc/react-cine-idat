import "../styles/Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <img
        width={100}
        src="https://www.greatplacetowork.com.pe/images/certification/2021/idat/logo-2.png"
      ></img>
      <div className="d-flex gap-5 link-routes">
        <Link to="/peliculas">Películas</Link>
        <Link to="/cines">Cines</Link>
        <Link to="/reservas">Reservas</Link>
        <Link to="/alimentos">Alimentos</Link>
      </div>
      <select className="select-cede">
        <option>
          <b>Cine IDAT SJM</b>
        </option>
      </select>
    </header>
  );
}

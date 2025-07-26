import "../styles/Header.css";

export function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <img
        width={100}
        src="https://www.greatplacetowork.com.pe/images/certification/2021/idat/logo-2.png"
      ></img>
      <div className="d-flex gap-5 link-routes">
        <a>Peliculas</a>
        <a>Cines</a>
        <a>Promociones</a>
        <a>Alimentos</a>
      </div>
      <select className="select-cede">
        <option>
          <b>Cine IDAT SJM</b>
        </option>
      </select>
    </header>
  );
}

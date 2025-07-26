import { CardFilter } from "./utils/card_filter";
import { BtnFilter } from "./utils/btn_filter";
import "../styles/Card.css";

export function FilterMovies() {
  const listPelis = [
    { value: "1", label: "Pelicula 1" },
    { value: "2", label: "Pelicula 2" },
    { value: "3", label: "Pelicula 3" },
  ];

  return (
    <div className="container-filter">
      <h2>Encuentra tu película favorita</h2>
      <div className="d-flex gap-5">
        <div className="d-flex cards-container">
          <CardFilter
            id={"movies"}
            title={"Por Película"}
            question={"¿Qué deseas ver?"}
            className="first-card"
          />
          <CardFilter
            id={"city"}
            title={"Por Ciudad"}
            question={"¿En dónde?"}
            options={listPelis}
          />
          <CardFilter
            id={"cede"}
            title={"Por Cine"}
            question={"¿En qué cine?"}
            options={listPelis}
          />
          <CardFilter
            id={"date"}
            title={"Por Fecha"}
            question={"¿Cuándo?"}
            options={listPelis}
          />
        </div>
        <BtnFilter />
      </div>
    </div>
  );
}

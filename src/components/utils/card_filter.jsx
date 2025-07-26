import React, { useState } from "react";

import "../../styles/Card.css"; // Assuming you have a CSS file for styling

const options = {
  movies: ["Avatar", "Titanic", "Inception"],
  city: ["Lima", "Cusco", "Arequipa"],
  cede: ["Cinemark", "Cineplanet", "UVK"],
  date: ["Hoy", "Mañana", "Este fin de semana"],
};

export function CardFilter({ id, title, question }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="col-md-3">
      <div
        className="card-filter"
        onClick={() => handleCardClick(id)}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body-filter card-body d-flex justify-content-between">
          <div className="d-grid">
            <span>
              <b>{title}</b>
            </span>
            <span className="card-desc">
              <b>{question}</b>
            </span>
          </div>
        </div>
      </div>
      {activeCard === id && (
        <div className="mt-2 card-options">
          <select className="form-select">
            {options[id].map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

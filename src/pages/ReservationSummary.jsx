import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ReservationSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  // Obtén los datos de la reserva desde el estado
  const reservation = location.state?.reservation;

  // Si no hay datos de reserva, redirige al usuario a la página principal
  if (!reservation) {
    navigate("/");
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">Resumen de Reserva</h2>
      {/* Contenedor imprimible */}
      <div className="printable-area card p-4">
        <p><strong>Cine:</strong> Cine IDAT SJM</p>
        <p><strong>Película:</strong> {reservation.title}</p>
        <p><strong>Fecha:</strong> {reservation.date}</p>
        <p><strong>Hora:</strong> {reservation.time}</p>
        <p><strong>Nombre:</strong> {reservation.name}</p>
        <p><strong>Correo:</strong> {reservation.email}</p>
        <p><strong>Butaca:</strong> {reservation.seat}</p>
      </div>
      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        Imprimir
      </button>
    </div>
  );
}
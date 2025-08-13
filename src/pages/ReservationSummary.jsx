import { QRCodeCanvas } from "qrcode.react"; // Importar el componente QR
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ReservationSummary.css";

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

  // Crear un objeto con la información de la reserva para el QR
  const qrData = JSON.stringify({
    cine: "Cine IDAT SJM",
    pelicula: reservation.title,
    fecha: reservation.date,
    hora: reservation.time,
    nombre: reservation.name,
    correo: reservation.email,
    butaca: reservation.seat,
  });

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">Resumen de Reserva</h2>
      <div className="reservation-summary">
        {/* Detalles de la reserva */}
        <div className="printable-area card p-4">
          <p><strong>Cine:</strong> Cine IDAT SJM</p>
          <p><strong>Película:</strong> {reservation.title}</p>
          <p><strong>Fecha:</strong> {reservation.date}</p>
          <p><strong>Hora:</strong> {reservation.time}</p>
          <p><strong>Nombre:</strong> {reservation.name}</p>
          <p><strong>Correo:</strong> {reservation.email}</p>
          <p><strong>Butaca:</strong> {reservation.seat}</p>
          <div className="qr-code-container">
          <QRCodeCanvas value={qrData} size={150} />
        </div>
        </div>
        {/* Código QR */}
        
      </div>
      {/* Botón para imprimir */}
      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        Imprimir
      </button>
    </div>
  );
}

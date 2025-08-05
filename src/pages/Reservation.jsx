import { useEffect, useState } from "react";
import "../styles/Reservation.css";

export function Reservation() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [imgMovie, setImgMovie] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const api = "https://backend-cine-idat-production.up.railway.app";
      try {
        const response = await fetch(`${api}/cines/cartelera`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const times = ["7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm"];
  const seats = [
    ["A1", "A2", "A3", "A4", "A5"],
    ["B1", "B2", "B3", "B4", "B5"],
    ["C1", "C2", "C3", "C4", "C5"],
  ];

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const setSelectedMovie = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if (selectedMovie) {
      setImgMovie(selectedMovie.imgUrl);
      setDescription(selectedMovie.descripcion);
    }
  };

  const handlerReserve = () => {
    if (!selectedSeat || !selectedTime || !name || !email) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    setSelectedSeat("");
    setSelectedTime("");
    setName("");
    setEmail("");
    setImgMovie("");
    setDescription("");

    alert("Reserva realizada con éxito!");
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">Película</h2>
      <p className="text-muted">
        {description || "Seleccione una película para ver su descripción."}
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={imgMovie || "https://via.placeholder.com/150"}
            alt="Avengers Poster"
            className="img-fluid rounded movie-poster"
          />
        </div>

        <div className="col-md-8">
          <div className="d-flex gap-3 mb-3">
            <select className="form-select w-auto">
              <option>Cine IDAT SJM</option>
            </select>
            <select
              className="form-select w-auto"
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              <option>Pelicula</option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.titulo}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {times.map((time) => (
              <button
                key={time}
                className={`btn ${
                  selectedTime === time
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="text-center mb-2 fw-bold text-primary">PANTALLA</div>

          <div className="d-flex flex-column align-items-center gap-2 mb-4">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="d-flex gap-2">
                {row.map((seat) => (
                  <button
                    key={seat}
                    className={`btn ${
                      selectedSeat === seat
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={selectedSeat}
                onChange={(e) => setSelectedSeat(e.target.value)}
              >
                <option>Seleccione Butaca</option>
                {seats.flat().map((seat) => (
                  <option key={seat} value={seat}>
                    {seat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              className="btn btn-reserve mt-3"
              onClick={() => handlerReserve()}
            >
              RESERVAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

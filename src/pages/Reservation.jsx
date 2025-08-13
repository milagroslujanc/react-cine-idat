import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservation.css";

export function Reservation() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [imgMovie, setImgMovie] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movies, setMovies] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("El tiempo ha terminado.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      setShowModal(true);
      return (e.returnValue = "El tiempo está por terminar. ¿Desea continuar?");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

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
      setSelectedMovieTitle(selectedMovie.titulo);
    }
  };

  const handlerReserve = () => {
    if (!selectedSeat || !selectedTime || !name || !email) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Buscar la película seleccionada por su ID
    //const  = movie.titleMovie

    

    const reservation = {
      title: selectedMovieTitle || "No seleccionada",
      date: new Date().toLocaleDateString(),
      time: selectedTime,
      name,
      email,
      seat: selectedSeat,
    };

    navigate("/resumenReserva", { state: { reservation } });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };  

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!validateEmail(inputEmail)) {
      setEmailError("Por favor, ingresa un correo válido.");
    } else {
      setEmailError(""); // Clear error if valid
    }
  };


  return (
    <div className="container mt-5">
      {/* Timer */}
      <div
        className={`timer-label ${
          timeLeft <= 30 ? "bg-danger text-white" : "bg-primary text-white"
        }`}
      >
        {formatTime(timeLeft)}
      </div>

      <h2 className="fw-bold text-primary">Película</h2>
      <p className="text-muted">
        {description || "Seleccione una película para ver su descripción."}
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={imgMovie || "https://larazon.pe/wp-content/uploads/2024/04/cine.jpg"}
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
                onChange={handleEmailChange}
              />
              {emailError && <small className="text-danger">{emailError}</small>}
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

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Alerta</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>El tiempo está por terminar. ¿Desea continuar?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setShowModal(false);
                    setTimeLeft(600); 
                  }}
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

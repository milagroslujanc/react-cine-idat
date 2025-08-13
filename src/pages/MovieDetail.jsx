import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MovieDetail.css';

export function MovieDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state;
    const selectedMovie = movie.movie;

    console.log(selectedMovie.titulo);

    if (!movie) {
        return <p>Cargando información de la película...</p>;
    }

    const handleReservation = () => {
        navigate('/reservas', { state: { selectedMovie } });
    };

    return (
        <div className='container'>
            <div className="movie-detail">
                <div className="movie-detail-left">
                    <img
                        src={selectedMovie.imgUrl}
                        alt={selectedMovie.descripcion || "Imagen de la película"}
                        className="movie-detail-image"
                    />
                </div>
                <div className="movie-detail-right">
                    <h1 className="movie-detail-title">{selectedMovie.titulo}</h1>
                    <p className="movie-detail-description">{selectedMovie.descripcion}</p>
                    <h3>Géneros:</h3>
                    <div className="movie-detail-genres">
                        {selectedMovie.genero && selectedMovie.genero.map((gen, index) => (
                            <span key={index} className="movie-detail-genre-label">{gen}</span>
                        ))}
                    </div>
                    <button className="movie-detail-reserve-button" onClick={handleReservation}>
                        Reservar
                    </button>
                </div>
            </div>
        </div>

    );
}

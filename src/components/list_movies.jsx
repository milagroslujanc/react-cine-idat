import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Body.css';

export function ListMovies() {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const api = "https://backend-cine-idat-production.up.railway.app"
            try {
                const response = await fetch(`${api}/cines/cartelera`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setMovies(data)
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }

        fetchMovies()
    }, [])

    const handleMovieClick = (movie) => {
        console.log(movie)
        navigate('/movie-detail', { state: { movie } });
    };

    return (
        <section className="container list-movies" id="peliculas">
            <h2 className='text-color'>Películas</h2>
            <span>Mira toda nuestra cartelera</span>
            <div className='list-movies-container'>
                {movies.length === 0 ?
                    <p>Cargando películas...</p> :
                    movies.data.map(movie => (
                        <div className="movie-card" key={movie.id}>
                            <div className="movie-image-container">
                                <img
                                    src={movie.imgUrl}
                                    alt={movie.descripcion || 'Imagen de la película'}
                                    title={
                                        movie.descripcion
                                            ? movie.descripcion.length > 50
                                                ? movie.descripcion.substring(0, 50) + '...'
                                                : movie.descripcion
                                            : ''
                                    }
                                />
                            </div>
                            <button
                                className="movie-button"
                                onClick={() => handleMovieClick(movie)}
                            >
                                Ver más
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

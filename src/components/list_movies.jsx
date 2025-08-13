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
                const jsonResponse = await response.json()

                const apiMovies = Array.isArray(jsonResponse.data) ? jsonResponse.data : [];

                const additionalMovies = [
                    {
                        id: "el-senor-de-los-anillos",
                        titulo: "El Señor de los Anillos: La Comunidad del Anillo",
                        imgUrl: "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg",
                        descripcion: "Un hobbit llamado Frodo emprende un peligroso viaje para destruir el Anillo Único y salvar la Tierra Media del malvado Sauron.",
                        genero: ["Aventura", "Fantasía", "Épico"]
                    },
                    {
                        id: "toy-story",
                        titulo: "Toy Story",
                        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        descripcion: "Un grupo de juguetes cobra vida cuando los humanos no están presentes. Woody y Buzz Lightyear deben trabajar juntos para regresar a casa.",
                        genero: ["Animación", "Aventura", "Comedia"]
                    },
                    {
                        id: "matrix",
                        titulo: "The Matrix",
                        imgUrl: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/16/76/20065616.jpg",
                        descripcion: "Un hacker descubre que el mundo en el que vive es una simulación y se une a una rebelión para liberar a la humanidad.",
                        genero: ["Acción", "Ciencia Ficción", "Thriller"]
                    },
                    {
                        id: "inception",
                        titulo: "Inception",
                        imgUrl: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/41/74/20198901.jpg",
                        descripcion: "Un ladrón especializado en robar secretos del subconsciente debe realizar la tarea inversa: implantar una idea.",
                        genero: ["Ciencia Ficción", "Acción", "Thriller"]
                    },
                    {
                        id: "interstellar",
                        titulo: "Interstellar",
                        imgUrl: "https://es.web.img2.acsta.net/c_310_420/pictures/14/10/02/11/07/341344.jpg",
                        descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
                        genero: ["Ciencia Ficción", "Aventura", "Drama"]
                    },
                    {
                        id: "gladiador",
                        titulo: "Gladiador",
                        imgUrl: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/70/92/02/20149073.jpg",
                        descripcion: "Un general romano traicionado se convierte en gladiador para vengar la muerte de su familia.",
                        genero: ["Acción", "Drama", "Histórica"]
                    },
                    {
                        id: "shrek",
                        titulo: "Shrek",
                        imgUrl: "https://es.web.img3.acsta.net/c_310_420/pictures/14/03/06/10/13/369709.jpg",
                        descripcion: "Un ogro gruñón se embarca en una misión para rescatar a una princesa y termina descubriendo el amor.",
                        genero: ["Animación", "Comedia", "Fantasía"]
                    }                    
                ];

                console.log(apiMovies, additionalMovies)

                const combinedMovies = [...apiMovies, ...additionalMovies];
                console.log('Combined Movies:', combinedMovies);
                
                setMovies(combinedMovies);
                console.log(movies)
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
                    movies.map(movie => (
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

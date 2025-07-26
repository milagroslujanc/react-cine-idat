import { useEffect, useState } from 'react'
import '../styles/Body.css'

export function ListMovies() {

    // consulta a la api de obtener las películas
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const api = "https://backend-cine-idat-production.up.railway.app"
            try {
                const response = await fetch(`${api}/cines/cartelera`)
                console.log(response)
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

    return (
        <section className="container list-movies" id="peliculas">
            <h2 className='text-color'>Películas</h2>
            <span>Mira toda nuestra cartelera</span>
            <div className='list-movies-container'>
                {movies.length === 0 ?
                    <p>Cargando películas...</p> :
                    movies.data.map(movie => (
                        <img src={movie.imgUrl} key={movie.id} />
                    ))
                }
            </div>
        </section>
    )
}
import '../styles/Body.css'

const MOVIES = [ // mock de los datos
    {id: 1,path: '/img/image 1.png',},
    {id: 2,path: '/img/image 2.png',},
    {id: 3,path: '/img/image 3.png',},
    {id: 4,path: '/img/image 4.png',},
    {id: 6,path: '/img/image 2.png',},
    {id: 5,path: '/img/image 1.png',},
    {id: 8,path: '/img/image 4.png',},
    {id: 7,path: '/img/image 3.png',},
    {id: 9,path: '/img/image 2.png',},
    {id: 11,path: '/img/image 4.png',},
    {id: 12,path: '/img/image 1.png',},
    {id: 10,path: '/img/image 3.png',},
]

export function ListMovies() {
    return (
        <div className="container list-movies">
            <h2 className='text-color'>Películas</h2>
            <span>Mira toda nuestra cartelera</span>
            <div className='list-movies-container'>
                {
                    MOVIES.map(movie => (
                        <img src={movie.path} key={movie.id}/>
                    ) )
                }
            </div>
        </div>
    )
}
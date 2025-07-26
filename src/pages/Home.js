import { FilterMovies } from '../components/filter_movies'
import { ListMovies } from '../components/list_movies'
import { Footer } from '../components/footer'

export function Home() {
    return (
        <div>
            <FilterMovies></FilterMovies>
            <ListMovies></ListMovies>
            <Footer></Footer>
        </div>
    )
}
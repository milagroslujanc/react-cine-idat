import { Header } from '../components/header'
import { FilterMovies } from '../components/filter_movies'

export function Home() {
    return (
        <div>
            <Header></Header>
            <FilterMovies></FilterMovies>
        </div>
    )
}
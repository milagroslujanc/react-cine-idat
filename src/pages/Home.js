import { Header } from '../components/header'
import { FilterMovies } from '../components/filter_movies'
import { ListMovies } from '../components/list_movies'
import { Footer } from '../components/footer'

export function Home() {
    return (
        <div>
            <Header></Header>
            <FilterMovies></FilterMovies>
            <ListMovies></ListMovies>
            <Footer></Footer>
        </div>
    )
}
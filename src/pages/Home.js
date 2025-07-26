import { FilterMovies } from "../components/filter_movies";
import { ListMovies } from "../components/list_movies";

export function Home() {
  return (
    <div>
      <FilterMovies></FilterMovies>
      <ListMovies></ListMovies>
    </div>
  );
}

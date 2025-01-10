import withResult from '../models/movie.json'


export function UseMovie() {
  const movies=withResult.Search
  const mappedMovies=movies?.map(movie=>({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
  }))
  return {mappedMovies}
}
import responseMovies from '../models/movie.json'
// import errorMovies from './models/error.json'

export function UseMovies(){
  const movies=responseMovies.Search
  
  const mapMovies=movies.map(movie=>({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
    }))
  
  return{movies:mapMovies}

}
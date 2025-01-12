// import withResult from '../models/movie.json'
import  NoResult  from '../models/error.json'
import { useState } from 'react'



export function UseMovie({search}) {
  const [responseMovie, setResponseMovie] = useState([])

  const movies=responseMovie.Search

  const mappedMovies=movies?.map(movie=>({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
  }))

  const getMovie=()=>{
    if(search){
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=467f4f72`)
      .then(res=>res.json())
      .then(json=>{
        setResponseMovie(json)
      })
    }
    else{
      setResponseMovie(NoResult)
    }
  }

  return {mappedMovies,getMovie}
}
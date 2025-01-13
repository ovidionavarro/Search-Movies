// import withResult from '../models/movie.json'
// import  NoResult  from '../models/error.json'
import { useState } from 'react'
import { searchMovies } from '../services/movies'



export function UseMovie({search}) {
  const [movies, setMovies] = useState([])

  

  const getMovie=async()=>{
    const newMovies=await searchMovies({search})
    setMovies(newMovies)
  }

  return {movies,getMovie}
}
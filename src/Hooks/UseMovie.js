// import withResult from '../models/movie.json'
// import  NoResult  from '../models/error.json'
import { useState } from 'react'
import { searchMovies } from '../services/movies'



export function UseMovie({search}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

  const getMovie=async()=>{
    try {
      setLoading(true)
      setError(null)
      const newMovies=await searchMovies({search})
      setMovies(newMovies)
      

    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false )
    }

  }

  return {movies,getMovie,loading,error}
}
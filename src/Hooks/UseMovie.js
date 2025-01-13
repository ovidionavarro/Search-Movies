// import withResult from '../models/movie.json'
// import  NoResult  from '../models/error.json'
import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'


export function UseMovie({search,sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch=useRef(search)
  

  const getMovie=async()=>{
    if(previousSearch.current===search) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current=search
      const newMovies=await searchMovies({search})
      setMovies(newMovies)
      

    } catch (e) {
      setError(e.message)
    } finally{
      setLoading(false )
    }

  }
  


  const sortMovies=useMemo(()=>{
    console.log('render')
    return sort
    ?[...movies].sort((a,b) => a.title.localeCompare(b.title)):movies

  },[sort,movies])
  return {movies:sortMovies,getMovie,loading,error}
}
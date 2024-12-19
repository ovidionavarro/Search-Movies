import './App.css'
import { Movies } from './components/Movies'
import responseMovies from './models/movie.json'
// import errorMovies from './models/error.json'

function App() {
  const movies=responseMovies.Search
  
  const mapMovies=movies.map(movie=>({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
    }))

  return(
      <div className='page' >
        <header>
        <h1>Search Movies</h1>
        <div>
          <form className='form'>
            <input 
              placeholder='avengers,star wars'  
            />
            <button type='submit'>Search</button>
          </form>
          </div>
      </header>
      <main>
        <Movies movies={mapMovies}/>
      </main>
    </div>
  )
 
  
}

export default App

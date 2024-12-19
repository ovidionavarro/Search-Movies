import './App.css'
import responseMovies from './models/movie.json'
// import errorMovies from './models/error.json'

function App() {
  const movies=responseMovies.Search
  const hasMovies=movies?.length>0

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
        {
          hasMovies
          ?(
            <ul>
              {
                movies.map(movie=>(
                  <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title}/>
                  </li>
                ))
              }
            </ul>
          ):
          <p>Nose encontraron resultados</p>

        }
        
      </main>
    </div>
  )
 
  
}

export default App

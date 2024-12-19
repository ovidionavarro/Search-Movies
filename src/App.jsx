import './App.css'
import { Movies } from './components/Movies'
import { UseMovies } from './Hooks/UseMovies'


function App() {
  const {movies:mapMovies}=UseMovies()
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

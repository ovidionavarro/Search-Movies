import './App.css'
import { Movies } from './components/Movies'
import { UseMovie } from './Hooks/UseMovie'


function App() {
  const {mappedMovies}=UseMovie()
    
  return(
    <div className='page'>
        <h1> SearchMovies</h1>
        <header>
          <form className='form'>
            <input placeholder='avengers, startwars' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main>
          <Movies movies={mappedMovies}/>

        </main>

    </div>
  )
 
  
}

export default App

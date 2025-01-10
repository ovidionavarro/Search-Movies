import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { UseMovies } from './Hooks/UseMovies'

function App() {
  const inputRef=useRef()
  const {movies:mapMovies}=UseMovies()
  
  const handleSubmit=(event)=>{//recuperar el input del dom
    event.preventDefault()
    const inputValue=inputRef.current.value
    console.log(inputValue)
  }
  

  return(
      <div className='page' >
        <header>
        <h1>Search Movies</h1>
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <input 
              ref={inputRef}
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

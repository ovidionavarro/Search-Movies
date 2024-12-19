import './App.css'

function App() {
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
        resultados
      </main>
    </div>
  )
 
  
}

export default App

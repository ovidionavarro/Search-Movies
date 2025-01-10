// import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { Movies } from './components/Movies'
import { UseMovie } from './Hooks/UseMovie'


function App() {
  const {mappedMovies}=UseMovie()
  const [query,setQuery]=useState('')

//forma no controlada
  // const handleSubmit=(e)=>{
  //   //se utiliza el name del input, sin state ni ref
  //   e.preventDefault()
  //   const {query}=Object.fromEntries(new window.FormData(e.target))
  // console.log(query)       
  // }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({query})
  }

  const handleChange=(e)=>{
    setQuery(e.target.value)
  }




  return(
    <div className='page'>
        <h1> SearchMovies</h1>
        <header>
          <form className='form' onSubmit={handleSubmit}>
            <input value={query} onChange={handleChange} name='query' placeholder='avengers, startwars' />            
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

// import { useRef } from 'react'
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { UseMovie } from './Hooks/UseMovie'

function UseSearch(){
  const [search,updateSearch]=useState('')
  const [error,setError]=useState('')
  const isFirstInput=useRef(true)//para saber primera vez de algo

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current=search===''
      return
    }

    if (search==''){
     setError('Not found movie empty')
     return
   }
 
    if(search.match(/^\d+$/)){
     setError('not found movie whit number')
     return
   }
    if(search.length<3){
     setError('The search should be longer than three characters')
     return
   }
   setError(null)
  
   
  }, [search])

  return {search,updateSearch,error}
}


function App() {
  // const [query,setQuery]=useState('')
  const {search,updateSearch,error}=UseSearch()
  const {mappedMovies,getMovie}=UseMovie({search}) 

//forma no controlada
  // const handleSubmit=(e)=>{
  //   //se utiliza el name del input, sin state ni ref
  //   e.preventDefault()
  //   const {query}=Object.fromEntries(new window.FormData(e.target))
  // console.log(query)       
  // }
  const handleSubmit=(e)=>{
    e.preventDefault()
    getMovie()
  }
  const handleChange=(e)=>{
    updateSearch(e.target.value)
    return
  }

  return(
    <div className='page'>
        <h1> SearchMovies</h1>
        <header>
          <form className='form' onSubmit={handleSubmit}>
            <input value={search} onChange={handleChange} name='search' placeholder='avengers, startwars' 
            style={{
              border:'1px solid transparent',
              borderColor:error?'red':'transparent'
            }}/>            
            <button type='submit'>Search</button>
          </form>
        </header>
        {error&& <p style={{color:'red'}}>{error}</p>}

        <main>
          <Movies movies={mappedMovies}/>

        </main>

    </div>
  )
 
  
}

export default App

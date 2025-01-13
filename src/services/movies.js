const API_KEY='467f4f72'


export const searchMovies=async({search})=>{
    if(search===''){
        return null
    }       
    try{
        const resp=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
        const json=await resp.json()
        const movies=json.Search

        return movies?.map(movie=>({
        id:movie.imdbID,
        title:movie.Title,
        year:movie.Year,
        poster:movie.Poster
  }))

    } catch(e){
        console.log(e)
        throw new Error('error searching movies')
    }   
}
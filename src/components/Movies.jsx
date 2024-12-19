// ListMovies.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.shape({
//         imdbID: PropTypes.string.isRequired,
//         Title: PropTypes.string.isRequired,
//         Year: PropTypes.string.isRequired,
//         Poster: PropTypes.string.isRequired
//     })).isRequired
// };

// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function ListMovies({movies}){
    return(
        <ul>
        {
          // eslint-disable-next-line react/prop-types
          movies.map(movie=>(
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.Title}/>
            </li>
          ))
        }
      </ul>
    )
}



export function NoResult(){
    return(
        <p> result not found</p>
    )
}

// eslint-disable-next-line react/prop-types
export function Movies({movies}){
    // eslint-disable-next-line react/prop-types
    const hasMovies=movies?.length>0
    return(
        hasMovies
        ?<ListMovies movies={movies}/>
        :NoResult()
    )
}
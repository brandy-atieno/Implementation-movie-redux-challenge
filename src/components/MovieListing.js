import React from 'react'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

export const MovieListing = ({movies}) => {
    
     
 
    return (
    
    <div className="card-cointainer" >  
    {movies.map((movie)=>(<MovieCard key={movie.id} movie={movie}/>))}
   
    </div>
  )
}

export default MovieListing

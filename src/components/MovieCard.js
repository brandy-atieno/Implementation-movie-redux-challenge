import React from 'react'
import { Link } from 'react-router-dom';
export default function MovieCard({movie}) {
  const Image_Url="https://image.tmdb.org/t/p/w500/";
  return (<div className='card-container'>
<div className="card-body">
<Link to="/movie/id">
  <img className="movie-img" src={Image_Url+movie.poster_path} /> </Link>  
 <p>{movie.title}</p>
 <p>{movie.overview}</p>
</div>
    </div>
        
      
  )
}

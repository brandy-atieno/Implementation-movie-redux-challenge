import React,{useEffect} from 'react'
import axios from "axios"
export const MovieDetails = () => {
  const Image_Url="https://image.tmdb.org/t/p/w500/";
  const res=res
  const data=data
  useEffect(() => {
    
    axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`).then(res=>res(res.data.results)
    )

  }, [])
  
  console.log(data)
  return (<div className='card-container'>
<div className="card-body">

 
</div>
    </div>
        
      
  )
}

export default MovieDetails
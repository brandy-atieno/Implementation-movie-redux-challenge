import React,{useEffect} from 'react'
import axios from "axios"
import { useDispatch ,useSelector} from 'react-redux/es/exports';
import { addMovies } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';
import SideBar from '../components/SideBar';
export default function Discover() {
  const dispatch=useDispatch();
  const movies = useSelector(state=>state.movies)
  useEffect(() => {
    
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&language=en-US&page=1`).then(res=>dispatch(addMovies(res.data.results))
  )

  }, [])
  console.log(movies)
  return (
    <div>
      
       {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}
    </div>
  )
}

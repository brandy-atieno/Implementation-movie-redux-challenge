import React,{useEffect} from 'react'
import axios from "axios"
import { useDispatch ,useSelector} from 'react-redux/es/exports';
import { addMovies } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';

export default function NewReleases() {
  const dispatch=useDispatch();
  const movies = useSelector(state=>state.movies)
  useEffect(() => {
    
  axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`).then(res=>dispatch(addMovies(res.data.results)
  ))

  }, [])
  console.log(movies)
  return (
    <div> {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}</div>
  )
}

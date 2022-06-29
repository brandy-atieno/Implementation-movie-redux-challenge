import React, {useEffect,useState}from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import Header from './Header';
import SideBar from "./SideBar";
import { useDispatch } from 'react-redux/es/exports';
import { addMovies } from '../features/movies/movieSlice';
import MovieListing from './MovieListing';
import MovieDetails from './MovieDetails';

const url= "https://api.themoviedb.org/3/movie/popular?api_key=9e6bffe58a459f9c90046480d1f4209e"
export const Home = () => {
  const dispatch=useDispatch();
  const movies = useSelector(state=>state.movies)
  useEffect(() => {
    
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=1`).then(res=>{ dispatch(addMovies(res.data.results))
    console.log(res.data)})

    }, [])
  return (
    <div>
         <div className="main-section">
         <div className="content" style={{display:'flex'}}>
          <SideBar/>
          <div className="section-1">
         <MovieListing movies={movies}/>
         
         

         </div>
        </div>
      </div>
    </div>
  )
}
export default Home

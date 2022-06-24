import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/movieSlice'
import imageReducer from './movies/movieSlice'

 export const store = configureStore({
  reducer:{
  movies: moviesReducer,
  images:imageReducer,
   },
})

 export default store
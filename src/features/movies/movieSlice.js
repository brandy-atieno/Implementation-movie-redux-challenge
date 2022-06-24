 import { createSlice} from '@reduxjs/toolkit'
  
  const movieSlice=createSlice({
    name:"movies",
    initialState:[],
    reducers:{
        addMovies:(state,{payload})=>{
             return state= payload;
        },
        addImage:(state,{payload})=>{
            return state=payload;
        }
    },

    

 });
 export const{addMovies,addImage}=movieSlice.actions;
// // sexport const getAllMovies=(state)=>state.movies.movies
export default movieSlice.reducer

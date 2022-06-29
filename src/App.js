import React,{useEffect,useState} from "react"
import './App.css';
import { Route,Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound"
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Discover from "./pages/Discover";
import NewReleases from "./pages/NewReleases"
import Upcoming from "./pages/Upcoming"
import Favourites from "./pages/Favourites"
function App() {
 
  return (
    <div className="App">
       <Header/>
       
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      
      
      <Route path="/discover" element={<Discover/>}/>
      <Route path="/newreleases" element={<NewReleases/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route  path="*" element={<PageNotFound/>}/>
      

      </Routes> 
     
     
         </div>
       
             
    
         
   
    
  );
}

export default App;

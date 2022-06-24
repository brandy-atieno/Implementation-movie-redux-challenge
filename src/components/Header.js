import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [query, setQuery]=useState('');
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setQuery(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <div className="Header">
       
 <div className="nav">
   <Link to="/">
  <div className="logo" >Media App</div>
  </Link>
   <div className="search-container">
    <form onSubmit={searchMovie}>
    <button type="submit" ><i className="fa fa-search"></i></button>
      <input type="text" placeholder="Search.." name="query"  valure={query} onChange={changeHandler}/>
   </form>
   <div className="icon">
   <i className="fa fa-cog" ></i>
   </div>
        </div>
    </div>
    </div>
  )
}


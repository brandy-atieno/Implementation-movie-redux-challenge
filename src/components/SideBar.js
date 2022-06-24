import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="side-bar">
        
      <Link to="/discover"><i className="fa fa-home" ></i> Discover</Link><br></br>
      <Link to="/newreleases"><i className="fa fa-envelope-open-o" ></i> New Releases</Link>
      <Link to="/upcoming"><i className="fa fa-envelope-open-o" ></i> Upcoming</Link><br></br>
      <Link to ="/favourites"><i className="fa fa-heart-o"></i>favourites</Link>
        
         <h4>Genre</h4>
      <ul className="genre-list">
          <li>Action</li>
          <li>Docmentary</li>
          <li>Comedy</li>
          <li>Horror</li>
      </ul>
      </div>
    
  )
}

export default SideBar
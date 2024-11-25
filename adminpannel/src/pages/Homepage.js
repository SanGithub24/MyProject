import React from 'react';
//import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';


const Homepage = () => {

 
  return (
    <div className='homepage'>
      <h1> Welcome to HappyHours</h1>
      <Link to="/full">Admin Panel</Link>
    </div>
    
  );
}

export default Homepage;

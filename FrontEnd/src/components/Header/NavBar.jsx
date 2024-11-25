import React from 'react';
import '../Header/NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
//import { BiCartAlt } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import Logo from '../../assets/images/Logo/HLogo.png';

// import { FaShoppingCart } from "react-icons/fa";
// //import { AiFillDelete } from "react-icons/ai";
// import {
//   Badge,
//   Container,
//   Dropdown,
//   Nav,
// } from "react-bootstrap";

//import { Link, useLocation } from "react-router-dom";

const NavBar =()=>{

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(
    <nav className="navb">
      <div className='main'>
        <div className='logoimagenav'> 
          <img src={Logo} alt=""/>
          <div>
          <p><h3>Happy</h3>
          <h3>Hour</h3></p>
          </div>
        </div>

        <div className='mainlinks'>
          <a href="/" className="home">Home</a>
          <a href="/foodcat" className="foodcat">Our Menu</a>
          <a href="/gallery" className="gallery">Gallery</a>
        </div>


        <div className='logandreg'>
        <a href="/login" className="login">Log In / Registration</a>
        </div>

        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <AiOutlineClose color="white" fontSize={24} onClick={() => setToggleMenu(false)}/>
          
          <ul className="app__navbar-smallscreen_links">
            <li className="l_links"><a href="/" className="home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li className="l_links"><a href="/about" className="about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li className="l_links"><a href="/foodcat" className="foodcat" onClick={() => setToggleMenu(false)}>Our Menu</a></li>
            <li className="l_links"><a href="/gallery" className="gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
          </ul>
        </div>
        )}
        </div>



      </div>
  </nav>
)
}

export default NavBar;
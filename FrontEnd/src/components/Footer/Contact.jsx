import React from 'react';
import '../Footer/Contact.css';

import {FaFacebookSquare, FaInstagramSquare, FaYoutube} from "react-icons/fa";
import Logo from '../../assets/images/Logo/HLogo.png';

const Contact = () => {
  
  return (
   <div className='footer'>
    <div className='social'>
      <div className='socialmedia'>
        <p>Get connected with us on social networks:
        <FaFacebookSquare color="white"  fontSize={30}></FaFacebookSquare>
        <FaInstagramSquare color="white"  fontSize={30}></FaInstagramSquare>
        <FaYoutube color="white"  fontSize={40}></FaYoutube>
        </p>
      

      <div className='iconlinks'>
    
      </div>
      
    </div>
    </div>
    
     
      <div className="middle">
        
        <div className="hh">
        <br/>
          <h5>HappyHours</h5>
          <br/>
          <p>
           <h6>Nothing Brings People Together Like Good Food</h6>

           <br/>

           <img src={Logo} alt="" className='logoimage'/>

           <br/>
           <h6>ORDER ... ANYTHING ... ANYTIME</h6>
           <h6>WE SERVE IT WITH REAL TASTE</h6>
          </p>

        </div>
       
        <div className="orderlinks">
        <br/>
          <h5>Order Now</h5>
          <br/>
          
            <p>
              <a href="/pizza" className="text-reset">Pizza</a>
            </p>
            <p>
              <a href="/burger" className="text-reset">Burger</a>
            </p>
            <p>
              <a href="/indian" className="text-reset">Indian Menu</a>
            </p>
            <p>
              <a href="/slfoods" className="text-reset">Sri Lankan Menu</a>
            </p>
            <p>
              <a href="/desserts" className="text-reset">Desserts</a>
            </p>
            <p>
              <a href="/beverages" className="text-reset">Beverages</a>
            </p> 
          
        </div>
        
        <div className="footerabout">
         
          <h5>About</h5>
          <br/>
          <p>
            <a href="/" className="links">Home</a>
          </p>
          <p>
            <a href="/about" className="links">About</a>
          </p>
          <p>
            <a href="/foodcat" className="links">Our Menu</a>
          </p>
          <p>
            <a href="/gallery" className="links">Gallery</a>
          </p>
         
        </div>
        
        <div className="contactdetails">
        <br/>
          <h5>Contact</h5>
          <br/>
          <p>31/A, Hansawila Rd, Battaramulla</p>
          <p>happyhours@gmail.com</p>
          <p>0710355840</p>
          <p>0758952836</p>
        </div>

      </div>
  
  
        <div className="copyright">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">HappyHours.com</a>
        </div>
    
  </div>
);
}

export default Contact;

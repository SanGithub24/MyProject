import React from 'react';
import './Account.css';

import imgleft from '../../assets/images/BGImages/accountleft.jpg'
import imgright from '../../assets/images/BGImages/accountright.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Account = () => {
  const handleLogout = () => {

    window.location.href = "/login";

  };

  const handleProDisplay = () => {

    window.location.href = "/prodisplay";

  };
  return (

    <div className='display'>

      <Container>

      <Row> 

        <Col>
      <div>
        <img src={imgleft} alt='' className='imgleft'></img>
      </div>
      </Col>

      <Col>

      <div className="heading">

        <div className='accountmain'>
        <br/> 
        <br/> 
        <h1>Welcome <br/> to <br/>  HappyHour</h1>

        <br/>
        <br/>

        <h3>You are successfuly logged in</h3>
        
      </div>

     
      </div>
      </Col>

      <Col>
      <div>
        <img src={imgright} alt='' className='imgright'></img>
      </div>
      </Col>
      </Row>

      <Row>
  
      <button type="button" onClick={handleProDisplay} className="btn-btn">
        Add to Cart
      </button>
     

      
      <button type="button" onClick={handleLogout} className="btn-btn">
        Logout
      </button>
      
      </Row>

      </Container>

      <br/>
      <br/>
    </div>
  );
};

export default Account;

import React from 'react';

import './Productdisplay.css';
import {Container, Col, Row} from 'react-bootstrap';

import BurgerPD from './BurgerPD';
import BeveragesPD from './BeveragesPD';
import DessertsPD from './DessertsPD';
import PizzaPD from './PizzaPD';
import SLfoodsPD from './SLfoodsPD';
import IndianPD from './IndianPD';

import NavBarProfile from '../../components/Header/NavBarProfile';


const FoodCategory = () => {
  return (
    <div className='menu'>

<div className="orderlinks">
          
          <NavBarProfile/>
          <br/>
          <Container className='displaylinks'>
          <Row>
          
            <Col>
            <p>
              <a href="/pizzanav" className="text-reset">Pizza</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/burgernav" className="text-reset">Burger</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/indiannav" className="text-reset">Indian Menu</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/slfoodsnav" className="text-reset">Sri Lankan Menu</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/dessertsnav" className="text-reset">Desserts</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/beveragesnav" className="text-reset">Beverages</a>
            </p> 
            </Col>
            </Row>
            </Container>
        </div>


      <br/>

      <div className='f_cat'>
      <h1 className='title'>-------------------Burger-------------------</h1>

      <br/>
      <section>
        <BurgerPD/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='s_cat'>
      <h1 className='title'>-------------------Pizza-------------------</h1>

      <br/>
      <section>
        <PizzaPD/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='t_cat'>
      <h1 className='title'>-------------------Sri Lankan Menu-------------------</h1>

      <br/>
      <section>
        <SLfoodsPD/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='f_cat'>
      <h1 className='title'>-------------------Indian Menu-------------------</h1>

      <br/>
      <section>
        <IndianPD/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='fif_cat'>
      <h1 className='title'>-------------------Beverages-------------------</h1>

      <br/>
      <section>
        <BeveragesPD/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='six_cat'>
      <h1 className='title'>-------------------Desserts------------------</h1>

      <br/>
      <section>
        <DessertsPD/>
      </section>
      </div>

      <br/>
      
      
    </div>
  );
}

export default FoodCategory;

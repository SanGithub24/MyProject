import React from 'react';
import Burger from './Burger';
import Beverages from './Beverages';

import './AllFoodCat.css';
import Desserts from './Desserts';
import Pizza from './Pizza';
import SLfoods from './SLfoods';
import Indian from './Indian';

import {Container, Col, Row} from 'react-bootstrap';

const FoodCategory = () => {
  return (
    <div className='menu'>

        <div className="orderlinks">
        <br/>
          <h5 className='ordernow'>Order Now</h5>
          <br/>
          <Container className='displaylinks'>
          <Row>
          <Col>
            <p>
              <a href="/foodcat" className="text-reset">All</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/pizza" className="text-reset">Pizza</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/burger" className="text-reset">Burger</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/indian" className="text-reset">Indian Menu</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/slfoods" className="text-reset">Sri Lankan Menu</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/desserts" className="text-reset">Desserts</a>
            </p>
            </Col>
            <Col>
            <p>
              <a href="/beverages" className="text-reset">Beverages</a>
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
        <Burger/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='s_cat'>
      <h1 className='title'>-------------------Pizza-------------------</h1>

      <br/>
      <section>
        <Pizza/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='t_cat'>
      <h1 className='title'>-------------------Sri Lankan Menu-------------------</h1>

      <br/>
      <section>
        <SLfoods/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='f_cat'>
      <h1 className='title'>-------------------Indian Menu-------------------</h1>

      <br/>
      <section>
        <Indian/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='fif_cat'>
      <h1 className='title'>-------------------Beverages-------------------</h1>

      <br/>
      <section>
        <Beverages/>
      </section>
      </div>

      <br/>
      <br/>

      <div className='six_cat'>
      <h1 className='title'>-------------------Desserts------------------</h1>

      <br/>
      <section>
        <Desserts/>
      </section>
      </div>

      <br/>
      
      
    </div>
  );
}

export default FoodCategory;

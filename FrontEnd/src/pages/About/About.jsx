import React from 'react';
import './About.css';

import ImageFirst from "../../assets/images/BGImages/IndoorAreaBG.jpg";
import ImageSecond from "../../assets/images/BGImages/Food.jpg";
import ImageThird from "../../assets/images/BGImages/ResturantInside.jpg";
import Carousel from "react-bootstrap/Carousel";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LogoH from '../../assets/images/BGImages/midleone.jpg';
import openleft from '../../assets/images/BGImages/open_left.jpg';
import openright from '../../assets/images/BGImages/open_right.jpg';
import dinein from '../../assets/images/BGImages/DineinOut.webp';
import hotdog from '../../assets/images/BGImages/HotDogs.jpg';

const About = () => {
  return (
    <div>
    <Carousel>

      <Carousel.Item>
        
        <img src={ImageFirst} alt='First_slide' className='d-block'/>
            
          <Carousel.Caption>
              <h2>Visit Us</h2>
          </Carousel.Caption>

      </Carousel.Item>
          
      <Carousel.Item>
          
        <img src={ImageSecond} alt="Second_slide" className='d-block'/>

          <Carousel.Caption>
              <h2>“Food is symbolic of love when words are inadequate.”</h2>
              <p> Alan D. Wolfelt</p>
          </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

        <img src={ImageThird} alt="Third_slide" className='d-block'/>
            
          <Carousel.Caption>
            <h3>Celebrate with Us</h3>
          </Carousel.Caption>

      </Carousel.Item>

    </Carousel>

    <br/><br/>

    <div className='textsection'>

        <div className='titleabout'>
          <h1>~~~~~~~~~Our Story~~~~~~~~~</h1>
        </div>

        <br/><br/>

        <Container>

            <Row>

            

            <Col>
            <br/>
                    <p className='paraone'>
                          Happy Hours established in Sri Lanka in 2018,<br/> when the first restaurant opend its doors at
                Battaramulla. <br/> Our restaurant have friendly staff and relaxed atmosphere,<br/>making it the perferct place to catch with a friend,  watch a game of cricket or
                even celebrate a special occasionin our party area.
                    </p> 
            </Col>

            <Col>
            <img src={LogoH} alt="" className='imgmiddle'/>
            </Col>

            <Col>

            <br/>
                    <p className='paratwo'>
                We have country special Sri Lankan Lunch Buffet and Indian Food snacks for evening and special
                Indian menu for dinner. <br/> You can taste real taste by all these foods. <br/>In addition we have special pizzas,
                burgers, desserts and beverages for you. You can order anything anytime from those items.
                    </p>
            </Col>

            </Row>

        </Container>

            <br/>
            <br/>

            <h1 className='openh'>-------------------Open Hours-------------------</h1>

            <br/>
            <br/>

        <Container>

                <Row>

                <Col>
                <img src={openleft} alt="" className='openl'/>
                </Col>

                <Col>
                <br/> <br/>
                <br/>
                
                <p className='opentext'>
                <h4>We Are Open <br/>24/7..</h4>
                <br/>
                Poya days ONLY with Vegetarian Items..
                </p>
                </Col>

                <Col>
                <img src={openright} alt="" className='openr'/>
                </Col>

                </Row>

        </Container>

        <br/>
        <br/>
        <br/>

            <h1 className='serve'>_______________What We Serve_______________</h1>

            <br/> <br/> 

            <Container>

                <Row>

                <Col>
                <br/><br/>
                <img src={dinein} alt="" className='dinein'/>
                </Col>

                <Col>
                <br/><br/>
                <br/>
                
                <p className='dinetext'>
                <h4>Dine In</h4>
                <br/>
                ** Indoor and Outdoor sitting area..
                <br/>
                ** Action Station..
                <br/>
                ** Private Party area..
                <br/>
                ** Children Play Area..
                </p>
                </Col>

                </Row>

            </Container>

            <br/>
            <br/>

            <Container>

              <Row>

              <Col>
                <br/><br/>
                <br/><br/>
                
                <p className='pickup'>
                <h4>Easy Pick Up</h4>
                <br/>
                We will ready your order on time
                </p>
                </Col>
                
                <Col>
                <br/>
                <br/>
                <img src={hotdog} alt="" className='pickimg'/>
                </Col>

              </Row>
            </Container>

            

        </div>
        <br/>
        <br/>
</div>
  );
}

export default About;

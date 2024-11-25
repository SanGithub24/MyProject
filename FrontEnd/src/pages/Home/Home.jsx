import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import BackgroundV from "../../assets/images/BGVideos/PizzaCalzone.mp4";
import '../Home/Home.css';
import About from "../About/About";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addoffers');
      setOffers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <div className="home-bg">
        <div className="homefirst_bg">
          <video src={BackgroundV} autoPlay muted loop className="videobg" />

          <div className="headings">
            <section className="horder">
              <br />
              <br />
              <h1 className="primary-heading">
                Nothing Brings People Together Like Good Food
              </h1>
              <br />
              <br />
              <h3 className="primary-text">ORDER ... ANYTHING ... ANYTIME</h3>
              <br />
              <br />
              <h4 className="primary-text">WE SERVE IT WITH REAL TASTE</h4>
              <br />
              <Link to="/login">
                <button className="secondary-button">Order Now</button>
              </Link>
            </section>
          </div>
        </div>

        <section className="Promo">
          <div className="Promo-section">
            <h1>Offers from us</h1>
            <div>
              <p>Hurry Up.. Order Now..</p>
            </div>

            <Col>
                  <p className="offertext">
                    <strong>Contact Us for More Details</strong>
                  </p>
                </Col>

            <Container>
              <Row className="allbanner">
                {offers.map((offer) => (
                  <Col key={offer.id}>
                    <Card className="banner-card">
                      <Card.Img variant="top" src={`http://localhost:3001/assets/${offer.offerimg}`} alt={offer.offerimg} className="banner-img" />
                      <Card.Body>
                        <Card.Text>{offer.description}</Card.Text>
                        <Link to="/login">
                          <Button variant="primary">Order Now</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                ))}
                 
              </Row>
            </Container>
          </div>
        </section>
      </div>

      <section>
        <About />
      </section>
    </div>
  );
};

export default Home;

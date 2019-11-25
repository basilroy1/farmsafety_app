import React, { Component } from "react";
import "./home.css";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  Carousel
} from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../quiz/login";
import Signup from "..//quiz/signup";
import fire from "../../config/fire";
import Pictures from "../pictures/farm_danger.jpeg";
import Pictures1 from "../pictures/health_hazard.jpg";
import Pictures2 from "../pictures/saferty_gaurd.jpg";
class Home extends Component {
  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <Navbar bg="primary" variant="dark">
            <Link to="/">Home</Link>
            <Nav className="mr-auto">
              <Link to="/Login">Login</Link>
              <Link to="/Signup">Signup</Link>
            </Nav>
          </Navbar>

          <Route path="/Login" component={Login} exact />
          <Route path="/Signup" component={Signup} exact />
          <Route path="/Home" component={Home} exact />
        </BrowserRouter>
        <div>
          <h2 variant="primary" size="lg" block>
            Farm safety guide
          </h2>
          <Carousel>
            <Carousel.Item className="SlidePictures">
              <img
                className="d-block w-100"
                src={Pictures2}
                alt="first slide"
              />
              <Carousel.Caption>
                <h3>Did You Know</h3>
                <p>
                  There are approximately 139,860 family farms in Ireland with
                  an average size of 32.7 hectares per holding.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="SlidePictures">
              <img className="d-block w-100" src={Pictures} alt="Third slide" />

              <Carousel.Caption>
                <h3>Did You Know</h3>
                <p>
                  Survey found that in the five year period 2012-2017 that 11%
                  of farms had an accident and in total 2,814 accidents
                  occurred. Farm accidents have risen by 13% in the last 5 years
                  and by 31% in the last ten years
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="SlidePictures">
              <img
                className="d-block w-100"
                src={Pictures1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Did You Know</h3>
                <p>
                  In 2016, 417 farmers and farm workers died from a work-related
                  injury, resulting in a fatality rate of 21.4 deaths per
                  100,000 workers. Transportation incidents, which include
                  tractor overturns were the leading cause of death for these
                  farmers and farm workers.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Home;

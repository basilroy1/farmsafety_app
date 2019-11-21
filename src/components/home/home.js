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
import fire from "../../config/fire";

class Home extends Component {
  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  render() {
    return (
      <div className="background">
        <div>
          <h2 variant="primary" size="lg" block>
            Farm safety guide
          </h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  "https://www.google.com/search?q=football+pictures&client=ubuntu&hs=q5o&sxsrf=ACYBGNTCxNadBdySiRiRJi0gd76xY9fYyA:1573943174785&tbm=isch&source=iu&ictx=1&fir=zzTHnL0dyp1-KM%253A%252CiWUQJYCczf_VIM%252C_&vet=1&usg=AI4_-kTZU-y6Y18sut_npqVxLz51lhTo0w&sa=X&ved=2ahUKEwiDodGe4-_lAhVOThUIHWZdAbUQ9QEwCXoECAgQQg#imgrc=zzTHnL0dyp1-KM:"
                }
                alt="first slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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

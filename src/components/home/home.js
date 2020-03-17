import React, { Component } from "react";
import "./home.css";
import { FaRegCopyright, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import Pictures from "../pictures/new4.jpg";
import Pictures1 from "../pictures/new5.jpg";
import Pictures2 from "../pictures/new6.jpg";
import Pictures4 from "../pictures/homepagelogo.png";
import Pictures3 from "../pictures/new7.jpg"; //imported all the neccessary libraries, componenets and API's
import Divider from "@material-ui/core/Divider";
class Home extends Component {
  render() {
    return (
      <html>
        <div className="background">
          <p id="top"></p>

          <div className="x1">
            <div className="cloud"></div>
          </div>
          <div>
            <Divider />
            <br />
            <h1 className="homeTitle" style={{ textAlign: "center" }}>
              <span className="w3-padding w3-black w3-opacity-min">
                <b>FS</b>
              </span>{" "}
              <span className="w3-hide-small w3-text-light-grey">
                Farm Safety
                <br />
                <img
                  className="img1"
                  src={Pictures4}
                  style={{
                    width: 700,
                    height: 320,
                    borderRadius: 50
                  }}
                  alt="lol"
                />
              </span>
            </h1>
            <br />
            <Divider />
            <p className="viewMore">View More</p>
            <a href="#arrowDown">
              <div id="arrow-down">
                {/*here i have a donw arrow to smoothly scroll down and pictures with text for user to read about facts*/}
                <i>
                  <FaChevronDown />
                </i>
              </div>
            </a>
            <div className="x2">
              <div className="cloud"></div>
            </div>
            <Carousel>
              <Carousel.Item className="SlidePictures">
                <img src={Pictures2} className="img1" alt="first slide" />
                <Carousel.Caption>
                  <h3>Did You Know ?</h3>
                  <div className="caption">
                    <p className="didYoknow">
                      There are approximately 139,860 family farms in Ireland
                      with an average size of 32.7 hectares per holding.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="SlidePictures">
                <img src={Pictures} className="img1" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Did You Know ?</h3>
                  <div className="caption">
                    <p className="didYoknow">
                      Survey found that in the five year period 2012-2017 that
                      11% of farms had an accident and in total 2,814 accidents
                      occurred. Farm accidents have risen by 13% in the last 5
                      years and by 31% in the last ten years
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="SlidePictures">
                <img src={Pictures3} className="img1" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Did You Know ?</h3>

                  <div className="caption">
                    <p className="didYoknow">
                      In 2016, 417 farmers and farm workers died from a
                      work-related injury, resulting in a fatality rate of 21.4
                      deaths per 100,000 workers. Transportation incidents,
                      which include tractor overturns were the leading cause of
                      death for these farmers and farm workers.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="SlidePictures">
                <img src={Pictures1} className="img1" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Did You Know ?</h3>

                  <div className="caption">
                    <p className="didYoknow">
                      Ireland is the fourth largest sheep meat producer in the
                      EU but is the largest net exporter of sheep meat. The
                      Irish sheep flock showed a rise of 1.3% and totalled 5.16
                      million head, with the breeding flock decreasing by around
                      1.1% to 2.56 million head according to the June 2015
                      livestock census.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="arrowDown"> </div>
          <p className="goToTop">Go Back Top</p>
          {/* up arrow to scroll back to top smoothly*/}

          <a href="#top">
            <div id="arrow-up">
              <i>
                <FaChevronUp />
              </i>
            </div>
          </a>

          <div className="x3">
            <div className="cloud"></div>
          </div>

          <div className="x4">
            <div className="cloud"></div>
          </div>
          <footer>
            <FaRegCopyright /> All rights reserved 2020
          </footer>
        </div>
      </html>
    );
  }
}
export default Home;

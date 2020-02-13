import React, { Component } from "react";
import "./welcome.css";
import { MdCheckBox } from "react-icons/md";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg";
import Accordion from "react-bootstrap/Accordion";
import { FaChevronRight } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";

class Articles extends Component {
  render() {
    return (
      <div>
        <div id="innerBorder">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Guarding 4<GiSwordsEmblem /> <FaChevronRight />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="groove">
                    Fixed guards must always be kept in place. These prevent
                    entanglement The guard should ensure that no part of your
                    body can reach the danger zone Fixed guarding of older
                    machines should be upgraded in line with the guarding on
                    newer models Do not use a machine unless all guards are in
                    place
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Machinery Checks <MdCheckBox />
                  <FaChevronRight />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {" "}
                  <p className="groove">
                    All safety guards/ devices fitted The PTO "O" guards present
                    Hydraulic systems and hoses in good repair All machinery
                    defects identified and corrected Regular maintenance carried
                    out
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Machinery Checks <MdCheckBox />
                  <FaChevronRight />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="groove">
                    All safety guards/ devices fitted The PTO "O" guards present
                    Hydraulic systems and hoses in good repair All machinery
                    defects identified and corrected Regular maintenance carried
                    out
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Machinery Fatalities <MdCheckBox />
                  <FaChevronRight />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  {" "}
                  <p className="groove">
                    Tractors and Machinery are the main cause of farm accidents
                    in Ireland. Elderly farmers and children are at particular
                    risk. Being entangled in PTO’s, crushed under a machine
                    part, caught in a machine mechanism, crushed between
                    vehicles and struck by a machine object are the main causes
                    of deaths with farm machinery.
                    <img src={piechart} alt="" />
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <h3 style={{ marginLeft: "center " }} className="heading">
            Farm Safety in News
          </h3>

          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/H9aQGovNlcU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Articles;

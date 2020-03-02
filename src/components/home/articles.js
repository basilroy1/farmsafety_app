import React, { Component } from "react";
import "./welcome.css";
import { MdCheckBox, MdExpandMore } from "react-icons/md";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Button, Nav, Navbar, ButtonToolbar } from "react-bootstrap";
class Articles extends Component {
  render() {
    return (
      <div>
        <div id="innerBorder">
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  {" "}
                  Guarding <GiSwordsEmblem />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                <p className="groove">
                  Fixed guards must always be kept in place. These prevent
                  entanglement The guard should ensure that no part of your body
                  can reach the danger zone Fixed guarding of older machines
                  should be upgraded in line with the guarding on newer models
                  Do not use a machine unless all guards are in place
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="we">
                  {" "}
                  Machinery Checks <MdCheckBox />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                <p className="groove">
                  All safety guards/ devices fitted The PTO "O" guards present
                  Hydraulic systems and hoses in good repair All machinery
                  defects identified and corrected Regular maintenance carried
                  out
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="we">
                  {" "}
                  Machinery Checks <MdCheckBox />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                <p className="groove">
                  All safety guards/ devices fitted The PTO "O" guards present
                  Hydraulic systems and hoses in good repair All machinery
                  defects identified and corrected Regular maintenance carried
                  out
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="we">
                  {" "}
                  Machinery Fatalities <MdCheckBox />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                <p className="groove">
                  Tractors and Machinery are the main cause of farm accidents in
                  Ireland. Elderly farmers and children are at particular risk.
                  Being entangled in PTO’s, crushed under a machine part, caught
                  in a machine mechanism, crushed between vehicles and struck by
                  a machine object are the main causes of deaths with farm
                  machinery.
                  <img src={piechart} alt="" />
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="we">
                  {" "}
                  Farm Safety in News <MdCheckBox />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                <iframe
                  width="300"
                  title="lol"
                  height="315"
                  src="https://www.youtube.com/embed/H9aQGovNlcU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {/*   <Accordion defaultActiveKey="0">
            <Card border="warning" id="header1">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  size="sm"
                  block
                  variant="link"
                  eventKey="0"
                >
                  Guarding <GiSwordsEmblem /> <FaChevronRight />
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
            <Card border="warning">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  size="sm"
                  block
                  variant="link"
                  eventKey="1"
                >
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
            <Card border="warning">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  size="sm"
                  block
                  variant="link"
                  eventKey="2"
                >
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
            <Card border="warning">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  size="sm"
                  block
                  variant="link"
                  eventKey="3"
                >
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

            <Card border="warning">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  size="sm"
                  block
                  variant="link"
                  eventKey="4"
                >
                  Farm Safety in News <MdCheckBox />
                  <FaChevronRight />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <iframe
                    width="300"
                    title="lol"
                    height="315"
                    src="https://www.youtube.com/embed/H9aQGovNlcU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
    </Accordion>*/}
        </div>
      </div>
    );
  }
}

export default Articles;

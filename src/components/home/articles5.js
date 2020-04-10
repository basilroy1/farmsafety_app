import React, { Component } from "react";
import "./welcome.css";
import { MdCheckBox, MdExpandMore } from "react-icons/md";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg"; //imported relevant API's and components
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Articles extends Component {
  render() {
    return (
      <div>
        <div id="innerBorder">
          <ExpansionPanel>
            <div className="Topic1">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content" // here are safety articles for masters level
                id="panel1a-header"
              >
                <Typography>
                  {" "}
                  Guarding Master
                  <GiSwordsEmblem />
                </Typography>
              </ExpansionPanelSummary>
            </div>
            <Divider />
            <ExpansionPanelDetails>
              <Typography>
                Fixed guards must always be kept in place. These prevent
                entanglement The guard should ensure that no part of your body
                can reach the danger zone Fixed guarding of older machines
                should be upgraded in line with the guarding on newer models Do
                not use a machine unless all guards are in place
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
                All safety guards/ devices fitted The PTO "O" guards present
                Hydraulic systems and hoses in good repair All machinery defects
                identified and corrected Regular maintenance carried out
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
                All safety guards/ devices fitted The PTO "O" guards present
                Hydraulic systems and hoses in good repair All machinery defects
                identified and corrected Regular maintenance carried out
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
                Tractors and Machinery are the main cause of farm accidents in
                Ireland. Elderly farmers and children are at particular risk.
                Being entangled in PTO’s, crushed under a machine part, caught
                in a machine mechanism, crushed between vehicles and struck by a
                machine object are the main causes of deaths with farm
                machinery.
                <img className="chart" src={piechart} alt="" />
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
        </div>
      </div>
    );
  }
}

export default Articles;

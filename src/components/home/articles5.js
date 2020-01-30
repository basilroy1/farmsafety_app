import React, { Component } from "react";
import "./welcome.css";
import { MdCheckBox } from "react-icons/md";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg";

import {
  Button,
  Nav,
  Navbar,
  ButtonToolbar,
  Tabs,
  Tab,
  TabPane
} from "react-bootstrap";
class Articles extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <h3 className="heading" style={{ color: "black" }}>
          Artcles 5 Guarding <GiSwordsEmblem />
        </h3>
        <p className="groove">
          Fixed guards must always be kept in place. These prevent entanglement
          The guard should ensure that no part of your body can reach the danger
          zone Fixed guarding of older machines should be upgraded in line with
          the guarding on newer models Do not use a machine unless all guards
          are in place
        </p>

        <h3 className="heading" style={{ color: "black" }}>
          Machinery Checks <MdCheckBox />
          <p className="groove">
            All safety guards/ devices fitted The PTO "O" guards present
            Hydraulic systems and hoses in good repair All machinery defects
            identified and corrected Regular maintenance carried out
          </p>
        </h3>

        <h3 className="heading" style={{ color: "black" }}>
          Machinery Checks <MdCheckBox />
          <p className="groove">
            All safety guards/ devices fitted The PTO "O" guards present
            Hydraulic systems and hoses in good repair All machinery defects
            identified and corrected Regular maintenance carried out
          </p>
        </h3>
        <h3 className="heading" style={{ color: "black" }}>
          Machinery Fatalities <MdCheckBox />
          <p className="groove">
            Tractors and Machinery are the main cause of farm accidents in
            Ireland. Elderly farmers and children are at particular risk. Being
            entangled in PTO’s, crushed under a machine part, caught in a
            machine mechanism, crushed between vehicles and struck by a machine
            object are the main causes of deaths with farm machinery.
            <img src={piechart} alt="" />
          </p>
        </h3>
      </div>
    );
  }
}

export default Articles;
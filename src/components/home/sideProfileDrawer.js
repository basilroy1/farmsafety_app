import { makeStyles } from "@material-ui/core/styles";
import InstructionsModal from "./instructionsmodal";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";
import Zoom from "@material-ui/core/Zoom";
import UserProfile from "../quiz/userProfile";
import { Button } from "react-bootstrap";
import { render } from "react-dom";
import Test from "../quiz/test";

export default function TemporaryDrawer() {
  const useStyles = makeStyles({
    list: {
      width: 680
    },
    fullList: {
      width: "auto"
    }
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <UserProfile />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>Open Right</Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}

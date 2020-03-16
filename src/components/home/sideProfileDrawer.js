import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import UserProfile from "../quiz/userProfile";
import { Button, Nav } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import "./welcome.css";
export default function TemporaryDrawer(props) {
  const useStyles = makeStyles({
    list: {
      width: 640
    },
    fullList: {
      width: "auto"
    },
    back: { backgroundColor: "yellow" }
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
      {props.people.map((person, index) => {
        return (
          <div id="userProfileComp" key={index}>
            {props.viewprof ? (
              <UserProfile
                className="userProfile"
                levelRook={person.levelRook}
                levelStudent={person.levelStudent}
                levelIntermediate={person.levelIntermediate}
                levelExpert={person.levelExpert}
                levelMaster={person.levelMaster}
                score={person.Score}
                question={person.Questions}
                email={person.email}
                time={person.lastLogin}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <Button
        variant="info"
        style={{ marginLeft: 5 }}
        onClick={toggleDrawer("right", true)}
      >
        {" "}
        <Nav>
          View Profile&ensp;
          <MdPerson size={20} />
        </Nav>{" "}
      </Button>
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

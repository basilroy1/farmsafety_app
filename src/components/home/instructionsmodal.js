import React, { Component } from "react";
import { Button } from "reactstrap";
import Divider from "@material-ui/core/Divider";
import "./instructionsmodal.css";
import { MdClose } from "react-icons/md";

class InstructionsModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <body>
        <div className="body">
          <div className="outlineLayout">
            <div className="instructionsContent">
              <Button
                onClick={() => {
                  this.props.view(false);
                }}
                id="closebtn"
              >
                <MdClose size={20} />
              </Button>
              <h1 className="heading3"> Quiz Instructions</h1>

              <Divider />

              <ul className="topSpan">
                <li>
                  <span className="title"> To Pass :</span>
                  <span className="value">
                    {" "}
                    <span>50%+</span>
                  </span>
                </li>
                <li>
                  <span className="title">Time :</span>
                  <span className="value">
                    {" "}
                    <span>Unlimited</span>
                  </span>
                </li>
              </ul>
              <Divider />
              <br />
              <h2 className="subheading">Instructions</h2>
              <br />
              <div className="description">
                <p>
                  This Quiz consists of 4 multiple-choice questions. To be
                  successful with these Quizzes, it’s important to thoroughly
                  read each corresponding safety article. It will also be
                  extremely useful to study the <strong>key terms</strong> and{" "}
                  <strong>pictures </strong>at the duration of the article and
                  review the
                  <em> Take the Quiz</em> activity at the end of the Article.
                  Keep the following in mind:
                </p>
                <ul>
                  <li>
                    <strong>Multiple Atttempts</strong> - You can re-take Quiz
                    multiple number time until you pass the Quiz.
                  </li>
                  <li>
                    <strong>Ranking System</strong> - There are 5 ranking levels
                    at the top of the page. By default it will be on
                    <strong> Rookie</strong>. Once the User reads the article
                    and attempts the Quiz and achieves the
                    <br /> <strong>required 50%</strong> the User moves up to
                    <strong> Next Level</strong> in this case it's Student etc.
                    If the User <strong>Fails (less than 50%)</strong> the Quiz
                    the level remains the same and the User will be <br />
                    prompted the
                    <br />
                    <strong>"Try Again"</strong> button to re-take the Quiz.
                  </li>
                  <li>
                    <strong>Previous Quizes</strong> - You can take the older
                    Quiz again and again to brush up your Knowledge.
                  </li>
                  <li>
                    <strong>Enabling "Take Quiz" Button</strong> - Once reading
                    the article is complete you have to{" "}
                    <strong>Click the current Level</strong> the User is on
                    idicated by{" "}
                    <strong>
                      Rookie,Student,Intermediate,
                      <br />
                      Expert
                    </strong>{" "}
                    and <strong>Master</strong>.
                  </li>
                  <li>
                    <strong>Navigating to Different Articles</strong> - You can
                    move to other articles within your level range by just
                    <strong>Clicking the Desired Level</strong> you want to read
                    and the article <br />
                    appears.
                  </li>
                </ul>
                <p>
                  To start, click the <strong>"Take the Quiz"</strong> button.
                  When finished, click the <strong>"Finish"</strong> button.
                </p>
              </div>
              <br />
              <Divider />
              <br />
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default InstructionsModal;

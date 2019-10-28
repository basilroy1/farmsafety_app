import React, { useState } from "react";
import { Button } from "react-bootstrap";
const QuestionBox = ({ question, option }) => {
  const [answer, setAnswer] = useState(option);
  return (
    <div>
      <div>{question}</div>
      {answer.map((text, index) => (
        <Button
          key={index}
          onClick={() => {
            setAnswer([text]);
          }}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
export default QuestionBox;

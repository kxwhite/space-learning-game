import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function Question({ q, setContinueButton, score, setScore }) {
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [options, setOptions] = useState(q.options)

  const handleClick = (event) => {
    if (parseInt(event.target.value) === q.correctAnswer) {
      event.target.className = "w-100 btn btn-success button_text";
      setScore(score + 1);
    } else {
      event.target.className = "w-100 btn btn-danger button_text";
    }
    setOptionsDisabled(true);
    setContinueButton(true);
  };

  return (
    <>
      <p className="q_text">{q.text}</p>

      <div className="d-grid gap-2">
        {q.options.map((option, index) => {
          return (
            <div key={index}>
              <button
                className="w-100 btn btn-light button_text"
                type="button"
                value={index}
                disabled={optionsDisabled}
                onClick={(event) => handleClick(event)}
              >
                {option}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Question;

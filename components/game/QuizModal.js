import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Question from "./Question";

function QuestionModal({ showQuestion, startGame, questions, questionIndex}) {
  const router = useRouter();

  const [continueButton, setContinueButton] = useState(false);
  const [score, setScore] = useState(0);
  const [hints, setHints] = useState(3);

  const [currentQuestion, setCurrentQuestion] = useState();

  useEffect(() => {
    setCurrentQuestion(questions[questionIndex]);
  }, [questionIndex]);

  const questionsLength = questions.length;

  const lowScoreBody = "You have made too many mistakes when upgrading your ship. You need to answer 4 out of 5 questions to be successful. \nUse hints when in doubt.";

  const handleClose = () => {
    if (questionIndex === 4 && score < 4) {
      router.push({
        pathname: "/gameover",
        query: {
          score,
          questionsLength,
          lowScoreBody
        },
      }, undefined, { shallow: true });
    }
    if (questionIndex === 4 && score >= 4) {
      router.push("/congrats");
    }
    startGame();
    setContinueButton(false);
  };

  const handleHint = (event) => {
    let options = currentQuestion.options;
    if (hints > 0) {
      do {
        let randomIndex = Math.floor(Math.random() * options.length + 1) - 1;
        if (randomIndex !== currentQuestion.correctAnswer) {
          delete options[randomIndex];
          break;
        }
      } while (true);
      setCurrentQuestion((currentQuestion) => ({
        ...currentQuestion,
        options: options,
      }));
      setHints(hints - 1)
      event.target.disabled = true
    }
  };

  return (
    <>
      <Modal
        show={showQuestion}
        onHide={handleClose}
        fullscreen={"xxl-down"}
        size="xl"
        backdrop={"static"}
        keyboard={false}
        dialogClassName="modal-100w"
      >
        <Modal.Header className="modal_body modal_header">
          <Modal.Title className="modal_title">
            {questionIndex < currentQuestion?.number
              ? "Question " +
                currentQuestion?.number +
                " of " +
                questions.length
              : "Result"}
          </Modal.Title>
          <div>
            <h4>Score: {score} / 5</h4>
            <h4>Hints left: {hints} / 3</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="modal_body">
          {questionIndex < currentQuestion?.number ? (
            <Question
              q={currentQuestion}
              setContinueButton={setContinueButton}
              score={score}
              setScore={setScore}
            />
          ) : null}
        </Modal.Body>
        <Modal.Footer className="modal_body">
          <Button
            variant="warning"
            className="hint_button me-auto"
            onClick={(event) => handleHint(event)}
            disabled={continueButton || hints === 0}
          >
            Hint
          </Button>
          {continueButton ? (
            <Button variant="primary" onClick={handleClose}>
              Continue
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default QuestionModal;

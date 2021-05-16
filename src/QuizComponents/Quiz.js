import React, { useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Button, Typography, Card } from "antd";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { Title } = Typography;

  // if the optionChose (users selection) is the currentQuestions correct answer, add 1 to the score.
  //   then increment to the next question
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  // if it is the last question, run this function to show the "Finish Quiz" prompt by setting the gameState
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  // the prompt is the question from the questionBank component imported as Questions
  // these questions all have options a - d
  // setOptionChosen is what the user will have chosen to select
  return (
    <>
      <Card className="quiz__container">
        <Title level={3}>{Questions[currentQuestion].prompt}</Title>
        <div className="quiz__options">
          <Button
            className="quiz__btn one"
            onClick={() => setOptionChosen("A")}
          >
            {" "}
            {Questions[currentQuestion].optionA}{" "}
          </Button>
          <Button
            className="quiz__btn two"
            onClick={() => setOptionChosen("B")}
          >
            {" "}
            {Questions[currentQuestion].optionB}{" "}
          </Button>
          <Button
            className="quiz__btn three"
            onClick={() => setOptionChosen("C")}
          >
            {" "}
            {Questions[currentQuestion].optionC}{" "}
          </Button>
          <Button
            className="quiz__btn four"
            onClick={() => setOptionChosen("D")}
          >
            {" "}
            {Questions[currentQuestion].optionD}{" "}
          </Button>
        </div>
        {/* here is where you call the finishQuiz function if there are no more questions (Questions.length - 1) */}
        <div className="quiz__btn__container">
          {currentQuestion === Questions.length - 1 ? (
            <Button id="finish__quiz__btn" onClick={finishQuiz}>
              Finish Quiz
            </Button>
          ) : (
            // if there are still questions, run the nextQuestion function
            //  that means (add one to the score, and increment to the next question)
            <Button id="next__question__btn" onClick={nextQuestion}>
              Next Question
            </Button>
          )}
        </div>
      </Card>
    </>
  );
}

export default Quiz;

import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";
import "./Quiz.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endscreen__container">
      <h1>Quiz Finished</h1>
      <h3>
        Your Score: {score} / {Questions.length}
      </h3>
      <button id="resart__quiz__btn" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;

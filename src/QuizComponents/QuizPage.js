import React, { useState } from "react";
import { QuizContext } from "../Helpers/Context";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";

function QuizPage() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="quiz">
    <div className="quiz__container">
      <div className="quiz__title__container">
      <h1>Take a short Quiz</h1>
      </div>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
    </div>
  );
}

export default QuizPage;

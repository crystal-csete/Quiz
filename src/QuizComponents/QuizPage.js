import React, { useState } from "react";
import { QuizContext } from "../Helpers/Context";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { Typography } from "antd";

// this component is what is brought into the navigation
// here is where the redirects really happen, and "menu", "quiz", and "endScreen" is assigned
// gameState, setGameState and score, setScore original state start here

function QuizPage() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const { Title } = Typography;

  return (
    <div className="quiz">
      <div className="quiz__container">
        <div className="quiz__title__container">
          <Title level={3}>Do you know Colorado?</Title>
        </div>
        {/* this is where/how the QuizContext.Provider is sharing state across the application */}
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

import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import './Quiz.css';

function MainMenu() {
  const { setGameState } = useContext(QuizContext);
  
  return (
    <div className="menu__container">
      <button id="start__quiz__btn"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;

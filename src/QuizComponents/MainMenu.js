import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Card, Button } from "antd";
import "./Quiz.css";

// this is where the start screen is (where the game starts)

function MainMenu() {
  const { setGameState } = useContext(QuizContext);

  return (
    <>
      <Card className="menu__container">
        <Button
          id="start__quiz__btn"
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </Button>
      </Card>
    </>
  );
}

export default MainMenu;

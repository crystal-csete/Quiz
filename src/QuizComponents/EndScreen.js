import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";
import "./Quiz.css";
import { Button, Typography, Card } from "antd";

function EndScreen() {
  // this context is also in the Quiz component
  const { score, setScore, setGameState } = useContext(QuizContext);
  const { Title } = Typography;

  // this function will restart the setScore to 0
  // then it will restart the quiz by going to menu
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <>
      <Card className="endscreen__container">
        <Title level={3}>Quiz Finished!</Title>
        {/* This shows you final score out of how many questions there are */}
        <Title level={3}>
          Your Score: {score} / {Questions.length}{" "}
        </Title>
        {/* this function resartQuiz will redirect you to restart the quiz */}
        <Button id="resart__quiz__btn" onClick={restartQuiz}>
          Restart Quiz
        </Button>
      </Card>
    </>
  );
}

export default EndScreen;

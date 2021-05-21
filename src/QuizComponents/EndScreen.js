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
        <Title level={3}>Lets see how you did!</Title>
        {/* This shows you final score out of how many questions there are */}
        <Title level={3}>
          Your Score: {score} / {Questions.length}{" "}
        </Title>
        <p>
          How did you do? Here are some links to help you learn more about
          Colorado!
        </p>
        <p>
          <a href="https://www.50states.com/facts/colorado.htm">50 States</a>
        </p>
        <p>
          <a href="https://www.outtherecolorado.com/multimedia/galleries/42-weird-wacky-and-wild-colorado-facts/collection_3fb15de8-ad7e-5428-a28e-39052aa32355.html">
            Out There Colorado
          </a>
        </p>
        <p>
          <a href="https://thefactfile.org/colorado-facts/">The Fact File</a>
        </p>
        <p>
          <a href="https://www.planetware.com/colorado/top-ski-resorts-in-colorado-us-co-11.htm">
            Planetware: Ski Resorts in Colorado
          </a>
        </p>

        {/* this function resartQuiz will redirect you to restart the quiz */}
        <Button id="restart__quiz__btn" onClick={restartQuiz}>
          Restart Quiz
        </Button>
      </Card>
    </>
  );
}

export default EndScreen;

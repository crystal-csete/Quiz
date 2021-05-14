import React, { useState } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen")
    }

    return (
        <div className="quiz__container">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> {Questions[currentQuestion].optionA } </button>
                <button onClick={() => setOptionChosen("B")}> {Questions[currentQuestion].optionB } </button>
                <button onClick={() => setOptionChosen("C")}> {Questions[currentQuestion].optionC } </button>
                <button onClick={() => setOptionChosen("D")}> {Questions[currentQuestion].optionD } </button>
            </div>
            <div className="quiz__btn__container">

            {currentQuestion === Questions.length - 1 ? (
                <button id="finish__quiz__btn" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button id="next__question__btn" onClick={nextQuestion}>Next Question</button>
            )}      
            </div>
        </div>
    )
}

export default Quiz

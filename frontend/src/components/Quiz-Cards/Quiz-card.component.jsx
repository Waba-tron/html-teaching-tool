import React from "react";
import QuizCover from "../../imgs/quiz.jpg";
import Button from "../Buttons/Button.component.jsx";
import "../Quiz-Cards/Quiz-card.styles.scss";
import "../../design-tokens/_scss-varibles.scss";
import { useHistory } from "react-router-dom";

const QuizCard = ({ quizInfo, difficulty, id }) => {
  let history = useHistory();
  const goToQuizz = () => {
    history.push(`/quiz/${id}`);
  };

  return (
    <>
      {quizInfo ? (
        <div className="quiz-card">
          <h1>Quiz {id}</h1>

          <img className="quiz-img" src={QuizCover} alt="" />
          <div className="quiz-content">
            <h4>Difficulty: {difficulty}</h4>
            <div className="score">
              <span>score {quizInfo.score}%</span>
            </div>
          </div>

          {quizInfo.hasAccess ? (
            <Button text={"Begin"} event={goToQuizz} />
          ) : (
            <Button text={"No Access"} disable={true} />
          )}
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default QuizCard;

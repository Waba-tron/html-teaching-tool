import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../actions/userAction.js";
import Button from "../../components/Buttons/Button.component.jsx";
import axios from "axios";
import "./Quiz.styles.scss";
import "../../design-tokens/_scss-varibles.scss";

const QuizScreen = ({ history, match, location }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;

  const { email, token } = userInfo;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizId, setQuizId] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setQuizId(parseInt(`${match.params.id}`));
    if (!userInfo) {
      history.push("/");
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        if (match.params.id == 2 && !user.quez2[0].hasAccess) {
          history.push("/profile");
        } else if (match.params.id == 3 && !user.quez3[0].hasAccess) {
          history.push("/profile");
        }
      }
    }
  }, [userInfo, user, dispatch, match.params.id]);

  const backToProfile = async () => {
    console.log(email, score, quizId);
    history.push("/profile");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(`/api/quiz`, { email, score, quizId }, config);
      //call new user data
      dispatch(getUserDetails("profile"));
    } catch (error) {
      setError(error.message);
    }
  };

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {error && <h1>{error}</h1>}
      <div className="quiz-section">
        {showScore ? (
          <div className="score-section">
            <h1>
              You scored {score / 10} out of {questions.length}
            </h1>
            <Button event={backToProfile} text={"Back to profile"} />
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <h1>
                  Question {currentQuestion + 1}/{questions.length}
                </h1>
              </div>
              <div className="question-img">
                <img
                  src="https://mcqsets.com/wp-content/uploads/2014/02/HTML-picture.png"
                  alt=""
                />
              </div>
              <div className="question-text">
                <h2>{questions[currentQuestion].questionText}</h2>
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <div>
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;

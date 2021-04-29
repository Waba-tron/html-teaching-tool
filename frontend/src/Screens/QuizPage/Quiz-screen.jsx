import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../actions/userAction.js";
import Button from "../../components/Buttons/Button.component.jsx";
import axios from "axios";
import "./Quiz.styles.scss";
import "../../design-tokens/_scss-varibles.scss";
import Loader from "../../components/Loader/Loader.jsx";
const QuizScreen = ({ history, match, location }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [quizId, setQuizId] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const { email, token } = userInfo;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const apiQuiz = await axios.get(`/api/quiz/${match.params.id}`, config);
        console.log(apiQuiz.data);
        setQuiz(apiQuiz.data);
        setLoading(false);
      } catch (error) {
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
        setLoading(false);
      }
    };

    getQuiz();

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
    const { email, token } = userInfo;
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

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {loading ? (
        <Loader color={"#88d36a"} />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="quiz-section">
          {showScore ? (
            <div className="score-section">
              <h1>Quiz {match.params.id} Complete</h1>
              <Button event={backToProfile} text={"Check score"} />
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <h1>
                    Question {currentQuestion + 1}/{quiz.length}
                  </h1>
                </div>
                <div className="question-img">
                  <img
                    src="https://mcqsets.com/wp-content/uploads/2014/02/HTML-picture.png"
                    alt=""
                  />
                </div>
                <div className="question-text">
                  <h2>{quiz[currentQuestion].questionText}</h2>
                </div>
              </div>
              <div className="answer-section">
                {quiz[currentQuestion].answerOptions.map((answerOption) => (
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
      )}
    </div>
  );
};

export default QuizScreen;

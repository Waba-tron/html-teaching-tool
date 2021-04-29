import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../actions/userAction.js";
import QuestionnaireModal from "../../components/QuestionnaireModal/QuestionnaireModel";
import QuizCard from "../../components/Quiz-Cards/Quiz-card.component.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import "../../design-tokens/_scss-varibles.scss";
import "./Profile.styles.scss";
const ProfileScreen = ({ history }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;

  //local state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questionnaireOne, setQuestionnaireOne] = useState(false);
  const [questionnaireTwo, setQuestionnaireTwo] = useState(false);
  const [quiz1, setQuiz1] = useState("");
  const [quiz2, setQuiz2] = useState("");
  const [quiz3, setQuiz3] = useState("");

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
        setQuestionnaireOne(user.questionnaire1Complete);
        setQuestionnaireTwo(user.questionnaire2Complete);
        setQuiz1(user.quez1[0]);
        setQuiz2(user.quez2[0]);
        setQuiz3(user.quez3[0]);
      }
    }
  }, [userInfo, user, dispatch]);

  return (
    <div>
      {loading ? (
        <Loader color={"#88d36a"} />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          {!questionnaireOne ? (
            <QuestionnaireModal
              question={
                "Before you continue, please tell us your prefered learning style?"
              }
              options={[
                { value: "Auditory", label: "Auditory" },
                { value: "Visual", label: "Visual" },
                { value: "Read and Write", label: "Read and Write" },
                { value: "Kinesthetic", label: "Kinesthetic" },
              ]}
              userInfo={userInfo}
              questionaireId={1}
            />
          ) : (
            ""
          )}

          {!questionnaireTwo && quiz2.score >= 70 ? (
            <QuestionnaireModal
              question={"Has this tool helped to in html"}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              userInfo={userInfo}
              questionaireId={2}
            />
          ) : (
            ""
          )}

          <div className="profile">
            <h1>Profile {name}</h1>
            <div>
              <h2 className="instructions-title">Instructions</h2>
              <p className="instructions">
                Welcome... this is your profile page. This page will a list of
                quizzes to test your knowledge of HTML. To progress through
                these quizzes, obtain a minimum of 70% progress on to the next
                one. We would recommend looking at our tutorials before
                starting. Happy Coding :)
              </p>
            </div>
          </div>

          <div className="quiz-panel">
            <QuizCard quizInfo={quiz1} difficulty={"Easy"} id={1} />
            <QuizCard quizInfo={quiz2} difficulty={"Medium"} id={2} />
            <QuizCard quizInfo={quiz3} difficulty={"Hard"} id={3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;

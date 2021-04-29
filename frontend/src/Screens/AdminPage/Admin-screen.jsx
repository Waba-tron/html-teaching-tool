import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Chart from "../../components/Chart/Chart.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import "../../design-tokens/_scss-varibles.scss";
import "./Admin.styles.scss";

const AdminScreen = ({ history }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;

  //Responses
  const [questionnaireOneR, setquestionnaireOneR] = useState([]);
  const [questionnaireTwoR, setquestionnaireTwoR] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (userInfo && userInfo.isAdmin) {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        axios
          .get("/api/questionnaire/1", config)
          .then((response) => {
            let questionnaireResponses = response.data.map(
              (res) => res.response
            );

            if (questionnaireResponses.length == 0) {
              setError("Some data not found");
            }

            let ReadWriteScore = 0;
            let visualScore = 0;
            let kinestheticScore = 0;
            let auditoryScore = 0;

            questionnaireResponses.forEach((res) => {
              switch (res) {
                case "Read and Write":
                  ReadWriteScore += 1;
                  break;
                case "Visual":
                  visualScore += 1;
                  break;
                case "Kinesthetic":
                  kinestheticScore += 1;
                  break;
                case "Auditary":
                  auditoryScore += 1;
                  break;
                default:
              }
            });

            setquestionnaireOneR([
              { label: "Read and Write", score: ReadWriteScore },
              { label: "Visual", score: visualScore },
              { label: "Kinesthetic", score: kinestheticScore },
              { label: "Auditary", score: auditoryScore },
            ]);
          })
          .catch((error) => {
            setError(error.message);
          });

        axios
          .get("/api/questionnaire/2", config)
          .then((response) => {
            let questionnaireResponses = response.data.map(
              (res) => res.response
            );

            if (questionnaireResponses.length == 0) {
              setError("Some data not found");
            }

            let yesScore = 0;
            let noScore = 0;

            questionnaireResponses.forEach((res) => {
              console.log(res);

              switch (res) {
                case "Yes":
                  yesScore += 1;
                  break;
                case "No":
                  noScore += 1;
                default:
              }
            });

            setquestionnaireTwoR([
              { label: "Yes", score: yesScore },
              { label: "No", score: noScore },
            ]);
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      } else {
        history.push("/");
      }
    }
  }, [userInfo, user]);
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin page</h1>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          {" "}
          <section className="graph-section">
            <h1 className="graph-title">Users learning styles</h1>
            {questionnaireOneR.length > 0 ? (
              <Chart data={questionnaireOneR} />
            ) : (
              <Loader color={"white"} />
            )}
          </section>
          <section className="graph-section">
            <h1 className="graph-title">
              Has the tool helped students learn html
            </h1>
            {questionnaireTwoR.length > 0 ? (
              <Chart data={questionnaireTwoR} />
            ) : (
              <Loader color={"white"} />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default AdminScreen;

import React, { useState } from "react";
import Select from "react-select";
import Button from "../Buttons/Button.component.jsx";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../actions/userAction.js";
import axios from "axios";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "80px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const QuestionnaireModel = ({
  question,
  options,
  userInfo,
  questionaireId,
}) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { name, email, token } = userInfo;

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(answer.value);

    if (answer.value === undefined) {
      setError("Fill input");
    } else {
      let response = answer.value;
      console.log(response);

      try {
        console.log(response, name, email, token, questionaireId);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await axios.post(
          `/api/questionnaire`,
          { email, response, questionaireId },
          config
        );

        setError("");
        console.log("submitted");
        setSuccess(true);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setSuccess(false);
      }
    }
  };

  const closeModel = () => {
    dispatch(getUserDetails("profile"));
  };

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#88d36a",
      primary: "#88d36a",
    },
  });

  return (
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {success ? (
          <div>
            <h1>Thanks for your response</h1>

            <Button text={"Close"} event={closeModel} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <h1>{error}</h1>}
            <h1>{question}</h1>
            <br />
            <Select
              theme={theme}
              options={options}
              onChange={setAnswer}
              required
            />
            <div className="btn-container">
              <Button text={"Submit response"} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireModel;

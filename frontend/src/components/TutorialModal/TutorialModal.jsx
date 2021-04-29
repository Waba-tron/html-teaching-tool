import React from "react";
import Button from "../Buttons/Button.component.jsx";
import Panel from "../Panel/Panel";
import { useHistory } from "react-router-dom";
import "./TutorialModal.styles.scss";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "800px",
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

const TutorialModal = ({ content, onClose, language }) => {
  const history = useHistory();
  const takeToVideo = () => {
    history.push(`/videos/${content.topic}`);
  };
  return (
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1 className="modal-title">{content.title}</h1>

        {content.modalChallenges === undefined ? (
          <Panel givenHtml={`${content.codeString}`} language={language} />
        ) : (
          <Panel
            givenHtml={`${content.codeString + content.modalChallenges} `}
            language={language}
          />
        )}

        {content.hasVideo ? (
          <Button event={takeToVideo} text={"Watch video"}></Button>
        ) : (
          ""
        )}
        <Button event={onClose} text={"Close"}></Button>
      </div>
    </div>
  );
};

export default TutorialModal;

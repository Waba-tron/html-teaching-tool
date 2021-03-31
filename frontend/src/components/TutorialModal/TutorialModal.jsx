import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneForest } from "react-syntax-highlighter/dist/esm/styles/prism";
import Select from "react-select";
import Button from "../Buttons/Button.component.jsx";
import Panel from "../Panel/Panel";
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

const TutorialModal = ({ content, onClose }) => {
  return (
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1>Tutorial model</h1>
        <h2>{content.title}</h2>
        <Panel givenHtml={`${content.codeString}`} />

        <div className="test">
          {/*
          <SyntaxHighlighter language="javascript" style={duotoneForest}>
            {}
          </SyntaxHighlighter>
          */}
        </div>
        <Button event={onClose} text={"Close"}></Button>
      </div>
    </div>
  );
};

export default TutorialModal;

import React from "react";
import "./Button.styles.scss";
const Button = ({ text, event, disable }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={event} disabled={disable}>
        {text}
      </button>
    </div>
  );
};

export default Button;

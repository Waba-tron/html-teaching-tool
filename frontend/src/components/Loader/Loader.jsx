import React from "react";
import "./Loader.styles.scss";
const Loader = ({ color }) => {
  return <div class="spin" style={{ borderTop: `2px solid ${color}` }}></div>;
};

export default Loader;

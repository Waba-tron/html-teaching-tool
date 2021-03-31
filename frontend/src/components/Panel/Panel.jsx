import React, { useState, useEffect } from "react";
import Editor from "../Editor/Editor.jsx";
import "./Panel.styles.scss";

const Panel = ({ givenHtml }) => {
  const [html, sethtml] = useState(`${givenHtml}`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`${html}`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={sethtml}
        />

        <div className="output-panel">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts allow-popups allow-modals"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Panel;

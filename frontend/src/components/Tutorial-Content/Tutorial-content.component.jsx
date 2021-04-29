import { useState } from "react";
import Button from "../Buttons/Button.component.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneForest } from "react-syntax-highlighter/dist/esm/styles/prism";
import TutorialModal from "../TutorialModal/TutorialModal.jsx";

const TutorialContent = ({ content, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="tutorial-section">
      <h2>{content.title}</h2>

      <p className="content">{content.content}</p>

      <ul>
        {content.contentList.map((list) =>
          list.includes(":") ? (
            <p>
              <b>{list}</b>
            </p>
          ) : (
            <p>{list}</p>
          )
        )}
      </ul>

      <SyntaxHighlighter language="javascript" style={duotoneForest}>
        {content.codeString}
      </SyntaxHighlighter>
      <Button text={"Try it yourself"} event={toggleModel}></Button>

      {isOpen ? (
        <TutorialModal
          content={content}
          language={language}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TutorialContent;

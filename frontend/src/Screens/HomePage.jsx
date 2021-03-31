import React from "react";
import "./HomePage.styles.scss";
import homecover from "../imgs/home-header.jpg";
import "../design-tokens/_scss-varibles.scss";
import Button from "../components/Buttons/Button.component";
import TutorialContent from "../components/Tutorial-Content/Tutorial-content.component";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneForest } from "react-syntax-highlighter/dist/esm/styles/prism";
import SubNavbar from "../components/SubNavbar/SubNavbar.jsx";
import htmlContent from "../data/data.js";
let homeCoverStyle = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.555),rgba(0, 0, 0, 0.555)),url(${homecover})`,
};

const HomePage = ({ history }) => {
  return (
    <div>
      <header className="main-header" style={homeCoverStyle}>
        <div className="main-header-content">
          <div className="header-logo">
            <i className="fab fa-codepen"></i>
          </div>
          <div className="header-text">
            <h1>Jot</h1>
            <span>A fun interactive tool to teach people HTML</span>

            <Button text={"Tutorials"}></Button>
          </div>
        </div>
      </header>

      <div className="intro">
        <div>
          <h2>What is HTML</h2>
          <ul>
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>
              HTML elements label pieces of content such as "this is a heading",
              "this is a paragraph", "this is a link", etc.
            </li>
          </ul>
        </div>

        <i class="fab fa-html5"></i>
      </div>
      <SubNavbar />
      <div className="html-introduction" id="introduction">
        {htmlContent.htmlIntroContent.map((content) =>
          content.type == "code" ? <TutorialContent content={content} /> : ""
        )}
      </div>
      <div className="html-basics" id="basics">
        <h1 className="basics-title">Essential tags</h1>
        {htmlContent.htmlBasicsContent.map((content) =>
          content.type == "code" ? <TutorialContent content={content} /> : ""
        )}
      </div>
      <div className="html-advanced" id="advanced">
        <h1 className="advanced-title">Advanced html</h1>
        {htmlContent.htmlAdvancedContent.map((content) =>
          content.type == "code" ? <TutorialContent content={content} /> : ""
        )}
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import "../../design-tokens/_scss-varibles.scss";
import { Link, animateScroll } from "react-scroll";

import "./SubNavBar.scss";
const SubNavbar = () => {
  return (
    <div className="subnav">
      <Link
        activeClass="active"
        className="sub-nav-items"
        to="introduction"
        spy={true}
        smooth={true}
        offset={-170}
        duration={1000}
      >
        Intro
      </Link>
      <Link
        activeClass="active"
        className="sub-nav-items"
        to="basics"
        spy={true}
        smooth={true}
        offset={-165}
        duration={1000}
      >
        Basics
      </Link>
      <Link
        activeClass="active"
        className="sub-nav-items"
        to="advanced"
        spy={true}
        smooth={true}
        offset={-165}
        duration={1000}
      >
        Advanced
      </Link>
    </div>
  );
};

export default SubNavbar;

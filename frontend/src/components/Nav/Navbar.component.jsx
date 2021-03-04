import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction.js";
import "./Navbar.styles.scss";

function Navbar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fab fa-codepen"></i> Jot
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact={true}
                to="/"
                className="nav-links"
                activeClassName="current-link"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Tutroials"
                className="nav-links"
                activeClassName="current-link"
                onClick={closeMobileMenu}
              >
                Tutorials
              </NavLink>
            </li>

            {userInfo ? (
              <div>
                <li className="nav-item nav-links">{userInfo.name}</li>
                <button onClick={logoutHandler}>Logout</button>
              </div>
            ) : (
              <li className="nav-item">
                <NavLink
                  to="/Signin"
                  className="nav-links"
                  activeClassName="current-link"
                  onClick={closeMobileMenu}
                >
                  Sign in
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

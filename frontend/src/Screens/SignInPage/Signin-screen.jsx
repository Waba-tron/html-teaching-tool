import React, { useState, useEffect } from "react";
import "../../design-tokens/_scss-varibles.scss";
import FormInput from "../../components/Form-Inputs/Form-Input.component";
import Button from "../../components/Buttons/Button.component";
import { Link } from "react-router-dom";
import "./Signin.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";

const SigninScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  let coverImageStyle = {
    backgroundImage: `url(https://blog.udacity.com/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg) , linear-gradient(90deg, rgb(28 27 27 / 80%) 0%, rgb(26 23 23 / 70%) 100%)`,
  };

  return (
    <div className="login-container">
      <div className="login-form-img" style={coverImageStyle}>
        <div className="signin-logo-container">
          <div>
            <i class="fab fa-codepen"></i>
          </div>
        </div>
      </div>

      <div className="login-form">
        {error && <h1>{error}</h1>}
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            label="Password"
          />

          <div className="btn-container">
            <Button text={"Sign In"} />
          </div>

          <div className="btn-container"></div>

          <div className="btn-container">
            <Link to="Signup">Registar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninScreen;

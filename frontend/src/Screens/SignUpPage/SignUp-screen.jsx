import React, { useState, useEffect } from "react";
import "../../design-tokens/_scss-varibles.scss";
import FormInput from "../../components/Form-Inputs/Form-Input.component";
import Button from "../../components/Buttons/Button.component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userAction.js";
const SignUpScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  /*
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  */

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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
        <h1>Sign Up</h1>

        <form onSubmit={submitHandler}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            required
          />
          <FormInput
            type="text"
            name="name"
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
            <Button text={"Sign Up"} />
          </div>

          <div className="btn-container">
            <Link to="Signin">Existing user</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;

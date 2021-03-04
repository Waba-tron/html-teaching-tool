import React, { useState } from "react";
import "../../design-tokens/_scss-varibles.scss";
import FormInput from "../../components/Form-Inputs/Form-Input.component";
import Button from "../../components/Buttons/Button.component";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <h1>Sign Up</h1>
        <form>
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

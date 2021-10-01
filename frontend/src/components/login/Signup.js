import React from "react";
import './Login.css'

const Signup = () => {
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <a href="Sign.js" target="_blank">
            <h2 className="inactive underlineHover">Sign In </h2>
          </a>
          <h2 className="active"> Sign Up </h2>

          <form>
            <input
              type="text"
              id="username"
              className="fadeIn second"
              name="signup"
              placeholder="username"
            />
            <input
              type="email"
              id="email"
              className="fadeIn second"
              name="signup"
              placeholder="email"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="signup"
              placeholder="password"
            />
            <input
              type="password"
              id="confirm_password"
              className="fadeIn third"
              name="signup"
              placeholder="confirm password"
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

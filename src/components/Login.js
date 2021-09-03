import React, { useState } from "react";
import "../styles/Login.css";
import SignIn from "./SignIn";

const Login = () => {
  const [signin, setSignin] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="login__logo"
        />
        <button onClick={() => setSignin(true)} className="login__button">
          Sign in
        </button>

        <div className="login__gradient"></div>

        <div className="login__body">
          {signin ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV programme and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart you
                membership
              </h3>

              <div className="login__input">
                <form>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <button
                    onClick={() => setSignin(true)}
                    className="login__getstarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import "./signUp.scss";
import { icons } from "../../component/info";
import bg from "../../imgs/signin1.jpg";
import { TRUE } from "sass";

export const Sign_up = () => {
  const [sign_in, setSign_in] = useState(false);

  const activate_sign_in = () => {
    setSign_in(!sign_in);
  };

  return (
    <div className="signup_form container">
      <div className="form_container">
        <div className={sign_in ? "form_con sign_in" : "form_con sign_up"}>
          <div className="sign_up box">
            <h2>create an account </h2>
            <div className="social">
              <span>{icons.facebook}</span>
              <span>{icons.google}</span>
              <span>{icons.github}</span>
            </div>
            <p className="email_opt">Or use your email account</p>

            <form action="#">
              <input type="text " placeholder="first name" required />
              <input type="text " placeholder=" last name" required />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />

              <div className="term">
                <input
                  type="checkbox"
                  name="term & condition"
                  id="term & condition"
                />
                <p>
                  Agree to all our <a href="#">terms and conditions</a>
                </p>
              </div>

              <div className="btn">
                <button type="submit">sign up</button>
              </div>

              <p className="query">
                Already have an account?
                <a href="#" onClick={activate_sign_in}>
                  sign_in
                </a>
              </p>
            </form>
          </div>
          <div className="sign_in box">
            <h2>sign in </h2>
            <div className="social">
              <span>{icons.facebook}</span>
              <span>{icons.google}</span>
              <span>{icons.github}</span>
            </div>
            <p className="email_opt">Or use your email account</p>

            <form action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />
              <div className="term">
                <input
                  type="checkbox"
                  name="save password"
                  id="save password"
                />
                <p>Remember me </p>
              </div>

              <div className="btn">
                <button type="submit">sign in</button>
              </div>
              <p className="forgotten_pass">
                <a href="#">Forgotten Password?</a>
              </p>
              <p className="query">
                Don't have an account?
                <a href="#" onClick={activate_sign_in}>
                  sign up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="txt_con">
          <div className="img">
            <img src={bg} alt="img" />
          </div>
          <div className={sign_in ? "txt sign_in" : "txt sign_up"}>
            <div className="wrapper">
              <div className="txt_col sign_in_text">
                <h2> hello, friend!</h2>

                <p>
                  Enter your personnal details to continue your progress with us{" "}
                </p>
                <div className="btn">
                  <button onClick={activate_sign_in}>sign in</button>
                </div>
              </div>
              <div className="txt_col sign_up_text">
                <h2> welcome back!</h2>
                <p>sign up to save and keep your progress with us.</p>
                <div className="btn">
                  <button onClick={activate_sign_in}>sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

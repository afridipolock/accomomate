import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  // Username validation
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);

  const userNameValidate = (value) => {
    if (value.length === 0) {
      setUserNameError("Username cannot be empty");
      setIsUserNameValid(false);
    } else {
      setUserNameError("");
      setIsUserNameValid(true);
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    if (isUserNameTouched) {
      userNameValidate(e.target.value);
    }
  };

  const handleUserNameBlur = () => {
    setIsUserNameTouched(true);
    userNameValidate(userName);
  };

  // Password Validation
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [IsPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const passwordValidate = (value) => {
    if (value.length === 0) {
      setPasswordError("Password cannot be empty");
      setIsPasswordValid(false);
    } else {
      setPasswordError("");
      setIsPasswordValid(true);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (IsPasswordTouched) {
      passwordValidate(e.target.value);
    }
  };
  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
    passwordValidate(password);
  };

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="desktop-window">
      <div className="desktop-login">
        <div className="login-form">
          <div className="top">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <span>Please login to start your session</span>
          </div>
          <div className="bottom">
            <form className="login-form">
              <div className="form-inputs">
                <div className="inputs username">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={userName}
                    onChange={handleUserNameChange}
                    onBlur={handleUserNameBlur}
                  />
                  <label htmlFor="username">Enter your username</label>
                </div>
                <div className="error username-error">
                  <span>{userNameError}</span>
                </div>
                <div className="inputs password">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    id="password"
                    required
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                  />
                  <label htmlFor="password">Enter your password</label>
                  <i
                    onClick={toggleShowPassword}
                    class={`fa-solid ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </div>
                <div className="error password-error">
                  <span>{passwordError}</span>
                </div>
              </div>
              <div className="remember-forget">
                <div className="remember">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="forget">
                  <span onClick={() => navigate("/forget-password")}>
                    Forget Password?
                  </span>
                </div>
              </div>
              <div className="login-button">
                <button type="submit">Login</button>
              </div>
              <div className="register-redirect">
                <span onClick={() => navigate("/registration")}>
                  Don't have account? Register Here
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

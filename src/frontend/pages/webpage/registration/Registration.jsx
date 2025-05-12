import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import TermsAndCondition from "../../../components/termsCondition/terms-and-conditions.md";
import ReactMarkdown from "react-markdown";

const Registration = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");
  const [userTypeError, setUserTypeError] = useState("");
  const [isUserTypeTouched, setIsUserTypeTouched] = useState(false);
  const [isUserTypeValid, setIsUserTypeValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [isDobTouched, setIsDobTouched] = useState(false);
  const [isDobValid, setIsDobValid] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const [isTermPanelOpen, setIsTermPanelOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // User type validate
  const userTypeValidate = (value) => {
    if (!value) {
      setUserTypeError("User type cannot be empty");
      setIsUserTypeValid(false);
    } else {
      setUserTypeError("");
      setIsUserTypeValid(true);
    }
  };

  const handleUserTypeChange = (type) => {
    const newValue = userType === type ? "" : type;
    setUserType(newValue);
    if (isUserTypeTouched) {
      userTypeValidate(newValue);
    }
  };
  const handleUserTypeBlur = () => {
    setIsUserTypeTouched(true);
    userTypeValidate(userType);
  };

  // First Name Validate
  const firstNameValidate = (value) => {
    if (value.length === 0) {
      setFirstNameError("First name cannot be empty");
      setIsFirstNameValid(false);
    } else {
      setFirstNameError("");
      setIsFirstNameValid(true);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (isFirstNameTouched) {
      firstNameValidate(e.target.value);
    }
  };

  const handleFirstNameBlur = () => {
    setIsFirstNameTouched(true);
    firstNameValidate(firstName);
  };

  // Last Name Validate
  const lastNameValidate = (value) => {
    if (value.length === 0) {
      setLastNameError("Last name cannot be empty");
      setIsLastNameValid(false);
    } else {
      setLastNameError("");
      setIsLastNameValid(true);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (isLastNameTouched) {
      lastNameValidate(e.target.value);
    }
  };

  const handleLastNameBlur = () => {
    setIsLastNameTouched(true);
    lastNameValidate(lastName);
  };

  // User Name validate
  // const userNameValidate = async (value) => {
  //   if (value.length === 0) {
  //     setUserNameError("Username cannot be empty");
  //     setIsUserNameValid(false);
  //   } else if (value.length < 5) {
  //     setUserNameError("Username must be at least 5 character");
  //     setIsUserNameValid(false);
  //   } else {
  //     setUserNameError("");
  //     setIsUserNameValid(true);
  //   }
  // };
  const userNameValidate = async (value) => {
    if (!value || value.trim() === "") {
      setUserNameError("Username cannot be empty");
      setIsUserNameValid(false);
      return;
    }

    if (value.length < 5) {
      setUserNameError("Username must be at least 5 characters");
      setIsUserNameValid(false);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/check-username/${value}`
      );
      const data = await res.json();

      console.log("✔️ Fetched:", data);

      if (data && typeof data.available !== "undefined") {
        if (data.available) {
          setUserNameError("");
          setIsUserNameValid(true);
        } else {
          setUserNameError("Username is already taken ❌");
          setIsUserNameValid(false);
        }
      } else {
        setUserNameError("Unexpected response format");
        setIsUserNameValid(false);
      }
    } catch (err) {
      console.error("❌ Username check error:", err);
      setUserNameError("Error checking username");
      setIsUserNameValid(false);
    }
  };

  const handleUserNameChange = async (e) => {
    const rawValue = e.target.value;
    const cleanedValue = rawValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    setUserName(cleanedValue);

    if (isUserNameTouched) {
      userNameValidate(cleanedValue);
    }
  };

  const handleUserNameBlur = async () => {
    setIsUserNameTouched(true);
    userNameValidate(userName);
  };

  // Email validation
  const emailValidate = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      setEmailError("Email cannot be empty");
      setIsEmailValid(false);
    } else if (!emailRegex.test(value)) {
      setEmailError("Please write correct email address");
      setIsEmailValid(false);
    } else {
      setEmailError("");
      setIsEmailValid(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isEmailTouched) {
      emailValidate(e.target.value);
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    emailValidate(email);
  };

  // DOB Validation
  const today = new Date().toISOString().split("T")[0];

  const dobValidate = (value) => {
    const selectDate = new Date(value);
    const currentDate = new Date();

    if (value.length === 0) {
      setDobError("Date of birth cannot be empty");
      setIsDobValid(false);
    } else if (selectDate > currentDate) {
      setDobError("Date cannot be in the future");
      setIsDobValid(false);
    } else {
      setDobError("");
      setIsDobValid(true);
    }
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
    if (isDobTouched) {
      dobValidate(e.target.value);
    }
  };

  const handleDobBlur = () => {
    setIsDobTouched(true);
    dobValidate(dob);
  };

  // Phone Number validation
  const phoneValidate = (value) => {
    if (value.length === 0) {
      setPhoneError("Phone Number cannot be empty");
      setIsPhoneValid(false);
    } else if (value.length < 11) {
      setPhoneError("Phone number must be at least 11 digit");
      setIsPhoneValid(false);
    } else {
      setPhoneError("");
      setIsPhoneValid(true);
    }
  };

  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPhone(onlyNumbers);
    if (isPhoneTouched) {
      phoneValidate(onlyNumbers);
    }
  };

  const handlePhoneBlur = () => {
    setIsPhoneTouched(true);
    phoneValidate(phone);
  };

  // Password validation
  const passwordValidate = (password, setStrength) => {
    let strength = 0;
    let message = "";
    let color = "#696969";
    let isValid = false;

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 8) {
      message = "Password too short";
      color = "#e74c3c";
      strength = 1;
      isValid = false;
    } else {
      let criteriaMatch = 0;
      if (hasLowerCase) criteriaMatch++;
      if (hasUpperCase) criteriaMatch++;
      if (hasNumber) criteriaMatch++;
      if (hasSpecialChar) criteriaMatch++;

      switch (criteriaMatch) {
        case 1:
          message = "Password is good";
          color = "#f1c40f";
          strength = 2;
          isValid = true;
          break;
        case 2:
          message = "Password is moderate";
          color = "#e67e22";
          strength = 3;
          isValid = true;
          break;
        case 3:
          message = "Password is strong";
          color = "#2ecc71";
          strength = 4;
          isValid = true;
          break;
        case 4:
          message = "Password is strongest";
          color = "#27ae60";
          strength = 5;
          isValid = true;
          break;
        default:
          message = "Invalid Password";
          color = "#e74c3c";
          strength = ``;
          isValid = false;
          break;
      }
    }
    setStrength(strength);
    return { message, color, isValid };
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const { message, color, isValid } = passwordValidate(
      value,
      setPasswordStrength
    );
    setPasswordError({ message, color });
    setIsPasswordValid(isValid);
    if (isValid && confirmPassword.length > 0) {
      passwordMatchValidate(value, confirmPassword);
    } else {
      setIsPasswordMatched(false);
      // setPasswordMatchMessage("Password does not matched");
    }
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
    if (password.length === 0) {
      setPasswordError({
        message: "Password cannot be empty.",
        color: "#e74c3c",
      });
    } else {
      const { message, color, isValid } = passwordValidate(
        password,
        setPasswordStrength
      );
      setPasswordError({ message, color });
      setIsPasswordValid(isValid);
      if (isValid && confirmPassword.length > 0) {
        passwordMatchValidate(password, confirmPassword);
      }
    }
  };

  const passwordMatchValidate = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      // setPasswordMatchMessage("Password do not match");
      setIsPasswordMatched(false);
      setConfirmPasswordError((prev) => ({
        ...prev,
        message: "Password does not match",
        color: "#e74c3c",
      }));
    } else {
      // setPasswordMatchMessage("Passwords matched");
      setIsPasswordMatched(true);
      setConfirmPasswordError((prev) => ({
        ...prev,
        message: "Passwords matched",
        color: "#2ecc71",
      }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (isPasswordValid) {
      passwordMatchValidate(password, value);
    }
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordTouched(true);
    if (confirmPassword.length === 0) {
      setConfirmPasswordError({
        message: "Confirm Password cannot be empty.",
        color: "#e74c3c",
      });
    } else if (isPasswordValid) {
      passwordMatchValidate(password, confirmPassword);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  // Terms and conditions
  const [terms, setTerms] = useState("");

  useEffect(() => {
    fetch(TermsAndCondition)
      .then((res) => res.text())
      .then((data) => setTerms(data));
  }, []);

  return (
    <div className="desktop-window">
      <div className="desktop-registration">
        <div className="registration-form">
          <div className="top">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <span>Please register yourself to use our service</span>
          </div>
          <div className="bottom">
            <form className="registration-form">
              <div className="form-inputs">
                <div className="inputs-pair">
                  <div className="inputs">
                    <div className="landlord-type input-checkbox">
                      <input
                        type="checkbox"
                        name="landlord"
                        id="landlord"
                        checked={userType === "landlord"}
                        onChange={() => handleUserTypeChange("landlord")}
                        onBlur={handleUserTypeBlur}
                      />
                      <label htmlFor="landlord">I am a landlord</label>
                    </div>
                    <div className="error landlord-error">
                      <span>{userTypeError}</span>
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="renter-type input-checkbox">
                      <input
                        type="checkbox"
                        name="renter"
                        id="renter"
                        checked={userType === "renter"}
                        onChange={() => handleUserTypeChange("renter")}
                        onBlur={handleUserTypeBlur}
                      />
                      <label htmlFor="renter">I am a renter</label>
                    </div>
                    <div className="error renter-error">
                      <span>{userTypeError}</span>
                    </div>
                  </div>
                </div>
                <div className="inputs-pair">
                  <div className="inputs">
                    <div className="first-name input-text">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        required
                        onChange={handleFirstNameChange}
                        onBlur={handleFirstNameBlur}
                      />
                      <label htmlFor="firstName">Enter first name</label>
                    </div>
                    <div className="error first-name-error">
                      <span>{firstNameError}</span>
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="last-name input-text">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        required
                        onChange={handleLastNameChange}
                        onBlur={handleLastNameBlur}
                      />
                      <label htmlFor="lastName">Enter last name</label>
                    </div>
                    <div className="error last-name-error">
                      <span>{lastNameError}</span>
                    </div>
                  </div>
                </div>
                <div className="inputs-pair">
                  <div className="inputs">
                    <div className="username input-text">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={userName}
                        required
                        onChange={handleUserNameChange}
                        onBlur={handleUserNameBlur}
                      />
                      <label htmlFor="username">Enter user name</label>
                    </div>
                    <div className="error username-error">
                      <span
                        style={{
                          color: isUserNameValid ? "#2ecc71" : "#e74c3c",
                        }}
                      >
                        {isUserNameValid
                          ? "Username is available"
                          : userNameError}
                      </span>
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="email input-text">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        required
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                      />
                      <label htmlFor="email">Enter email</label>
                    </div>
                    <div className="error email-error">
                      <span>{emailError}</span>
                    </div>
                  </div>
                </div>
                <div className="inputs-pair">
                  <div className="inputs">
                    <div className="dob input-dob">
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={dob}
                        required
                        max={today}
                        onChange={handleDobChange}
                        onBlur={handleDobBlur}
                      />
                      <label htmlFor="dob">Date of birth</label>
                    </div>
                    <div className="error dob-error">
                      <span>{dobError}</span>
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="phone input-text">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        required
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                      />
                      <label htmlFor="phone">Enter phone number</label>
                    </div>
                    <div className="error phone-error">
                      <span>{phoneError}</span>
                    </div>
                  </div>
                </div>
                <div className="inputs-pair">
                  <div className="inputs">
                    <div className="password input-password">
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        name="password"
                        id="password"
                        value={password}
                        required
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                      />
                      <label htmlFor="password">Enter password</label>
                      <i
                        onClick={toggleShowPassword}
                        class={`fa-solid ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </div>
                    <div className="password-strength">
                      {[...Array(5)].map((_, i) => (
                        <div
                          className="password-strength-bar"
                          key={i}
                          style={{
                            backgroundColor:
                              i < passwordStrength ? passwordError.color : "",
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="error password-error">
                      <span style={{ color: passwordError.color }}>
                        {passwordError.message}
                      </span>
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="inputs">
                      <div className="re-password input-password">
                        <input
                          type={`${showConfirmPassword ? "text" : "password"}`}
                          name="re-password"
                          id="re-password"
                          value={confirmPassword}
                          required
                          onChange={handleConfirmPasswordChange}
                          onBlur={handleConfirmPasswordBlur}
                        />
                        <label htmlFor="re-password">Confirm password</label>
                        <i
                          onClick={toggleShowConfirmPassword}
                          class={`fa-solid ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></i>
                      </div>
                      <div className="error re-password-error">
                        <span style={{ color: confirmPasswordError.color }}>
                          {passwordMatchMessage || confirmPasswordError.message}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="terms-section">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  checked={isTermsAccepted}
                  onChange={() => setIsTermsAccepted(true)}
                  required
                />
                <span
                  className="terms-label"
                  onClick={() => setIsTermPanelOpen(true)}
                >
                  I agree to the Terms & Conditions
                </span>
              </div>

              {isTermPanelOpen && (
                <div className="terms-panel-overlay">
                  <div className="terms-panel">
                    <h2>Terms & Conditions</h2>
                    <div className="terms-scroll">
                      <ReactMarkdown>{terms}</ReactMarkdown>
                    </div>
                    <button
                      onClick={() => {
                        setIsTermsAccepted(true);
                        setIsTermPanelOpen(false);
                      }}
                    >
                      I Understand & Accept
                    </button>
                  </div>
                </div>
              )}

              <div className="register-button">
                <button type="submit">Registration</button>
              </div>
              <div className="login-redirect">
                <span onClick={() => navigate("/")}>
                  Already have account? Login Here
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

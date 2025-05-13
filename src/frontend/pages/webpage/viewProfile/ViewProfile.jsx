import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const ViewProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [oldPassword, setOldPassword] = useState("");

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get(
          "http://localhost:5000/api/auth/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Profile response:", res.data);
        setProfile(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProfile();
  }, []);
  const statusLabels = {
    active: "Active",
    inactive: "Inactive",
    hold: "On Hold",
    disable: "Disabled",
  };

  // Handle password change
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

  // const handlePasswordChange = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);

  //   // First check: is it same as old password?
  //   if (value === oldPassword) {
  //     setPasswordError({
  //       message: "New password cannot be the same as old password.",
  //       color: "#e74c3c",
  //     });
  //     setIsPasswordValid(false);
  //     return;
  //   }

  //   // Then run the usual validation
  //   const { message, color, isValid } = passwordValidate(
  //     value,
  //     setPasswordStrength
  //   );
  //   setPasswordError({ message, color });
  //   setIsPasswordValid(isValid);
  // };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);

    if (password.length === 0) {
      setPasswordError({
        message: "Password cannot be empty.",
        color: "#e74c3c",
      });
      return;
    }

    if (password === oldPassword) {
      setPasswordError({
        message: "New password cannot be the same as old password.",
        color: "#e74c3c",
      });
      setIsPasswordValid(false);
      return;
    }

    const { message, color, isValid } = passwordValidate(
      password,
      setPasswordStrength
    );
    setPasswordError({ message, color });
    setIsPasswordValid(isValid);
  };

  const toggleShowOldPassword = () => {
    setShowOldPassword((prev) => !prev);
  };
  const toggleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.put(
        "http://localhost:5000/api/auth/change-password",
        {
          oldPassword,
          newPassword: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message); // Show success
      setOldPassword("");
      setPassword("");
      setPasswordStrength(0);
      setIsPasswordValid(false);
      setPasswordError("");
    } catch (err) {
      alert(err.response?.data?.message || "Password change failed");
    }
  };

  const handlePasswordChange = async (e) => {
    const value = e.target.value;
    setPassword(value);

    const token = localStorage.getItem("authToken");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/validate-password",
        { newPassword: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.isSame) {
        setPasswordError({
          message: "New password cannot be the same as old password.",
          color: "#e74c3c",
        });
        setIsPasswordValid(false);
        return;
      }
    } catch (err) {
      console.error("Real-time password check failed", err);
    }

    const { message, color, isValid } = passwordValidate(
      value,
      setPasswordStrength
    );
    setPasswordError({ message, color });
    setIsPasswordValid(isValid);
  };

  return (
    <div className="desktop-window">
      <div className="desktop-profile">
        <div className="left">
          <div className="top">
            <div className="profile-pic">
              <img src="" alt="img" />
            </div>
            {profile ? (
              <div className="about">
                <div className="about-title">
                  <span>About</span>
                </div>
                <div className="about-info">
                  <i class="fa-regular fa-user"></i>
                  <span className="user-info">{profile.firstname}</span>
                  <span className="user-info">{profile.lastname}</span>
                </div>
                <div className="about-info">
                  <i class="fa-regular fa-id-badge"></i>
                  <span className="user-info">{profile.username}</span>
                </div>
                <div className="about-info">
                  <i class="fa-regular fa-envelope"></i>
                  <span className="user-info">{profile.email}</span>
                </div>
                <div className="about-info">
                  <i class="fa-solid fa-phone"></i>
                  <span className="user-info">{profile.phone}</span>
                </div>
                <div className="about-info">
                  <i class="fa-regular fa-circle-check"></i>
                  <span className="user-info">
                    {statusLabels[profile.status] || profile.status}
                  </span>
                </div>
              </div>
            ) : (
              <p>Profile Loading . . . . . </p>
            )}
          </div>
          <div className="bottom">
            <div className="title">
              <span>Change Password</span>
            </div>
            <form
              className="password-change-form"
              onSubmit={handleChangePassword}
            >
              <div className="input-pair">
                <div className="inputs old-password-input">
                  <input
                    type={`${showOldPassword ? "text" : "password"}`}
                    name="oldPassword"
                    value={oldPassword}
                    id="oldPassword"
                    required
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <label htmlFor="oldPassword">Enter old password</label>
                  <i
                    onClick={toggleShowOldPassword}
                    class={`fa-solid ${
                      showOldPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </div>
              </div>
              <div className="input-pair">
                <div className="inputs new-password-input">
                  <input
                    type={`${showNewPassword ? "text" : "password"}`}
                    name="password"
                    value={password}
                    id="password"
                    required
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                  />
                  <label htmlFor="oldPassword">Enter new password</label>
                  <i
                    onClick={toggleShowNewPassword}
                    class={`fa-solid ${
                      showNewPassword ? "fa-eye-slash" : "fa-eye"
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
              <div className="button">
                <button
                  type="submit"
                  disabled={!isPasswordValid || !oldPassword}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default ViewProfile;

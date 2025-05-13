import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const ViewProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completion, setCompletion] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [oldPassword, setOldPassword] = useState("");

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);

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

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [isGenderTouched, setIsGenderTouched] = useState(false);
  const [isGenderValid, setIsGenderValid] = useState(false);

  const [nid, setNid] = useState("");
  const [nidError, setNidError] = useState("");
  const [isNidTouched, setIsNidTouched] = useState(false);
  const [isNidValid, setIsNidValid] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [isAddressTouched, setIsAddressTouched] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);

  // Input Validation
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
  const nidValidate = (value) => {
    if (value.length === 0) {
      setNidError("NID cannot be empty");
      setIsNidValid(false);
    } else {
      setNidError("");
      setIsNidValid(true);
    }
  };

  const handleNidChange = (e) => {
    setNid(e.target.value);
    if (isNidTouched) {
      nidValidate(e.target.value);
    }
  };

  const handleNidBlur = () => {
    setIsNidTouched(true);
    nidValidate(nid);
  };
  const addressValidate = (value) => {
    if (value.length === 0) {
      setAddressError("Address cannot be empty");
      setIsAddressValid(false);
    } else {
      setAddressError("");
      setIsAddressValid(true);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (isAddressTouched) {
      addressValidate(e.target.value);
    }
  };

  const handleAddressBlur = () => {
    setIsAddressTouched(true);
    addressValidate(address);
  };

  const genderValidate = (value) => {
    if (!value) {
      setGenderError("Gender cannot be empty");
      setIsGenderValid(false);
    } else {
      setGenderError("");
      setIsGenderValid(true);
    }
  };

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstname || "");
      setLastName(profile.lastname || "");
      setEmail(profile.email || "");
      setPhone(profile.phone || "");
      setDob(profile.dob || "");
      setGender(profile.gender || "");
      setNid(profile.nid || "");
      setAddress(profile.address || "");
    }
  }, [profile]);

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.put(
        "http://localhost:5000/api/auth/update-profile",
        {
          firstname: firstName,
          lastname: lastName,
          email,
          dob,
          phone,
          gender,
          nid,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
      setIsEditing(false);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update profile");
    }
  };

  // API work
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
    verified: "Verified",
    hold: "Waiting for verification",
    disable: "Disabled",
  };
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "verified":
        return "#00FA9A";
      case "hold":
        return "#f1c40f";
      case "disabled":
        return "#FA8072";
      default:
        return "#e74c3c";
    }
  };
  const getStatusUpdate = (status) => {
    switch (status.toLowerCase()) {
      case "verified":
        return "Thank you for update your profile information.";
      case "hold":
        return "Please update your profile information to get verified.";
      case "disabled":
        return "Your profile has been disabled, to active it talk with any admin.";
      default:
        return "Something went wrong";
    }
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

  // handle profile picture change
  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;

      setProfile((prev) => ({
        ...prev,
        profilepic: base64String,
      }));

      try {
        const token = localStorage.getItem("authToken");

        await axios.put(
          "http://localhost:5000/api/auth/upload-profile-pic",
          { image: base64String },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        alert("Profile picture updated!");
      } catch (err) {
        console.error("Upload failed:", err);
        alert("Failed to upload image.");
      }
    };

    reader.readAsDataURL(file);
  };
  // Profile completion
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(
        "http://localhost:5000/api/auth/get-profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProfile(res.data);

      const statusCheck = await axios.get(
        "http://localhost:5000/api/auth/check-profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCompletion(statusCheck.data.completion);
    };

    fetchProfile();
  }, []);

  return (
    <div className="desktop-window">
      <div className="desktop-profile">
        <div className="left">
          <div className="top">
            <div className="profile-pic">
              <img src={profile?.profilepic || ""} alt="profile" />
              <button
                onClick={() => document.getElementById("profileUpload").click()}
              >
                Update Profile Picture
              </button>
              <input
                type="file"
                id="profileUpload"
                style={{ display: "none" }}
                onChange={handleProfilePicChange}
                accept="image/*"
              />
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
        <div className="right">
          <div
            className="profile-confirmation"
            style={{
              backgroundColor: profile
                ? getStatusColor(profile.status)
                : "#bdc3c7",
            }}
          >
            <span>
              {profile ? getStatusUpdate(profile.status) : "Loading status..."}
            </span>
            {completion}% complete {completion === 100 && "(Verified)"}
          </div>
          <div className="title">
            <span>Profile Information</span>
            <button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Stop Editing" : "Edit Profile"}
            </button>
          </div>
          <div className="user-information">
            <div className="information-pair">
              <div className="input-info">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  disabled={!isEditing}
                  onChange={handleFirstNameChange}
                  onBlur={handleFirstNameBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{firstNameError}</span>
              </div>
              <div className="input-info">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  disabled={!isEditing}
                  onChange={handleLastNameChange}
                  onBlur={handleLastNameBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{lastNameError}</span>
              </div>
            </div>
            <div className="information-pair">
              <div className="input-info">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={dob}
                  disabled={!isEditing}
                  onChange={handleDobChange}
                  onBlur={handleDobBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{dobError}</span>
              </div>
              <div className="input-info">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  disabled={!isEditing}
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    if (isGenderTouched) {
                      genderValidate(e.target.value);
                    }
                  }}
                  onBlur={() => {
                    setIsGenderTouched(true);
                    genderValidate(gender);
                  }}
                >
                  <option value="">-- Select Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span className="error">{genderError}</span>
              </div>
            </div>
            <div className="information-pair">
              <div className="input-info">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={phone}
                  disabled={!isEditing}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{phoneError}</span>
              </div>
              <div className="input-info">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  disabled={!isEditing}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{emailError}</span>
              </div>
            </div>
            <div className="information-pair">
              <div className="input-info">
                <label htmlFor="nid">Nid Number</label>
                <input
                  type="nid"
                  name="nid"
                  id="nid"
                  value={nid}
                  disabled={!isEditing}
                  onChange={handleNidChange}
                  onBlur={handleNidBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{nidError}</span>
              </div>
              <div className="input-info">
                <label htmlFor="address">Full Address</label>
                <input
                  type="address"
                  name="address"
                  id="address"
                  value={address}
                  disabled={!isEditing}
                  onChange={handleAddressChange}
                  onBlur={handleAddressBlur}
                  placeholder="Need to fill this information"
                />
                <span className="error">{addressError}</span>
              </div>
            </div>
            {isEditing && (
              <div className="button">
                <button onClick={handleSaveProfile}>Save Changes</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

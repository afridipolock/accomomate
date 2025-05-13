import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const ViewProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err.response?.data || err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="desktop-window">
      <div className="desktop-profile">
        <div className="left">
          <div className="top">
            <div className="profilepic">
              <img src="" alt="img" />
            </div>
            <div className="about">
              <h1>About</h1>
              <div className="phone">
                <i class="fa-solid fa-phone"></i>
                <span className="phone">Phone</span>
                <span className="number">{profile.phone}</span>
              </div>
              <div className="email">
                <i class="fa-solid fa-phone"></i>
                <span className="email">Email</span>
                <span className="email-address">{profile.email}</span>
              </div>
            </div>
          </div>
          <div className="bottom">bottom</div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default ViewProfile;

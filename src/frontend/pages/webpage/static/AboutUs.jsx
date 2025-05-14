// src/frontend/pages/webpage/static/AboutUs.jsx
import React from "react";
import "./static.css"; // optional external CSS if needed

const AboutUs = () => (
  <div className="static-page">
    <h1>About Us</h1>
    <p>
      Welcome to <span className="highlight">AccomoMate</span> – your trusted
      partner...
    </p>
    <h2>What We Offer</h2>
    <ul>
      <li>
        <span className="highlight">For Renters:</span> Browse listings...
      </li>
      <li>
        <span className="highlight">For Landlords:</span> List, manage...
      </li>
    </ul>
    <h2>Why AccomoMate?</h2>
    <ul>
      <li>
        <strong>Secure & Transparent:</strong> ...
      </li>
    </ul>
    <h2>Our Mission</h2>
    <p>To simplify the rental process...</p>
  </div>
);

export default AboutUs;

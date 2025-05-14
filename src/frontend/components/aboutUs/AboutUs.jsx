import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        
        <section className="welcome-section">
          <p>
            Welcome to <strong>AccomoMate</strong> – your trusted partner in finding safe, flexible, 
            and affordable living spaces. Whether you're seeking a private room, a shared flat, 
            or a full home, we make your search simple and stress-free.
          </p>
        </section>
        
        <section>
          <h2>What We Offer</h2>
          <p>
            We connect renters and landlords on a modern, secure platform that focuses on 
            trust, communication, and convenience.
          </p>
          <ul>
            <li>
              <strong>For Renters:</strong> Browse listings, use smart filters, save favorites, 
              and reach out to landlords easily.
            </li>
            <li>
              <strong>For Landlords:</strong> List, manage, and promote your properties with just a few clicks.
            </li>
          </ul>
        </section>
        
        <section>
          <h2>Why AccomoMate?</h2>
          <ul>
            <li>
              <strong>Secure & Transparent:</strong> Verified users and protected listings build trust.
            </li>
            <li>
              <strong>User-Friendly:</strong> Clean design, mobile-ready, and easy to navigate.
            </li>
            <li>
              <strong>Community-Driven:</strong> Ratings and reviews to support honest renting.
            </li>
          </ul>
        </section>
        
        <section>
          <h2>Our Mission</h2>
          <p>
            To simplify the rental process with a reliable, easy-to-use platform that supports both 
            tenants and property owners — all in one place.
          </p>
        </section>
        
        <section className="join-section">
          <p>
            Join <strong>AccomoMate</strong> today and discover a smarter way to rent and live.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
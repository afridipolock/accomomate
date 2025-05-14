// ContactUs.jsx
import React from "react";
import "./static.css";

const ContactUs = () => (
  <div className="static-page">
    <h1>Contact Us</h1>
    <p>
      Have questions or feedback? We'd love to hear from you! Reach out to our
      team below:
    </p>

    <div className="team">
      <div className="member">
        <h3>Seaumul Islam</h3>
        <p>
          <strong>Role:</strong> Team Member
        </p>
        <p>
          <strong>Email:</strong> seaumu123l@gmail.com
        </p>
      </div>

      <div className="member">
        <h3>Afridi Alam Polock</h3>
        <p>
          <strong>Role:</strong> Team Member
        </p>
        <p>
          <strong>Email:</strong> afridipolock82@example.com
        </p>
      </div>

      <div className="member">
        <h3>Nuhash Kabir Neeha</h3>
        <p>
          <strong>Role:</strong> Team Member
        </p>
        <p>
          <strong>Email:</strong> nuhashneeha24@example.com
        </p>
      </div>
    </div>
  </div>
);

export default ContactUs;

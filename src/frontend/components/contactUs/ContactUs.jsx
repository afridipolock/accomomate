import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        
        <section className="intro-section">
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to our team below:
          </p>
        </section>
        
        <section className="team-members">
          <div className="team-member">
            <h3>Seaumul Islam</h3>
            <p><strong>Role:</strong> Team Member</p>
            <p><strong>Email:</strong> <a href="mailto:seaumu123l@gmail.com">seaumu123l@gmail.com</a></p>
          </div>
          
          <div className="team-member">
            <h3>Afridi Alam Polock</h3>
            <p><strong>Role:</strong> Team Member</p>
            <p><strong>Email:</strong> <a href="mailto:afridipolock82@example.com">afridipolock82@example.com</a></p>
          </div>
          
          <div className="team-member">
            <h3>Nuhash Kabir Neeha</h3>
            <p><strong>Role:</strong> Team Member</p>
            <p><strong>Email:</strong> <a href="mailto:nuhashneeha24@example.com">nuhashneeha24@example.com</a></p>
          </div>
        </section>
        
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message"></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
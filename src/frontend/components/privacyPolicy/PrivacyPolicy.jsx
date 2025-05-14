import React from "react";
import "./style.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        
        <section className="intro-section">
          <p>
            At <strong>AccomoMate</strong>, we care about your privacy. This Privacy Policy explains 
            how we collect, use, and protect your personal information when you use our platform. 
            By using AccomoMate, you agree to the terms of this policy.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> Name, email address, phone number, and password when you register.
            </li>
            <li>
              <strong>Property Details:</strong> If you are a landlord, we collect information about your listings, 
              including address, pricing, amenities, and images.
            </li>
            <li>
              <strong>Booking & Payment:</strong> Data related to bookings, transactions, and payment method 
              (we do not store card numbers).
            </li>
            <li>
              <strong>Usage Data:</strong> Interactions with the website, search filters used, and communication 
              within the platform.
            </li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Verify identities and prevent fraud</li>
            <li>Match renters with suitable properties</li>
            <li>Enable messaging and notifications</li>
            <li>Maintain security and monitor user activity</li>
            <li>Send platform-related updates and communication</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal data. We may share information only with:
          </p>
          <ul>
            <li>Service providers (e.g., hosting, analytics) under confidentiality agreements</li>
            <li>Landlords and renters when necessary to facilitate a booking</li>
            <li>Legal authorities when required by law or for platform protection</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>4. Security</h2>
          <p>
            We take appropriate measures to protect your data. This includes password encryption, 
            secure authentication (JWT), and backend protections using tools like Helmet and Bcrypt. 
            However, no online system is 100% secure, so we urge users to keep credentials private and secure.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>5. Your Choices</h2>
          <ul>
            <li>You can access and update your profile at any time.</li>
            <li>You may request account deletion by contacting our support.</li>
            <li>You can control communication preferences in your settings.</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>6. Cookies</h2>
          <p>
            We may use cookies and similar technologies to enhance your experience and collect 
            usage data. You can adjust your browser settings to manage cookies.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>7. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites. We are not responsible for 
            their content or privacy practices. Please review their policies separately.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted here, 
            and we will notify users of major updates where required.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions or concerns about this policy, please contact our team at:
          </p>
          <ul className="contact-list">
            <li><strong>Seaumul Islam</strong> – <a href="mailto:seaumu123l@gmail.com">seaumu123l@gmail.com</a></li>
            <li><strong>Afridi Alam Polock</strong> – <a href="mailto:afridipolock@example.com">afridipolock@example.com</a></li>
            <li><strong>Nuhash Kabir Neeha</strong> – <a href="mailto:nuhashneeha@example.com">nuhashneeha@example.com</a></li>
          </ul>
        </section>
        
        <div className="effective-date">
          <p>Effective Date: May 13, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
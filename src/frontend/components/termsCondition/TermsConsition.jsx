import React, { useEffect, useState } from "react";
import "./style.css";

const TermsCondition = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to AccomoMate. By accessing or using our website and services, 
            you agree to be bound by these Terms and Conditions. If you do not agree 
            to all the terms and conditions, you may not access or use our services.
          </p>
        </section>
        
        <section>
          <h2>2. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is 
            accurate, complete, and current at all times. Failure to do so constitutes 
            a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access our 
            service and for any activities or actions under your password.
          </p>
        </section>
        
        <section>
          <h2>3. Property Listings</h2>
          <p>
            Landlords agree to provide accurate and complete information about their properties. 
            AccomoMate reserves the right to remove any listing that contains false or misleading information.
          </p>
          <p>
            AccomoMate does not guarantee the quality, safety, legality or availability of any 
            property listed on our platform. Users are encouraged to verify all information independently.
          </p>
        </section>
        
        <section>
          <h2>4. User Conduct</h2>
          <p>
            Users agree not to use AccomoMate for any purpose that is unlawful or prohibited by these Terms.
          </p>
          <p>
            Users shall not transmit any content that is unlawful, offensive, threatening, 
            libelous, defamatory, obscene or otherwise objectionable.
          </p>
        </section>
        
        <section>
          <h2>5. Privacy Policy</h2>
          <p>
            Your use of AccomoMate is also governed by our Privacy Policy, which is incorporated 
            into these Terms by reference.
          </p>
        </section>
        
        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall AccomoMate be liable for any indirect, incidental, special, 
            consequential or punitive damages resulting from your use or inability to use the service.
          </p>
        </section>
        
        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            AccomoMate reserves the right to modify or replace these Terms at any time. 
            It is your responsibility to review these Terms periodically for changes.
          </p>
        </section>
        
        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@accomomate.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
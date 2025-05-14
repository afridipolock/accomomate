import React from "react";
import "./style.css";

const MovingStories = () => {
  return (
    <div className="stories-container">
      <div className="stories-header">
        <h1>Moving Stories</h1>
        <p className="stories-intro">
          Real experiences from real people who found their perfect home with AccomoMate.
          These testimonials showcase how our platform has helped students and young professionals
          navigate their accommodation journey.
        </p>
      </div>
      
      <div className="stories-grid">
        <div className="story-card">
          <div className="story-image" style={{backgroundImage: "url('/images/testimonial1.jpg')"}}></div>
          <div className="story-content">
            <h3>From Dorm Disaster to Dream Apartment</h3>
            <div className="story-author">
              <strong>Sarah Chen</strong> | Graduate Student at University of Toronto
            </div>
            <p>
              After a terrible experience in university housing, I was desperate to find somewhere 
              I could actually call home. AccomoMate matched me with the perfect apartment near 
              campus that fit my budget. The verification system gave me confidence that everything 
              was legitimate, and the landlord ratings helped me choose someone reliable.
            </p>
            <p>
              "I went from dreading going home to loving my space. My landlord is responsive and 
              the roommate matching feature connected me with someone who has become a close friend. 
              I couldn't be happier with my accommodation!"
            </p>
          </div>
        </div>

        <div className="story-card">
          <div className="story-image" style={{backgroundImage: "url('/images/testimonial2.jpg')"}}></div>
          <div className="story-content">
            <h3>International Student Success Story</h3>
            <div className="story-author">
              <strong>Miguel Fernandez</strong> | Exchange Student from Spain
            </div>
            <p>
              Moving to a new country for studies was intimidating enough without the stress of 
              finding trustworthy accommodation. I was worried about scams targeting international 
              students like me.
            </p>
            <p>
              "AccomoMate's virtual tours saved me from having to make trips to see properties. 
              I secured my apartment before even arriving in the country, and everything was 
              exactly as described. The transparent fee structure meant no surprises, and the 
              neighborhood guides helped me choose a location that felt like home from day one."
            </p>
          </div>
        </div>

        <div className="story-card">
          <div className="story-image" style={{backgroundImage: "url('/images/testimonial3.jpg')"}}></div>
          <div className="story-content">
            <h3>From Shared House to First Solo Apartment</h3>
            <div className="story-author">
              <strong>James Wilson</strong> | Young Professional
            </div>
            <p>
              After three years of house-sharing during university, I was ready for my own space 
              as I started my first job. But with the competitive rental market, I kept missing out 
              on properties.
            </p>
            <p>
              "AccomoMate's instant notifications alerted me to a perfect studio apartment that had 
              just been listed. I was able to schedule a viewing through the app immediately and 
              submit my application right after the viewing. The landlord commented that my verified 
              profile and good reviews from previous landlords made me stand out from other applicants. 
              Two years later, I'm still happily living in my apartment!"
            </p>
          </div>
        </div>

        <div className="story-card">
          <div className="story-image" style={{backgroundImage: "url('/images/testimonial4.jpg')"}}></div>
          <div className="story-content">
            <h3>Finding Community in a New City</h3>
            <div className="story-author">
              <strong>Priya Sharma</strong> | PhD Student
            </div>
            <p>
              Relocating for my doctoral program meant leaving behind my support network. I was 
              looking for more than just a place to sleep—I wanted to feel connected to my new city.
            </p>
            <p>
              "AccomoMate's detailed neighborhood profiles helped me choose an area with the community 
              feel I was looking for. The 'local amenities' filter meant I found a house within walking 
              distance of parks, cafes, and a library. The housemate matching algorithm connected me with 
              three other students who shared my interests. We've created a home that supports our 
              academic pursuits while providing the social connection I was missing. The built-in 
              maintenance request system has also made dealing with household issues stress-free."
            </p>
          </div>
        </div>

        <div className="story-card wide-card">
          <div className="story-image" style={{backgroundImage: "url('/images/testimonial5.jpg')"}}></div>
          <div className="story-content">
            <h3>Couple's First Home Together</h3>
            <div className="story-author">
              <strong>Alex & Jordan Taylor</strong> | Newlyweds and Graduate Students
            </div>
            <p>
              As newlyweds both pursuing graduate degrees, we needed an affordable place that would 
              accommodate both our study needs while being close to our respective universities.
            </p>
            <p>
              "AccomoMate's dual proximity search allowed us to find apartments within a reasonable 
              commute to both our campuses. The budget calculator helped us understand what we could 
              realistically afford while juggling tuition and living expenses. We ended up finding a 
              cozy one-bedroom with a study nook that's perfect for our situation. The lease management 
              feature made the paperwork simple, and we even received a welcome package from our landlord 
              through AccomoMate's connection system. We're proof that student accommodation can be 
              stress-free even with complex requirements!"
            </p>
          </div>
        </div>
      </div>

      <div className="share-story">
        <h2>Share Your AccomoMate Story</h2>
        <p>
          Have you found your perfect accommodation through AccomoMate? We'd love to hear about your 
          experience and potentially feature your story here.
        </p>
        <button className="share-button">Share Your Story</button>
      </div>
    </div>
  );
};

export default MovingStories;
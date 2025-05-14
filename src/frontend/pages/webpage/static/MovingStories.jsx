import React from "react";
import "./static.css";

const MovingStories = () => (
  <div className="static-page">
    <h1>Moving Stories</h1>
    <p>
      Every room tells a story. At <strong>AccomoMate</strong>, we're proud to
      be a part of journeys that transform lives. Here's how students from
      across the country found their footing, their freedom, and their future
      with us.
    </p>

    <div className="member">
      <h2>🎓 Rafiq Hasan</h2>
      <p>
        Rafiq, a first-year Computer Science student from Barisal, struggled to
        find a clean and safe place near his university in Dhaka. Within 48
        hours of joining AccomoMate, he booked a verified flat with three other
        students. "I was scared at first, but AccomoMate made it easy. I feel at
        home now."
      </p>
    </div>

    <div className="member">
      <h2>🎓 Anika Sultana</h2>
      <p>
        Anika moved from Rajshahi to Chattogram for her architecture studies.
        With a tight budget and no family nearby, she was anxious. Through
        AccomoMate, she found a shared female-friendly hostel with free Wi-Fi
        and security. "I focus on my studies now — no more worries about where
        I’ll sleep."
      </p>
    </div>

    <div className="member">
      <h2>🎓 Tanim Rahman</h2>
      <p>
        Tanim’s parents were skeptical about online house-hunting. But when they
        saw the verified listing photos, reviews, and messaging feature, they
        gave him full support. "My parents even contacted the landlord directly
        through the platform. Now they tell others about it!"
      </p>
    </div>

    <div className="member">
      <h2>🎓 Nusrat Jahan</h2>
      <p>
        Nusrat, an introverted medical student, used to avoid asking people for
        room leads. AccomoMate gave her confidence and privacy. "For the first
        time, I felt like I was in control of my own journey. I found a room,
        flatmates, and even a study group."
      </p>
    </div>

    <p style={{ marginTop: "30px" }}>
      💬 Do you have your own story? Email us at{" "}
      <strong>stories@accomomate.com</strong> and get featured!
    </p>
  </div>
);

export default MovingStories;

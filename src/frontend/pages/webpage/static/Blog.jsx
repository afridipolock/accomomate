// Blog.jsx

import React from "react";
import "./static.css";

const Blog = () => (
  <div className="static-page">
    <h1>AccomoMate Blog</h1>
    <p>
      Stay updated with helpful tips, insights, and guides on student living,
      smart renting, and life away from home. Here are some highlights from our
      latest posts:
    </p>

    <div className="member">
      <h2>🛏️ How to Pick the Right Roommate</h2>
      <p>
        Choosing a roommate is like choosing a teammate. We share the top red
        flags and green signals based on hundreds of success stories on
        AccomoMate.
      </p>
    </div>

    <div className="member">
      <h2>📦 10 Must-Have Items for Your First Move</h2>
      <p>
        From power strips to shower slippers — this checklist is a lifesaver for
        any student moving out for the first time.
      </p>
    </div>

    <div className="member">
      <h2>🛡️ Staying Safe in Shared Spaces</h2>
      <p>
        Learn about personal safety tips, digital boundaries, and how to spot
        potential scams before they happen.
      </p>
    </div>

    <div className="member">
      <h2>🏠 The Psychology of Feeling 'At Home'</h2>
      <p>
        What makes a space feel like yours? We dive into color, lighting, and
        community — all backed by psychology.
      </p>
    </div>

    <p style={{ marginTop: "30px" }}>
      ✍️ Want to write for us? Pitch your student experience or housing advice
      at <strong>blog@accomomate.com</strong>.
    </p>
  </div>
);

export default Blog;

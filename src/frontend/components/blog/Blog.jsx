import React from "react";
import "./style.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>AccomoMate Blog</h1>
        <p className="blog-intro">
          Insights, tips, and success stories from property owners and managers.
          Learn how to maximize your rental success and provide better experiences for your tenants.
        </p>
      </div>
      
      <div className="blog-categories">
        <button className="category-btn active">All Posts</button>
        <button className="category-btn">Property Management</button>
        <button className="category-btn">Tenant Relations</button>
        <button className="category-btn">Legal Updates</button>
        <button className="category-btn">Market Insights</button>
      </div>
      
      <div className="blog-grid">
        <div className="blog-post featured-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog-featured.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Property Management</span>
              <span className="post-date">May 10, 2025</span>
            </div>
            <h2>How I Increased My Rental Income by 30% Using AccomoMate's Premium Features</h2>
            <p className="post-author">By Maria Gonzalez | 5-Property Owner</p>
            <p className="post-excerpt">
              After years of struggles with vacancies and inconsistent income, I discovered how AccomoMate's 
              data-driven pricing tools and premium listing features completely transformed my rental business. 
              Here's my step-by-step journey and the specific strategies that made the difference...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
        
        <div className="blog-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog1.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Tenant Relations</span>
              <span className="post-date">May 8, 2025</span>
            </div>
            <h2>Building Trust with Student Tenants: 5 Proven Approaches</h2>
            <p className="post-author">By James Wilson | University District Landlord</p>
            <p className="post-excerpt">
              Managing properties for students comes with unique challenges and opportunities. After a decade 
              of renting exclusively to university students, I've developed strategies that create win-win 
              relationships and nearly eliminated tenant turnover...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
        
        <div className="blog-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog2.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Legal Updates</span>
              <span className="post-date">May 5, 2025</span>
            </div>
            <h2>New Rental Regulations for 2025: What Landlords Need to Know</h2>
            <p className="post-author">By Sarah Johnson | Property Law Specialist</p>
            <p className="post-excerpt">
              Several important regulatory changes are taking effect this year that will impact how you 
              manage your rental properties. From security deposit limits to new maintenance requirements, 
              stay compliant with this comprehensive overview...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
        
        <div className="blog-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog3.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Property Management</span>
              <span className="post-date">May 1, 2025</span>
            </div>
            <h2>Smart Home Upgrades That Attract Premium Tenants</h2>
            <p className="post-author">By Robert Chen | Tech-Forward Property Manager</p>
            <p className="post-excerpt">
              The modern renter increasingly expects smart home features. I've tested dozens of options 
              across my properties and found these five upgrades deliver the best ROI while significantly 
              reducing maintenance calls and increasing tenant satisfaction...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
        
        <div className="blog-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog4.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Market Insights</span>
              <span className="post-date">April 28, 2025</span>
            </div>
            <h2>Emerging Student Housing Trends: Data from 1,000+ AccomoMate Listings</h2>
            <p className="post-author">By Analytics Team | AccomoMate Research</p>
            <p className="post-excerpt">
              Our analysis of search patterns and booking data reveals fascinating shifts in what today's 
              students prioritize when selecting accommodation. The findings suggest several opportunities 
              for forward-thinking property owners...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
        
        <div className="blog-post">
          <div className="post-image" style={{backgroundImage: "url('/images/blog5.jpg')"}}></div>
          <div className="post-content">
            <div className="post-meta">
              <span className="post-category">Tenant Relations</span>
              <span className="post-date">April 25, 2025</span>
            </div>
            <h2>From Problem Tenant to Perfect Reference: A Landlord's Communication Journey</h2>
            <p className="post-author">By David Okafor | 15-Year Landlord Experience</p>
            <p className="post-excerpt">
              When Apartment 3B became my biggest headache, I nearly gave up on being a landlord altogether. 
              Instead, I completely transformed my approach to tenant communication, turning my most challenging 
              relationship into my greatest success story...
            </p>
            <a href="#" className="read-more">Continue Reading</a>
          </div>
        </div>
      </div>
      
      <div className="blog-pagination">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">Next ›</button>
      </div>
      
      <div className="blog-contribute">
        <h2>Share Your Landlord Experience</h2>
        <p>
          Are you a property owner or manager with valuable insights to share? Become a guest contributor 
          to our blog and help fellow landlords succeed while showcasing your expertise.
        </p>
        <button className="contribute-button">Submit Your Article</button>
      </div>
    </div>
  );
};

export default Blog;
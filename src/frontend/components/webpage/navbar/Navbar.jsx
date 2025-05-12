import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  //   User Navbar control
  const [user, setUser] = useState(null);
  const [usertype, setUserType] = useState(null);

  useEffect(() => {
    // fake login after 1s
    setTimeout(() => {
      setUser({ name: "John Doe" });
      setUserType("landlord");
    }, 1000);
  }, []);

  // Logged in with api

  //   useEffect(() => {
  //     const token = localStorage.getItem("authToken");
  //     const userData = localStorage.getItem("user");

  //     if (token && userData) {
  //       setUser(JSON.parse(userData));
  //     }
  //   }, []);

  return (
    <div className={`desktop-navbar ${showNavbar ? "show" : "hide"}`}>
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-item">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-dropdown">
              <span>
                Properties
                <i class="fa-solid fa-caret-down dropdown-icon"></i>
              </span>
              <div className="nav-link-drop-panel">
                <NavLink to="/all-properties" className="nav-link-drop">
                  All Properties
                </NavLink>
                <NavLink to="/available-properties" className="nav-link-drop">
                  Available Properties
                </NavLink>
                <NavLink to="/find-landlord" className="nav-link-drop">
                  Find Landlord
                </NavLink>
              </div>
            </li>
            <li className="nav-dropdown">
              <span>
                Explore
                <i class="fa-solid fa-caret-down dropdown-icon"></i>
              </span>
              <div className="nav-link-drop-panel">
                <NavLink to="/about-us" className="nav-link-drop">
                  About us
                </NavLink>
                <NavLink to="/moving-stories" className="nav-link-drop">
                  Moving stories
                </NavLink>
                <NavLink to="/blog" className="nav-link-drop">
                  Blog
                </NavLink>
                <NavLink to="/contact-us" className="nav-link-drop">
                  Contact us
                </NavLink>
                <NavLink to="/privacy-policy" className="nav-link-drop">
                  Privacy Policy
                </NavLink>
                <NavLink to="/terms-condition" className="nav-link-drop">
                  Terms & Condition
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            {user && (
              <li className="nav-dropdown">
                <span>
                  User
                  <i className="fa-solid fa-caret-down dropdown-icon"></i>
                </span>
                <div className="nav-link-drop-panel">
                  <NavLink to="/view-profile" className="nav-link-drop">
                    View Profile
                  </NavLink>
                  {usertype === "landlord" && (
                    <NavLink to="/manage-properties" className="nav-link-drop">
                      Manage Properties
                    </NavLink>
                  )}
                  <NavLink to="/order-list" className="nav-link-drop">
                    All Order
                  </NavLink>
                  <NavLink to="/wish-list" className="nav-link-drop">
                    Wish List
                  </NavLink>
                  <NavLink to="/support" className="nav-link-drop">
                    Support
                  </NavLink>
                  <NavLink to="/" className="nav-link-drop">
                    Log Out
                  </NavLink>
                </div>
              </li>
            )}
            {/* When use api */}
            {/* 
            {user && (
  <li className="nav-dropdown">
    <span>
      {user.name}
      <i className="fa-solid fa-caret-down dropdown-icon"></i>
    </span>
    <div className="nav-link-drop-panel">
      <NavLink to="/view-profile" className="nav-link-drop">View Profile</NavLink>
      <NavLink to="/order-list" className="nav-link-drop">Orders</NavLink>
      <NavLink to="/wish-list" className="nav-link-drop">Wishlist</NavLink>
      <NavLink to="/support" className="nav-link-drop">Support</NavLink>
      <span
        className="nav-link-drop"
        onClick={() => {
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
          setUser(null);
        }}
      >
        Log Out
      </span>
    </div>
  </li>
)}
 */}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

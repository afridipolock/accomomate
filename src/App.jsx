// Import default components
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./frontend/components/webpage/navbar/Navbar";

// Import Web Pages
import Home from "./frontend/pages/webpage/home/Home";
import Login from "./frontend/pages/webpage/Login/Login";
import Registration from "./frontend/pages/webpage/registration/Registration";
import AllProperties from "./frontend/pages/webpage/allProperties/AllProperties";
import AvailableProperties from "./frontend/pages/webpage/availableProperties/AvailableProperties";
import FindLandlord from "./frontend/pages/webpage/findLandlord/FindLandlord";
import Property from "./frontend/pages/webpage/property/Property";
import ViewProfile from "./frontend/pages/webpage/viewProfile/ViewProfile";
import ManageProperties from "./frontend/pages/webpage/manageProperties/ManageProperties";
import AboutUs from "./frontend/pages/webpage/static/AboutUs";
import PrivacyPolicy from "./frontend/pages/webpage/static/PrivacyPolicy";
import ContactUs from "./frontend/pages/webpage/static/ContactUs";
import MovingStories from "./frontend/pages/webpage/static/MovingStories";
import Blog from "./frontend/pages/webpage/static/Blog";

// Import dashboard pages

// New page always scroll on top
const NewPageScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page size tracker
const PageSizeTracker = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "rgba(25, 35, 85, 0.75)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "14px",
        zIndex: 10000000,
      }}
    >
      Width: {size.width}px, Height: {size.height}px
    </div>
  );
};

// WebPage Layout
const WebPageLayout = ({ children }) => {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "192.168.0.119";
  return (
    <>
      {isLocalhost && <PageSizeTracker />}
      <NewPageScrollTop />
      <Navbar />
      {children}
    </>
  );
};

const allTitle = {
  "/": "Home",
  "/login": "Login",
  "/registration": "Registration",
  "/all-properties": "All Properties",
  "/available-properties": "Available Properties",
  "/manage-properties": "Manage Properties",
  "/view-profile": "View Profile",
};

function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    const setTitle =
      "AccomoMate - " + allTitle[location.pathname] || "AccomoMate";
    document.title = setTitle;
  }, [location]);

  return null;
}

const Main = () => {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route
          path="/"
          element={
            <WebPageLayout>
              <Home />
            </WebPageLayout>
          }
        />
        <Route
          path="/login"
          element={
            <WebPageLayout>
              <Login />
            </WebPageLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <WebPageLayout>
              <Registration />
            </WebPageLayout>
          }
        />
        <Route
          path="/all-properties"
          element={
            <WebPageLayout>
              <AllProperties />
            </WebPageLayout>
          }
        />
        <Route
          path="/available-properties"
          element={
            <WebPageLayout>
              <AvailableProperties />
            </WebPageLayout>
          }
        />
        <Route
          path="/find-landlord"
          element={
            <WebPageLayout>
              <FindLandlord />
            </WebPageLayout>
          }
        />
        <Route
          path="/property"
          element={
            <WebPageLayout>
              <Property />
            </WebPageLayout>
          }
        />
        <Route
          path="/view-profile"
          element={
            <WebPageLayout>
              <ViewProfile />
            </WebPageLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <WebPageLayout>
              <AboutUs />
            </WebPageLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <WebPageLayout>
              <PrivacyPolicy />
            </WebPageLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <WebPageLayout>
              <ContactUs />
            </WebPageLayout>
          }
        />
        <Route
          path="/moving-stories"
          element={
            <WebPageLayout>
              <MovingStories />
            </WebPageLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <WebPageLayout>
              <Blog />
            </WebPageLayout>
          }
        />

        <Route
          path="/manage-properties"
          element={
            <WebPageLayout>
              <ManageProperties />
            </WebPageLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;

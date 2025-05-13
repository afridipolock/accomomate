import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Property = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyId = searchParams.get("id");

  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (propertyId) {
      axios
        .get(`http://localhost:5000/api/property/get-property/${propertyId}`)
        .then((res) => setProperty(res.data))
        .catch((err) => console.error("Failed to load property", err));
    }
  }, [propertyId]);

  if (!property) return <p>Loading...</p>;
  return (
    <div className="desktop-window">
      <div className="desktop-property">
        <div className="go-back"></div>
        <div className="property-details-page">property</div>
      </div>
    </div>
  );
};

export default Property;

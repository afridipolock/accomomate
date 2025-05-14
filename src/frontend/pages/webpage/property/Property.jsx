import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Property = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const propertyId = searchParams.get("id");

  const [property, setProperty] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (propertyId) {
      axios
        .get(`http://localhost:5000/api/property/get-property/${propertyId}`)
        .then((res) => setProperty(res.data))
        .catch((err) => console.error("Failed to load property", err));
    }
  }, [propertyId]);

  const handleRentClick = () => {
    alert("Rent request feature coming soon!");
    // Future: Navigate to rent request form or send POST to backend
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div className="desktop-window">
      <div className="desktop-property">
        <div className="go-back" onClick={() => navigate("/all-properties")}>
          <i className="fa-solid fa-left-long"></i>
          <span>Going back to search results</span>
        </div>

        <div className="property-details-page">
          <div className="property-image">
            <Slider {...sliderSettings}>
              {property.images.map((imgUrl, index) => (
                <div key={index} className="img-preview">
                  <img src={imgUrl} alt={`Property Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="property-info">
            <h2>{property.title}</h2>
            <p>
              <strong>Price:</strong> {property.price} BDT
            </p>
            <p>
              <strong>Beds:</strong> {property.beds} | <strong>Baths:</strong>{" "}
              {property.baths}
            </p>
            <p>
              <strong>Tenure:</strong> {property.tenure}
            </p>
            <p>
              <strong>Type:</strong> {property.types}
            </p>
            <p>
              <strong>Address:</strong> {property.address}
            </p>
            <p>
              <strong>Description:</strong> {property.description}
            </p>
            <p>
              <strong>Features:</strong> {property.features?.join(", ")}
            </p>
            <p>
              <strong>Landlord:</strong> {property.owner_name} (
              {property.owner_email})
            </p>

            {user?.usertype === "renter" && (
              <button className="rent-button" onClick={handleRentClick}>
                Rent this Property
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

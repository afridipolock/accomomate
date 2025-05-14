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
        <div className="go-back" onClick={() => navigate("/all-properties")}>
          <i class="fa-solid fa-left-long"></i>
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
          <div className="property-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Property;

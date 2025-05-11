import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oneImage from "../../../../assets/1.jpeg";
import twoImage from "../../../../assets/2.jpeg";
import threeImage from "../../../../assets/3.jpeg";
import fourImage from "../../../../assets/4.jpeg";
import fiveImage from "../../../../assets/5.jpeg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const sliderImages = [oneImage, twoImage, threeImage, fourImage, fiveImage];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="desktop-window">
      <div className="desktop-content">
        <div className="hero">
          <Slider {...imageSliderSettings}>
            {sliderImages.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`slide-${index}`} className="slider-img" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="register-us">
          <div className="left">
            <span className="top">Sign in to streamline your search</span>
            <span className="bottom">
              Save properties, create alerts and keep track of the enquiries you
              send to agents or landlord
            </span>
          </div>
          <div className="right">
            <button type="button" onClick={() => navigate("/registration")}>
              Sign in or Crate an account
            </button>
          </div>
        </div>
        <div className="house-add">
          <div className="cards left">
            <div className="card-image"></div>
            <div className="card-info">
              <div className="title">
                <span>Find Verified Hostels Around Your Campus</span>
              </div>
              <div className="text">
                <span>
                  Explore messes and hostels with real photos, reviews, and rent
                  details.
                </span>
              </div>
              <div className="cite" onClick={() => navigate("")}>
                <span>
                  Search nearby hostels
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="cards middle">
            <div className="card-image"></div>
            <div className="card-info">
              <div className="title">Compare rent in different area</div>
              <div className="text">
                See where you get more space for less, with real pricing trends.
              </div>
              <div className="cite" onClick={() => navigate("")}>
                <span>
                  Compare rent
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="cards right">
            <div className="card-image"></div>
            <div className="card-info">
              <div className="title">
                <span>What’s Included in Your Rent?</span>
              </div>
              <div className="text">
                <span>Wi-Fi? Electricity? Meals? Know before you move in</span>
              </div>
              <div className="cite" onClick={() => navigate("")}>
                <span>
                  Check here
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

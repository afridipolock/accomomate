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
          <div className="left"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

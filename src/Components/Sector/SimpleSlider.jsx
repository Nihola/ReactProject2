// SimpleSlider.js
import React from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SimpleSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="arrow next-arrow" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const SimpleSlider = ({
  employees = [],
  title = "TESTIMONIAL",
  heading = "Making Food great again and again",
  description = "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your."
}) => {
  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) =>
      i < count ? (
        <FaStar key={i} className="star filled" />
      ) : (
        <FaRegStar key={i} className="star" />
      )
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-container">
      <div className="container">
        <h4 className="slider-title">{title}</h4>
        <h2 className="slider-heading">{heading}</h2>
        <p className="slider-text">{description}</p>

        <Slider {...settings}>
          {employees.map(({ img, text, rating, name, profession }, index) => (
            <div key={index} className="employee-card">
              <img src={img} alt={name} className="employee-photo" />
              <p className="employee-info">{text}</p>
              <div className="employee-rating">{renderStars(rating)}</div>
              <h3 className="employee-name">{name.toUpperCase()}</h3>
              <p className="employee-profession">{profession}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;

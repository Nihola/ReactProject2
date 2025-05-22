import React from 'react'
import Employees  from '../Layout/Employees';
import Slider from "react-slick";
import { FaStar, FaRegStar } from 'react-icons/fa';
import './Sector.css';

const Wrapper = ({ employees = [] }) => {           
  const renderStars = (count) => (
    [...Array(5)].map((_, i) =>
      i < count
        ? <FaStar key={i} className="star filled" />
        : <FaRegStar key={i} className="star" />
    )
  );

  return (
      <Slider {...settings}>
          <div className="container">
              <h4 className="sector-title">Testimonial</h4>
              <h4 className="sector-heading">Making Food great again and again</h4>
              <p className="sector-text">
                  You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
              </p>
              <div>
                  <h3>1</h3>
              </div>
              <div>
                  <h3>2</h3>
              </div>
          </div>

      </Slider>
  )
}

export default Sector

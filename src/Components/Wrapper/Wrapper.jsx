import React from 'react';
import './Wrapper.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Wrapper = ({ meals = [] }) => {           
  const renderStars = (count) => (
    [...Array(5)].map((_, i) =>
      i < count
        ? <FaStar key={i} className="star filled" />
        : <FaRegStar key={i} className="star" />
    )
  );

  return (
    <div className='container'>
      <h4 className="wrapper-title">Menu</h4>
      <h4 className="wrapper-heading">Food Full of Treaty Love</h4>
      <p className="wrapper-text">
        There are many things are needed to start the Fast Food Business. You need
        not only Just Food Stalls with Persons but also specialized equipment and
        skills to manage customers.
      </p>

      <ul className="wrapper-list">
        {meals.map((meal, idx) => (
          <li className="meal-card" key={idx}>
            <img src={meal.img} alt={meal.title} className="meal-img" />
            <div className="meal-box">
              <h5 className="meal-title">{meal.title}</h5>
              <span className="meal-price">{meal.price}</span>
            </div>

            <p className="meal-text">{meal.text}</p>

            <div className="meal-info">              
              <span className="meal-rating">{renderStars(meal.rating)}</span>
              <span className="meal-icon">{meal.icon}</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="learn-more-btn">Learn More</button>


    </div>
  );
};

export default Wrapper;

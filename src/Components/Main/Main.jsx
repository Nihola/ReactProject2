import React from 'react'
import '../Main/Main.css'
import green_circle from './images/green_circle.png';
import house from './images/house.png';
import food_delivery from './images/food_delivery.png';
import smilik from './images/smilik.png';


const Main = () => {
  return (
    <div className='sector'>
      <div className="container">
        <h2 className='sector-subtitle'>Features</h2>
        <h3 className='sector-title'>Food with a New Passion</h3>
        <ul className="sector-list">
          <li className="sector-item">
            <img src={green_circle} alt="cirlce" className='sector-background' />
            <img src={house} alt="house" className='item-image' />
            <h3 className='sector-heading'>
              Quality Food
            </h3>
            <p className='sector-text'>
              It can be a very secure path to earn good money and make you very successful creative entrepreneur.
            </p>
          </li>
          <li className="sector-item">
            <img src={green_circle} alt="cirlce" className='sector-background' />
            <img src={food_delivery} alt="house" className='item-image' />
            <h3 className='sector-heading'>
              Food Delivery
            </h3>
            <p className='sector-text'>
              It can be a very secure path to earn good money and make you very successful creative entrepreneur.
            </p>
          </li>
          <li className="sector-item">
            <img src={green_circle} alt="cirlce" className='sector-background' />
            <img src={smilik} alt="smile" className='item-image' />
            <h3 className='sector-heading'>
              Super Taste
            </h3>
            <p className='sector-text'>
              It can be a very secure path to earn good money and make you very successful creative entrepreneur.
            </p>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default Main
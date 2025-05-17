import React from 'react'
import '../Main/Main.css'
import green_circle from './images/green_circle.png';
import house from './images/house.png';
import food_delivery from './images/food_delivery.png';
import smilik from './images/smilik.png';

const Main = () => {
  return (
    <div className='wrapper'>
       <div className="container">
       <h2 className='wrapper-subtitle'>Features</h2>
        <h3 className='wrapper-title'>Food with a New Passion</h3>
        <ul className="wrapper-list">
            <li className="wrapper-item">
                <img src={green_circle} alt="cirlce" className='wrapper-background' />
                <img src={house} alt="house" className='item-image' />
                <h3 className='wrapper-heading'>
                Quality Food
                </h3>
                <p className='wrapper-text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>
            <li className="wrapper-item">
                <img src={green_circle} alt="cirlce" className='wrapper-background' />
                <img src={food_delivery} alt="house" className='item-image' />
                <h3 className='wrapper-heading'>
                Food Delivery
                </h3>
                <p className='wrapper-text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>
            <li className="wrapper-item">
                <img src={green_circle} alt="cirlce" className='wrapper-background' />
                <img src={house} alt="house" className='item-image' />
                <h3 className='wrapper-heading'>
                Super Taste
                </h3>
                <p className='wrapper-text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>
        </ul>
       </div>

    </div>
  )
}

export default Main
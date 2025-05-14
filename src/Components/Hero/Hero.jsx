import React from 'react';
import '../Hero/Hero.css';

import frying_pan from '../Hero/images/frying_pan.svg';
const Hero = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main-left">
                  <h1 className='main-title'>Making time a good time by making food the good food.</h1>
                  <p className='main-paragraph'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                  <div className="main-buttons">
                    <a href="#" className='main-btn'>Order Now</a>
                    <a href="#" className='main-btn'>Food details</a>
                  </div>
        </div>
        <img src={frying_pan} alt="frying_pan" className='main-image' />
         
      </div>




    </div>
  )
}

export default Hero

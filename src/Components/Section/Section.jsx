import React from 'react'
import '../Section/Section.css'
import background_vector from '../Section/images/background_vector.png';
import girl from '../Section/images/girl.png';
const Section = () => {
  return (
    <div className='section'>
        <div className="container">
            <div className="section-left">
                <img src={background_vector} alt="background" className='section_background'/>
                <img src={girl} alt="girl" className='girl_image' />
            </div>
            <div className="section-right">
                <h4 className='section-heading'>
                About us
                </h4>
                <p className='section-paragraph'>Food Stalls with Persons but  to  Product marketing plane
                catlogues etc to. </p>
                <p className='section-text'> 
                There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                equipment  make your marketing plane Effective.
                </p>
                <a href="#" className='section-button'>
                Read More
                </a>
            </div>
        </div>

    </div>
  )
}

export default Section
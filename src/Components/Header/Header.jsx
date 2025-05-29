import React, { useState } from 'react';
import logo from '../Header/images/logo.png';
import '../Header/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav-left">
          <img src={logo} alt="logo" className='logo' />

          <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
            <li className="nav-item">Home</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Contact us</li>
          </ul>
        </div>


       
        <a href="#" className='nav-button hide-on-mobile'>Booking Now</a>
 
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>

      </div> 
      
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Contact us</li>
            <li><a href="#" className='nav-button'>Booking Now</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

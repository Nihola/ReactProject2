import React from 'react';
import logo from '../Header/images/logo.png';
import '../Header/Header.css';

const Header = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav-left">
          <img src={logo} alt="logo" className='logo' />
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Contact us</li>
          </ul>
        </div>
        <a href="#" className='nav-button'>Booking Now</a>
      </div>
    </nav>
  );
}

export default Header;

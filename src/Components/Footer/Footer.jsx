import React from "react";
import "./Footer.css";
import logo from "../Header/images/logo.png";               
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => (
    <footer className="footer">
        
        <div className="footer__col footer__brand">
            <img src={logo} alt="Company logo" className="footer__logo" />
            <ul className="footer__list">
                <li>www.company-name.com</li>
                <li>companyname@gmail.com</li>
                <li>Phone: +7 485‑118‑03‑25</li>
            </ul>
        </div>

      
        <nav className="footer__col">
            <h4 className="footer__title">Home</h4>
            <ul className="footer__list">
                <li><a href="#landing">Landingpage</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#referral">Referral Program</a></li>
                <li><a href="#uiux">UI & UX Design</a></li>
                <li><a href="#web">Web Design</a></li>
            </ul>
        </nav>

        <nav className="footer__col">
            <h4 className="footer__title">Menu</h4>
            <ul className="footer__list">
                <li><a href="#landing">Landingpage</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#referral">Referral Program</a></li>
                <li><a href="#uiux">UI & UX Design</a></li>
                <li><a href="#web">Web Design</a></li>
            </ul>
        </nav>

        <nav className="footer__col">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__list">
                <li><a href="#landing">Landingpage</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#referral">Referral Program</a></li>
            </ul>

            
            <div className="footer__social">
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://youtube.com"><FaYoutube /></a>
            </div>
        </nav>
    </footer>
);

export default Footer;

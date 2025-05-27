import React from 'react';
import './Contact.css';

const ContactSection = () => {
    return (
       <div className="contact">
            <div className="contact-container">
                <p className="contact-title">CONTACT</p>
                <h2 className="contact-heading">
                    Food Stalls with Persons but also specialized equipment, Skills to manage.
                </h2>
                <div className="contact-form">
                    <input
                        type="text"
                        className="contact-input"
                        placeholder="Enter your message"
                    />
                    <button className="contact-button">Send</button>
                </div>
            </div>
       </div>
    );
};

export default ContactSection;

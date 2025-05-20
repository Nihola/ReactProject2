import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./Block.css";
import shot from './images/shot.png'

export default function FoodStallLanding() {
    return (
       
            <div className="block">
            <div className="container">
                 
                    <div className="block-wrap">
                        <p className="block-tagline">Take Away</p>
                        <h1 className="block-heading">
                            Food Stalls with Persons but <br /> to Product marketing plane.
                        </h1>
                        <p className="block-description">
                            There are many things are needed to start the Fast Food Business. You need
                            not only Just Food Stalls with Persons but also specialized equipment with
                            Persons but also Just Food Stalls with Persons.
                        </p>
                        <div className="block-buttons">
                            <button className="btn app-store">
                                <FaApple /> App Store
                            </button>
                            <button className="btn google-play">
                                <FaGooglePlay /> Google Play
                            </button>
                        </div>
                    </div>


                    <img src={shot} alt="image" className="phone-image" />
                </div>
               

                    
                </div>
            
        
    );
}

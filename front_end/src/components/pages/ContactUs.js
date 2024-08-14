import React from 'react';
import "./ContactUs.css";

import LogoPictureCU from "./pngwing.com.png";
import EmailIcon from "./email-icon.png";
import IGIcon from "./instagram-logo.png";
import LocationIcon from "./location.png";

function ContactUs() {
    return (
        <div className='whiteSpace'>
            <div className="contactUsWrapper">
                <div className="contactUsContainer">
                <div className="contactInfo">
                    <h2>How can we help you?</h2>
                    <h1>Contact us</h1>
                    <p>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
                    <div className="contactDetails">
                        <div className="contactItem">
                            <img src={LocationIcon} className="contactIcon" alt="Location Icon" />
                            <span>207 Weil Hall, Gainesville, FL 32611</span>
                        </div>
                        <div className="contactItem">
                            <img src={EmailIcon} className="contactIcon" alt="Email Icon" />
                            <span>projectlead.ewbufperu@gmail.com</span>
                        </div>
                        <div className="contactItem">
                            <img src={IGIcon} className="contactIcon" alt="IG Logo" />
                            <span>@uf.ewb.peru</span>
                        </div>
                    </div>
                </div>
                <div className="logoContainer">
                    <img 
                        src={LogoPictureCU}
                        className="logoImage" 
                        alt="Engineers Without Borders Logo"
                    />
                </div>
            </div>
        </div>
        </div>
        
        
    );
}

export default ContactUs;

import React from 'react';
import "./ContactUs.css";

import LogoPictureCU from "./pngwing.com.png";

function ContactUs() {
    return (
        <div className="entireBox">

            <div className="NameBox">
                <h1>Contact Us</h1>
            </div>

            <div className='LowerHalf'>
                <div className="PictureBox">
                    <img 
                        src = {LogoPictureCU}
                        className="logo1" 
                        alt="Logo"
                    />
                </div>
                <div className='ContactInfo'>
                    <div className='Info'>
                        <p>
                            <label>Name:</label><br />
                            <input type="text" placeholder="Enter your name" />
                        </p>
                        <p>
                            <label>Email:</label><br />
                            <input type="email" placeholder="Enter your email" />
                        </p>
                        <p>
                            <label>Message:</label><br />
                            <textarea placeholder="Enter your message" rows="4"></textarea>
                        </p>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

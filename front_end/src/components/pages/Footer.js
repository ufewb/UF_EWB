import React from 'react';
import './Footer.css'; 

import facebookLogo from "../pictures/footer/facebook-logo.png";
import linkedinLogo from "../pictures/footer/linkedin-logo.png";
import instagramLogo from "../pictures/footer/insta-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="socials">
          <a href="https://www.facebook.com/ufewbperu/" target ="_blank">
          <img src={facebookLogo} className="social-icon" alt="Social Icon"></img>
          </a>
          <a href="https://www.linkedin.com/company/ewb-uf/" target = "_blank">
          <img src={linkedinLogo} className="social-icon" alt="Social Icon"></img>
          </a>
          <a href="https://www.instagram.com/uf.ewb.peru/?hl=en"target = "_blank">
          <img src={instagramLogo} className="social-icon" alt="Social Icon"></img>
          </a>
        </div>
        <div className="love">
          <p>Made with ♥ by the 2024 UF EWB Technical Team</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

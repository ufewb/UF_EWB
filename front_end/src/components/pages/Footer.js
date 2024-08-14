import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="socials">
          <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" className="social-icon" alt="Social Icon"></img>
          <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-jz44rpiz.png" className="social-icon" alt="Social Icon"></img>
          <img src="https://static-00.iconduck.com/assets.00/email-icon-2048x1628-mzownmgf.png" className="social-icon" alt="Social Icon"></img>
        </div>
        <div className="love">
          <p>made with ♥ by the 2024 UF EWB website team</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

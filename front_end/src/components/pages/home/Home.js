// src/components/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ImagesComponent from './SponsorsHomePage';
import videoEWB from "../../pictures/home/ewb_homepage.mp4";
import Projects from './Projects'; // Import the new Projects component

function Home() {

  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in');

      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 50) { // Adjust this value to fine-tune when the effect triggers
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="home-img-container">
        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={videoEWB} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="textBeg">ENGINEERING <br /> WITHOUT BORDERS</h1>
        <h1 className="textBeg textSubtitle fade-in">The University of Florida Chapter</h1>
      </div>

      <div className='info-box'>
        <div className="applicationButton">
          <h1 className="labelGetInvovled appButtonHome">APPLICATIONS ARE OPEN UNTIL 9/21</h1>
          <button className="buttonApplication">
            <a href="https://docs.google.com/document/d/1PlvLTcMh2jAKXq5gEaU64YGQVbUm2e9wIUqA_QDwcaA/edit#heading=h.ro0ctsca7wst" target="_blank" rel="noopener noreferrer">
              APPLY HERE
            </a>
          </button>
        </div>
      </div>

      <Projects /> {/* Use the new Projects component */}

      <h1 className="teamsHeading sponsors-title fade-in">SPONSORS</h1>

      <div className="sponsors-container fade-in"> 
        <ImagesComponent />
      </div>
    </div>
  );
}

export default Home;

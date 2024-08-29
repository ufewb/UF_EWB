import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import homeImage from '../../pictures/home/ewb_home.jpg';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import ImagesComponent from './SponsorsHomePage';
import videoEWB from "../../pictures/home/ewb_homepage.mp4";

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
        <h1 className="textBeg fade-in">ENGINEERING <br /> WITHOUT BORDERS</h1>
        <h1 className="textBeg textSubtitle fade-in">The University of Florida Chapter</h1>
      </div>
      
      <div className="teams">
        <h1 className="teamsHeading fade-in">OUR TEAMS</h1>

        <div className="team_indv">
          <img src={nepalTeams} alt="Nepal Team" className="team_img fade-in" />
          <p className="team_click underline-hover fade-in">Nepal</p>
        </div>

        <div className="team_indv">
          <img src={peruTeams} alt="Peru Team" className="team_img fade-in" />
          <Link to="/peru" className="team_click underline-hover fade-in">Peru</Link>
        </div>
      </div>

      <h1 className="teamsHeading sponsors-title fade-in">SPONSORS</h1>

      <div className="sponsors-container fade-in"> 
        <ImagesComponent />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import homeImage from '../../pictures/home/ewb_home.jpg';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import ImagesComponent from './SponsorsHomePage';
import videoEWB from "../../pictures/home/ewb_homepage.mp4";

function Home() {
  return (
    <div className="home-container">
      <div className="home-img-container">
        {/* <img src={homeImage} alt="UF EWB Logo" className="homeMainImage" /> */}
        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={videoEWB} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="textBeg"> ENGINEERING <br /> WITHOUT BORDERS </h1>
        <h1 className="textBeg textSubtitle"> The University of Florida Chapter </h1>
      </div>
      
      <div className="teams">
        <h1 className="teamsHeading">OUR TEAMS</h1>

        <div className="team_indv">
          <img src={nepalTeams} alt="Nepal Team" className="team_img" />
          <p className="team_click underline-hover">nepal</p>
        </div>

        <div className="team_indv">
          <img src={peruTeams} alt="Peru Team" className="team_img" />
          <Link to="/peru" className="team_click underline-hover">peru</Link>
        </div>
      </div>

      <h1 className="teamsHeading sponsors-title">SPONSORS</h1>  {/* Sponsors text moved outside of the box */}

      <div className="sponsors-container"> 
        <ImagesComponent />
      </div>

    </div>
  );
}

export default Home;

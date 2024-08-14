import React from 'react';
import './Home.css';

import homeImage from '../../pictures/home/ewb_home.jpg';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import ImagesComponent from './SponsorsHomePage';
import videoEWB from "../../pictures/home/ewb_homepage.mp4";


function Home() {
  return (
    <div className="home-container">
      <div className = "home-img-container">
        {/* <img src={homeImage} alt="UF EWB Logo" className="homeMainImage" /> */}
        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={videoEWB} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className = "textBeg"> ENGINEERING WITHOUT BORDERS </h1>
        <h1 className = "textBeg textSubtitle"> The University of Florida Chapter </h1>
      </div>
      
      <div className="teams">
        <h1 className = "teamsHeading">OUR TEAMS</h1>

        <div className="team_indv">
          <img src={nepalTeams} alt="Nepal Team" className="team_img" />
          <p className = "team_click underline-hover"> nepal </p>
        </div>

        <div className="team_indv">
          <img src={peruTeams} alt="Peru Team" className="team_img" />
          <p className = "team_click underline-hover"> peru </p>
        </div>
      </div>

      <div className = "sponsors-container"> 
        <h1 className = "teamsHeading">SPONSORS</h1>
        {/* <button className = "sponsor-button"> Become a Sponsor</button>  */}
        <ImagesComponent />
      </div>

    </div>
  );
}

export default Home;

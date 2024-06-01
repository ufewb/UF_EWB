import React from 'react';
import './Home.css';

import homeImage from '../../pictures/home/ewb_home.jpg';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import ImagesComponent from './SponsorsHomePage';

function Home() {
  return (
    <div className="home-container">
      <div className = "home-img-container">
        <img src={homeImage} alt="UF EWB Logo" className="homeMainImage" />
        <h1 className = "textBeg"> Engineering Without Borders </h1>
        <h1 className = "textBeg textSubtitle"> The University of Florida Chapter </h1>
      </div>
      
      <div className="teams">
        <h1 className = "teamsHeading">Our Teams</h1>

        <div className="team_indv">
          <img src={nepalTeams} alt="Nepal Team" className="team_img" />
          <button className="team_button">Nepal</button>
        </div>

        <div className="team_indv">
          <img src={peruTeams} alt="Peru Team" className="team_img" />
          <button className="team_button">Peru</button>
        </div>
      </div>

      <div> 
        <h1>Our Sponsors</h1>
        <button>Become a Sponsor</button>
        <ImagesComponent />
      </div>

    </div>
  );
}

export default Home;

import React from 'react';
import './Home.css';

import homeImage from '../pictures/home/ewb_home.jpg';
import nepalTeams from '../pictures/home/nepal_teams.jpg';
import peruTeams from '../pictures/home/peru_teams.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <img src={homeImage} alt="UF EWB Logo" className="homeMainImage" />

      <div className="teams">
        <div className="team_indv">
          <img src={nepalTeams} alt="Nepal Team" className="team_img" />
          <button className="team_button">Nepal</button>
        </div>

        <div className="team_indv">
          <img src={peruTeams} alt="Peru Team" className="team_img" />
          <button className="team_button">Peru</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

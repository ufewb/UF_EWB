// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';

function Projects() {
  return (
    <div id = "projects" className="teams">
      <h1 className="teamsHeading fade-in" >OUR PROJECTS</h1>

      <div className="team_indv">
        <img src={nepalTeams} alt="Nepal Team" className="team_img fade-in" />
        <Link to="/nepal" className="team_click underline-hover fade-in">NEPAL</Link>
      </div>

      <div className="team_indv">
        <img src={peruTeams} alt="Peru Team" className="team_img fade-in" />
        <Link to="/peru" className="team_click underline-hover fade-in">PERU</Link>
      </div>
    </div>
  );
}

export default Projects;

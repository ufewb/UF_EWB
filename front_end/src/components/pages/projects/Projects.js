import React from 'react';
import { Link } from 'react-router-dom';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import './Projects.css';

function Projects() {
  return (
    
    <div className="project_teams">
      <h1 className = "project_teamheading">OUR PROJECTS</h1>

      <div className="project_teamindv">
        <img src={nepalTeams} alt="Nepal Team" className = "project_teamimg project_fade-in" />
        <Link to="/nepal" className = "project_underlinehover project_teamclick">NEPAL</Link>
      </div>

      <div className="project_teamindv">
        <img src={peruTeams} alt="Peru Team" className = "project_teamimg project_fade-in"/>
        <Link to="/peru" className = "project_underlinehover project_teamclick">PERU</Link>
      </div>
    </div>
  );
}

export default Projects;

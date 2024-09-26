import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import nepalTeams from '../../pictures/home/nepal_teams.jpg';
import peruTeams from '../../pictures/home/peru_teams.jpg';
import './Projects.css';

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="project_teams">
      <h1 className="project_teamheading">OUR PROJECTS</h1>

      <div 
        className="project_teamindv projects_fade-in"
        ref={(el) => (projectRefs.current[0] = el)}
      >
        <img src={nepalTeams} alt="Nepal Team" className="project_teamimg" />
        <Link to="/nepal" className="project_underlinehover project_teamclick">NEPAL</Link>
      </div>

      <div 
        className="project_teamindv projects_fade-in"
        ref={(el) => (projectRefs.current[1] = el)}
      >
        <img src={peruTeams} alt="Peru Team" className="project_teamimg" />
        <Link to="/peru" className="project_underlinehover project_teamclick">PERU</Link>
      </div>
    </div>
  );
}

export default Projects;
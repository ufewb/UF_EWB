import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/home/nav-bar/ewb_logo_without_text.png';

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="sidebar">
        <li onClick={closeSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#5f6368">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </li>
        <li><Link to="/" onClick={closeSidebar}>HOME</Link></li>
        <li><Link to="/projects" onClick={closeSidebar}>PROJECTS</Link></li>
        <li><Link to="/teams" onClick={closeSidebar}>TEAMS</Link></li>
        <li><Link to="/get-involved" onClick={closeSidebar}>GET INVOLVED</Link></li>
      </ul>
      <div className="logo-container">
        <Link to="/" className="logoLink">
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="tab hideOnMobile underline-hover-nav">
          <Link to="/">HOME</Link>
        </li>
        <li className="tab hideOnMobile underline-hover-nav">
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className="tab hideOnMobile underline-hover-nav">
          <Link to="/teams">TEAMS</Link>
        </li>
        <li className="tab hideOnMobile underline-hover-nav">
          <Link to="/get-involved">GET INVOLVED</Link>
        </li>
        <li className="menuButton" onClick={showSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import './App.css';
import Paths from './Routes.js'; 

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/pages/Footer.js'; 
import PeruRoutes from './components/pages/peru/PeruRoutes.js';
import NepalRoutes from './components/pages/nepal/NepalRoutes.js';

import logo from './components/pictures/home/nav-bar/ewb_logo_without_text.png';

function showSidebar () {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <ul className="sidebar">
            <li onClick={closeSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </li>
            <li><Link to="/" onClick={closeSidebar}>HOME</Link></li>
            <li><a href="#projects" onClick={closeSidebar}>PROJECTS</a></li>
            <li><Link to="/teams" onClick={closeSidebar}>TEAMS</Link></li>
            <li><Link to="/get-involved" onClick={closeSidebar}>GET INVOLVED</Link></li>
          </ul>

          <ul>
            <img src={logo} className="logo" alt="Logo"/>
            <li className="hideOnMobile underline-hover-nav"><Link to="/">HOME</Link></li>
            <li className="hideOnMobile underline-hover-nav"><a href="#projects">PROJECTS</a></li>
            <li className="hideOnMobile underline-hover-nav"><Link to="/teams">TEAMS</Link></li>
            <li className="hideOnMobile underline-hover-nav"><Link to="/get-involved">GET INVOLVED</Link></li>
            <li className="menuButton" onClick={showSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </li>
          </ul>

        </nav>

        <Routes>
          {/* Main Routes */}
          <Route path="/*" element={<Paths />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;


{/* <img src="https://mae.ufl.edu/wp-content/uploads/2022/02/Screenshot-2022-02-23-151343.png" className = "logo"></img> */}

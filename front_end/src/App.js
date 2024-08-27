import './App.css';
import Paths from './Routes.js'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/pages/Footer.js'; 
import PeruRoutes from './components/pages/peru/PeruRoutes.js';
import NepalRoutes from './components/pages/nepal/NepalRoutes.js';
import loginButton from './components/pictures/home/login-button.png';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <img src="https://mae.ufl.edu/wp-content/uploads/2022/02/Screenshot-2022-02-23-151343.png" className = "logo"></img>

          <ul className = "all_text_nav">
            <li className="nav-bar-elements"><Link to="/">HOME</Link></li>
            
            {/* dropdown*/}
            <div className="dropdown nav-bar-elements">
              <button className="dropbtn">TEAMS <i className=" fa fa-caret-down"></i></button>
              {/* dropdown content */}
              <div className="dropdown-content">
                <li className="nav-bar-elements"><Link to="/nepal">NEPAL</Link></li>
                <li className="nav-bar-elements"><Link to="/peru">PERU</Link></li>
              </div>
            </div>
            
            <li className="nav-bar-elements"><Link to="/eboard">E-BOARD</Link></li>
            <li className="nav-bar-elements"><Link to="/get-involved">GET INVOLVED</Link></li>
            <Link to="/login"><img src = {loginButton} className = 'login-button'></img></Link>
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

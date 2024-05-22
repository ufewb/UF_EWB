import './App.css';
import Paths from './Routes.js'; 
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Footer from './components/pages/Footer.js'; 
import PeruHome from './components/pages/peru/PeruHome.js';
import PeruRoutes from './components/pages/peru/PeruRoutes.js';
import NepalRoutes from './components/pages/nepal/NepalRoutes.js'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <img src="https://mae.ufl.edu/wp-content/uploads/2022/02/Screenshot-2022-02-23-151343.png" className = "logo"></img>

          <ul className = "all_text_nav">
            <li className="nav-bar-elements"><Link to="/">Home</Link></li>
            
            {/* dropdown*/}
            <div className="dropdown nav-bar-elements">
              <button className="dropbtn">Teams <i className=" fa fa-caret-down"></i></button>
              {/* dropdown content */}
              <div className="dropdown-content">
                <li className="nav-bar-elements"><Link to="/nepal">Nepal</Link></li>
                <li className="nav-bar-elements"><Link to="/peru">Peru</Link></li>
              </div>
            </div>
            
            <li className="nav-bar-elements"><Link to="/contact-us">Contact Us</Link></li>
            <li className="nav-bar-elements"><Link to="/get-involved">Get Involved</Link></li>
          </ul>
        </nav>

      {/* have to place all routes here!!! */}
        <Paths />
        <PeruRoutes /> 
        <NepalRoutes /> 
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;

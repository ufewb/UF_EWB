import './App.css';
import Navbar from './components/navbar/Navbar';
import Paths from './Routes.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/*" element={<Paths />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
// hello testing
// hi
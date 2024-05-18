import React from 'react';
import './App.css';
import Paths from './Routes.js'; 

function App() {
  return (
    <div className="App">
        <nav class = "nav-bar">
          <ul>
            <button class = "nav-bar-elements">Home</button>
            <button class = "nav-bar-elements">Teams</button>
            <button class = "nav-bar-elements">Contact Us</button>
            <button class = "nav-bar-elements">Get Involved</button>
          </ul>
        </nav>
      <Paths /> 
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'; 
import GetInvolved from './pages/get-involved/GetInvolved';
import PeruRoutes from './pages/peru/PeruRoutes';
import NepalRoutes from './pages/nepal/NepalRoutes';
import Teams from './pages/eboard/EBoard'
import Projects from './pages/projects/Projects';

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/nepal/*" element={<NepalRoutes />} />
      <Route path="/peru/*" element={<PeruRoutes />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/projects" element={<Projects />} />


      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default Paths;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home'; 
import GetInvolved from './components/pages/get-involved/GetInvolved';
import NepalHome from './components/pages/nepal/NepalHome';
import PeruHome from './components/pages/peru/PeruHome';
import FAQ from './components/pages/faq/FAQ';
import Login from './components/pages/login/Login';
import PeruRoutes from './components/pages/peru/PeruRoutes';
import NepalRoutes from './components/pages/nepal/NepalRoutes';
import EBoard from './components/pages/eboard/EBoard';

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/nepal/*" element={<NepalRoutes />} />
      <Route path="/peru/*" element={<PeruRoutes />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="/eboard" element={<EBoard />} />
    </Routes>
  );
}

export default Paths;

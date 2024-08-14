import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PeruHome from './PeruHome';
import VirgenDelCarmenElementarySchool from './VirgenDelCarmenElementarySchool';
import IrrigationReservoir from './IrrigationReservoir';

function PeruRoutes() {
    return (
        <Routes>
            {/* Correct path definitions for nested routes */}
            <Route path="/" element={<PeruHome />} />
            <Route path="virgen-del-carmen-elementary-school" element={<VirgenDelCarmenElementarySchool />} />
            <Route path="irrigation-reservoir" element={<IrrigationReservoir />} />
        </Routes>
    );
}

export default PeruRoutes;

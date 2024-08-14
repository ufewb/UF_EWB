import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PeruHome from './PeruHome';
import VirgenDelCarmenElementarySchool from './VirgenDelCarmenElementarySchool';
import IrrigationReservoir from './IrrigationReservoir';

function PeruRoutes() {
    return (
        <Routes>
            {/* route path = specifying url pattern */}
            <Route path="/" element={<PeruHome />} />
            <Route path="/peru/virgen-del-carmen-elementary-school" element={<VirgenDelCarmenElementarySchool />} />
            <Route path="/peru/irrigation-reservoir" element={<IrrigationReservoir />} />
        </Routes>
    );
};

export default PeruRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NepalHome from './NepalHome';
import Khanalthok_2014_18 from './Khanalthok_2014_18';
import Phoolbari_2017_21 from './Phoolbari_2017_21';
import Phoolbari_2021_24 from './Phoolbari_2021_24';

function NepalRoutes() {
    return (
        <Routes>
            {/* route path = specifying url pattern */}
            <Route path="/" element={<NepalHome />} />
            <Route path="khanalthok_2014_18" element={<Khanalthok_2014_18 />} />
            <Route path="phoolbari_2017_21" element={<Phoolbari_2017_21 />} />
            <Route path="phoolbari_2021_24" element={<Phoolbari_2021_24 />} />
        </Routes>
    );
};

export default NepalRoutes;

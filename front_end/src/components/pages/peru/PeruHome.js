import React from 'react';
import { Link } from 'react-router-dom';

function PeruHome() {
    return (
        <div>
            <h1>Peru</h1>
            <Link to="/virgen-del-carmen-elementary-school">Virgen del Carmen Elementary School</Link>
            <Link to="/irrigation-reservoir">Irrigation Reservoir</Link>
        </div>
    );
}

export default PeruHome;

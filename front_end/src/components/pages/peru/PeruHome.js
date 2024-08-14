import React from 'react';
import { Link } from 'react-router-dom';

function PeruHome() {
    return (
        <div>
            <h1>Peru</h1>
            <div>
                <Link to="/peru/virgen-del-carmen-elementary-school">Virgen del Carmen Elementary School</Link>
            </div>
            <div>
                <Link to="/peru/irrigation-reservoir">Irrigation Reservoir</Link>
            </div>
        </div>
    );
}

export default PeruHome;

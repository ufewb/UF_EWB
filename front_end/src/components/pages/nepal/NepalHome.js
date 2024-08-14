import React from 'react';
import { Link } from 'react-router-dom';
import "./Nepal.css";

function NepalHome() {
    return (
        <div>
            <h1>Nepal</h1>
            <div>
                <Link to="/nepal/phoolbari_2021_24">Phoolbari (2021-2024)</Link>
            </div>
            <div>
                <Link to="/nepal/phoolbari_2017_21">Phoolbari (2017-2021)</Link>
            </div>
            <div>
                <Link to="/nepal/khanalthok_2014_18">Khanalthok (2014-2018)</Link>
            </div>
        </div>
    );
}

export default NepalHome;


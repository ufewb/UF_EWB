import React from 'react';
import './EBoard.css';
import { Link } from 'react-router-dom';

import sample from "../pictures/headshots/headshot_sample.png"
import email from "../pictures/footer/email-logo.png"

function EBoard() {
    return (
        <div>
            <h1 className='category'>LEADERSHIP</h1>
            <div className="main">
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/cathrine-beshay-b32749253/" target="_blank"><p className="name">Cathrine Beshay</p> </a>
                    </div>
                    <p className="position">President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/donald-luchetti/" target="_blank"> <p className="name">Donald Luchetti</p></a>
                    </div>
                    <p className="position">Vice President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/jasmyne-angel-346184265/" target="_blank"> <p className="name">Jasmyne Angel</p></a>
                    </div>
                    <p className="position">Treasurer</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href ="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank"><p className="name">Colin Brumbach</p></a>
                    </div>
                    <p className="position">Head of Member Integration & Engagement</p>
                </div>
            </div>

            <h1 className='category'>NEPAL TEAM</h1>
            <div className="main nepal-team">
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/cathrine-beshay-b32749253/" target="_blank"><p className="name">Cathrine Beshay</p> </a>
                    </div>
                    <p className="position">President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/donald-luchetti/" target="_blank"> <p className="name">Donald Luchetti</p></a>
                    </div>
                    <p className="position">Vice President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href = "https://www.linkedin.com/in/jasmyne-angel-346184265/" target="_blank"> <p className="name">Jasmyne Angel</p></a>
                    </div>
                    <p className="position">Treasurer</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href ="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank"><p className="name">Colin Brumbach</p></a>
                    </div>
                    <p className="position">Head of Member Integration & Engagement</p>
                </div>
            </div>
        </div>
    );
}

export default EBoard;
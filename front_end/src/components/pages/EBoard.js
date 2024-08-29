import React, { useRef, useEffect } from 'react';
import './EBoard.css';
import { Link } from 'react-router-dom';
import sample from "../pictures/headshots/headshot_sample.png";
import email from "../pictures/footer/email-logo.png";

function EBoard() {
    const fadeInSectionRef = useRef([]); // Initialize as an array

    // Ensure `fadeInSectionRef.current` is always an array
    if (!Array.isArray(fadeInSectionRef.current)) {
        fadeInSectionRef.current = [];
    }

    useEffect(() => {
        const handleScroll = () => {
            if (Array.isArray(fadeInSectionRef.current) && fadeInSectionRef.current.length > 0) {
                fadeInSectionRef.current.forEach((section) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                        if (isVisible) {
                            section.classList.add('is-visible');
                        } else {
                            section.classList.remove('is-visible');
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the event once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !fadeInSectionRef.current.includes(el)) {
            fadeInSectionRef.current.push(el);
        }
    };

    return (
        <div>
            <h1 className='category fade-in-section' ref={addToRefs}>LEADERSHIP</h1>
            <div className="main fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/cathrine-beshay-b32749253/" target="_blank" rel="noreferrer">
                            <p className="name">Cathrine Beshay</p>
                        </a>
                    </div>
                    <p className="position">President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/donald-luchetti/" target="_blank" rel="noreferrer">
                            <p className="name">Donald Luchetti</p>
                        </a>
                    </div>
                    <p className="position">Vice President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/jasmyne-angel-346184265/" target="_blank" rel="noreferrer">
                            <p className="name">Jasmyne Angel</p>
                        </a>
                    </div>
                    <p className="position">Treasurer</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank" rel="noreferrer">
                            <p className="name">Colin Brumbach</p>
                        </a>
                    </div>
                    <p className="position">Head of Member Integration & Engagement</p>
                </div>
            </div>

            <h1 className='category fade-in-section' ref={addToRefs}>NEPAL TEAM</h1>
            <div className="main nepal-team fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/cathrine-beshay-b32749253/" target="_blank" rel="noreferrer">
                            <p className="name">Cathrine Beshay</p>
                        </a>
                    </div>
                    <p className="position">President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/donald-luchetti/" target="_blank" rel="noreferrer">
                            <p className="name">Donald Luchetti</p>
                        </a>
                    </div>
                    <p className="position">Vice President</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/jasmyne-angel-346184265/" target="_blank" rel="noreferrer">
                            <p className="name">Jasmyne Angel</p>
                        </a>
                    </div>
                    <p className="position">Treasurer</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <img src={email} className="linkedin" alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank" rel="noreferrer">
                            <p className="name">Colin Brumbach</p>
                        </a>
                    </div>
                    <p className="position">Head of Member Integration & Engagement</p>
                </div>
            </div>
        </div>
    );
}

export default EBoard;

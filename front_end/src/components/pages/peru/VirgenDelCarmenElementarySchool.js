import React, { useEffect, useRef } from 'react';
import './PeruProjects.css';
import signImage from "../peru/perupics/VDCschoolsign.jpg";
import docImage from "../peru/perupics/ewbdocumentation.jpg";
import ImpDocImage from "../peru/perupics/VDCimplementationDoc.jpg";
import { Link } from 'react-router-dom';

function VirgenDelCarmenElementarySchool() {

    const fadeInSectionRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
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

    const handleScrollToSection = () => {
        document.getElementById('doc-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='VDC-header fade-in-section' ref={addToRefs}>
                <div className="VDC-title">
                    <h1>Virgen del Carmen Elementary School</h1>
                    <h2>2015-2018</h2>
                </div>
            </div>
            <div className = "container">
                <div className= 'buttons fade-in-section' ref={addToRefs}>
                    <Link to = "/peru" className = "peruHomeButton">  Peru Home  </Link>
                    <Link to="/peru/irrigation-reservoir" className='peruHomeButton'>Other Project</Link>
                    <button className = "documentationButton" onClick={handleScrollToSection}>Documentation</button>
                </div>
                <div className="body_text fade-in-section" ref={addToRefs}>
                    <p>Our first project in our five-year partnership with the community of Maras, Peru involved bringing clean water to the community's elementary school, Virgen del Carmen.</p>
                </div>
                <div className = "text-w-img-div">
                    <div className = "img-div-VDC">
                        <img src= {signImage} alt="VDC school sign"/>
                        <div className = "photo-caption">
                            <p>Virgen Del Carmen School Sign</p>
                        </div>
                    </div>
                    <div className="text-next-to-img">
                        <p>In the summer of 2018, we installed an antibacterial/antimicrobial basin for the community's elementary school, Virgen del Carmen, to store drinking water in. The new basin provides up to 1100 liters of clean drinking water for the school's children and faculty through the day when running water is not available. We also restored the water supply to one of the school's classroom buildings which previously had no running water. We did this by connecting an existing public water line to an existing underground storage tank located in the school's courtyard, and then using that underground tank to supply water to the classroom building. Our team trained the school staff how to properly maintain these projects, and these projects continue to function beautifully at this very moment — we call that a success!</p>
                    </div>
                </div>
                <div className="documentation-div fade-in-section" id="doc-section" ref={addToRefs}>
                    <div className="documentation-title">
                        <h4>Documentation</h4>
                    </div>
                    <div className="documentation-grid"> 
                        <div className="VDC-documentation-grid-boxes">
                            <div className="documentation-img">
                                <img src={docImage} alt="VDC documentation"/>
                            </div>
                            <div className="documentation-caption">
                                <p>Project Budget and Expenses</p>
                            </div>
                        </div>
                        <div className="VDC-documentation-grid-boxes">
                            <div className="implementation-img">
                                <img src={ImpDocImage} alt="VDC implementation"/>
                            </div>
                            <div className="documentation-caption">
                                <p>Post Implementation/Post Assessment Report</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-margin"></div>
            </div>
        </div>
    );
}

export default VirgenDelCarmenElementarySchool;

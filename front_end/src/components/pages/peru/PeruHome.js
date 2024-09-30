import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Peru.css";

import currentProjPic from "./pictures/PeruIR3.png";
import IMG1 from "./pictures/IMG1.png";
import IMG2 from "./pictures/IMG2.png";
import IMG3 from "./pictures/IMG3.png";
import IMG4 from "./pictures/IMG4.png";
import IMG5 from "./pictures/IMG5.png";
import IMG6 from "./pictures/IMG6.png";

function PeruHome() { 
    const [active, setActive] = useState(0); // state to manage active slide in gallery
    const items = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6]; // list of images for the gallery
    const captions = [
        { info: "Town in Peru" },
        { info: "Our project leads in Maras, Peru" },
        { info: "The mountains in Peru" },
        { info: "Virgen del Carmen Elementary School" },
        { info: "The mountains in Peru" },
        { info: "The old water system in our Irrigation Project" },
    ];
    const lengthItems = items.length;

    // function to navigate to the next slide
    const nextSlide = () => {
        setActive((prev) => (prev + 1) % lengthItems);
    };

    // function to navigate to the previous slide
    const prevSlide = () => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    };

    const fadeInSectionRef = useRef([]); // array of refs to track elements for fade-in effect

    // Add refs to each section for tracking visibility
    const addToRefs = (el) => {
        if (el && !fadeInSectionRef.current.includes(el)) {
            fadeInSectionRef.current.push(el);
        }
    };

    // useEffect hook to handle scroll event for fade-in sections
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
        handleScroll(); // Initial check on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Top section containing Peru image and title */}
            <div className='hero-section'>
                <h1>PERU</h1>
                <button className = "buttonApplication"><a href ="https://support.ewb-usa.org/campaign/university-of-florida-gainesville-chapter/c83963" target="_blank">DONATE HERE</a></button>
            </div>
            {/* Main container for all the content */}
            <div className='content-container'>
                {/* Section for "Who We Are" content */}
                <div className='who-we-are-section fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <div className='who-we-are-text'>
                        <h1>WHO WE ARE</h1>
                        <div className='description-text'>
                            <p>Engineers Without Borders - USA allows engineers and aspiring engineering students around the country to use their education and skills in engineering design to provide humanitarian aid to communities around the world as well as gain professional educational opportunities for its members. The University of Florida's chapter of Engineers Without Borders currently has three teams: domestic team, Nepal team and Peru team.  We are the University of Florida's chapter of Engineers Without Borders Peru Team. We are currently in a five-year partnership with the community of Maras Ayllu, Peru. Maras Ayllu is a small town in rural Peru located near the base of Machu Picchu. The community is currently facing both water storage and water quality issues which we will be assessing throughout our partnership.</p>   
                        </div>            
                    </div>
                    <div className='project-image-container'>
                        <img src={currentProjPic} alt='Project in Peru' className='project-image' />
                        <p>Virgen del Carmen</p>
                    </div>        
                </div>

                {/* Section for "What We Do" content */}
                <div className='what-we-do-section fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <h1>WHAT WE DO</h1>
                    <div className='description-text'>
                        <p>Engineers Without Borders - USA has chapters across the United States. Their mission statement is:</p> 
                        <p>"EWB-USA supports community-driven development programs worldwide by collaborating with local partners to design and implement sustainable engineering projects, while creating transformative experiences and responsible leaders."</p>
                        <p>Our partnership with Maras Ayllu guides every aspect of our project. The community members identify the issues in the area they would like to solve, and we work with them to help bring the solution to fruition. We travel to the community once a year to implement our projects and assess the community for future projects. During each assessment trip, our team collects quantitative data and conducts informal community surveys to better understand the community's needs. By designing projects that have strong community support and input and by teaching the appropriate community members how to maintain the implemented projects, we help to ensure that Maras Ayllu becomes increasingly self-sufficient and that the progress achieved is long-term.</p>
                        <p>Our past projects:</p>
                    </div>
                    {/* Links to project details */}
                    <div className='project-links'>
                        <div>
                            <Link to="/peru/virgen-del-carmen-elementary-school" className='project-button'>
                                Virgen del Carmen Elementary School
                            </Link>
                        </div>
                        <div>
                            <Link to="/peru/irrigation-reservoir" className='project-button'>
                                Irrigation Reservoir
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Gallery section for displaying images */}
                <div className='gallery-section fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <div className='gallery-title'>
                        <h1>GALLERY</h1>
                    </div>
                    <div className='gallery-container'>
                        <div className='slider-wrapper'>
                            <div className='slider'>
                                <div className='slide-list'>
                                    {items.map((item, index) => (
                                        <div
                                            className={`slide-item ${index === active ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img src={item} alt={`MP${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                {/* Caption for the gallery images */}
                                <div className='gallery-caption'>
                                    <p>{captions[active].info}</p>
                                </div>
                                {/* Navigation buttons for the gallery */}
                                <div className='slider-buttons'>
                                    <button id='prev' onClick={prevSlide}> {'<'} </button>
                                    <button id='next' onClick={nextSlide}> {'>'} </button>
                                </div>
                                {/* Dots for gallery navigation */}
                                <ul className='slider-dots'>
                                    {items.map((_, index) => (
                                        <li
                                            key={index}
                                            className={index === active ? 'active' : ''}
                                            onClick={() => setActive(index)}
                                        ></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-margin'></div>
            </div>
        </div>
    );
}

export default PeruHome;

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
    const [active, setActive] = useState(0);
    const items = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
    const captions = [
        { info: "random info1 ahsfhjks hajdfhakj hajfhak afjhka" },
        { info: "random info2 ahsfhjks hajdfhakj hajfhak afjhka" },
        { info: "random info3 ahsfhjks hajdfhakj hajfhak afjhka" },
        { info: "random info4 ahsfhjks hajdfhakj hajfhak afjhka" },
        { info: "random info5 ahsfhjks hajdfhakj hajfhak afjhka" },
        { info: "random info6 ahsfhjks hajdfhakj hajfhak afjhka" },
    ];
    const lengthItems = items.length;

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % lengthItems);
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    };

    const fadeInSectionRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !fadeInSectionRef.current.includes(el)) {
            fadeInSectionRef.current.push(el);
        }
    };

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
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='intro-boxPeru'>
                <h1>Peru</h1>
                <button className='buttonDonate'>Donate</button>
            </div>
            <div className='info-box'>
                <div className='TextandPic fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <div className='whoWeAreText'>
                        <h1>WHO WE ARE</h1>
                        <div className='descriptiveText'>
                            <p>Engineers Without Borders - USA allows engineers and aspiring engineering students around the country to use their education and skills in engineering design to provide humanitarian aid to communities around the world as well as gain professional educational opportunities for its members. The University of Florida's chapter of Engineers Without Borders currently has three teams: domestic team, Nepal team and Peru team.  We are the University of Florida's chapter of Engineers Without Borders Peru Team. We are currently in a five-year partnership with the community of Maras Ayllu, Peru. Maras Ayllu is a small town in rural Peru located near the base of Machu Picchu. The community is currently facing both water storage and water quality issues which we will be assessing throughout our partnership.</p>   
                        </div>            
                    </div>
                    <div>
                        <img src={currentProjPic} alt='Random Project Picture' className='projectPic' />
                        <div className='caption1'>
                            Picture from Virgen del Carmen
                        </div> 
                    </div>        
                </div>

                <div className='pastProjects fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <h1>WHAT WE DO</h1>
                    <div className='descriptiveText'>
                        <p>Engineers Without Borders - USA has chapters across the United States. Their mission statement is:</p> 
                        <p>"EWB-USA supports community-driven development programs worldwide by collaborating with local partners to design and implement sustainable engineering projects, while creating transformative experiences and responsible leaders. "</p>
                        <p>Our partnership with Maras Ayllu guides every aspect of our project. The community members identify the issues in the area they would like to solve, and we work with them to help bring the solution to fruition. We travel to the community once a year to implement our projects and assess the community for future projects. During each assessment trip, our team collects quantitative data and conducts informal community surveys to better understand the community's needs. By designing projects that have strong community support and input and by teaching the appropriate community members how to maintain the implemented projects, we help to ensure that Maras Ayllu becomes increasingly self-sufficient and that the progress achieved is long-term.</p>
                        <p>Our past projects:</p>
                    </div>
                    <div className='buttonsLink'>
                        <div>
                            <Link to="/peru/virgen-del-carmen-elementary-school" className='buttonLink'>
                                Virgen del Carmen Elementary School
                            </Link>
                        </div>
                        <div>
                            <Link to="/peru/irrigation-reservoir" className='buttonLink'>
                                Irrigation Reservoir
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='Gallery fade-in-section' ref={(el) => fadeInSectionRef.current.push(el)}>
                    <div className='textGallery'>
                        <h1>Gallery</h1>
                    </div>
                    <div className='SliderContainer'>
                        <div className='emptyContainer'>
                            <div className='slider'>
                                <div className='list'>
                                    {items.map((item, index) => (
                                        <div
                                            className={`item ${index === active ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img src={item} alt={`MP${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='captionSlider'>
                                    <p>{captions[active].info}</p>
                                </div>
                                <div className='buttonsOfSlider'>
                                    <button id='prev' onClick={prevSlide}> {'<'} </button>
                                    <button id='next' onClick={nextSlide}> {'>'} </button>
                                </div>
                                <ul className='dots'>
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
                <div className='margin'></div>
            </div>
        </div>
    );
}

export default PeruHome;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Nepal.css";

import nepalProjectPic from "../nepal/nepalpics/nepalProjectPic.png";
import IMG7 from "../nepal/nepalpics/IMG7.png";
import IMG8 from "../nepal/nepalpics/IMG8.png";
import IMG9 from "../nepal/nepalpics/IMG9.png";
import IMG10 from "../nepal/nepalpics/IMG10.png";
import IMG11 from "../nepal/nepalpics/IMG11.png";
import IMG12 from "../nepal/nepalpics/IMG12.png";

function NepalHome() {
    const [active, setActive] = useState(0); // State to track the active slide
    const items = [IMG7, IMG8, IMG9, IMG10, IMG11, IMG12]; // Array of gallery images
    const captions = [
        { info: "Town in Phoolbari" },
        { info: "Kid on our trip to Phoolbari" },
        { info: "Our team leads in Phoolbari" },
        { info: "Students at Shree Mathurapati Secondary School" },
        { info: "Classroom in Shree Mathurapati Secondary School" },
        { info: "Corn storage in a town in Phoolbari" },
    ];
    const lengthItems = items.length;

    // Function to navigate to the next slide
    const nextSlide = () => {
        setActive((prev) => (prev + 1) % lengthItems);
    };

    // Function to navigate to the previous slide
    const prevSlide = () => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    };

    const fadeInSectionRef = useRef([]); // Array to hold refs for fade-in sections

    // Add new section ref to the list
    const addToRefs = (el) => {
        if (el && !fadeInSectionRef.current.includes(el)) {
            fadeInSectionRef.current.push(el);
        }
    };

    // Handle fade-in effect based on scroll visibility
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
            {/* Top hero section with Nepal title */}
            <div className='hero-section-nepal fade-in-section' ref={addToRefs}>
                <h1>NEPAL</h1>
                <button className = "buttonApplication"><a href ="https://support.ewb-usa.org/campaign/university-of-florida-gainesville-chapter/c83963" target="_blank">DONATE HERE</a></button>
            </div>

            {/* Main content container */}
            <div className='content-container-nepal'>

                {/* Section for "Who We Are" */}
                <div className='who-we-are-section-nepal fade-in-section' ref={addToRefs}>
                    <div className='who-we-are-text-nepal'>
                        <h1 className = "title">WHO WE ARE</h1>
                        <div className='description-text-nepal'>
                            <p>The Nepal Team is one of the two teams under the University of Florida chapter of Engineers Without Borders. We are a 501(c)(3) non-profit, humanitarian organization founded in 2013. Since then, we have fully implemented in Khanalthok, Nepal, and are working on implementation in Phoolbari, Nepal. The outreach of our work focuses on providing clean, locally-sourced water in these regions whose only water source is infected with E-Coli and other bacteria. <br/><br/> Together, our team consists of approximately 40 undergraduate students who are dedicated to working on meaningful engineering projects in international communities. Our team works year-round on designs, fundraising, lesson plans, and research & development to address water quality and sanitation. Our team is comprised of five sub-teams: Design, Fundraising, Communications, PMEL, and Enrichment.</p>   
                        </div>            
                    </div>
                    {/* Project image with caption */}
                    <div className='project-image-container-nepal'>
                        <img src={nepalProjectPic} alt='Project in Nepal'/>
                        <p>Picture from Shree Mathurapati School</p>
                    </div>        
                </div>

                {/* Section for "What We Do" */}
                <div className='what-we-do-section-nepal fade-in-section' ref={addToRefs}>
                    <h1 className = "title">WHAT WE DO</h1>
                    <div className='description-text-nepal'>
                        <p>Our design team focuses on the design plans and materials needed to implement these projects. The Fundraising team writes grants, coordinates local fundraising events, and reaches out for corporate partnerships. Comprised of a group of Nepali speakers, the Communications team is our link to Phoolbari and Khanalthok while we are in the states, closing the language barrier between our two communities. The PMEL (Planning, Monitoring, Evaluation, & Learning) team concentrates on the longevity and sustainability of our work, ensuring the village knows how to use and maintain the rainwater catchment and sanitation systems. The Enrichment team coordinates programs where we can educate the local school students on sanitation, gender equality, and some core STEM topics.</p> 
                    </div>
                    {/* Links to project details */}
                    <div className='project-links-nepal'>
                        <Link to="/nepal/phoolbari_2021_24" className='project-button-nepal'>Phoolbari (2021-2024)</Link>
                        <Link to="/nepal/phoolbari_2017_21" className='project-button-nepal'>Phoolbari (2017-2021)</Link>
                        <Link to="/nepal/khanalthok_2014_18" className='project-button-nepal'>Khanalthok (2014-2018)</Link>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className='gallery-section-nepal fade-in-section' ref={addToRefs}>
                    <div className='gallery-title-nepal'>
                        <h1>GALLERY</h1>
                    </div>
                    <div className='gallery-container-nepal'>
                        <div className='slider-wrapper-nepal'>
                            <div className='slider-nepal'>
                                <div className='slide-list-nepal'>
                                    {items.map((item, index) => (
                                        <div
                                            className={`slide-item-nepal ${index === active ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img src={item} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='gallery-caption-nepal'>
                                    <p>{captions[active].info}</p>
                                </div>
                                <div className='slider-buttons-nepal'>
                                    <button id='prev' onClick={prevSlide}> {'<'} </button>
                                    <button id='next' onClick={nextSlide}> {'>'} </button>
                                </div>
                                <ul className='slider-dots-nepal'>
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
            </div>
        </div>
    );
}

export default NepalHome;

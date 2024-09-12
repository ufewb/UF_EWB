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

function PeruHome() {
    const [active, setActive] = useState(0);
    const items = [IMG7, IMG8, IMG9, IMG10, IMG11, IMG12];
    const captions = [
        { info: "Town in Phoolbari" },
        { info: "Kid on our trip to Phoolbari" },
        { info: "Our team leads in Phoolbari" },
        { info: "Students at Shree Mathurapati Secondary School" },
        { info: "Classroom in Shree Mathurapati Secondary School" },
        { info: "Corn storage in a town in Phoolbari" },
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
            <div className='intro-boxNepal fade-in-section' ref={addToRefs}>
                <h1>NEPAL</h1>
                {/* <button className='buttonDonate'>Donate</button> */}
            </div>
            <div className='info-box'>

                <div className='TextandPic fade-in-section' ref={addToRefs}>
                    <div className='whoWeAreText'>
                        <h1>WHO WE ARE</h1>
                        <div className='descriptiveText'>
                            <p>The Nepal Team is one of the two teams under the University of Florida chapter of Engineers Without borders.  We are a 501(c)(3) non-profit, humanitarian organization founded in 2013. Since then, we have fully implemented in Khanalthok, Nepal and are working on implementation in Phoolbari, Nepal.  The outreach of our work focuses on providing clean, locally-sourced water in these regions whose only water source is infected with E-Coli and other bacteria. <br></br><br></br>Together, our team consists of approximately 40 undergraduate students who are dedicated to working on meaningful engineering projects in international communities. Our team works year-round on designs, fundraising, lesson plans, and research & development to address water quality and sanitation.  Our team is comprised of five sub-teams: Design, Fundraising, Communications, PMEL, and Enrichment.</p>
                        </div>            
                    </div>
                    <div className='imgAndcaption'>
                        <img src={nepalProjectPic} alt='Random Project Picture'/>
                        <div className='caption1nepal'>
                            Picture from Shree Mathurapati School
                        </div> 
                    </div>        
                </div>

                <div className='pastProjects fade-in-section' ref={addToRefs}>
                    <h1>WHAT WE DO</h1>
                    <div className='descriptiveText'>
                   <p>Our design team focuses on the design plans and materials needed to implement these projects.  Fundraising team writes grants, coordinates local fundraising events, and reaches out for corporate partnerships.  Comprised of a group of Nepali speakers, the Communications team is our link to Phoolbari and Khanalthok while we are in the states, closing the language barrier between our two communities.  The PMEL (Planning, Monitoring, Evaluation, & Learning) team concentrates on the longevity and sustainability of our work, ensuring the village knows how to use and maintain the rainwater catchment and sanitation systems.  The Enrichment team coordinates programs where we can educate the local school students on sanitation, gender equality, and some core STEM topics.
                    <br></br><br></br>Collectively, we join under one mission: to provide the basic human right of clean water universally.  We do not hope to go, implement, and move on, but hope to make a lasting and impressionable impact on these children.</p> 
                    </div>
                    <div className='buttonsLink'>
                        <div>
                            <Link to="/nepal/phoolbari_2021_24" className='buttonLink'>
                                Phoolbari (2021-2024)
                            </Link>
                        </div>
                        <div>
                            <Link to="/nepal/phoolbari_2017_21" className='buttonLink'>
                                Phoolbari (2017-2021)
                            </Link>
                        </div>
                        <div>
                            <Link to="/nepal/khanalthok_2014_18" className='buttonLink'>
                                Khanalthok (2014-2018)
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='Gallery fade-in-section' ref={addToRefs}>
                    <div className='textGallery'>
                        <h1>GALLERY</h1>
                    </div>
                    <div className='SliderContainer'>
                        <div className='emptyContainer'>
                        <div className='sliderNepal'>
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

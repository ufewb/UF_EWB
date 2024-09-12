import React, { useRef, useEffect } from 'react';
import './EBoard.css';
import { Link } from 'react-router-dom';
import sample from "../../pictures/headshots/headshot_sample.png";
import email from "../../pictures/footer/email-logo.png";

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
            {/* get involved header */}
            <div className='eboardBox fade-in-section' ref={addToRefs}>
                <h1>MEET THE TEAMS</h1>
            </div>

            <h1 className='category fade-in-section' ref={addToRefs}>LEADERSHIP</h1>
            <div className="main fade-in-section" ref={addToRefs}>
            <div>
                <img src={sample} className="headshot" alt="Headshot" />
                <div className="name-wrapper">
                <a href="mailto:ewb.ufl@gmail.com">
                    <img src={email} className="email-button" alt="Email Icon" />
                </a>
                <a href="https://www.linkedin.com/in/cathrine-beshay-b32749253/" target="_blank" rel="noreferrer">
                    <p className="name">Cathrine Beshay</p>
                </a>
            </div>
                <p className="position">President</p>
            </div>


                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <a href="mailto:universityoffloridagainesville@chapters-ewb-usa.org">
                            <img src={email} className="email-button" alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/donald-luchetti/" target="_blank" rel="noreferrer">
                            <p className="name">Donald Luchetti</p>
                        </a>
                    </div>
                    <p className="position">Vice President</p>
                </div>
                    
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <a href="mailto:universityoffloridagainesville@chapters-ewb-usa.org">
                            <img src={email} className="email-button" alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jasmyne-angel-346184265/" target="_blank" rel="noreferrer">
                            <p className="name">Jasmyne Angel</p>
                        </a>
                    </div>
                    <p className="position">Treasurer</p>
                </div>
                
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                    <a href="mailto:ewb.ufl.involvement@gmail.com">
                    <img src={email} className="email-button" alt="Email Icon" />
                    </a>
                        <a href="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank" rel="noreferrer">
                            <p className="name">Colin Brumbach</p>
                        </a>
                    </div>
                    <p className="position">Head of Member Integration & Engagement</p>
                </div>
            </div>

            <Link to="/nepal">  {/* This makes the Nepal Team header clickable */}
                <h1 className='category fade-in-section' ref={addToRefs}>NEPAL TEAM</h1>
            </Link>
            <div className="main nepal-team fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <a href="mailto:ewb.ufl.nepal@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/elenarollins/" target="_blank" rel="noreferrer">
                            <p className="name">Elena Rollins</p>
                        </a>
                    </div>
                    <p className="position">Nepal Project Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <a href="mailto:ewb.ufl.nepal@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/priyakrit-singh-rathore-2b1a281a6/" target="_blank" rel="noreferrer">
                            <p className="name">Priyakrit Rathore</p>
                        </a>
                    </div>
                    <p className="position">Nepal Project Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a> */}
                        <a href="https://www.linkedin.com/in/aarnavgautam/" target="_blank" rel="noreferrer">
                            <p className="name">Aarnav Gautam</p>
                        </a>
                    </div>
                    <p className="position">Communications Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a> */}
                        <a href="https://www.linkedin.com/in/colin-brumbach-4a620a231/" target="_blank" rel="noreferrer">
                            <p className="name">Shota & Brad</p>
                        </a>
                    </div>
                    <p className="position">Design Lead(s)</p>
                </div>
            </div>
            <Link to="/peru">  {/* This makes the Nepal Team header clickable */}
                <h1 className='category fade-in-section' ref={addToRefs}>PERU TEAM</h1>
            </Link>
            <div className="main peru-team fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                    <a href="mailto:ewb.ufl.peru@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" /></a>
                        <a href="https://www.linkedin.com/in/victoria-stevenson-uf/" target="_blank" rel="noreferrer">
                            <p className="name">Victoria Stevenson</p>
                        </a>
                    </div>
                    <p className="position">Peru Project Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.nepal@gmail.com"> */}
                        {/* <img src={email} className="email-button" alt="Email Icon" /> */}
                        {/* </a> */}
                        <a href="https://www.linkedin.com/in/sonia-anorga/" target="_blank" rel="noreferrer">
                            <p className="name">Sonia Anorga</p>
                        </a>
                    </div>
                    <p className="position">Peru Communications Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.nepal@gmail.com"> */}
                        {/* <img src={email} className="email-button" alt="Email Icon" /> */}
                        {/* </a> */}
                        <a href="https://www.linkedin.com/in/fabiana-gonzalez-710048218/" target="_blank" rel="noreferrer">
                            <p className="name">Fabiana Gonzalez</p>
                        </a>
                    </div>
                    <p className="position">Peru Design Lead</p>
                </div>
            </div>

            <h1 className='category fade-in-section' ref={addToRefs}>FUNDRAISING TEAM</h1>
            <div className="main peru-team fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com"> */}
                        {/* <img src={email} className="email-button" alt="Email Icon" /> */}
                        {/* </a> */}
                        <a href="https://www.linkedin.com/in/heidiweiksnar/" target="_blank" rel="noreferrer">
                            <p className="name">Heidi Weiksnar</p>
                        </a>
                    </div>
                    <p className="position">Fundraising Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a> */}
                        <a href="https://www.linkedin.com/in/mateo-rodriguez-0b6345240/" target="_blank" rel="noreferrer">
                            <p className="name">Mateo Rodriguez</p>
                        </a>
                    </div>
                    <p className="position">Fundraising Lead</p>
                </div>
            </div>

            <h1 className='category fade-in-section' ref={addToRefs}>PUBLIC RELATIONS TEAM</h1>
            <div className="main pr-team fade-in-section" ref={addToRefs}>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com"> */}
                        {/* <img src={email} className="email-button" alt="Email Icon" /> */}
                        {/* </a> */}
                        <a href="https://www.linkedin.com/in/elizabeth-mccreary-81617b204/" target="_blank" rel="noreferrer">
                            <p className="name">Ellie McCreary</p>
                        </a>
                    </div>
                    <p className="position">Public Relations Lead</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        <a href="mailto:ewb.ufl.software@gmail.com">
                        <img src={email} className="email-button" alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank" rel="noreferrer">
                            <p className="name">Arossa Adhikary</p>
                        </a>
                    </div>
                    <p className="position">Webmaster & Media Manager</p>
                </div>
                <div>
                    <img src={sample} className="headshot" alt="Headshot" />
                    <div className="name-wrapper">
                        {/* <a href="mailto:ewb.ufl.involvement@gmail.com"> */}
                        {/* <img src={email} className="email-button" alt="Email Icon" /> */}
                        {/* </a> */}
                        <a href="https://www.linkedin.com/in/maria-mcdonald21/" target="_blank" rel="noreferrer">
                            <p className="name">Maria McDonald</p>
                        </a>
                    </div>
                    <p className="position">Events Planner</p>
                </div>
            </div>
                    </div>
    );
}

export default EBoard;

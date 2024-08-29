import React, { useRef, useEffect } from 'react';
import "../peru/PeruProjects.css";
import { Link } from 'react-router-dom';
import largeSS from "../nepal/nepalpics/nepalSS.jpg";

function Khanalthok_2014_18() {
    const fadeInSectionRef = useRef([]); // Initialize as an array

    useEffect(() => {
        const handleScroll = () => {
            if (Array.isArray(fadeInSectionRef.current) && fadeInSectionRef.current.length > 0) {
                fadeInSectionRef.current.forEach((section) => {
                    if (section) { // Ensure the section exists
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
            <div className='IR-header fade-in-section' ref={addToRefs}>
                <div className="IR-title">
                    <h1>Shree Janahit Secondary School</h1>
                    <h2>2014-2018</h2>
                    <h2>Khanalthok, Nepal</h2>
                </div>
            </div>
            <div className="container">
                <div className='buttons fade-in-section' ref={addToRefs}>
                    <Link to="/nepal" className="peruHomeButton">Nepal Home</Link>
                    <Link to="/nepal/phoolbari_2021_24" className="peruHomeButton">Phoolbari 2021-2024</Link>
                    <Link to="/nepal/phoolbari_2017_21" className="peruHomeButton">Phoolbari 2017-2021</Link>
                </div>
                <div className="body-text-nepal fade-in-section" ref={addToRefs}>
                    <p>Our first project in Khanalthok, Nepal consisted of establishing a reliable and clean water source at the community’s secondary school, the Shree Janahit Secondary School, over a course of five years...</p>
                    <div className="sub-title">
                        <h4>Assessment (May 2014 and May 2015)</h4>
                    </div>
                    <p>Our team’s five-year partnership with the community of Khanalthok began in the summer of 2014, during the initial assessment...</p>
                    <div className="sub-title">
                        <h4>Implementation (May 2016 and May 2017)</h4>
                    </div>
                    <p>In the summers of 2016 and 2017, our team implemented handwashing stations and a rainwater catchment system...</p>
                    <div className="sub-title">
                        <h4>Monitoring and Evaluation (May 2018)</h4>
                    </div>
                    <p>Following the two implementation trips, the team’s last trip to Khanalthok consisted of monitoring and evaluating the implemented systems...</p>
                </div>
                <div className="text-w-img-div2 fade-in-section" ref={addToRefs}>
                    <div className="documentation-div">
                        <div className="documentation-img">
                            <img src={largeSS} alt="largess"/>
                        </div>
                    </div>
                </div>
                <div className="bottom-margin"></div>
            </div>
        </div>
    );
}

export default Khanalthok_2014_18;

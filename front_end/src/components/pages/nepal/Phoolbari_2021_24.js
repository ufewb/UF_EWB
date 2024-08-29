import React, { useEffect, useRef } from 'react';
import "../peru/PeruProjects.css";
import { Link } from 'react-router-dom';
import NepalPic from "../nepal/nepalpics/nepalpicture.jpg";
import largeSS from "../nepal/nepalpics/nepalSS.jpg";

function Phoolbari_2021_24() {
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

    return (
        <div>
            <div className='IR-header fade-in-section' ref={addToRefs}>
                <div className="IR-title">
                    <h1>Shree Mathurapati Secondary School</h1>
                    <h2>2021-2024</h2>
                    <h2>Phoolbari, Nepal</h2>
                </div>
            </div>
            <div className="container">
                <div className='buttons fade-in-section' ref={addToRefs}>
                    <Link to="/nepal" className="peruHomeButton">Nepal Home</Link>
                    <Link to="/nepal/phoolbari_2017_21" className="peruHomeButton">Phoolbari 2017-2021</Link>
                    <Link to="/nepal/khanalthok_2014_18" className="peruHomeButton">Khanalthok 2014-2018</Link>
                </div>
                <div className="body-text-nepal fade-in-section" ref={addToRefs}>
                    <p>The University of Florida Engineers Without Borders Nepal Team is excited to announce upcoming progress in Phoolbari, Nepal as we develop a plan for new and improved sanitation and hydration systems at Shree Mathurapati Secondary School...</p>
                    <p>The 4-year partnership will be split into two assessment trips, one implementation trip, and one monitoring and evaluation trip as follows:</p>
                    <div className="sub-title">
                        <h4>Assessment (Remote 2021-22 and January 2023)</h4>
                    </div>
                    <p>In May of 2021, members of the Nepal team were unable to travel to Phoolbari for a site assessment on account of coronavirus travel bans...</p>
                    <div className="sub-title">
                        <h4>Implementation (December 2023)</h4>
                    </div>
                    <p>In the winter following the 2023 assessment trip, members of the Nepal team will oversee construction of a rainwater harvesting system...</p>
                    <div className="sub-title">
                        <h4>Implementation (August 2024)</h4>
                    </div>
                    <p>The team will inspect and test all of the constructed systems during our trip...</p>
                    <div className="sub-title">
                        <h4>Monitoring and Evaluation (December 2024)</h4>
                    </div>
                    <p>While beginning the assessment phase of a new project, the traveling team will visit Phoolbari once more to monitor and evaluate the implemented systems...</p>
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

export default Phoolbari_2021_24;

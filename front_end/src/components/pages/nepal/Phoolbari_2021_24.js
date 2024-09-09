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
                    <p>The University of Florida Engineers Without Borders Nepal Team is excited to announce upcoming progress in Phoolbari, Nepal as we develop a plan for new and improved sanitation and hydration systems at Shree Mathurapati Secondary School. Phoolbari is a village located in rural Nepal, nearly a three-hour drive from Kathmandu, the closest major city. In Phoolbari, many water sources are turbid, containing harmful bacteria such as fecal coliform. These water sources are also very few and far away, with the closest water source to the secondary school being nearly a 30-minute walk through mountainous terrain. This lack of clean and accessible water sources at the secondary school has led to several cases of preventable waterborne illnesses among the student population, placing a severe strain on the students, teachers, and community members of Phoolbari. Additionally, since the spread of the coronavirus in early 2020, Nepali communities have been taking many hygienic precautions to avoid illness, placing a major emphasis on handwashing, despite the lack of infrastructure to facilitate these habits. By seeking a long-term solution to this problem, the community hopes to eradicate all cases of waterborne illness at the school by supplying the students with potable drinking water and improving their sanitary systems for a fighting chance against bacteria and disease. </p>
                    <p>The 4-year partnership will be split into two assessment trips, one implementation trip, and one monitoring and evaluation trip as follows:</p>
                    <div className="sub-title">
                        <h4>Assessment (Remote 2021-22 and January 2023)</h4>
                    </div>
                    
                    <p>In May of 2021, members of the Nepal team were unable to travel to Phoolbari for a site assessment on account of coronavirus travel bans. Although restricted, the chapter organized its first-ever remote assessment, relying heavily on our community partner to examine the issues and express to us the most dire needs of the community. This past May of 2022, members of the Nepal team completed a preliminary report stating the conditions of the secondary school with suggestions for repairs and construction of new facilities. To finalize the data collection needed for a solid design and implementation, select members of the team traveled to the secondary school at the start of 2023 with the intent of repairing known issues in tandem with assessing the site for additional information.</p>
                    <p>Our team traveled to Nepal to complete an assessment of the site in order to build on their research to make a more comprehensive design plan for how to best meet the school's needs. Some examples of data collected on site were measurements, water quality tests, survey data, and other relevant information pertinent to design implementation. This trip allowed for a physical inspection of the site's existing infrastructure, the surveying of communities, and the assessment of needs. In addition, the team was able to reestablish its long-standing relationship with the community after a lack of travel during the COVID-19 pandemic. The team met with school and community leadership to ensure the project is aligned with the community's needs and wishes. Part of the social aspect of the trip included educational outreach by providing lesson plans on hygiene and water-related topics. </p>
                    <div className="sub-title">
                        <h4>Implementation (December 2023)</h4>
                    </div>
                    <p>In the winter following the 2023 assessment trip, members of the Nepal team will oversee construction of a rainwater harvesting system including gutters, downspouts, and filters connected to a pre-existing cistern. A pump and pipes from the cistern to another storage tank at a higher elevation on site will also be installed. This will then gravity feed a new brick handwashing station and sand filtration system for purified drinking water. Most of the labor will be contracted, and most supplies are likely sourced straight from Nepal to support the community businesses and economy. </p>
                    <div className="sub-title">
                        <h4>Implementation (August 2024)</h4>
                    </div>
                    <p>The team will inspect and test all of the constructed systems during our trip. We will also conduct a site assessment of the school's pre-existing latrines for accessibility, functionality, and estimated lifespan. After the assessment, our team will makes plans for the construction of pipelines for easy access at the latrines as well as gutters, storage tanks, stairs, and any other infrastructure. In August 2024, our team will travel to Nepal for the implementation of our latrine designs.  </p>
                    <p>In addition to implementation, the Nepal team seeks to help the teachers of the secondary school in sanitation education by highlighting certain water and sanitation hygiene (WASH) principles that are related to the ongoing project.</p>
                    <div className="sub-title">
                        <h4>Monitoring and Evaluation (December 2024)</h4>
                    </div>
                    <p>While beginning the assessment phase of a new project, the traveling team will visit Phoolbari once more to monitor and evaluate the implemented systems, noting any dissatisfaction from the community and reporting on necessary final adjustments. A large part of the project is sustainability, therefore, it is important to measure the success and long-term functionality of each component of the implemented systems. </p>
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

import React from 'react';
import './PeruProjects.css';
import signImage from "../peru/perupics/VDCschoolsign.jpg"
import docImage from "../peru/perupics/ewbdocumentation.jpg"

function VirgenDelCarmenElementarySchool() {

    const handleScrollToSection = () => {
        document.getElementById('doc-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='VDC-header'>
                <div className = "VDC-title">
                    <h1>Virgen del Carmen Elementary School</h1>
                    <h2>2015-2018</h2>
                </div>
            </div>
            <div className = "container">
                <div className= 'buttons'>
                    <button className = "peruHomeButton">  Peru Home  </button>
                    <button className = "peruHomeButton"> Other Project </button>
                    <button className = "documentationButton" onClick={handleScrollToSection}> Documentation </button>
                </div>
                <div className = "body_text">
                    <p>Our first project in our five-year partnership with the community of Maras, Peru involved bringing clean water to the community's elementary school, Virgen del Carmen. </p>
                </div>
                <div className = "text-w-img-div">
                    <div className = "img-div-VDC">
                        <img src= {signImage} alt="VDC school sign"/>
                        <div className = "photo-caption">
                            <p>this is a caption. write something idk</p>
                        </div>
                    </div>
                    <div className = "text-next-to-img">
                        <p>In the summer of 2018, we installed an antibacterial/antimicrobial basin for the community's elementary school, Virgen del Carmen, to store drinking water in. The new basin provides up to 1100 liters of clean drinking water for the school's children and faculty through the day when running water is not available. We also restored the water supply to one of the school's classroom buildings which previously had no running water. We did this by connecting an existing public water line to an existing underground storage tank located in the school's courtyard, and then using that underground tank to supply water to the classroom building. Our team trained the school staff how to properly maintain these projects, and these projects continue to function beautifully at this very moment — we call that a success!</p>
                    </div>
                </div>
                <div className = "documentation-div" id = "doc-section">
                    <div className = "sub-title">
                        <h4>Documentation</h4>
                    </div>
                    <div className = "documentation-img">
                        <img src= {docImage} alt="VDC documentation"/>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default VirgenDelCarmenElementarySchool;

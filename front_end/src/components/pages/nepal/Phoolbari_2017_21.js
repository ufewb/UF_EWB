import React from 'react';
// import { Link } from 'react-router-dom';
import "../peru/PeruProjects.css";
import NepalPic from "../nepal/nepalpics/nepalpicture.jpg"
import closeupImage from "../peru/perupics/IRcloseup.jpg"
import timelineImage from "../peru/perupics/IRtimeline.jpg" 
import StockImage from "../peru/perupics/DocStockImg.jpg"

function Phoolbari_2017_21 () {
    return (
        <div>
          <div className='IR-header'>
                <div className = "IR-title">
                    <h1>Shree Janajagriti Primary School</h1>
                    <h2>2017-2021</h2>
                </div>
            </div>
            <div className = "container">
                <div className= 'buttons'>
                    {/* <Link to = "/peru" className = "peruHomeButton">Peru Home</Link> */}
                    <button className = "peruHomeButton"> Other Project </button>
                    {/* <button className = "documentationButton" onClick={handleScrollToSection}> Documentation </button> */}
                </div>
                <div className = "body_text">
                    <p>The University of Florida Engineers Without Borders Nepal Team is proud to be serving the community of Phoolbari, Nepal in an effort to bring clean and accessible water to the Shree Janajagriti Primary School. Phoolbari is a village located in rural Nepal, nearly a three-hour drive from Kathmandu, the closest major city. In Phoolbari, many water sources are turbid, containing harmful bacteria such as fecal coliform. These water sources are also very few and far away, with the closest water source to the primary school being nearly a 30-minute walk through mountainous terrain. This lack of clean and accessible water sources at the primary school has led to several cases of preventable waterborne illnesses among the student population, placing a severe strain on the students, teachers, and community members of Phoolbari. By seeking a long-term solution to this problem, the community hopes to eradicate all cases of waterborne illness at the school by supplying the students with potable drinking water and improving their sanitary systems for a fighting chance against bacteria and disease. </p>
                    <p>The 4-year partnership will be split into two assessment trips, one implementation trip, and one monitoring and evaluation trip as follows:</p>
                </div>
                    <div className = "text-w-img-div2"> 
                        <div className = "text-next-to-img2">
                            <div className = "sub-title">
                                <h4>Assessment (May 2017 and May 2018)</h4>
                            </div>
                            <p>In May of 2017, members of the Nepal team traveled to Phoolbari to examine these issues and develop a preliminary plan for implementation. In May of 2018, members of the Nepal team returned for a secondary assessment and spent most of the following year designing a sustainable solution to the problems at the primary school. </p>
                            <div className = "sub-title">
                                <h4>Implementation (May 2019)</h4>
                            </div>
                            <p>During the May 2019 implementation trip, members of the Nepal team constructed a rainwater catchment system on the roof of the school campus and outfitted it with two first-flush filtration systems, two 5000L high density polyethylene tanks with concrete basins and tap stands, and a combination of bio-sand and ceramic filters. A secondary implementation was planned to construct a 40kL ferro-cement tank, however, this implementation was canceled due to COVID-19. </p>
                            <p>In addition to implementation, the Nepal team seeks to help the teachers of the primary school in sanitation education by highlighting certain water and sanitation hygiene (WASH) principles that are related to the ongoing project. </p>
                        </div>
                        <div className = "img-div2">
                            <img src= {NepalPic} alt="timeline image"/>
                            <div className = "photo-caption">
                                <p>this is a caption. write anything idk</p>
                            </div>
                        </div>
                        <div className = "body_text2">
                            <div className = "sub-title">
                                <h4>Monitoring and Evaluation (Remote May 2020)</h4>
                            </div>
                            <p>After the implementation trip, the team conducted a remote Monitoring and Evaluation of the project. A large part of the project is sustainability therefore it is important to measure the success and long-term functionality of each component of the implemented systems.  </p>
                        </div>
                    </div>

                    <div className = "bottom-margin">

                    </div>
            </div>
        </div>
    );
}

export default Phoolbari_2017_21;
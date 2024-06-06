import React from 'react';
import "./PeruProjects.css";
import closeupImage from "../peru/perupics/IRcloseup.jpg"


function IrrigationReservoir() {
    return (
        <div>
            <div className='IR-header'>
                <div>
                    <h1>Irrigation Reservoir</h1>
                </div>
                <div>
                    <h2>2018-2022</h2>
                </div>
            </div>
            <div className = "container">
                <div className= 'buttons'>
                    <button className = "peruHomeButton">  Peru Home  </button>
                    <button className = "peruHomeButton"> Other Project </button>
                </div>
                <div className = "body_text">
                    <p>At the town hall that we hosted in Maras Ayllu in the summer of 2018, a majority of the 80-100 community members in attendance echoed the need for an irrigation reservoir east of the community's center. The farming community in that region needs access to water for agricultural purposes during the three-month dry season to sustain crops.  With approximately 70% of the community owning and/or being employed on agricultural land, having an irrigation reservoir is directly connected to the economic livelihood of the community.  Our chapter believes strongly in our mission of working in partnership with Maras Ayllu to implement a sustainable solution to the community's water quantity and quality issues.  When the community tells us what problems it faces, our team finds solutions.</p>
                </div>

                <div className = "text-w-img-div">
                    <div className = "img-div">
                        <div className = "IR-image">
                            <img src= {closeupImage} alt="Irrigation Resivoir"/>
                        </div>
                    </div>
                    <div className = "text-next-to-img">
                        <p>Throughout the 2018-2019 school year, our team worked diligently, planning our irrigation reservoir implementation trip for August 2019. Our plan was to construct an irrigation reservoir in a designated location in Maras Ayllu that would provide water for the agricultural community’s crops throughout the long dry season. We conducted soil tests, water balances and completed all our documentation for EWB-USA with flying colors. </p>
                        <p>Throughout the summer of 2019, the team reached out to community leaders on multiple occasions to confirm the status of their financial support and the necessity of a permit to construct the reservoir, but these attempts were unsuccessful.</p>
                        <p>During the month of July, a month before our scheduled implementation trip, we were notified that the community could not provide our team with 5% of the estimated cost of the project (as they had agreed) and that we had not received a permit to build the reservoir because of miscommunication.</p>
                        <p>Without the funding and the permit, we offered the community a smaller reservoir that could be built within the planned timeline, but the community indicated that they would not want a reservoir in this location if it could not irrigate all of the surrounding cropland as intended. They brought several other potential site locations to our attention that would benefit from a smaller reservoir, but our team ultimately decided it was best to not implement a reservoir this year in an unfamiliar and unassessed location.</p>
                    </div>
                    <div className = "body_text">
                        <p>You can imagine our frustration when we heard this news and made this decision after completing one of our most successful fundraising years on record. Yet, mindful of all the support we have received for this project, we put our minds to it and developed a new plan. A better plan.</p>
                    </div>
                    <div className = "sub-div">
                        <div className = "sub-title">
                            <h4>2019 Assessment Trip</h4>
                        </div>
                        <div className = "body_text">
                            <p>We did travel to Maras Ayllu in August 2019 as an assessment trip. We examined potential sites and decided on a new location in the same region for an irrigation reservoir that will truly sustain the land and 65 families. We collected soil data, determined a cost estimate for this reservoir project, spoke with the farmers involved and met with municipality engineers and community leaders to finalize our plans.</p>
                            <p>We also visited Virgen del Carmen (our first implementation project in Peru) for a post-monitoring assessment. We are pleased to report the previous year's water tank project is functioning as intended and the school is very happy with the project.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default IrrigationReservoir;

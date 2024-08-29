import React, { useEffect, useRef } from 'react';
import "./PeruProjects.css";
import closeupImage from "../peru/perupics/IRcloseup.jpg";
import timelineImage from "../peru/perupics/IRtimeline.jpg";
import StockImage from "../peru/perupics/DocStockImg.jpg";
import { Link } from 'react-router-dom';

function IrrigationReservoir() {

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

    const handleScrollToSection = () => {
        document.getElementById('doc-section2').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='IR-header fade-in-section' ref={addToRefs}>
                <div className="IR-title">
                    <h1>Irrigation Reservoir</h1>
                    <h2>2018-2022</h2>
                </div>
            </div>
            <div className="container">
                <div className='buttons fade-in-section' ref={addToRefs}>
                    <Link to="/peru" className="peruHomeButton">Peru Home</Link>
                    <button className="peruHomeButton">Other Project</button>
                    <button className="documentationButton" onClick={handleScrollToSection}>Documentation</button>
                </div>
                <div className="body_text fade-in-section" ref={addToRefs}>
                    <p>At the town hall that we hosted in Maras Ayllu in the summer of 2018, a majority of the 80-100 community members in attendance echoed the need for an irrigation reservoir east of the community's center. The farming community in that region needs access to water for agricultural purposes during the three-month dry season to sustain crops.  With approximately 70% of the community owning and/or being employed on agricultural land, having an irrigation reservoir is directly connected to the economic livelihood of the community.  Our chapter believes strongly in our mission of working in partnership with Maras Ayllu to implement a sustainable solution to the community's water quantity and quality issues.  When the community tells us what problems it faces, our team finds solutions.</p>
                </div>

                <div className="text-w-img-div fade-in-section" ref={addToRefs}>
                    <div className="img-div">
                        <img src={closeupImage} alt="Irrigation Reservoir"/>
                        <div className="photo-caption">
                            <p>this is a caption. write anything idk</p>
                        </div>
                    </div>
                    <div className="text-next-to-img">
                        <p>Throughout the 2018-2019 school year, our team worked diligently, planning our irrigation reservoir implementation trip for August 2019. Our plan was to construct an irrigation reservoir in a designated location in Maras Ayllu that would provide water for the agricultural community’s crops throughout the long dry season. We conducted soil tests, water balances and completed all our documentation for EWB-USA with flying colors. </p>
                        <p>Throughout the summer of 2019, the team reached out to community leaders on multiple occasions to confirm the status of their financial support and the necessity of a permit to construct the reservoir, but these attempts were unsuccessful.</p>
                        <p>During the month of July, a month before our scheduled implementation trip, we were notified that the community could not provide our team with 5% of the estimated cost of the project (as they had agreed) and that we had not received a permit to build the reservoir because of miscommunication.</p>
                        <p>Without the funding and the permit, we offered the community a smaller reservoir that could be built within the planned timeline, but the community indicated that they would not want a reservoir in this location if it could not irrigate all of the surrounding cropland as intended. They brought several other potential site locations to our attention that would benefit from a smaller reservoir, but our team ultimately decided it was best to not implement a reservoir this year in an unfamiliar and unassessed location.</p>
                    </div>
                    <div className="body_text fade-in-section" ref={addToRefs}>
                        <p>You can imagine our frustration when we heard this news and made this decision after completing one of our most successful fundraising years on record. Yet, mindful of all the support we have received for this project, we put our minds to it and developed a new plan. A better plan.</p>
                    </div>
                </div>
                <div className="text-w-img-div2 fade-in-section" ref={addToRefs}> 
                    <div className="text-next-to-img2">
                        <div className="sub-title">
                            <h4>2019 Assessment Trip</h4>
                        </div>
                        <p>We did travel to Maras Ayllu in August 2019 as an assessment trip. We examined potential sites and decided on a new location in the same region for an irrigation reservoir that will truly sustain the land and 65 families. We collected soil data, determined a cost estimate for this reservoir project, spoke with the farmers involved and met with municipality engineers and community leaders to finalize our plans.</p>
                        <p>We also visited Virgen del Carmen (our first implementation project in Peru) for a post-monitoring assessment. We are pleased to report the previous year's water tank project is functioning as intended and the school is very happy with the project.</p>
                        <div className="sub-title">
                            <h4>New Reservoir Location</h4>
                        </div>
                        <p>Based on municipality records, 69 families own land that will be directly impacted by the proposed irrigation reservoir. With an average family size of three, there will be 207 direct beneficiaries. There already exists a rural reservoir at this location that connected to a spring water source. Currently, this reservoir is too small to contain all the water that the spring is providing, causing it to overflow and waste water in a community where water is already scarce. We chose this site in order to expand the reservoir to hold the flowing water. We plan to line it with a geomembrane so water isn't lost through seepage, making the preexisting reservoir more useful and functional for the farmers who depend on it.</p>
                        <p>Throughout the 2019-2020 school year, we worked to design our new reservoir, and we planned our implementation for May 2020. In March 2020, EWB-USA suspended all travel due to the spread of COVID-19.</p>
                        <div className="sub-title">
                            <h4>Now</h4>
                        </div>
                        <p>We are hosting team meetings over Zoom to ensure our team stays connected and dedicated to our mission. We will continue to fundraise and raise awareness about the water crisis in Maras Ayllu, Peru. We are speaking with community officials to renew our partnership and continue working with them for the coming years and fulfill our mission to bring them solutions.</p>
                    </div>
                    <div className="img-div2">
                        <img src={timelineImage} alt="timeline image"/>
                        <div className="photo-caption">
                            <p>this is a caption. write anything idk</p>
                        </div>
                    </div>
                    <div className="body_text2 fade-in-section" ref={addToRefs}>
                        <p>Designing and implementing an irrigation reservoir expansion in Maras will be our most ambitious project to date.  We need to invest approximately $31,500 into this project in order to bring it to life and help bolster the economy, sustainability and livelihood of the community.</p>
                        <p>We’re excited to make more progress and for what the future holds. To stay updated with our progress throughout this school year, sign up for our mailing list and follow us on social media!</p>
                    </div>
                </div>
                <div className="documentation-div fade-in-section" id="doc-section2" ref={addToRefs}>
                    <div className="sub-title">
                        <h4>Documentation</h4>
                    </div>
                    <div className="documentation-grid">
                        <div className="IR-documentation-grid-boxes">
                            <div className="stock-img">
                                <img src={StockImage} alt="StockImg"/>
                            </div>
                            <div className="documentation-caption">
                                <p>2019 Assessment Trip Expense Report</p>
                            </div>
                        </div>
                        <div className="IR-documentation-grid-boxes">
                            <div className="stock-img">
                                <img src={StockImage} alt="StockImg"/>
                            </div>
                            <div className="documentation-caption">
                                <p>Assessment Report</p>
                            </div>
                        </div>
                        <div className="IR-documentation-grid-boxes">
                            <div className="stock-img">
                                <img src={StockImage} alt="StockImg"/>
                            </div>
                            <div className="documentation-caption">
                                <p>Irrigation Reservoir Alternative Analysis Report</p>
                            </div>
                        </div>
                        <div className="IR-documentation-grid-boxes">
                            <div className="stock-img">
                                <img src={StockImage} alt="StockImg"/>
                            </div>
                            <div className="documentation-caption">
                                <p>Irrigation Reservoir Pre-Implementation Report</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-margin"></div>
            </div>
        </div>
    );
}

export default IrrigationReservoir;

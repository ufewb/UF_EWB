import React, { useState, useRef, useEffect } from 'react';
import './GetInvolved.css';
import randomImg from '../peru/pictures/randomPic.png';

function GetInvolved() {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);
    const fadeInSectionRef = useRef([]);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    useEffect(() => {
        answerRefs.current.forEach((el, index) => {
            if (index === openIndex) {
                el.style.maxHeight = el.scrollHeight + "px";
                el.style.opacity = "1";
            } else {
                el.style.maxHeight = "0";
                el.style.opacity = "0";
            }
        });
    }, [openIndex]);

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
            {/* get involved header */}
            <div className='intro-box1 fade-in-section' ref={addToRefs}>
                <h1>GET INVOLVED</h1>
            </div>

            {/* donate */}
            <div className='info-box fade-in-section' ref={addToRefs}>
                <div className = "applicationButton">
                    <h1 className = "labelGetInvovled">Support our efforts!</h1>
                    <button className = "buttonApplication"><a href ="https://support.ewb-usa.org/campaign/university-of-florida-gainesville-chapter/c83963" target="_blank">DONATE HERE</a></button>
                </div>
            </div>

            {/* faq */}
            
            <div className = "missionStatement">
                <p>
                    Engineers Without Borders - USA Nepal and Peru Teams are committed to leveraging engineering expertise to provide sustainable access to clean, locally-sourced water in underserved Nepalese and Peruvian communities. We strive to create lasting, positive impacts through collaborative partnerships, empowering communities to achieve long-term water security and improved health outcomes.
                </p>
            </div>

            <div className= 'fade-in-section' ref={addToRefs}>
                <h1 className="faq-title"> FAQs</h1>

                {[...Array(5)].map((_, index) => (
                    <div className='faq' key={index}>
                        <button className='Q-Box' onClick={() => toggleFAQ(index)}>
                        {[
                            "Q. What is the mission of UF Engineers Without Borders (EWB)?",
                            "Q. Who can apply to join UF EWB?",
                            "Q. What subteams are available, and what do they focus on?",
                            "Q. What does the application process involve?",
                            "Q. How much time is required for involvement with UF EWB?"
                        ][index]}
                        </button>
                        
                        <div className='answer' ref={(el) => (answerRefs.current[index] = el)}>
                            <p>
                                {[
                                    "Our mission is to improve water and sanitation systems for communities in Nepal and Peru by implementing sustainable and innovative solutions. We aim to bring education, outreach, human-centered design, and humanitarian aid to these regions through a collaborative team effort, open to students of all majors and skill levels.",
                                    "Everyone is welcome to apply! We accept students from all majors, skill levels, and interests. Whether you're interested in technical design, communications, fundraising, public relations, or web design, there's a place for you in UF EWB. No prior experience is necessary, just a passion for making a positive impact.",
                                    "UF EWB has several subteams, each with a specific focus:\n• Design: Focuses on technical assessment, project planning, and water system construction in Nepal and Peru.\n• Communications: Collaborates with communities and partners, and helps with marketing and budgeting.\n• Fundraising: Organizes events and raises funds through grants, merchandise, and presentations.\n• Public Relations: Manages member engagement, social media, and outreach efforts.\n• Web Design: Builds and maintains our team’s website (coding skills are a plus).",
                                    "The application process requires submitting two PDF files: your completed application and resume. Applications must be emailed to ewb.ufl.involvement@gmail.com by 11:59 PM on Friday, September 20th. You will receive a confirmation email after submission. If selected, you will be invited for an interview on Saturday, September 28th, with a make-up interview available via Zoom on Sunday, September 29th.",
                                    "On average, members are expected to contribute 3-5 hours per week. This includes a biweekly General Body Meeting for all members, along with additional subteam meetings. However, the time commitment can increase during critical project deadlines or grant submission periods."
                                ][index]}
                            </p>                            
                        </div>
                    </div>
                ))}
            </div>

            {/* adding space w/ footer */}
            <div className='margin'></div>
            
        </div>
    );
}

export default GetInvolved;

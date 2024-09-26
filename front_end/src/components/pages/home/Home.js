import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ImagesComponent from './SponsorsHomePage';
import videoEWB from "../../pictures/home/ewb_homepage.mp4";
import Projects from './ProjectsHome'; 

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in');

      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 50) {
          element.classList.add('visible');
        }
      });
    };

    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', playVideo);

    // Try to play the video immediately
    playVideo();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', playVideo);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-img-container">
        <div className="video-container">
          <video 
            ref={videoRef}
            width="100%" 
            height="auto" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
          >
            <source src={videoEWB} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="textBeg">ENGINEERING <br /> WITHOUT BORDERS</h1>
        <h1 className="textBeg textSubtitle">The University of Florida Chapter</h1>
      </div>

      <Projects /> 

      <h1 className="teamsHeading sponsors-title">SPONSORS</h1>

      <div className="sponsors-container fade-in"> 
        <ImagesComponent />
      </div>
    </div>
  );
}

export default Home;
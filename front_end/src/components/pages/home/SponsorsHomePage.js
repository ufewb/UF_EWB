import React from "react";
import './Home.css';

// Import each file into component file using import statements
import allWeatherContractorLogo from "../../pictures/home/sponsors/all-weather-contractors-logo.png";
import floridaSepticIncLogo from "../../pictures/home/sponsors/florida-septic-inc-logo.png";
import prattAndWhitneyLogo from "../../pictures/home/sponsors/pratt-and-whitney-logo.png";
import rafetelisLogo from "../../pictures/home/sponsors/rafetelis-logo.png";
import schwabCharitableLogo from "../../pictures/home/sponsors/schwab-charitable-logo.png";
import studyEdgeLogo from "../../pictures/home/sponsors/study-edge-logo.png";

const sponsorsHomePage = [
  {
    id: 1,
    src: allWeatherContractorLogo,
    alt: "All Weather Contractor Logo",
    link: "https://allweathercontractors.com/"
  },
  {
    id: 2,
    src: floridaSepticIncLogo,
    alt: "Florida Septic Inc Logo",
    link: "https://flsepticinc.com/"
  },
  {
    id: 3,
    src: prattAndWhitneyLogo,
    alt: "Pratt & Whitney Logo",
    link: "https://www.prattwhitney.com/"
  },
  {
    id: 4,
    src: rafetelisLogo,
    alt: "Rafetelis Logo",
    link: "https://www.raftelis.com/"
  },
  {
    id: 5,
    src: schwabCharitableLogo,
    alt: "Schwab Charitable Logo",
    link: "https://www.schwabcharitable.org/"
  },
  {
    id: 6,
    src: studyEdgeLogo,
    alt: "Study Edge Logo",
    link: "https://studyedge.com/landing/"
  },
];

function ImagesComponent() {
  return (
    <div className="images-container">
      {sponsorsHomePage.map((image) => (
        <a href = {image.link} target = "_blank">
        <img key={image.id} src={image.src} alt={image.alt} />
        </a>
      ))}
    </div>
  );
}

export default ImagesComponent;

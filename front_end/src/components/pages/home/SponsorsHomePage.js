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
  },
  {
    id: 2,
    src: floridaSepticIncLogo,
    alt: "Florida Septic Inc Logo",
  },
  {
    id: 3,
    src: prattAndWhitneyLogo,
    alt: "Pratt & Whitney Logo",
  },
  {
    id: 4,
    src: rafetelisLogo,
    alt: "Rafetelis Logo",
  },
  {
    id: 5,
    src: schwabCharitableLogo,
    alt: "Schwab Charitable Logo",
  },
  {
    id: 6,
    src: studyEdgeLogo,
    alt: "Study Edge Logo",
  },
];

function ImagesComponent() {
  return (
    <div className="images-container">
      {sponsorsHomePage.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default ImagesComponent;

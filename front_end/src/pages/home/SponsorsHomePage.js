import React from "react";
import './Home.css';

import cdmSmith from "../../assets/home/sponsors/cdm-smith-logo.png";
import hazenAndSawyer from "../../assets/home/sponsors/hazen-and-sawyer-logo.jpg";
import wrightPierce from "../../assets/home/sponsors/wright-pierce-logo.png";
import rafetelisLogo from "../../assets/home/sponsors/rafetelis-logo.png";

const sponsorsHomePage = [
  {
    id: 1,
    src: cdmSmith,
    alt: "CDM Smith Logo",
    link: "https://www.cdmsmith.com/en/"
  },
  {
    id: 2,
    src: hazenAndSawyer,
    alt: "Hazen & Sawyer Logo",
    link: "https://www.hazenandsawyer.com/"
  },
  {
    id: 3,
    src: wrightPierce,
    alt: "Wright Pierce Logo",
    link: "https://www.wright-pierce.com/"
  },
  {
    id: 4,
    src: rafetelisLogo,
    alt: "Rafetelis Logo",
    link: "https://www.raftelis.com/"
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

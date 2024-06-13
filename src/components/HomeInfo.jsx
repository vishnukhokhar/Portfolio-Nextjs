import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Link } from "react-router-dom";
import { arrow } from "../assets_3d_portfolio/assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center "> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"></img>
    </Link>
  </div>
);
const renderContent = {
  1: (
    <>
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, am <span className="font-semibold">Vishnu Khokhar 👋</span>
        <br></br>A Software Engineer from India
      </h1>
    </>
  ),
  2: (
    <InfoBox
      text="Searching for a Job Oppurtunity that will help me to showcase my skills"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Worked on many Project and picked up many skills along the way "
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away "
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;

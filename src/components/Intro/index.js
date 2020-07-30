import React from "react";
import backgroundImage from "../../img/table.jpg";
import "../../css/style.css";
import portfolioData from "../PortfolioData";

const Intro = () => {
  const { name } = portfolioData;
  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">I am {name}</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">
                CEO DevFolio,Web Developer,Web Designer,Frontend
                Developer,Graphic Designer
              </span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

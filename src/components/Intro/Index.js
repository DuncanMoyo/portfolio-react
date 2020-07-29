import React, { Component } from "react";
import backgroundImage from "../../img/table.jpg";
import classes from "./Intro.module.css";
import portfolioData from "../PortfolioData";


const Intro = () => {
  const {name} = portfolioData;
  return (
    <div
      id="home"
      className="route"
      className={classes.intro}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.overlayIntro}></div>
      <div className={(classes.introContent, classes.displayTable)}>
        <div className={classes.tableCell}>
          <div className="container">
            <h1 className={classes.introTitle} style={{margin:"mb-4"}}>
              I am {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

import React, { Component } from "react";
import backgroundImage from "../../img/table.jpg";
import classes from "./Intro.module.css";
import portfolioData from "../PortfolioData";

class Intro extends Component {
  render() {
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
                I am {portfolioData.name}
              </h1>
              <p className={classes.introSubtitle}>
                <span className={ classes.textSliderItems}>
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
  }
}

export default Intro;

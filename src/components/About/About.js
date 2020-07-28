import React, { Component } from "react";
import classes from "./About.module.css";
import profilePicture from "../../img/profile.jpg";
import portfolioData from "../PortfolioData";

class About extends Component {
  render() {
    return (
      <section
        id="about"
        className="route"
        className={(classes.aboutMf, classes.sectPt4)}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={classes.boxShadowFull}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className={classes.aboutImg}>
                          <img
                            src={profilePicture}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className={classes.titleS}>Name: </span>{" "}
                            <span>{portfolioData.name}</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Profile: </span>{" "}
                            <span>{portfolioData.role}</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Email: </span>{" "}
                            <span>{portfolioData.email}</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Phone: </span>{" "}
                            <span>{portfolioData.phoneNumber}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className={classes.skillMf}>
                      <p className={classes.titleS}>Skill</p>
                      {portfolioData.skills.map((skill) => {
                        return (
                          <div>
                            <span>
                              <strong>{skill.skillName}</strong>
                            </span>{" "}
                            <strong>
                              <span style={{ float: "right" }}>
                                {skill.skillLevel}%
                              </span>
                            </strong>
                            <div className={classes.progress}>
                              <div
                                className={classes.progressBar}
                                role="progressbar"
                                style={{
                                  width: `${skill.skillLevel}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className={classes.titleBox2}>
                        <h5 className={classes.titleLeft}>About me</h5>
                      </div>
                      <p className="lead">
                          {portfolioData.aboutMe}
                      </p>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

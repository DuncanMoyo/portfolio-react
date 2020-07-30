import React from "react";
import "../../css/style.css";
import profilePicture from "../../img/profile.jpg";
import portfolioData from "../PortfolioData";

const About = () => {  
  const { name, aboutMe, email, phoneNumber, skills, role } = portfolioData;

  return (
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img
                          src={profilePicture}
                          class="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p>
                          <span class="title-s">Name: </span>{" "}
                          <span>{name}</span>
                        </p>
                        <p>
                          <span class="title-s">Profile: </span>{" "}
                          <span>{role}</span>
                        </p>
                        <p>
                          <span class="title-s">Email: </span>{" "}
                          <span>{email}</span>
                        </p>
                        <p>
                          <span class="title-s">Phone: </span>{" "}
                          <span>{phoneNumber}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="skill-mf">
                    <p class="title-s">Skill</p>
                    {skills.map((skill) => {
                      return (
                        <div>
                          <span>{skill.skillName}</span>{" "}
                          <span class="pull-right">{skill.skillLevel}%</span>
                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: `${skill.skillLevel}%` }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">About me</h5>
                    </div>
                    <p class="lead">{aboutMe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

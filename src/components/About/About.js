import React, { Component } from "react";
import classes from './About.module.css'
import profilePicture from '../../img/testimonial-2.jpg';

class About extends Component {
  render() {
    return (
      <section id="about" className='route' className={classes.aboutMf, classes.sectPt4}>
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
                            <span>Morgan Freeman</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Profile: </span>{" "}
                            <span>full stack developer</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Email: </span>{" "}
                            <span>contact@example.com</span>
                          </p>
                          <p>
                            <span className={classes.titleS}>Phone: </span>{" "}
                            <span>(617) 557-0089</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.skillMf}>
                      <p className={classes.titleS}>Skill</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className={classes.progress}>
                        <div
                          className={classes.progressBar}
                          role="progressbar"
                          
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className={classes.progress}>
                        <div
                          className={classes.progressBar}
                          role="progressbar"
                          
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>PHP</span> <span className="pull-right">50%</span>
                      <div className={classes.progress}>
                        <div
                          className={classes.progressBar}
                          role="progressbar"
                          
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">90%</span>
                      <div className={classes.progress}>
                        <div
                          className={classes.progressBar}
                          role="progressbar"
                         
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className={classes.titleBox2}>
                        <h5 className={classes.titleLeft}>About me</h5>
                      </div>
                      <p className="lead">
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
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

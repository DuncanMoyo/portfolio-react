import React, { Component } from "react";
import footerImage from '../../img/overlay-bg.jpg';
import classes from './Contact.module.css'
import ContactData from "../ContactData/ContactData";
import portfolioData from "../PortfolioData";

class Contact extends Component {
  render() {
    const {phoneNumber, address, getInTouch, email} = portfolioData;
    return (
      <section
        className={classes.paralaxMf, classes.footerParalax, classes.sectMt4, classes.bgImage}
        style={{backgroundImage: `url(${footerImage})`}}
      >
        <div className={classes.overlayMF}></div>
        <div className="container">
          <div className="row"> 
            <div className="col-sm-12">
              <div className={classes.contactMf}>
                <div id="contact" className={classes.boxShadowFull} >
                  <div className="row">
                    <div className="col-md-6">
                      <div className={classes.titleBox2}>
                        <h5 className={classes.titleLeft}>Send me a message</h5>
                      </div>
                      <div>
                        <ContactData />
                     </div>
                    </div>
                    <div className="col-md-6">
                      <div className={classes.titleBox2} style={{padding: 'pt-4'}}>
                        <h5 className={classes.titleLeft}>Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          {getInTouch}
                        </p>
                        <ul className={classes.listIco}>
                          <li>
                            <span className="ion-ios-location"></span> {address}
                          </li>
                          <li>
                            <span className="ion-ios-telephone"></span> {phoneNumber}
                          </li>
                          <li>
                            <span className="ion-email"></span> {email}
                          </li>
                        </ul>
                      </div>
                      <div className={classes.socials}>
                        <ul>
                          <li>
                            <a href="">
                              <span className={classes.icoCircle}>
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={classes.icoCircle}>
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={classes.icoCircle}>
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={classes.icoCircle}>
                                <i className="ion-social-pinterest"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
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

export default Contact;

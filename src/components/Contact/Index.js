import React from "react";
import footerImage from "../../img/overlay-bg.jpg";
import ContactData from "../ContactData";
import portfolioData from "../PortfolioData";
import "../../css/style.css";

const Contact = () => {
  
  const { phoneNumber, address, getInTouch, email } = portfolioData;
  return (

    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <ContactData />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">{getInTouch}</p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location"></span>
                          {address}
                        </li>
                        <li>
                          <span className="ion-ios-telephone"></span> {phoneNumber}
                        </li>
                        <li>
                          <span className="ion-email"></span>
                          {email}
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
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
};

export default Contact;

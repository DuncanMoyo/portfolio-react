import React from "react";
import footerImage from "../../img/overlay-bg.jpg";
import ContactData from "../ContactData";
import portfolioData from "../PortfolioData";
import "../../css/style.css";

const Contact = () => {
  
  const { phoneNumber, address, getInTouch, email, socialLinks } = portfolioData;
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
                      <h5 className="title-left">Send Me A Message</h5>
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
                        {socialLinks.map(link => {
                          return (
                            <li key={link.name}>
                            <a href={link.url}>
                              <span className="ico-circle">
                                <i className={link.logo}></i>
                              </span>
                            </a>
                          </li>
                          )
                        })}
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

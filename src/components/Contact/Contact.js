import React, { Component } from "react";
import footerImage from '../../img/overlay-bg.jpg';
import classes from './Contact.module.css'
import ContactData from "../ContactData/ContactData";

class Contact extends Component {
  render() {
    return (
      <section
        className="route" 
        className={classes.paralaxMf, classes.footerParalax, classes.sectMt4, classes.bgImage}
        style={{backgroundImage: `url(${footerImage})`}}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row"> 
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className={classes.titleBox2}>
                        <h5 className={classes.titleLeft}>Send Message Us</h5>
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
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolorum dolorem soluta quidem expedita
                          aperiam aliquid at. Totam magni ipsum suscipit amet?
                          Autem nemo esse laboriosam ratione nobis mollitia
                          inventore?
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-location"></span> 329
                            WASHINGTON ST BOSTON, MA 02108
                          </li>
                          <li>
                            <span className="ion-ios-telephone"></span> (617)
                            557-0089
                          </li>
                          <li>
                            <span className="ion-email"></span> contact@example.com
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
  }
}

export default Contact;

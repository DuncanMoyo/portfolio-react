import React, { Component } from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="copyright-box">
            <p class={classes.copyright}>&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
            <div class={classes.credits}>
              {/* <!--
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
            --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

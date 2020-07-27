import React, { Component } from "react";
import classes from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">
              DevFolio
            </a>
            <button
              className="collapsed" className={classes.navbarToggler}
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll active" href="index.html">
                    Home
                  </a>
                </li>
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll" href="#service">
                    Services
                  </a>
                </li>
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll" href="#work">
                    Work
                  </a>
                </li>
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className={classes.navItem}>
                  <a className="nav-link js-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

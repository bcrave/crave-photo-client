import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
// import Logo from "../../../static/assets/images/logo.png";

const NavigationContainer = (props) => {
  return (
    <div className="nav-wrapper">
      <div className="left-column">
        <div className="phone-number">608-365-0236</div>
      </div>
      <div className="center-column">
        <div className="banner-image">
          <h1>Crave Photography</h1>
        </div>
        <div className="nav-links-wrapper">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/about" activeClassName="nav-link-active">
              About Us
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <div className="right-column">821 E. Inman Pkwy. Beloit, WI 53511</div>
    </div>
  );
};

export default NavigationContainer;

import React from "react";
import logo from '../IMG/logo.png'
// import logo from "../IMG/logo.svg"

import facebook from "../IMG/facebook.png"
import instagram from "../IMG/instagram.png"
import linkedin from "../IMG/linkedin.png"
import youtube from "../IMG/youtube.png"


function Navbar() {
  return (
    <>
      {/* Topbar start  */}
      <div style={{ backgroundColor: "#276c63" }} className="container-fluid  text-white py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start" style={{textShadow: "2px 2px 2px #000000", wordSpacing:"1px", letterSpacing:"1px"}}>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2" />
              <small>
                <a href="tel:+91 9104105104" class="text-light mb-0">
                  +91 9 104 105 104
                </a>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2" />
              <small><a
                href="mailto:himashah_hr@primewealthcare.com subject=hello!"
                style={{ color: "white" }}
              >
                primewealthcare.com
              </a></small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-clock me-2" />
              <small> Mon - Sat : 09:30 AM - 06:30 PM </small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a className="text-white ms-4"
                href="https://www.facebook.com/primewealthcaresolution/"
                target="_blank">
                  <img src={facebook} height="28px" alt="" />
                {/* <i className="fab fa-facebook-f" /> */}
              </a>
              <a className="text-white ms-4"
                href="https://www.youtube.com/@primewealthcaresolutionpvtltd"
                target="_blank">
                  <img src={youtube} height="28px" alt="" />
                
              </a>
              <a className="text-white ms-4"
                href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
                target="_blank">
                  <img src={linkedin} height="28px" alt="" />
                
              </a>
              <a className="text-white ms-4"
                href="https://www.instagram.com/primewealthcare_imf/"
                target="_blank">
                  <img src={instagram} height="30px" alt="" />
               
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End  */}

      {/* Navbar Start  */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <img
              className="img-fluid me-3"
              src={logo}
              alt
            />
            {/* Insure */}
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          
        >
          <span className="navbar-toggler-icon"  />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto  rounded pe-4 py-3 py-lg-0" >
            <a href="/" className="nav-item nav-link ">
              Home
            </a>
            <a href="/About" className="nav-item nav-link">
              About Us
            </a>
            <a href="/Service" className="nav-item nav-link">
              Our Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="/Features" className="dropdown-item">
                  Features
                </a>
                <a href="/Events" className="dropdown-item">
                  Our Events
                </a>
                <a href="/Company" className="dropdown-item">
                  Insurance Partners
                </a>
                <a href="/Team" className="dropdown-item">
                  Team Members
                </a>
                <a href="/Appointment" className="dropdown-item">
                  Appointment
                </a>
                {/* <a href="/Leaders" className="dropdown-item">
                  Leaders
                </a> */}
              </div>
            </div>
            <a href="/Contact" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
        <a href="https://primewealthcare.in/" className="btn btn-primary px-3 d-none d-lg-block "   target="_blank">
          Login
        </a>
      </nav>

      {/* Navbar End  */}
    </>
  );
}

export default Navbar;

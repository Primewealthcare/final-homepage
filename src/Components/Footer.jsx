import React from "react";
import facebook from "../IMG/facebook.png";
import instagram from "../IMG/instagram.png";
import linkedin from "../IMG/linkedin.png";
import youtube from "../IMG/youtube.png";
import Mail from "../IMG/Mail.png";
import calling from "../IMG/calling.png";
import Map from "../IMG/Map.png";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "#276c63" }}
      className="container-fluid footer mt-4 pt-1 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h2
              className="text-white mb-4"
              style={{ textShadow: "2px 2px 2px #000000" }}
            >
              PWS IMF PVT. LTD.
            </h2>
            <p>
              Prime Wealthcare Pvt. is the outcome of years of cumulative
              expertise of the founders in the insurance industry. It is the
              brain child of a team of seasoned financial advisors and planners.
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square me-1"
                href="https://www.instagram.com/primewealthcare_imf/"
                target="_blank"
              >
                <img src={instagram} height="50px" alt="" />
              </a>
              <a
                className="btn btn-square me-1"
                href="https://www.facebook.com/primewealthcaresolution/"
                target="_blank"
              >
                <img src={facebook} height="50px" alt="" />
              </a>
              <a
                className="btn btn-square me-1"
                href="https://www.youtube.com/@primewealthcaresolutionpvtltd"
                target="_blank"
              >
                <img src={youtube} height="45px" alt="" />
              </a>
              <a
                className="btn btn-square me-0"
                href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
                target="_blank"
              >
                <img src={linkedin} height="45px" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5
              className="text-light mb-4"
              style={{ textShadow: "2px 2px 2px #000000" }}
            >
              Address
            </h5>
            <div className="row">
              <div className="col-md-2 col-2 ">
                <img src={Map} height="40px" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <p>
                  <a
                    href="https://www.google.com/maps/place/PRIME+WEALTHCARE+SOLUTION+PVT.+LTD/@23.026231,72.476049,15z/data=!4m6!3m5!1s0x395e9dc1c8c3827d:0x81100dd58db9dd9f!8m2!3d23.0262311!4d72.4760487!16s%2Fg%2F11rchn5dvl?hl=en"
                    target="_blank"
                    style={{ color: "#A7A8B4" }}
                  >
                    510/511, Shivalik Satyamev, Nr. Vakil Saheb Bridge, Ambali -
                    Bopal Junction, Ambali Ahmedabad - 380058
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-2 mb-2">
                <img src={calling} height="40px" alt="" />
              </div>
              <div className="col-md-10 col-10 mt-2 ">
                <p>
                  <a href="tel:+91 9104105104" style={{ color: "#A7A8B4" }}>
                    Call Us: +91 9 104 105 104
                  </a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-2">
                <img src={Mail} height="40px" />
              </div>
              <div className="col-md-10 col-10 mt-2">
                <p>
                  <a
                    href="mailto:himashah_hr@primewealthcare.com subject=hello!"
                    style={{ color: "#A7A8B4" }}
                  >
                    primewealthcare.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5
              className="text-light mb-4"
              style={{ textShadow: "2px 2px 2px #000000" }}
            >
              Quick Links
            </h5>
            <a className="btn btn-link" href="/About">
              About Us
            </a>
            <a className="btn btn-link" href="/Contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="/Service">
              Our Services
            </a>
            <a className="btn btn-link" href="/Appointment">
              Appointment
            </a>
            <a className="btn btn-link" href="/Events">
              Our Events
            </a>
          </div>
          {/* ============= Iframe google map ======================= */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-map-large">
              <iframe
                title="Prime Wealthcare Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.932894203509!2d72.47347377608504!3d23.02623601618992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dc1c8c3827d%3A0x81100dd58db9dd9f!2sPRIME%20WEALTHCARE%20SOLUTION%20IMF%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1766216518805!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container mt-2">
          <div className="row ">
            <div
              className="col-md-6 text-center text-md-start mb-3 mb-md-0"
              style={{
                textShadow: "2px 2px 2px #000000",
                wordSpacing: "1px",
                letterSpacing: "1px",
              }}
            >
              <a href="#">© Prime Wealthcare Solution</a> All Right Reserved.
            </div>
            <div
              className="col-md-6 text-center text-md-end"
              style={{
                textShadow: "2px 2px 2px #000000",
                wordSpacing: "1px",
                letterSpacing: "1px",
              }}
            >
              Design and develop By
              <a href="tel:+91 9106734041" target="_blank">
                {" "}
                © Prime Wealthcare Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

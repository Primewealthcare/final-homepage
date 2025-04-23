import React from "react";
import Workman from "../IMG/Animatedicon/Workman.gif";
import CarAccident from "../IMG/Animatedicon/CarAccident.gif";
import LifeInsiurance from "../IMG/Animatedicon/LifeInsiurance.gif";
import Medical from "../IMG/Animatedicon/Medical.gif";
import CarInsurance from "../IMG/Animatedicon/CarInsurance.gif";
import Moneytransit from "../IMG/Animatedicon/Moneytransit.gif";
import FireInsurance from "../IMG/Animatedicon/FireInsurance.gif";
import Home from "../IMG/Animatedicon/Home.gif"

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Service() {
  return (
    <div style={{backgroundColor: "#276c63"}} >
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      <div className="container-xxl py-5"  >
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5 text-light" style={{textShadow: "2px 2px 4px #000000"}}>
              We Provide professional Insurance Services
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                    
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                      
                      className="img-fluid"
                      src={LifeInsiurance}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Life Insurance</h4>
                </div>
                <p classname="mb-4">
                  We Offer A Plethora Of Life Insurance Policies Through The
                  Channel Of LIFE CORPORATION OF INDIA (L.I.C).
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                   
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                    
                      className="img-fluid"
                      src={Medical}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Health Insurance</h4>
                </div>
                <p className="mb-4">
                  Medical Coverage Is Provided To The Insured During Healthcare
                  <br />
                  Emergencies.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
                {/* <a class="btn btn-light px-3" href="">Read More</a> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                    
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                    
                      className="img-fluid"
                      src={Home}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Home Insurance</h4>
                </div>
                <p classname="mb-4">
                  House Insurance Policy Provides Coverage For Your Own House ,
                  Ranted House , Apartment Or Luxury Mension As Well.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                    
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                   
                      className="img-fluid"
                      src={CarInsurance}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Vehicle Insurance</h4>
                </div>
                <p classname="mb-4">
                  Financial Coverage Against Unforseen Events Suggest Accident
                  Causing Vehicles Damages.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                    
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                    
                      className="img-fluid"
                      src={Moneytransit}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Money In Transit Insurance</h4>
                </div>
                <p classname="mb-4">
                  Provides Coverage Against Loss Of Cash Or Currency Whilst In
                  Transit As Well As In Your Premises Due To Accident Or
                  Misfortune.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                   
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                    
                      className="img-fluid"
                      src={FireInsurance}
                      alt="Fire"
                    />
                  </div>
                  <h4 className="mb-0">Fire Insurance</h4>
                </div>
                <p className="mb-4">
                  Provides Additional Coverage For Loss Or Damage To A Structure
                  Damaged Or Destroyed In A Fire
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                   
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                      
                      className="img-fluid"
                      src={Workman}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Workmen Compensation Insurance</h4>
                </div>
                <p className="mb-4">
                  Providing For The Payment Of Compensation To Employer On
                  Behalf Of It's Employees In Case Of Accidental Injury At Work
                  Place.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div
                    
                    className="service-icon flex-shrink-0 rounded-end me-4"
                  >
                    <img
                     
                      className="img-fluid"
                      src={CarAccident}
                      alt
                    />
                  </div>
                  <h4 className="mb-0">Personal Accident Insurance</h4>
                </div>
                <p className="mb-4">
                  Medical Coverage Is Provided <br />
                  To The Insured On <br />
                  Accidental <br />
                  Emergencies.
                </p>
                <div className="text-center">
                  <a className="btn btn-light px-3" href="tel:+91 9104105104">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Live WhatsApp Chat start  */}
        <div className="livechat">
        <a 
          aria-label="Chat on WhatsApp" 
          href="https://wa.me/919104105104?text= hello, I have a question "   
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Chat on WhatsApp" src={WhatsAppBtnn} className="whatsapp-icon" />
        </a>
      </div>
      
      
    </div>
  );
}

export default Service;

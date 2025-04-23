import React from "react";
import Feature from "../IMG/Feature.jpeg"
import Mail from "../IMG/Animatedicon/Mail.gif"
import Process from "../IMG/Animatedicon/Process.gif"
import Savings from "../IMG/Animatedicon/Savings.gif"
import Setings from "../IMG/Animatedicon/Setings.gif"

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Features() {

  return (
    <div>
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                Few Reasons Why People Choosing Us!
              </h1>
              <p className="mb-4">
                We understand that budget is a major factor in choosing
                insurance. That's why we provide competitive and affordable
                premiums without compromising on coverage quality. We are
                committed to processing claims quickly and fairly Our team of
                experienced insurance professionals is here to guide you through
                the complex world of insurance. We help you understand your
                options, make informed decisions, and choose the best coverage
                for your needs.
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="rounded h-100 p-3">
                    <div
                      style={{ backgroundColor: "#276c63" }}
                      className="d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                    >
                      <img
                        className="align-self-center flex-shrink-2 mb-3"
                        src={Process}
                        alt

                      />
                      <h5 className="mb-0 text-light">Easy Process</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="rounded h-100 p-3">
                    <div
                      style={{ backgroundColor: "#276c63" }}
                      className="d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                    >
                      <img
                        className="align-self-center flex-shrink-2  mb-3"
                        src={Mail}
                        alt
                      />
                      <h5 className="mb-0 text-light">Fast Delivery</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="rounded h-100 p-3">
                    <div
                      style={{ backgroundColor: "#276c63" }}
                      className="d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                    >
                       <img
                        className="align-self-center flex-shrink-2  mb-3"
                        src={Setings}
                        alt
                      />
                      <h5 className="mb-0 text-light">Policy Controlling</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="rounded h-100 p-3">
                    <div
                      style={{ backgroundColor: "#276c63" }}
                      className="d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                    >
                      <img
                        className="align-self-center flex-shrink-2  mb-3"
                        src={Savings}
                        alt
                      />
                      <h5 className="mb-0 text-light">Money Saving</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={Feature}
                  alt
                  style={{ objectFit: "cover" }}
                />
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

export default Features;

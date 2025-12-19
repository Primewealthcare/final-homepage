import React from "react";
import Feature from "../IMG/Feature.jpeg";
import Mail from "../IMG/Animatedicon/Mail.gif";
import Process from "../IMG/Animatedicon/Process.gif";
import Savings from "../IMG/Animatedicon/Savings.gif";
import Setings from "../IMG/Animatedicon/Setings.gif";

import WhatsAppBtnn from "../IMG/WhatsAppBtnn.png";

function Features() {
  return (
    <div>
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* FEATURES SECTION */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 features-section">
            {/* LEFT – STICKY IMAGE */}
            <div className="col-lg-6 features-image-col">
              <div className="features-image-wrapper">
                <img
                  src={Feature}
                  alt="Why people choose Prime Wealthcare"
                  className="features-image"
                />
              </div>
            </div>

            {/* RIGHT – SCROLLING CONTENT */}
            <div className="col-lg-6 features-content features-content-col">
              <h1 className="display-6 mb-4">
                Why People Trust Prime Wealthcare?
              </h1>

              <p className="mb-4">
                We understand that budget is a major factor in choosing
                insurance. That’s why we provide competitive and affordable
                premiums without compromising on coverage. Our experienced
                advisors help you make informed decisions with confidence.
              </p>

              {/* FEATURE CARDS */}
              <div className="features-cards text-white">
                {/* CARD 1 */}
                <div className="feature-card">
                  <img src={Process} alt="Easy insurance process" />
                  <h5 className="text-white">Easy & Transparent Process</h5>
                  <p className="text-white">
                    Our insurance process is designed to be simple, transparent
                    and stress-free. From understanding your needs to selecting
                    the right policy, we guide you step-by-step so you never
                    feel confused or overwhelmed. Clear documentation, minimal
                    paperwork and expert assistance ensure a smooth experience
                    from start to finish.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="feature-card">
                  <img src={Mail} alt="Fast service delivery" />
                  <h5 className="text-white">Fast Response & Service Delivery</h5>
                  <p className="text-white">
                    Time matters when it comes to insurance. Our team ensures
                    quick responses, faster approvals and prompt service
                    whenever you need support. Whether it’s policy issuance,
                    claim assistance or customer queries, we act swiftly to give
                    you peace of mind and reliable protection without delays.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="feature-card">
                  <img src={Setings} alt="Policy control" />
                  <h5 className="text-white"> Complete Policy Control</h5>
                  <p className="text-white">
                    Stay in control of your insurance at every stage. We help
                    you monitor, manage and modify your policies as your life
                    evolves. With expert guidance, regular reviews and proactive
                    support, you always stay informed and confident about your
                    coverage decisions.
                  </p>
                </div>

                {/* CARD 4 */}
                <div className="feature-card">
                  <img src={Savings} alt="Money saving plans" />
                  <h5 className="text-white">Smart Savings & Wealth Protection</h5>
                  <p className="text-white">
                    We believe in protecting your wealth while helping it grow.
                    Our optimized insurance solutions are carefully designed to
                    balance affordability and protection. By choosing the right
                    plans, you save money in the long run without compromising
                    on security, benefits or future financial stability.
                  </p>
                </div>
              </div>
              <div className="text-center mt-5">
                <button className="btn btn-primary px-5 py-3">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Live Chat */}
      <div className="livechat">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/919104105104?text=hello, I have a question"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WhatsAppBtnn}
            alt="Chat on WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Features;

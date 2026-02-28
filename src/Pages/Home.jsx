import React, { useEffect } from "react";
import heroimg324 from "../IMG/heroimg324.png";
import About from "./About";
import Features from "./Features";
import Service from "./Service";
import Company from "./Company";
import Appointment from "./Appointment";

import PIYUSHPANDYA from "../IMG/Leaders/OptimizedLeaders/PIYUSHPANDYA-ezgif-removebg.png"
import DARSHNAPANDYA from "../IMG/Leaders/OptimizedLeaders/DARSHNAPANDYA-ezgif-removebg.png";
import PARULPANDYA from "../IMG/Leaders/OptimizedLeaders/PARULPANDYA-ezgif-removebg-preview.png";
import MITSUMAM from "../IMG/Leaders/OptimizedLeaders/MITSUMAM-ezgif-removebg.png";
import BHARATSINH from "../IMG/Leaders/BHARATSINH.svg";
import HITESHKHERADIYA from "../IMG/Leaders/HITESHKHERADIYA.svg";
import MEHUL from "../IMG/Leaders/OptimizedLeaders/MEHUL-ezgif-removebg.png";
import PRATIKSIR from "../IMG/Leaders/OptimizedLeaders/PRATIKSIR-ezgif-removebg-preview.png";

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png";
import PolicyBrochure from "./PolicyBrochure";
import ModernCarousel from "./Carausal";

function Home() {

   useEffect(() => {
  const interval = setInterval(() => {
    const cards = document.querySelectorAll(".team-card");
    if (!cards.length) return;

    const last = cards[cards.length - 1];
    last.parentNode.insertBefore(last, cards[0]);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <div
    // style={{backgroundColor: "#dcfcf4"}}
    >
      {/* <!-- Back to Top --> */}
      <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>

      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
           <ModernCarousel/>
        </div>
      </div>

      <About />
      <Features />
      <Service />
      <div style={{ background: "#dcfcf4" }}>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
              <h1 className="display-6 mb-5">
                Meet Our Professional Team Members
              </h1>
            </div>
            <div className="row g-4 team-stack">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item rounded stack-card card-1">
                  <img className="img-fluid" src={PIYUSHPANDYA} alt />
                  <div className="text-center p-4">
                    <h5>Piyush Pandya</h5>
                    <span>Founder President And MD</span>
                  </div>
                  <div
                    style={{ background: "#dcfcf4" }}
                    className="team-text text-center p-4"
                  >
                    <h5>Piyush Pandya</h5>
                    <p>Founder President And MD</p>
                    <div className="d-flex justify-content-center">
                      <a
                        className="btn btn-square m-1"
                        href="https://www.instagram.com/piyushpandya4265/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.facebook.com/piyush.pandya.372"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://in.linkedin.com/in/piyush-pandya-303b46246"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item rounded stack-card card-2">
                  <img className="img-fluid" src={DARSHNAPANDYA} alt />
                  <div className="text-center p-4">
                    <h5>Darshna Pandya</h5>
                    <span>Director</span>
                  </div>
                  <div
                    style={{ background: "#dcfcf4" }}
                    className="team-text text-center p-4"
                  >
                    <h5>Darshna Pandya</h5>
                    <p>Director</p>
                    <div className="d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.instagram.com/primewealthcare_imf/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.facebook.com/primewealthcaresolution/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item rounded stack-card card-3">
                  <img className="img-fluid" src={PARULPANDYA} alt />
                  <div className="text-center p-4">
                    <h5>Parul Pandya</h5>
                    <span>Director test</span>
                  </div>
                  <div
                    style={{ background: "#dcfcf4" }}
                    className="team-text text-center p-4"
                  >
                    <h5>Parul Pandya</h5>
                    <p>Director</p>
                    <div className="d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.instagram.com/primewealthcare_imf/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.facebook.com/primewealthcaresolution/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item rounded stack-card card-4">
                  <img className="img-fluid" src={MITSUMAM} alt />
                  <div className="text-center p-4">
                    <h5>Mitsu Pandya</h5>
                    <span> Principal Officer</span>
                  </div>
                  <div
                    style={{ background: "#dcfcf4" }}
                    className="team-text text-center p-4"
                  >
                    <h5>Mitsu Pandya</h5>
                    <p>Principal Officer</p>
                    <div className="d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.instagram.com/mitsuoffical_prime/profilecard/?igsh=MXB5N3B2YzhqazdmcQ=="
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.facebook.com/share/1CaUz1VnjZ/?mibextid=LQQJ4d"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light m-1"
                        href="https://www.linkedin.com/in/mitsu-pandya-304390290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-carousel owl-loaded owl-drag">
              <div className="owl-nav">
                <a
                  href="/Team"
                  className="btn btn-primary px-3 d-none d-lg-block mt-5"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members end  */}
      {/* Event start  */}
<div className="events-section">

      <div
        id="eventCarousel"
        className="carousel slide container-xxl py-5"
        data-bs-ride="carousel"
      >
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5">Our Events</h1>
          </div>
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/vXcEL9r3Roo?si=JwbuY2Zn0w-pluxm&autoplay=1&loop=1&playlist=vXcEL9r3Roo" title="YouTube video player" allow="autoplay" allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/vV05WzRLhsg?si=u8LPb1Qe3pcbyVk_&autoplay=1&loop=1&playlist=vV05WzRLhsg" title="YouTube video player" allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/YjVIcZJZKxA?si=60qM6w_11Xhx6p3N&autoplay=1&loop=1&playlist=YjVIcZJZKxA" title="YouTube video player" allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div> */}

            {/* <div className="carousel-item active">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/vXcEL9r3Roo?si=JwbuY2Zn0w-pluxm&autoplay=1&mute=1&loop=1&playlist=vXcEL9r3Roo"
                      title="YouTube video player"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/vV05WzRLhsg?si=u8LPb1Qe3pcbyVk_&autoplay=1&mute=1&loop=1&playlist=vV05WzRLhsg"
                      title="YouTube video player"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/YjVIcZJZKxA?si=60qM6w_11Xhx6p3N&autoplay=1&mute=1&loop=1&playlist=YjVIcZJZKxA"
                      title="YouTube video player"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div> */}

<div className="carousel-item active">
  <div className="event-grid">
    <div className="event-video v1">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vXcEL9r3Roo?autoplay=1&mute=1&loop=1&playlist=vXcEL9r3Roo"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>

    <div className="event-video v2">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vV05WzRLhsg?autoplay=1&mute=1&loop=1&playlist=vV05WzRLhsg"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>

    <div className="event-video v3">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/YjVIcZJZKxA?autoplay=1&mute=1&loop=1&playlist=YjVIcZJZKxA"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</div>

            <div className="carousel-item">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/ARdWQgm5f5M?autoplay=1&mute=1&loop=1&playlist=ARdWQgm5f5M"
                      title="YouTube video player"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/JVtgXsMlbLg?autoplay=1&mute=1&loop=1&playlist=JVtgXsMlbLg"
                      title="YouTube video player"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/68qnZDneXw8?autoplay=1&mute=1&loop=1&playlist=68qnZDneXw8"
                      title="YouTube video player"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
</div>
      {/* Event end  */}

      <Company />
      <Appointment />
      {/* <Leaders/> */}

      {/* Leaders module start  */}
      <div className="testimonial-section py-5">
  <div className="container-xxl">
    <div className="container">
      <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
        <h1 className="display-6 mb-5">
          What They Say About Our Insurance
        </h1>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="owl-carousel testimonial-carousel">
            
            {/* Testimonial 1 */}
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle mx-auto mb-3"
                src={MEHUL}
                alt="Mehul Pradhan"
              />
              <p className="fs-5 px-3">
                Commercial Properties, Assets, Factories, Ports, Airports, Stock of Industrial Goods, Professional services require a cover in case of Natural Catastrophes or accidents or errors in case of Professional services. Insurance is vital for ensuring safety, security & financial support during such unexpected events.
              </p>
              <h5>Mehul Pradhan</h5>
              <span>SME-Retail Head</span>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle mx-auto mb-3"
                src={HITESHKHERADIYA}
                alt="Hitesh Kheradiya"
              />
              <p className="fs-5 px-3">
                Reduces Debt Risks: Medical debt is one of the leading causes of bankruptcy. Health insurance helps prevent this by covering significant portions of medical expenses, reducing the likelihood of debt.
              </p>
              <h5>Hitesh Kheradiya</h5>
              <span>Leader (Surat)</span>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle mx-auto mb-3"
                src={BHARATSINH}
                alt="Bharatsinh Solanki"
              />
              <p className="fs-5 px-3">
                Health Insurance Covers medical costs that could otherwise be financially devastating for individuals and families. This includes Hospitalisation following an illness / accident / Pregnancy, Pre & Post Hospitalisation, OPD treatment expenses, etc. Health Insurance Policies helps in maintaining physical, financial & emotional well-being.
              </p>
              <h5>Bharatsinh Solanki</h5>
              <span>Leader (Bhavnagar, Rajkot)</span>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle mx-auto mb-3"
                src={PRATIKSIR}
                alt="Pratik Barot"
              />
              <p className="fs-5 px-3">
                "Mediclaim policy means the security of your savings. We provide the best mediclaim policy in India, offering comprehensive, 24/7 risk coverage to protect you and your family. Our policies cover a wide range of medical needs, ensuring full support during any medical emergency with the largest support system and expert guidance. Choose Prime Wealth Care Solutions and secure your future with trusted coverage and peace of mind."
              </p>
              <h5>Pratik Barot</h5>
              <span>Leader (Ahmedabad/Vadodara)</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <PolicyBrochure/>

      {/* Leaders module END  */}

      {/* Live WhatsApp Chat start  */}
      <div className="livechat">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/919725655005?text= hello, I have a question "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Chat on WhatsApp"
            src={WhatsAppBtnn}
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;

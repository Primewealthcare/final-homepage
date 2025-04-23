import React from 'react'
import heroimg324 from '../IMG/heroimg324.png'
import About from './About'
import Features from './Features'
import Service from './Service'
import Company from './Company'
import Appointment from './Appointment'



import PIYUSHPANDYA from "../IMG/Leaders/PIYUSHPANDYA.svg"
import DARSHNAPANDYA from "../IMG/Leaders/DARSHNAPANDYA.svg"
import PARULPANDYA from "../IMG/Leaders/PARULPANDYA.svg"
import MITSUMAM from "../IMG/Leaders/MITSUMAM.svg"
import BHARATSINH from "../IMG/Leaders/BHARATSINH.svg"
import HITESHKHERADIYA from "../IMG/Leaders/HITESHKHERADIYA.svg"
import MEHUL from "../IMG/Leaders/MEHUL.svg"
import PRATIKSIR from "../IMG/Leaders/PRATIKSIR.svg"



import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Home() {
  return (
    
  <div 
  // style={{backgroundColor: "#dcfcf4"}}
  >

{/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>

  <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={heroimg324} alt="Image" />
          <div class="carousel-caption">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <h1 class="display-3 text-light mb-4 animated slideInDown" style={{textShadow: "2px 2px 4px #000000"}}>
                      With The Right Planning, You THRIVE!
                    </h1>
                    <p class="fs-5 mb-5">Planning Se, Sab Mumkin Hai !</p>
                    <a href="tel:+91 9104105104" class="btn btn-primary py-3 px-5"
                      >More Details</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item">
            <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div class="carousel-caption">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <h1 class="display-3 text-dark mb-4 animated slideInDown" >
                      With The Right Planning, You THRIVE!
                    </h1>
                    <p class="fs-5 text-body mb-5">
                      Planning Se, Sab Mumkin Hai!
                    </p>
                    <a href="tel:+91 9104105104" class="btn btn-primary py-3 px-5"
                      >More Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <About/>
  <Features/>
  <Service/>
<div style={{background:"#dcfcf4"}}>
  <div className="container-xxl py-5" >
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5">
              Meet Our Professional Team Members
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
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
              <div className="team-item rounded">
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
                    <a className="btn btn-square btn-light m-1" 
                      href="https://www.instagram.com/primewealthcare_imf/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-square btn-light m-1" 
                    href="https://www.facebook.com/primewealthcaresolution/"
                    target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square btn-light m-1" 
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
              <div className="team-item rounded">
                <img className="img-fluid" src={PARULPANDYA} alt />
                <div className="text-center p-4">
                  <h5>Parul Pandya</h5>
                  <span>Director</span>
                </div>
                <div
                  style={{ background: "#dcfcf4" }}
                  className="team-text text-center p-4"
                >
                  <h5>Parul Pandya</h5>
                  <p>Director</p>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square btn-light m-1" 
                    href="https://www.instagram.com/primewealthcare_imf/"
                    target="_blank">
                     <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-square btn-light m-1"
                     href="https://www.facebook.com/primewealthcaresolution/"
                    target="_blank"
                    >
                     <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square btn-light m-1"
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
              <div className="team-item rounded">
                <img className="img-fluid" src={MITSUMAM} alt />
                <div className="text-center p-4">
                  <h5>Mitsu Pandya</h5>
                  <span> Principal Officer </span>
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
        <a href="/Team" className="btn btn-primary px-3 d-none d-lg-block mt-5">
          View More
        </a>
      </div>
    </div>

        </div>
  </div>

  </div>

 {/* Team Members end  */}
 {/* Event start  */}




   <div id="eventCarousel" className="carousel slide container-xxl py-5" data-bs-ride="carousel">
  <div className="container">
    <div className="text-center mx-auto" style={{maxWidth: 500}}>
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

<div className="carousel-item active">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/vXcEL9r3Roo?si=JwbuY2Zn0w-pluxm&autoplay=1&mute=1&loop=1&playlist=vXcEL9r3Roo" 
            title="YouTube video player" 
            allow="autoplay" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/vV05WzRLhsg?si=u8LPb1Qe3pcbyVk_&autoplay=1&mute=1&loop=1&playlist=vV05WzRLhsg" 
            title="YouTube video player" 
            allow="autoplay" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/YjVIcZJZKxA?si=60qM6w_11Xhx6p3N&autoplay=1&mute=1&loop=1&playlist=YjVIcZJZKxA" 
            title="YouTube video player" 
            allow="autoplay" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/ARdWQgm5f5M?autoplay=1&mute=1&loop=1&playlist=ARdWQgm5f5M" title="YouTube video player" allowFullScreen />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/JVtgXsMlbLg?autoplay=1&mute=1&loop=1&playlist=JVtgXsMlbLg" title="YouTube video player" allowFullScreen />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/68qnZDneXw8?autoplay=1&mute=1&loop=1&playlist=68qnZDneXw8" title="YouTube video player" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div> 
    {/* Carousel controls */}
     <div className="testimonial-carousel owl-loaded owl-drag " style={{textAlign:"center"}}>
      <div className="owl-nav">
        <div className="owl-prev" data-bs-target="#eventCarousel" data-bs-slide="prev">
          <i className="bi bi-chevron-left" />
        </div> 
        
          {/* <a href="https://www.youtube.com/@primewealthcaresolutionpvtltd" target="_blank" style={{color: 'white', padding: 5}}>View More</a> */}
           <a href="/Events" className="btn btn-primary px-3 d-none d-lg-block ">
          View More
        </a>
           
        <div className="owl-next" data-bs-target="#eventCarousel" data-bs-slide="next">
          <i className="bi bi-chevron-right" />
        </div>
      </div>
    </div>
  </div>
  </div> 
{/* Event end  */}

  <Company/>
  <Appointment/>
  {/* <Leaders/> */}


  {/* Leaders module start  */}
<div>
 <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto" style={{maxWidth: 500}}>
      <h1 className="display-6 mb-5">What They Say About Our Insurance</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-3 d-none d-lg-block">
        <div className="testimonial-left h-100">
          {/* <img className="img-fluid animated pulse infinite" src={Bharatsinh} alt />
          <img className="img-fluid animated pulse infinite" src={Hitesh_Kheradiya} alt />
          <img className="img-fluid animated pulse infinite" src={satish} alt /> */}
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded mx-auto mb-4" src={MEHUL} alt />
              <p className="fs-5">
              Commercial Properties, Assests, Factories, Ports, Airports, Stock of Industrial Goods, Professional services require a cover in case of Natural Castotrophies or accidents or errors in case of Professional services. Insurance is vital for ensuring safety, security & a financial support during such unexpected events. 
              </p>
            <h5>Mehul Pradhan</h5>
            <span>SME-Retail Head</span>
          </div>
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded mx-auto mb-4" src={HITESHKHERADIYA} alt />
            <p className="fs-5">
            Reduces Debt Risks: Medical debt is one of the leading causes of bankruptcy. Health insurance helps prevent this by covering significant portions of medical expenses, reducing the likelihood of debt.
            </p>
            <h5>Hitesh Kheradiya</h5>
            <span>Leader (Surat)</span>
          </div>
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded mx-auto mb-4" src={BHARATSINH} alt />
            <p className="fs-5">
            Health Insurance Covers medical costs that could otherwise be financially devastating for individuals and families. This includes Hospitalisaton following an illness / accident / Pregnacy, Pre & Post Hospitalisation, OPD treatment expenses, etc. Health Insurance Policies helps in maintaining physical, financial & emotional well-being.
            </p>
            <h5>Bharatsinh Solanki</h5>
            <span>Leader (Bhavnagar, Rajkot)</span>
          </div>
          {/* <div className="testimonial-item text-center">
            <img className="img-fluid rounded mx-auto mb-4" src={satish_jani} alt />
            <p className="fs-5">
            Helth insurance must be in human life value Nobody have plan of Express of emergency hospitalisation  💡
            </p>
            <h5>Satish Jani</h5>
            <span>Leader (Vadodara)</span>
          </div> */}
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded mx-auto mb-4" src={PRATIKSIR} alt />
            <p className="fs-5">
            “Mediclaim policy means the security of your savings. we provide the best mediclaim policy in India, offering comprehensive, 24/7 risk coverage to protect you and your family. Our policies cover a wide range of medical needs, ensuring full support during any medical emergency with the largest support system and expert guidance. Choose Prime Wealth Care Solutions and secure your future with trusted coverage and peace of mind.”
            </p>
            <h5>Pratik Barot</h5>
            <span>Leader (Ahmedabad/Vadodara)</span>
          </div>
          
        </div>
      </div>
      <div className="col-lg-3 d-none d-lg-block">
        <div className="testimonial-right h-100 ">
          {/* <img className="img-fluid animated pulse infinite" src={amit_solanki} alt />
          <img className="img-fluid animated pulse infinite" src={pratik} alt />
          <img className="img-fluid animated pulse infinite" src={Mehul_Pradhan} alt /> */}
        </div>  
      </div>
    </div>
  </div>
</div>

</div>

  {/* Leaders module END  */}

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

  )
}

export default Home;
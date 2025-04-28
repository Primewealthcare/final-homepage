import React from "react";
import Piyush from "../IMG/Piyush.png"

import CountUp from "react-countup";
import phonee from "../IMG/phonee.gif";
import Policy from "../IMG/Animatedicon/Policy.gif";
import Moneybag from "../IMG/Animatedicon/Moneybag.gif" 

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function About() {
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

      <div className="position-relative overflow-hidden rounded ps-5 pt-5 h-100" style={{minHeight:400}}>
        <img className="sirimg  position-absolute w-100 h-100" src={Piyush}  style={{objectFit:"cover"}} />
        <div className="position-absolute top-0 start-0  rounded pe-2 pb-2" style={{width: 140, height: 140, background:"#276c63"}}>
          <div className="d-flex flex-column justify-content-center text-center  rounded h-100 p-3" style={{ background:"#276c63" }}>
          <h1 class="text-white mb-0">20</h1>
                <h3 class="text-white">Years</h3>
                <h5 class="text-white mb-0">Experience</h5>
          </div>
        </div>
      </div>
    </div>
  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
      <div className="h-100">
        <h1 className="display-6 mb-5" >
          We're Here To Assist You With Exploring Protection
        </h1>
        <p className="fs-5  mb-4">
        Life is full of unexpected changes, and your insurance should
              adapt with you. At Prime Wealthcare Solution , we believe that
              one size doesn’t fit all. That’s why we offer Flexible Insurance
              Plans that grow with you, ensuring that you’re always
              protected—no matter where life takes you.
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center">
              <img className="flex-shrink-1 me-3" src={Policy}  />
              <h5 className="mb-0">Flexible Insurance Plans</h5>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center">
              <img className="flex-shrink-1 me-3" src={Moneybag} alt />
              <h5 className="mb-0">Money Back Guarantee</h5>
            </div>
          </div>
        </div>
        <p className="mb-4">
        Your trust is our top priority. We understand the importance of peace of mind when choosing an insurance plan. That's why we offer a Money-Back Guarantee to ensure that you are completely satisfied with our services.
        </p>
        <div className="border-top mt-4 pt-4">
          <div className="d-flex align-items-center">
            <img className="flex-shrink-0 rounded-circle me-3" src={phonee} height="40px" alt />
            <h5 className="mb-0">
            <a href="tel:+91 9104105104" class="text-dark mb-0">
                    Call Us: +91 9 104 105 104
            </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container-fluid overflow-hidden my-5 px-lg-0">
<div className="container facts px-lg-0"> 
  <div className="row g-0 mx-lg-0">
    <div className="col-lg-6 facts-text wow fadeInUp" data-wow-delay="0.1s">
      <div className="h-100 px-4 ps-lg-0">
        <h1 className="text-white mb-4" style={{textShadow: "2px 2px 4px #000000"}}>For Individuals And Organisations</h1>
        <p className="text-light mb-5">
        Prime wealthcare is the outcome of years of cumulative expertise
              of the founders in the insurance industry. It is the brain child
              of a team of seasoned financial advisors and planners. We
              understand how overwhelming and confusing money matters can get.
              Most people fail because they fail to plan ahead in time. Prime
              Wealthcare is conceptualized out of this need to bring about a
              financial liberation and facilitate a more positive relationship
              with money.
        </p>
        <a href="tel:+91 9104105104" className="align-self-start btn btn-primary py-3 px-5">More Details</a>
      </div>
    </div>
    <div className="col-lg-6 facts-counter wow fadeInUp" data-wow-delay="0.5s">
      <div className="h-100 px-4 pe-lg-0 align-item-center">
        <div className="row g-5 text-center">
          <div className="col-sm-6">
            <h1 className="display-5" data-toggle="counter-up">
            <CountUp
                  start={0}
                  end={10000}
                  duration={5}
              />
            </h1>
            <p className="fs-5 text-dark">Happy Clients</p>
          </div>
          <div className="col-sm-6">
            <h1 className="display-5" data-toggle="counter-up">
            <CountUp
                  start={0}
                  end={65000000}
                  duration={5}
              />
            </h1>
            <p className="fs-5 text-dark">Approved Claim Amount</p>
          </div>
          <div className="col-sm-6">
            <h1 className="display-5" data-toggle="counter-up">
            <CountUp
                  start={0}
                  end={30}
                  duration={6}
              />
            </h1>
            <p className="fs-5 text-dark">Awards Achieved</p>
          </div>
          <div className="col-sm-6">
            <h1 className="display-5" data-toggle="counter-up">
            <CountUp
                  start={0}
                  end={130}
                  duration={6}
            />
            </h1>
            <p className="fs-5 text-dark">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* WhatsApp Live Chat Start  */}
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

export default About;

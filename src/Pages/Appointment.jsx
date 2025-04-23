
import Piyush_Pandya from "../IMG/Leaders/Piyush_Pandya.png"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Appointment() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ifxkhon', 'template_d6pdy2r', form.current, {
        publicKey: 'RaoO-Lla7pQ1KXyxR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // toast.success('Send Message Succesfully');
          toast.success('Send Message Succesfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      <div
        className="container-fluid appointment my-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-white mb-5" style={{textShadow: "2px 2px 4px #000000"}}>
                We're Award Winning Insurance Company
              </h1>
              <p className="text-white mb-5">
                Our award-winning status is not just recognized by industry
                bodies, but also by our customers who trust us with their most
                valuable assets. This trust is built on our consistent
                performance, transparency, and dedication to client
                satisfaction.
              </p>
              <div className="bg-white rounded p-3">
                <div
                  style={{ background: "#276c63" }}
                  className="d-flex align-items-center  rounded p-3"
                >
                  <img
                    className="flex-shrink-0 rounded-circle me-3"
                    src={Piyush_Pandya}
                    alt
                  />
                  <h5 className="text-white mb-0">
                    {" "}
                    <a href="tel:+91 9104105104 " className="text-white mb-0" style={{textShadow: "1px 1px 1px #000000"}}>
                      Call Us: +91 9 104 105 104{" "}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white rounded p-5">

                {/* Form Start  */}

                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-sm-12">
                      <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        name="from_name"
                        pattern="[A-Za-z\s]+"
                        required
                        title="Please enter only alphabets."
                        onInput={(e) => (e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''))}
                      />
                        <label htmlFor="gname">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="gmail"
                          placeholder="Gurdian Email"
                          name="from_email" required 
                        />
                        <label htmlFor="gmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                      <input
                        className="form-control"
                        id="number"
                        placeholder="Contact Number"
                        name="from_number"
                        pattern="\d{10}"
                        required
                        title="Please enter exactly 10 digits."
                        maxLength={10} // Prevent entering more than 10 digits
                        onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))} // Allow only numbers
                      />
                        <label htmlFor="cname">Your Mobile</label>
                      </div>
                    </div>
                    {/* <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="cage"
                          placeholder="Child Age"
                          name="message"
                        />
                        <label htmlFor="cage">Service Type</label>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 80 }}
                          defaultValue={""}
                          name="message"
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Get Appointment
                      </button>
                    </div>
                  </div>
                </form>
                
                {/* Form End  */}

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

export default Appointment;

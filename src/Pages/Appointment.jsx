import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import Piyush_Pandya from "../IMG/Leaders/Piyush_Pandya.png";
import WhatsAppBtnn from "../IMG/WhatsAppBtnn.png";

function Appointment() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifxkhon", "template_d6pdy2r", form.current, {
        publicKey: "RaoO-Lla7pQ1KXyxR",
      })
      .then(
        () => {
          toast.success("Send Message Successfully", {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="appointment-wrapper">
      {/* Back to top */}
      <a href="#" className="btn btn-dark btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      <div className="appointment-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <h1 className="appointment-title">
                We're Award Winning Insurance Company
              </h1>

              <p className="appointment-desc">
                Our award-winning status is recognized by both industry leaders
                and our customers who trust us with their most valuable assets.
              </p>

              <div className="contact-card">
                <img src={Piyush_Pandya} alt="Advisor" />
                <a href="tel:+919104105104">Call Us: +91 9104105104</a>
              </div>
            </div>

            {/* FORM */}
            <div className="col-lg-6">
              <div className="appointment-form-card">
                <h3 className="form-title">Book an Appointment</h3>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control modern-input"
                        placeholder="Your Name"
                        name="from_name"
                        pattern="[A-Za-z\s]+"
                        required
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(
                            /[^A-Za-z\s]/g,
                            ""
                          ))
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control modern-input"
                        placeholder="Your Email"
                        name="from_email"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        className="form-control modern-input"
                        placeholder="Your Mobile"
                        name="from_number"
                        pattern="\d{10}"
                        maxLength={10}
                        required
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          ))
                        }
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control modern-input"
                        placeholder="Message"
                        name="message"
                        rows="3"
                      />
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="appointment-btn">
                        Get Appointment
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WhatsApp */}
     
    </div>
  );
}

export default Appointment;

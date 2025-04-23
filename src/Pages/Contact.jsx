import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"



function Contact() {

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
    <div style={{background: "#dcfcf4 "}}>
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                Navigating the world of insurance can be complex, but we're here to simplify it for you. Whether you need assistance with policies, claims, renewals, or understanding your coverage, our experts are ready to help.
                {/* <a href="https://htmlcodex.com/contact-form">Download Now</a>. */}
              </p>


              {/* Form Controll start  */}



              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
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

                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" name="from_email" required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  {/* Validate number input  */}
                  <div className="col-12">
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
                      <label htmlFor="number">Contact Number</label>
                    </div>
                  </div>
                  {/* Valiodation number input end  */}

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} name="message" />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>



            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: 450 }}>
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.73212333977!2d72.476049!3d23.026231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dc1c8c3827d%3A0x81100dd58db9dd9f!2sPRIME%20WEALTHCARE%20SOLUTION%20IMF%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1725626199537!5m2!1sen!2sin" frameBorder={0} style={{ minHeight: 450, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5"> OFFICE ADDRESS</h1>
          </div>
          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-lg-4 col-xl-3  col-sm-6 wow fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="card">
                <div className="face front-face">
                  <div className="pb-3 text-uppercase name" style={{ fontSize: 'larger' }}> <b>Ahmedabad</b></div>
                  <div className="location text-center">510, Shivalik Satyamev, nr vakil saheb bridge, Ambali-Bopal, Junction, Ambli - Bopal Rd, Ahmedabad, Gujarat 380058</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.73212333977!2d72.476049!3d23.026231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dc1c8c3827d%3A0x81100dd58db9dd9f!2sPRIME%20WEALTHCARE%20SOLUTION%20IMF%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1725626199537!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                  <span className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3  col-sm-6 wow fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="card">
                <div className="face front-face">
                  <div className="pb-3 text-uppercase name" style={{ fontSize: 'larger' }}> <b>Bhavnagar</b></div>
                  <div className="location text-center">403/404, Bhayani Skyline, Atabhai Rd, nr. Prayosha Fast Food, Chowk, Bhavnagar, Gujarat 364002, India </div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3705.606832297112!2d72.14898400000001!3d21.756763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bb56305378d%3A0x6371473bfb5933da!2sPRIME%20WEALTHCARE%20SOLUTION%20IMF%20PVT.LTD.!5e0!3m2!1sen!2sza!4v1725625212797!5m2!1sen!2sza" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                  <span className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3  col-sm-6 wow fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="card">
                <div className="face front-face">
                  <div className="pb-3 text-uppercase name" style={{ fontSize: 'larger' }}> <b> surat</b></div>
                  <div className="location text-center">262, Silverstone Arcade, Causeway Rd, near D-Mart, Katargam, Surat, Gujarat 395004 </div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7438.412021810156!2d72.80893366403201!3d21.223677886198512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff99fb5bc83%3A0xd41e6d435e09feaa!2sPRIME%20WEALTHCARE%20SOLUTION%20IMF%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1725626921442!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                  <span className="fas fa-quote-right" />
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
  )
}

export default Contact
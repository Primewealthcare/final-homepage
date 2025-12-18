import React from "react";

import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Events() {
  return (
    <div>
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto" style={{maxWidth: 500}}>
      <h1 className="display-6 mb-5">Our Events </h1>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/vXcEL9r3Roo?si=sKtpXCbs4FlgycJk&autoplay=1&mute=1&loop=1&playlist=vXcEL9r3Roo" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/YjVIcZJZKxA?si=VJCw8lXxcfHlVlpJ&autoplay=1&mute=1&loop=1&playlist=YjVIcZJZKxA" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/vV05WzRLhsg?si=-PRY7mISAPuCHv1p&autoplay=1&mute=1&loop=1&playlist=vV05WzRLhsg" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/ARdWQgm5f5M?si=nBHqdOsiiKlODgwB&autoplay=1&mute=1&loop=1&playlist=ARdWQgm5f5M" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/JVtgXsMlbLg?si=mlnBbmn06rLHVd7W&autoplay=1&mute=1&loop=1&playlist=JVtgXsMlbLg" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/68qnZDneXw8?si=-vsPmVpE2qd37FCw&autoplay=1&mute=1&loop=1&playlist=68qnZDneXw8" title="YouTube video player" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mx-auto" style={{maxWidth: 500, paddingTop: 25}}>
    <a href="https://www.youtube.com/@primewealthcaresolutionpvtltd" target="_blank" style={{padding: 5}} className="btn btn-primary px-3 ">View More</a>
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

export default Events;

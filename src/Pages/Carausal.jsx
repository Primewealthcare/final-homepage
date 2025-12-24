import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousal4 from "../IMG/GeminiHero1.png";
import carousal6 from "../IMG/GeminiHero3.png";
import carousal7 from "../IMG/GeminiHero4.png";



const ModernCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    
    {
      image: carousal6,
      title: "Safeguarding What Matters Most",
      subtitle: "Aaj ki planning, kal ka protection",
      theme: "light",
    },
    {
      image: carousal7,
      title: "Strong Foundations. Secure Futures.",
      subtitle: "Planning jo aapke saath chale",
      theme: "light",
    },
    {
      image: carousal4,
      title: "Strong Foundations. Secure Futures.",
      subtitle: "Planning jo aapke saath chale",
      theme: "light",
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div
      className="modern-carousel"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Slides Container */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)",
              transition:
                "opacity 700ms ease-in-out, transform 700ms ease-in-out",
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            {/* Background Image with Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div className="container carousel-content">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    {/* <h1
                      className={slide.theme === 'dark' ? 'text-light' : 'text-dark'}
                      style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        opacity: index === currentSlide ? 1 : 0,
                        transform: index === currentSlide ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms',
                        textShadow: slide.theme === 'dark' ? '2px 2px 4px #000000' : 'none'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={slide.theme === 'dark' ? 'text-light' : 'text-dark'}
                      style={{
                        fontSize: '1.25rem',
                        marginBottom: '2rem',
                        opacity: index === currentSlide ? 1 : 0,
                        transform: index === currentSlide ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 700ms ease-out 400ms, transform 700ms ease-out 400ms'
                      }}
                    >
                      {slide.subtitle}
                    </p> */}
                    <h1 className={`carousel-title ${slide.theme}`}>
                      {slide.title}
                    </h1>

                    <p className={`carousel-subtitle ${slide.theme}`}>
                      {slide.subtitle}
                    </p>

                    <a
                      href="/About"
                      className="btn btn-primary py-3 px-5"
                      style={{
                        display: "inline-block",
                        opacity: index === currentSlide ? 1 : 0,
                        transform:
                          index === currentSlide
                            ? "translateY(0)"
                            : "translateY(40px)",
                        transition:
                          "opacity 700ms ease-out 600ms, transform 700ms ease-out 600ms",
                      }}
                    >
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     

      {/* Dot Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.75rem",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentSlide ? "3rem" : "0.75rem",
              height: "0.75rem",
              backgroundColor:
                index === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "all 300ms",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.7)";
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.5)";
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernCarousel;

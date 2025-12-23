import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carousal3 from '../IMG/Company/carousal3.webp'
import carousal2 from '../IMG/Company/carousel-2.webp'
import carousal1 from '../IMG/Company/carousel-1.webp'


// Add this component at the top of your Home.js file or create a separate file
const ModernCarousel = ({ heroimg324 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: carousal1,
      title: "With The Right Planning, You THRIVE!",
      subtitle: "Planning Se, Sab Mumkin Hai!",
      theme: "dark"
    },
    {
    image: carousal2,
    title: "Safeguarding What Matters Most",
    subtitle: "Aaj ki planning, kal ka protection",
    theme: "light"
  },
  {
    image:carousal3,
    title: "Strong Foundations. Secure Futures.",
    subtitle: "Planning jo aapke saath chale",
    theme: "light"
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
    <div className="modern-carousel" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '700px', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
      {/* Slides Container */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            {/* Background Image with Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: slide.theme === 'dark' 
                    ? 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent)' 
                    : 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6), transparent)'
                }}
              />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 2 }}>
              <div className="container carousel-content">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h1
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
                    </p>
                    <a
                      href="tel:+91 9104105104"
                      className="btn btn-primary py-3 px-5"
                      style={{
                        display: 'inline-block',
                        opacity: index === currentSlide ? 1 : 0,
                        transform: index === currentSlide ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 700ms ease-out 600ms, transform 700ms ease-out 600ms'
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

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: '50%',
          padding: '0.75rem',
          cursor: 'pointer',
          transition: 'all 300ms',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
      </button>
      
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: '50%',
          padding: '0.75rem',
          cursor: 'pointer',
          transition: 'all 300ms',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Next slide"
      >
        <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
      </button> */}

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.75rem',
        zIndex: 10
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentSlide ? '3rem' : '0.75rem',
              height: '0.75rem',
              backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 300ms',
              padding: 0
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        zIndex: 10
      }}>
        <div
          style={{
            height: '100%',
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            backgroundColor: '#3b82f6',
            transition: 'width 300ms'
          }}
        />
      </div> */}
    </div>
  );
};

export default ModernCarousel;

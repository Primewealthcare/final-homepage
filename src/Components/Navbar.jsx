import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../IMG/Leaders/OptimizedLeaders/logo-ezgif-removebg.png";
import facebook from "../IMG/facebook.png";
import instagram from "../IMG/instagram.png";
import linkedin from "../IMG/linkedin.png";
import youtube from "../IMG/youtube.png";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);

  const socialStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.18)",
    color: "white",
    transition: "all 0.25s ease",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glass effect
      setScrolled(currentScrollY > 50);

      // Ignore micro scrolls
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const dropdownItems = [
    { name: "Features", href: "/Features" },
    { name: "Our Events", href: "/Events" },
    { name: "Insurance Partners", href: "/Company" },
    { name: "Team Members", href: "/Team" },
    { name: "Appointment", href: "/Appointment" },
  ];

  return (
    <>
      {/* Topbar start */}
      <div
        className="container-fluid d-none d-lg-block"
        style={{
          background: "rgba(39,108,99,0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          className="row gx-0 align-items-center px-5"
          style={{ height: "46px", color: "white", fontSize: "0.9rem" }}
        >
          {/* LEFT INFO */}
          <div className="col-lg-7 d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+919104105104"
                className="text-white text-decoration-none"
              >
                +91 91041 05104
              </a>
            </div>

            <span style={{ opacity: 0.35 }}>|</span>

            <div className="d-flex align-items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:himashah_hr@primewealthcare.com"
                className="text-white text-decoration-none"
              >
                primewealthcare.com
              </a>
            </div>

            <span style={{ opacity: 0.35 }}>|</span>

            <div className="d-flex align-items-center gap-2">
              <Clock size={16} />
              <span>Mon–Sat · 9:30–6:30</span>
            </div>
          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div className="col-lg-5 d-flex justify-content-end align-items-center gap-3">
            <a
              href="https://www.facebook.com/primewealthcaresolution/"
              target="_blank"
              rel="noreferrer"
              style={{ ...socialStyle, background: "#1877F2" }}
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.youtube.com/@primewealthcaresolutionpvtltd"
              target="_blank"
              rel="noreferrer"
              style={{ ...socialStyle, background: "#FF0000" }}
            >
              <Youtube size={16} />
            </a>

            <a
              href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
              target="_blank"
              rel="noreferrer"
              style={{ ...socialStyle, background: "#0A66C2" }}
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://www.instagram.com/primewealthcare_imf/"
              target="_blank"
              rel="noreferrer"
              style={{
                ...socialStyle,
                background:
                  "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
              }}
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Topbar End */}
      <nav
        className={`navbar navbar-expand-lg 
    ${scrolled ? "scrolled" : ""} 
    ${showNavbar ? "nav-show" : "nav-hide"}
  `}
      >
        <div className="container-fluid flex px-0">
          <div className="d-flex align-items-center navbar-inner">
            {/* Logo */}
            <a
              href="/"
              className="navbar-brand d-flex align-items-center me-4"
              style={{ marginBottom: 0 }}
            >
              <img
                className="img-fluid"
                src={logo}
                alt="Logo"
                style={{ height: "70px" }}
              />
            </a>

            {/* Desktop Navigation - Left Aligned */}
            <div className="d-none d-lg-flex align-items-center w-100">
              {/* Login Button - Right Side */}
              <div className="ms-auto d-flex gap-5">
                <div className="d-flex align-items-center gap-3 ms-auto">
                  <a href="/" className="nav-link" style={navLinkStyle}>
                    Home
                  </a>
                  <a href="/About" className="nav-link" style={navLinkStyle}>
                    About Us
                  </a>
                  <a href="/Service" className="nav-link" style={navLinkStyle}>
                    Our Services
                  </a>

                  {/* Modern Dropdown */}
                  <div
                    className="position-relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    style={{ position: "relative" }}
                  >
                    {/* Trigger */}
                    <button
                      className="nav-link d-flex align-items-center gap-1 bg-transparent border-0"
                      style={navLinkStyle}
                    >
                      Pages
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isDropdownOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </button>

                    {/* Dropdown Wrapper */}
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: isDropdownOpen
                          ? "translateX(-50%) translateY(0)"
                          : "translateX(-60%) translateY(0)",

                        opacity: isDropdownOpen ? 1 : 0,
                        visibility: isDropdownOpen ? "visible" : "hidden",
                        transition: "all 0.45s ease",
                        marginTop: "0.75rem",
                        zIndex: 1000,
                      }}
                    >
                      {/* Dropdown Box */}
                      <div
                        className="dropdown-glass"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          borderRadius: "12px",
                          boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
                          border: "1px solid rgba(0,0,0,0.06)",
                          padding: "1.5rem",
                          width: "420px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.75rem",
                          position: "relative",
                        }}
                      >
                        {dropdownItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            style={{
                              padding: "0.9rem 1rem",
                              borderRadius: "6px",
                              fontSize: "0.95rem",
                              fontWeight: "600",
                              color: "#1f2937",
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#f0fdfa";
                              e.currentTarget.style.color = "#276c63";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.color = "#1f2937";
                            }}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href="/Contact" className="nav-link" style={navLinkStyle}>
                    Contact Us
                  </a>
                </div>
                <a
                  href="#"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#276c63",
                    color: "white",
                    padding: "0.625rem 1.75rem",
                    borderRadius: "5px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    border: "none",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#1f5449";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 4px 12px rgba(39, 108, 99, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#276c63";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Login
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              ref={mobileToggleRef}
              type="button"
              className={`mobile-toggle d-lg-none ms-auto ${
                isMobileMenuOpen ? "open" : ""
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="d-lg-none"
            ref={mobileMenuRef}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "520px",
              padding: "20px 22px",
              backgroundColor: "rgba(225,225,225,225)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(24px)",

              border: "1px solid rgba(39,108,99,0.15)",
              borderRadius: "10px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              marginTop: "6px",
              zIndex: 999,
            }}
          >
            <a href="/" className="d-block py-2 px-3" style={mobileLinkStyle}>
              Home
            </a>
            <a
              href="/About"
              className="d-block py-2 px-3"
              style={mobileLinkStyle}
            >
              About Us
            </a>
            <a
              href="/Service"
              className="d-block py-2 px-3"
              style={mobileLinkStyle}
            >
              Our Services
            </a>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="d-flex align-items-center justify-content-between w-100 py-2 px-3 bg-transparent border-0 text-start"
                style={{
                  ...mobileLinkStyle,
                  cursor: "pointer",
                }}
              >
                Pages
                <ChevronDown
                  size={18}
                  style={{
                    transform: isMobileDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              {isMobileDropdownOpen && (
                <div
                  style={{
                    paddingLeft: "1rem",
                    animation: "slideDown 0.3s ease",
                  }}
                >
                  {dropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="d-block py-2 px-3"
                      style={{
                        ...mobileLinkStyle,
                        fontSize: "0.95rem",
                        color: "#6b7280",
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/Contact"
              className="d-block py-2 px-3"
              style={mobileLinkStyle}
            >
              Contact Us
            </a>

            <a
              href="#"
              className="btn w-100 mt-3"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#276c63",
                color: "white",
                padding: "0.75rem",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Login
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

const navLinkStyle = {
  color: "#309083",
  fontWeight: "600",
  fontSize: "1.05rem",
  transition: "all 0.2s ease",
  cursor: "pointer",
  position: "relative",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
};

const mobileLinkStyle = {
  color: "#1f2937",
  fontWeight: "600",
  fontSize: "1.05rem",
  padding: "0.85rem 1rem",
  borderRadius: "6px",
  textDecoration: "none",
};

export default Navbar;

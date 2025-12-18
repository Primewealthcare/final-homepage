import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../IMG/logo.png";
import facebook from "../IMG/facebook.png";
import instagram from "../IMG/instagram.png";
import linkedin from "../IMG/linkedin.png";
import youtube from "../IMG/youtube.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        style={{ backgroundColor: "#309083ff" }}
        className="container-fluid text-white py-2 px-0 d-none d-lg-block"
      >
        <div className="row gx-0 align-items-center">
          <div
            className="col-lg-7 px-5 text-start"
            style={{
              textShadow: "2px 2px 2px #000000",
              wordSpacing: "1px",
              letterSpacing: "1px",
            }}
          >
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2" />
              <small>
                <a href="tel:+91 9104105104" className="text-light mb-0">
                  +91 9 104 105 104
                </a>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2" />
              <small>
                <a
                  href="mailto:himashah_hr@primewealthcare.com"
                  style={{ color: "white" }}
                >
                  primewealthcare.com
                </a>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-clock me-2" />
              <small> Mon - Sat : 09:30 AM - 06:30 PM </small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="text-white ms-4"
                href="https://www.facebook.com/primewealthcaresolution/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} height="28px" alt="" />
              </a>
              <a
                className="text-white ms-4"
                href="https://www.youtube.com/@primewealthcaresolutionpvtltd"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} height="28px" alt="" />
              </a>
              <a
                className="text-white ms-4"
                href="https://www.linkedin.com/company/prime-wealthcare-solution-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} height="28px" alt="" />
              </a>
              <a
                className="text-white ms-4"
                href="https://www.instagram.com/primewealthcare_imf/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} height="30px" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Minimalist Navbar Start */}
      {/* <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{
          backgroundColor: "transparent",
          padding: "1rem 2rem",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      > */}
      {/* <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          position: scrolled ? "fixed" : "absolute",
          top: scrolled ? "0" : "48px",
          left: 0,
          right: 0,
          zIndex: 1000,

          background: scrolled
            ? "rgba(255, 255, 255, 0.65)" 
            : "transparent",

          backdropFilter: scrolled ? "blur(14px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(180%)" : "none",

          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.3)" : "none",

          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.08)" : "none",

          transition: "all 0.35s ease",
          padding: "1rem 2rem",
        }}
      > */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>

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
                  >
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

                    {/* Dropdown Menu */}
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        marginTop: "0.75rem",
                        opacity: isDropdownOpen ? 1 : 0,
                        visibility: isDropdownOpen ? "visible" : "hidden",
                        pointerEvents: isDropdownOpen ? "auto" : "none",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 1000,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: "12px",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                          padding: "0.5rem",
                          minWidth: "220px",
                          border: "1px solid #e5e7eb",
                          transform: isDropdownOpen
                            ? "translateY(0) scale(1)"
                            : "translateY(-10px) scale(0.95)",
                          transition:
                            "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {dropdownItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="dropdown-item"
                            style={{
                              padding: "0.75rem 1rem",
                              borderRadius: "8px",
                              transition: "all 0.2s ease",
                              fontSize: "1rem",
                              fontWeight: "500",
                              color: "#374151",
                              textDecoration: "none",
                              display: "block",
                              animation: isDropdownOpen
                                ? `fadeInUp 0.3s ease forwards ${index * 0.05}s`
                                : "none",
                              opacity: isDropdownOpen ? 1 : 0,
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#f3f4f6";
                              e.target.style.color = "#276c63";
                              e.target.style.transform = "translateX(4px)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.color = "#374151";
                              e.target.style.transform = "translateX(0)";
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
                  href="https://primewealthcare.in/"
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
              type="button"
              className="navbar-toggler border-0 d-lg-none ms-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              zIndex: 999,
              animation: "slideDown 0.3s ease",
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
              href="https://primewealthcare.in/"
              className="btn w-100 mt-3"// 🔥 glass transparency
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
  color: "#374151",
  fontWeight: "600",
  fontSize: "1.05rem",
  textDecoration: "none",
  borderRadius: "6px",
  transition: "all 0.2s ease",
};

export default Navbar;

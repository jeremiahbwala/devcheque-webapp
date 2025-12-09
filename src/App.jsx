import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React, { useState } from 'react';
import { Menu, X, Rocket, Users, Award, Star } from 'lucide-react';

function DevChequeWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            
            {/* Logo */}
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src="src/assets/image 1.png" alt="logo" />
            </a>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-4 align-items-center mx-auto font-archivo">
              <a href="#about" className="text-dark text-decoration-none fw-bold font-poppins fs-6">About us</a>
              <a href="#projects" className="text-dark text-decoration-none fw-bold font-poppins">Projects</a>
              <a href="#services" className="text-dark text-decoration-none fw-bold font-poppins">Services</a>
              <a href="#work" className="text-dark text-decoration-none fw-bold font-poppins">How we work</a>
            </div>

            {/* CTA Button Desktop */}
            <button className="btn btn-success rounded-pill px-4 d-none d-lg-block font-archivo">
              Start Your Project
            </button>

            {/* Mobile Toggle */}
            <button
              className="btn border-0 d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="d-lg-none mt-3">
              <div className="d-flex flex-column gap-3">
                <a href="#about" className="text-dark text-decoration-none font-archivo">About us</a>
                <a href="#projects" className="text-dark text-decoration-none font-archivo">Projects</a>
                <a href="#services" className="text-dark text-decoration-none font-archivo">Services</a>
                <a href="#work" className="text-dark text-decoration-none font-archivo">How we work</a>
                <button className="btn btn-success rounded-pill font-archivo">
                  Start Your Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<section 
  className="position-relative overflow-hidden"
  style={{ 
    backgroundImage: `url('src/assets/background1.png.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0a1f1a', // fallback color
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '80px'
  }}
>
  <div className="container position-relative">
    <div className="text-center text-white" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Tagline */}
      <p style={{ letterSpacing: '2px', fontSize: '40px', fontFamily: '-apple-system' }}>
        Design.Develop.Deploy
      </p>

      {/* Main Heading */}
      <h1 className="display-3 fw-bold mb-4 font-archivo" style={{ lineHeight: '1.2' }}>
        <span className="text-light-green">Get Your </span>
        <span className="text-light-green">Product Launched</span>
        <span className="text-light-green"> in </span>
        <span className="text-light-green">Weeeks</span>
      </h1>

      {/* Description */}
      <p style={{ maxWidth: '750px', fontSize: '18px', lineHeight: '1.7', margin: '0 auto' }}>
        DevCheque is your full-stack team for digital products that ship.<br />
        From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality
      </p>

      {/* CTA Buttons */}
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
        <button 
          className="btn btn-success btn-lg px-5 rounded-pill d-inline-flex align-items-center justify-content-center"
          style={{ fontSize: '16px', fontWeight: '500' }}
        >
          Start Your Project
          <span className="ms-2">→</span>
        </button>
        <button 
          className="btn btn-outline-light btn-lg px-5 rounded-pill d-inline-flex align-items-center justify-content-center"
          style={{ fontSize: '16px', fontWeight: '500' }}
        >
          View Our Work
          <span className="ms-2">→</span>
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="bg-light-green p-3 font-archivo">
        <div className="container">
          <p className="text-center text-black mb-4">
            Trusted by <span className="text-success">50+</span> startups and businesses across Africa
          </p>

          <div className="row g-4 text-center font-archivo">
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Rocket className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-black mb-2">Project Delivered</p>
                <h3 className="fw-bold text-dark mb-0">50+</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Users className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-black mb-2">Satisfied Client</p>
                <h3 className="fw-bold text-dark mb-0">98%</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Award className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-black mb-2">Years Experience</p>
                <h3 className="fw-bold text-dark mb-0">6 yrs</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Star className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-black mb-2">Rating</p>
                <h3 className="fw-bold text-dark mb-0">4.9</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DevChequeWebsite;
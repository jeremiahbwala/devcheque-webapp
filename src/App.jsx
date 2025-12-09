import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className="d-none d-lg-flex gap-4 align-items-center mx-auto">
              <a href="#about" className="text-dark text-decoration-none">About us</a>
              <a href="#projects" className="text-dark text-decoration-none">Projects</a>
              <a href="#services" className="text-dark text-decoration-none">Services</a>
              <a href="#work" className="text-dark text-decoration-none">How we work</a>
            </div>

            {/* CTA Button Desktop */}
            <button className="btn btn-success rounded-pill px-4 d-none d-lg-block">
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
                <a href="#about" className="text-dark text-decoration-none">About us</a>
                <a href="#projects" className="text-dark text-decoration-none">Projects</a>
                <a href="#services" className="text-dark text-decoration-none">Services</a>
                <a href="#work" className="text-dark text-decoration-none">How we work</a>
                <button className="btn btn-success rounded-pill">
                  Start Your Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="position-relative overflow-hidden"
        style={{ 
          backgroundColor: '#0a1f1a',
          minHeight: '100vh',
          paddingTop: '100px',
          paddingBottom: '80px'
        }}
      >
        {/* Background circles */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
            filter: 'blur(80px)'
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
            bottom: '-20%',
            right: '-15%',
            filter: 'blur(100px)'
          }}
        ></div>

        <div className="container position-relative">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Tagline */}
            <p className="text-white mb-3" style={{ letterSpacing: '2px', fontSize: '40px', fontFamily: '-apple-system' }}>
              Design.Develop.Deploy
            </p>

            {/* Main Heading */}
            <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              <span className="text-success">Get Your </span>
              <span className="text-success">Product Launched</span>
              <span className="text-success"> in </span>
              <span className="text-success">Weeeks</span>
            </h1>

            {/* Description */}
            <p className="text-white-50 mb-5 mx-auto" style={{ maxWidth: '750px', fontSize: '18px', lineHeight: '1.7' }}>
              DevCheque is your full-stack team for digital products that ship.<br />
              From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
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
            <img src="src/assets/bgimage.jpg" alt="logo" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-success-subtle">
        <div className="container">
          <p className="text-center text-secondary mb-4">
            Trusted by 50+ startups and businesses across Africa
          </p>

          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Rocket className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-secondary mb-2">Project Delivered</p>
                <h3 className="fw-bold text-dark mb-0">50+</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Users className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-secondary mb-2">Satisfied Client</p>
                <h3 className="fw-bold text-dark mb-0">98%</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Award className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-secondary mb-2">Years Experience</p>
                <h3 className="fw-bold text-dark mb-0">6 yrs</h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <Star className="mb-3 text-success" size={40} strokeWidth={1.5} />
                <p className="small text-secondary mb-2">Rating</p>
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
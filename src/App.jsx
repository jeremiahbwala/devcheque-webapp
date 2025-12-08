import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

export function DevChequeWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="bg-success rounded-circle" style={{ width: '32px', height: '32px' }}></div>
            <span className="ms-2 fw-bold">Devcheque</span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#work">How we work</a>
              </li>
            </ul>
            <button className="btn btn-success ms-md-3 mt-2 mt-md-0">
              Start Your Project
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="d-md-none bg-white border-top">
          <div className="p-3">
            <a href="#about" className="d-block text-dark mb-2">About us</a>
            <a href="#projects" className="d-block text-dark mb-2">Projects</a>
            <a href="#services" className="d-block text-dark mb-2">Services</a>
            <a href="#work" className="d-block text-dark mb-2">How we work</a>
            <button className="btn btn-success w-100 mt-2">Start Your Project</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevChequeWebsite;

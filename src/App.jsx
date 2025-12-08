import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./assets/image 1.png"; // import your logo properly

function DevChequeWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-md bg-white shadow-sm fixed-top py-3">
        <div className="container d-flex justify-content-between align-items-center">

          {/* LEFT SIDE NAV LINKS (Desktop only) */}
          <div className="d-none d-md-flex gap-4">
            <a href="#about" className="text-primary text-decoration-none">About us</a>
            <a href="#projects" className="text-primary text-decoration-none">Projects</a>
            <a href="#services" className="text-primary text-decoration-none">Services</a>
            <a href="#work" className="text-primary text-decoration-none">How we work</a>

          </div>

          {/* MOBILE TOGGLE BUTTON (Hamburger) */}
          <button
            className="navbar-toggler border-0 d-md-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* LOGO - Always on the RIGHT */}
          <img
            src={logo}
            alt="DevCheque Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />

        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="bg-white border-top d-md-none">
            <div className="p-3 d-flex flex-column gap-3">
              <a href="#about" className="text-primary text-decoration-none">About us</a>
              <a href="#projects" className="text-primary text-decoration-none">Projects</a>
              <a href="#services" className="text-primary text-decoration-none">Services</a>
              <a href="#work" className="text-primary text-decoration-none">How we work</a>

              <button className="btn btn-success w-100">
                Start Your Project
              </button>
            </div>
          </div>
        )}

      </nav>

    </div>
  );
}

export default DevChequeWebsite;

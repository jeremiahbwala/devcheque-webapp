import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer/footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 px-3">
      <div className="container">

        <div className="row mb-4">

          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold mb-3">Devcheque</h3>
            <p className="text-secondary mb-2">devcheque@gmail.com</p>
            <p className="text-secondary">Phone: +01 234567890</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-secondary text-decoration-none hover-link">About us</a></li>
              <li><a href="#projects" className="text-secondary text-decoration-none hover-link">Projects</a></li>
              <li><a href="#services" className="text-secondary text-decoration-none hover-link">Services</a></li>
              <li><a href="#work" className="text-secondary text-decoration-none hover-link">How we work</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Blog</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Support</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Subscribe</h5>

            <div className="input-group">
              <input
                type="email"
                placeholder="name@domain.com"
                className="form-control bg-secondary text-white border-0"
              />
              <button className="btn btn-success">
                <a href="#contactForm" className='text-white text-decoration-none'>Send</a>
              </button>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-secondary hover-link">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-secondary hover-link">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-secondary hover-link">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-secondary hover-link">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="border-top border-secondary pt-3 text-center text-secondary small">
          © 2024 DevCheque. All rights reserved.
        </div>
      </div>

      {/* Hover effect styling */}
      <style>{`
        .hover-link:hover {
          color: #28a745 !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;

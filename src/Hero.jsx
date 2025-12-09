import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Rocket, Users, Award, Star } from 'lucide-react';

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(to bottom right, #212529, #198754)' }}>
        <div className="container text-center">
          <p className="text-uppercase small mb-3">Design.Develop.Deploy</p>
          <h1 className="fw-bold mb-3 display-4 text-success">
            Get Your Product Launched in <span className="text-success">Weeeks</span>
          </h1>
          <p className="lead mb-4 mx-auto font-archivo" style={{ maxWidth: '700px' }}>
            DevCheque is your full-stack team for digital products that ship.
            From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <button className="btn btn-success btn-lg rounded-3">
              Start Your Project →
            </button>
            <button className="btn btn-light btn-lg rounded-3 text-dark">
              View Our Work →
            </button>
          </div>

          {/* Decorative box */}
          <div className="position-relative" style={{ height: '16rem' }}>
            <div className="position-absolute top-50 start-50 translate-middle w-100" style={{ maxWidth: '32rem', height: '12rem' }}>
              <div
                className="rounded-3"
                style={{
                  background: 'linear-gradient(to right, #198754, #0f5132)',
                  transform: 'rotate(3deg)',
                  opacity: 0.8,
                  width: '100%',
                  height: '100%',
                }}
              ><img src="src/assets/bgimage.jpg" alt="About DevCheque" className="img-fluid" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <p className="text-secondary mb-4">
            Trusted by 50+ startups and businesses across Africa
          </p>

          <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
            <div className="col">
              <Rocket className="mb-2 text-success" size={32} />
              <p className="small text-secondary mb-1">Project Delivered</p>
              <p className="h3 fw-bold text-dark">50+</p>
            </div>
            <div className="col">
              <Users className="mb-2 text-success" size={32} />
              <p className="small text-secondary mb-1">Satisfied Client</p>
              <p className="h3 fw-bold text-dark">98%</p>
            </div>
            <div className="col">
              <Award className="mb-2 text-success" size={32} />
              <p className="small text-secondary mb-1">Years Experience</p>
              <p className="h3 fw-bold text-dark">6 yrs</p>
            </div>
            <div className="col">
              <Star className="mb-2 text-success" size={32} />
              <p className="small text-secondary mb-1">Rating</p>
              <p className="h3 fw-bold text-dark">4.9</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

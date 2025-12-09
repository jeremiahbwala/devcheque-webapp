import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Rocket, CheckCircle, TrendingUp } from "lucide-react";

import App1 from './assets/casestudy.jpg';
import App2 from './assets/casestudy2.jpg';
import App3 from './assets/casestudy3.jpg';

function CaseStudy() {

  const caseStudies = [
    {
      image: App2,
      title: 'App Design For Firefit',
      description:
        'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish'
    },
    {
      image: App3,
      title: 'App Design For Firefit',
      description:
      'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish'
    },
    {
      image: App1,
      title: 'App Design For Firefit',
      description:
      'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish'
    }
  ];

  return (
    <>
      {/* Case Studies */}
      <section id="projects" className="py-5 bg-light">
  <div className="container">

    <h2 className="text-center fw-bold mb-3 display-5">Case studies</h2>
    <p className="text-center text-secondary mb-5">
      Explore our recent projects and see how we've helped brands achieve their goals
    </p>

    <div className="d-flex flex-column gap-5">

      {caseStudies.map((study, index) => (
        <div className="row align-items-center g-4" key={index}>

          {/* IMAGE — Left */}
          <div className="col-md-6">
            <img
              src={study.image}
              alt={study.title}
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "1rem"
              }}
            />
          </div>

          {/* TEXT — Right */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">{study.title}</h3>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
              {study.description}
            </p>

            <button className="btn btn-link text-success fw-semibold p-0">
              Read More →
            </button>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>


      {/* Why Work With Us */}
      <section className="py-5 bg-dark text-white">
        <div className="container">

          <h2 className="text-center fw-bold mb-3 display-5 text-black">Why Work With DevCheque?</h2>
          <p className="text-center text-secondary mb-5">
            What makes us different from other agencies
          </p>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div
                  className="bg-success d-flex align-items-center justify-content-center mb-3"
                  style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}
                >
                  <Rocket size={24} />
                </div>
                <h3 className="h5 fw-bold">Launch in Weeks, Not Months</h3>
                <p className="text-white-50">
                  We handle everything from branding, design, frontend, backend, deployment.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div
                  className="bg-success d-flex align-items-center justify-content-center mb-3"
                  style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}
                >
                  <CheckCircle size={24} />
                </div>
                <h3 className="h5 fw-bold">Full-Stack Experience</h3>
                <p className="text-white-50">
                  We manage your entire product flow from start to finish.
                </p>
              </div>
            </div>

            <div className="col-md-4 align-items-center justify-content-center">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div
                  className="bg-success d-flex align-items-center justify-content-center mb-3"
                  style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}
                >
                  <TrendingUp size={24} />
                </div>
                <h3 className="h5 fw-bold">Result Oriented</h3>
                <p className="text-white-50">
                  We deliver performance-focused solutions that scale.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default CaseStudy;

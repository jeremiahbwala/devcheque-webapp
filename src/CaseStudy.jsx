import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Rocket, CheckCircle, TrendingUp } from "lucide-react";

// Import images at the top
import caseStudy1 from './assets/casestudy.jpg';
import caseStudy2 from './assets/casestudy2.jpg';
import caseStudy3 from './assets/casestudy3.jpg';

function CaseStudy() {
  // All your case study data in ONE place
  const caseStudies = [
    {
      id: 1,
      image: caseStudy2,
      title: 'App Design For Firefit',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'start' // For alternating layout
    },
    {
      id: 2,
      image: caseStudy3,
      title: 'E-Commerce Platform Redesign',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'end' // For alternating layout
    },
    {
      id: 3,
      image: caseStudy1,
      title: 'Fintech Mobile App',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'start' // For alternating layout
    }
  ];

  return (
    <>
      {/* Case Studies */}
      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-3 display-5 font-archivo">Case studies</h2>
          <p className="text-center text-black mb-5 font-archivo">
            Explore our recent projects and see how we've helped brands achieve their goals
          </p>

          <div className='container d-flex flex-column gap-5'>
            {/* Map through case studies */}
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className={`row card-grid float-${study.alignment}`}
              >
                <div className="col-md-6">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="img-fluid rounded"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      borderRadius: "1rem"
                    }}
                  />
                </div>
                <div className="col card-info font-archivo">
                  <h2>{study.title}</h2>
                  <p>{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white p-3 font-archivo">
        <div className="container">
          <h2 className="text-center fw-bold mb-3 display-5 text-black font-archivo">
            Why Work With DevCheque?
          </h2>
          <p className="text-center text-black mb-5 font-archivo">
            What makes us different from other agencies
          </p>

          {/* Refactored benefits section */}
          <div className="row g-4">
            {[
              {
                icon: Rocket,
                title: 'Launch in Weeks, Not Months',
                description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
              },
              {
                icon: CheckCircle,
                title: 'Full-Stack Experience',
                description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
              },
              {
                icon: TrendingUp,
                title: 'Result Oriented',
                description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="col-md-6">
                  <div className="card bg-light text-black h-100 p-3 rounded-3">
                    <div
                      className="bg-success d-flex align-items-center justify-content-center mb-3"
                      style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}
                    >
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="h5 text-black fw-bold font-archivo">{benefit.title}</h3>
                    <p className="text-black font-archivo">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
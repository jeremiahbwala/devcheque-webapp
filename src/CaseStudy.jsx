import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Rocket, CheckCircle, TrendingUp } from "lucide-react";


function CaseStudy() {
    const caseStudies = [
        {
          title: 'App Design For Firefit',
          description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around our main needs, coaches can onboard clients, deliver personalized workout plans, and track client performance, personalized training, and a smooth experience from start to finish.'
        },
        {
          title: 'Website Design for camsecure',
          description: 'CamSecure struggled to attract enterprise clients due to its outdated brand, unclear messaging, and a website that lacked the polish they deserved. We audited their entire online presence, reimagined their brand with a new logo, visual system, and clearer narrative. The redesign website featured improved structure, stronger storytelling, and a simplified contact format. We also built a scalable component library for future growth.'
        },
        {
          title: 'Web Design For Tradeport',
          description: 'FitTrack was built to simplify digital coaching. Designed with a clear goal: it simplified decision-making for coaches and delivered results. We created a cross-platform app that helps traders manage clients, track progress, and deliver personalized training with ease. FitTrack ensures reliable performance on a smooth experience from start to finish.'
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

          <div className="d-flex flex-column gap-4">
            {caseStudies.map((study, index) => (
              <div key={index} className="card shadow-sm overflow-hidden">
                <div className="row g-0">
                  {/* Images/Thumbnails */}
                  <div className="col-md-6 d-flex align-items-center justify-content-center p-3" style={{ background: 'linear-gradient(to bottom right, #cfe2ff, #e0bbff)' }}>
                    <div className="d-flex gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="rounded-3 shadow"
                          style={{
                            width: '6rem',
                            height: '12rem',
                            background: 'linear-gradient(to bottom right, #0d6efd, #6f42c1)',
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="col-md-6 p-4">
                    <h3 className="fw-bold mb-3">{study.title}</h3>
                    <p className="text-secondary mb-3">{study.description}</p>
                    <button className="btn btn-link text-success fw-semibold p-0">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-3 display-5">Why Work With DevCheque?</h2>
          <p className="text-center text-secondary mb-5">What makes us different from other agencies</p>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div className="bg-success d-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}>
                  <Rocket size={24} />
                </div>
                <h3 className="h5 fw-bold mb-2">Launch in Weeks, Not Months</h3>
                <p className="text-white-50">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div className="bg-success d-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}>
                  <CheckCircle size={24} />
                </div>
                <h3 className="h5 fw-bold mb-2">Full-Stack Experience</h3>
                <p className="text-white-50">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card bg-secondary text-white h-100 p-3 rounded-3">
                <div className="bg-success d-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem' }}>
                  <TrendingUp size={24} />
                </div>
                <h3 className="h5 fw-bold mb-2">Result Oriented</h3>
                <p className="text-white-50">
                  We handle everything from branding, design, frontend, backend, development. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
    
}

export default CaseStudy;
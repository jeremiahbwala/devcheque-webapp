import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bolajiImg from './assets/team/Bolaji.jpeg';
import olutadeImg from './assets/team/Olutade.jpeg';
import fortuneImg from './assets/team/Fortune.jpeg';
import chideraImg from './assets/team/Chidera.jpeg';
import AboutUs from './assets/About.jpeg';


function Team() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const teamMembers = [
        {
          name: 'Bolaji',
          role: 'Team Lead',
          experience: '3+ years',
          image: bolajiImg, 
          description: 'Bolaji is a seasoned design leader who turns complex challenges into structured, user-centered solutions. He ensures every design decision aligns with user needs and business goals.',
          skills: ['Product Design', 'Ux Strategy', 'Design System', 'Stakeholders Communication', 'Prototyping'],
          expertise: 'Clean code and smooth, accessible interactions.'
        },
        {
          name: 'Olutade',
          role: 'Team Lead',
          experience: '3+ years',
          image: olutadeImg,
          description: 'Olutade builds fast, scalable and reliable digital products with clean engineering practices. He skills as a digital between design and development, ensuring seamless execution.',
          skills: ['Frontend Development', 'React', 'Custom Architecture'],
          expertise: 'High quality builds delivered with technical precision.'
        },
        {
          name: 'Fortune',
          role: 'Product Designer',
          experience: '4+ years',
          image: fortuneImg,
          description: 'Fortune blends creativity with precision to craft beautiful, intuitive user experiences. She highlights ideas into digital products that users love and businesses grow with.',
          skills: ['UI', 'Wireframing', 'Visual Design', 'Interaction Design', 'Prototyping'],
          expertise: 'A balanced mix of visual excellence and usability.'
        },
        {
          name: 'Chidera',
          role: 'Team Lead',
          experience: '4+ years',
          image: chideraImg,
          description: 'Chidera takes user-focused design approaches bringing strategic thinking and creative visual interfaces that resonate with audiences.',
          skills: ['Webflow','Strategy', 'Css Architecture'],
          expertise: 'Strategic thinking'
        }
      ];
    
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
        }, 4000);
        return () => clearInterval(interval);
      }, [teamMembers.length]);
    
      const handlePrevTeam = () => {
        setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      };
    
      const handleNextTeam = () => {
        setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
      };
    
    return (
      <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">About us</h2>

        {/* About content */}
        <div className="row mb-5">
          {/* TEXT SIDE */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div>
              <p className="text-black mb-3">
                DevCheque began in 2019 when two developers, Bolaji and olutade, set out to solve a real problem: Founders struggled to find reliable
                designers and developers who delivered quality work on time. <br />
                We built DevCheque on one promise-deliver exceptional digital products without the agency BS. No overpromising. No delays. No surprise
                fees. <br />
                Six years and 50+ projects later, that promise still drives us. We've helped fintech startups launched funded MVPs, revamped 
                e-commerce platforms that doubled conversions, and built apps users love. <br />
                Today, DevCheque is a full-stack product partner-from first wireframe to deployment. whether you're a new Founders
                or a growing business, we treat your projects like it's our own. <br />
                Let's build something great.  
              </p>
              <button className="btn btn-link text-success fw-semibold p-5 d-flex text-decoration-none ms-15">Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
            </div>
            <button className="btn btn-success rounded-pill font-archivo" style={{width: '200px', backgroundColor: '#1da11d'}}>
              Start Your Project
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="col-md-6 d-flex">
            <div
              className="rounded-3 w-100 p-3 d-flex align-items-center justify-content-center bg-light"
              style={{
                border: "1px solid #eee",
                height: "320px" 
              }}
            >
              <img
                src={AboutUs}
                alt="About DevCheque"
                className="img-fluid rounded-3 h-100 w-100"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-5">
          <h3 className="text-center fw-bold mb-3 h4">Meet Our Team</h3>
          <p className="text-center text-black mb-4">
            Experienced professionals dedicated to delivering exceptional digital products
          </p>

          <div className="position-relative">
            {/* Team carousel */}
            <div className="overflow-hidden">
              <div 
                className="d-flex transition-transform"
                style={{ transform: `translateX(-${currentTeamIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex-shrink-0 px-2" style={{ minWidth: '100%' }}>
                    <div className="card border shadow-sm rounded-3 p-3 mx-auto" style={{ maxWidth: '22rem' }}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="card-img-top rounded mb-3" 
                        style={{ height: '12rem', objectFit: 'cover' }}
                      />
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h4 className="h6 fw-bold">{member.name}</h4>
                          <p className="text-success fw-semibold mb-0">{member.role}</p>
                        </div>
                        <span className="text-muted small">{member.experience}</span>
                      </div>
                      <p className="text-secondary small mb-2">{member.description}</p>
                      <div className="mb-2">
                        <p className="small fw-semibold mb-1">Key Skills</p>
                        <div className="d-flex flex-wrap gap-1">
                          {member.skills.map((skill, idx) => (
                            <span key={idx} className="badge bg-light text-dark">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="border-top pt-2">
                        <p className="text-muted small mb-1">What He Brings:</p>
                        <p className="small fw-medium mb-0">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation */}
            <button
              onClick={handlePrevTeam}
              className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextTeam}
              className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel indicators */}
          <div className="d-flex justify-content-center mt-3 gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeamIndex(index)}
                className={`rounded-circle border-0 ${index === currentTeamIndex ? 'bg-success' : 'bg-secondary'}`}
                style={{ width: index === currentTeamIndex ? '2rem' : '0.5rem', height: '0.5rem', transition: 'all 0.3s' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}

export default Team;
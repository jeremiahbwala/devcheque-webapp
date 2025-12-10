import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bolajiImg from './assets/team/Bolaji.jpeg';
import olutadeImg from './assets/team/Olutade.jpeg';
import fortuneImg from './assets/team/Fortune.jpeg';
import chideraImg from './assets/team/Chidera.jpeg';


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
                Here's a shorter, cleaner version with the same story and impact: Every great business starts with a vision - ours began with two developers and one frustrating truth. <br />
                In 2019, Bolaji and olutade watched brillant African founders struggle, not because their ideas lacked potential, but because they couldn't find reliable designerscand developers.
                Projects dragged, communication broke, and quality was hit-or-mss. So we built DevCheque with one promise: <br />
                Exceptional digital products. Delivered on time, on budget. No agency BS. <br />
                Six years and 50+ projects later, that promise still leads us. We've launched fintech MVps that secured founding, redesigned e-commerce stores that doubled conversions, and built apps users genuinely
                love. But our biggest wins? The relationships and growth we've helped create. <br />
                Today, DevCheque isn't just a studio - we're your full-stack product partner, from first wireframe to final deployment. <br />
                Whether you're a new founder or a growing business, you deserves a team that treats tour products like their own. That's DevCheque.
              </p>
                <button className="btn btn-success rounded-pill font-archivo" style={{width: '200px', backgroundColor: '#1da11d'}}>
                  Start Your Project
                </button>
              <button className="btn btn-link text-success fw-semibold p-0">Read More ⓘ</button>
            </div>
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
                src="src/assets/About.jpeg"
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
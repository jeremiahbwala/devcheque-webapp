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
          description: 'Seasoned product designer and team leader who turns complex problems into elegant user experiences. He ensures every design decision aligns with user needs and business goals.',
          skills: ['Product Design', 'Ux Strategy', 'Design System', 'Prototyping'],
          expertise: 'Great code and artwork, innovative'
        },
        {
          name: 'Olutade',
          role: 'Team Lead',
          experience: '3+ years',
          image: olutadeImg,
          description: 'Olutade builds scalable and reliable digital products with clean engineering practices. He skills as a digital between design and development, ensuring seamless execution.',
          skills: ['Frontend Development', 'React', 'Custom Architecture'],
          expertise: 'High quality builds delivered with expertise promised'
        },
        {
          name: 'Fortune',
          role: 'Team Lead',
          experience: '6+ years',
          image: fortuneImg,
          description: 'Fortune blends creativity with precision to craft beautiful, intuitive user experiences. She highlights ideas into digital products that users love and businesses grow with.',
          skills: ['Sales', 'Wordsmithing', 'Visual Design', 'Interaction Design', 'Prototyping'],
          expertise: 'Seasoned mix of keen saleswomanship and quality'
        },
        {
          name: 'Chidera',
          role: 'Team Lead',
          experience: '4+ years',
          image: chideraImg,
          description: 'Chidera takes user-focused design approaches bringing strategic thinking and creative visual interfaces that resonate with audiences.',
          skills: ['Strategy', 'Ux Architecture'],
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
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="h4 fw-bold mb-3">
              Every great business starts with a vision. Ours started with two developers and one frustrating realization
            </h3>
            <p className="text-secondary mb-3">
              In 2019, Bolaji and Olutade were watching talented African founders struggle, not because their ideas weren't brilliant, but because they couldn't find developers and designers who actually delivered. Projects dragged on for months. Communication was spotty. Quality was inconsistent. We knew there had to be a better way.
            </p>
            <p className="mb-3">
              DevCheque was built on a simple promise: deliver exceptional digital products, on time and on budget, without the agency BS. No overpromising. No endless revisions. No surprise fees. Just honest work from people who care about your success. <br />
              Six years and 50+ projects later, that promise still drives everything we do.
            </p>
            <p className="mb-3">
              We've helped fintech startups launch MVPs that attracted seed funding. We've redesigned e-commerce platforms that doubled conversion rates. We've built mobile apps that users genuinely love. But our proudest achievements aren't just the projects, they're the relationships we've built and the businesses we've helped grow. Today, DevCheque is more than a design and development studio.
            </p>
            <button className="btn btn-link text-success fw-semibold p-0">Read more ⓘ</button>
          </div>
          <div className="col-md-6">
            <div className="rounded-3 p-3 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom right, #fff3cd, #ffe5b4)', height: '16rem' }}>
              <img src="src/assets/About.jpeg" alt="About DevCheque" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-5">
          <h3 className="text-center fw-bold mb-3 h4">Meet Our Team</h3>
          <p className="text-center text-secondary mb-4">
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
                        <p className="text-muted small mb-1">What She Brings:</p>
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
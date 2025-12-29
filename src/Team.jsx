
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team/team.css';
import React, { useState } from 'react';
import './index.css';
import BolajiImage from './assets/team/Bolaji.jpeg'
import OlutadeImage from './assets/team/Olutade.jpeg'
import FortuneImage from './assets/team/Fortune.jpeg'
import ChideraImg from './assets/team/Chidera.jpeg'
import AboutImage from './assets/About.jpeg'



function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Bolaji',
      role: 'Team Lead',
      experience: '4+ years',
      image: BolajiImage,
      description: 'Bolaji is a seasoned design leader who turns complex challenges into structured, user-centered solutions. He ensures every design decision aligns with user needs and business goals.',
      skills: ['Product Design', 'Ux Strategy', 'Designs System', 'Stakeholder Communications', 'Prototyping'],
      expertise: 'Clean code and smooth, accessible interactions.'
    },
    {
      name: 'Olutade',
      role: 'Team Lead',
      experience: '6+ years',
      image: OlutadeImage,
      description: 'Olutade builds fast, scalable, and reliable digital products with clean engineering practices. He acts as a bridge between design and development, ensuring smooth execution.',
      skills: ['Frontend Development', 'React', 'Technical Leadership', 'System Architecture'],
      expertise: 'High-quality builds delivered with technical precision.'
    },
    {
      name: 'Fortune',
      role: 'Product Designer',
      experience: '4+ years',
      image: FortuneImage,
      description: 'Fortune blends creativity with precision to craft beautiful, intuitive user experiences. She transforms ideas into clean and functional interfaces.',
      skills: ['UI', 'Wireframing', 'Visual Design', 'Interaction design', 'Prototyping'],
      expertise: 'A balanced mix of visual excellence and usability.'
    },
    {
      name: 'Chidera',
      role: 'Team Lead',
      experience: '5+ years',
      image: ChideraImg,
      description: 'Chidera delivers pixel-perfect interfaces with meticulous attention to detail. His work ensures seamless experiences across all devices.',
      skills: ['Webflow', 'React', 'Css Architecture', 'Responsive Design'],
      expertise: 'Precision implementation and cross-platform consistency.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* About Section */}
      <section id='about' className="about-section">
        <div className="about-container">
          <h2 className="about-title">About us</h2>
          
          <div className="about-content">
            <div>
              <p className="about-text">
                DevCheque began in 2019 when two developers, Bolaji and Olutade, set out to solve a real problem: founders struggled to find reliable designers and developers who delivered quality work on time.
              </p>
              <p className="about-text">
                We built DevCheque on one promise—deliver exceptional digital products without the agency BS. No overpromising. No delays. No surprise fees.
              </p>
              <p className="about-text">
                Six years and 50+ projects later, that promise still drives us. We've helped fintech startups launch funded MVPs, revamped e-commerce platforms that doubled conversions, and built apps users love.
              </p>
              <p className="about-text">
                Today, DevCheque is a full-stack product partner—from first wireframe to deployment. Whether you're a new founder or a growing business, we treat your project like it's our own.
              </p>
              <p className="about-text">Let's build something great.</p>
              
              <div>
                <button className="start-project-btn">Start Project</button>
              </div>
            </div>

            <div className="about-image-wrapper">
              <img 
                src={AboutImage}
                alt="DevCheque team meeting"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="team-section">
  <div className="team-container">
    <h3 className="team-title">Meet The Team</h3>
    <p className="team-subtitle">
      Experienced professionals dedicated to delivering exceptional digital products
    </p>

    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img
            src={member.image}
            alt={member.name}
            className="card-image"
          />

          <div className="card-contents">
            <div className="card-header">
              <h4 className="card-name">{member.name}</h4>
              <span className="card-experience">{member.experience}</span>
            </div>

            <p className="card-role">{member.role}</p>
            <p className="card-description">{member.description}</p>

            <div className="skills-section">
              <p className="skills-title">Key Skills</p>
              <div className="skills-list">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="expertise-section">
              <p className="expertise-label">
                What {member.name === 'Fortune' ? 'She' : 'He'} Brings:
              </p>
              <p className="expertise-text">{member.expertise}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default Team;
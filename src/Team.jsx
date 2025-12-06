import './index.css';
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
        <section id="about" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About us</h2>
            <div className="md:flex gap-12 items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Every great business starts with a vision. Ours started with two developers and one frustrating realization</h3>
                <p className="text-gray-600 mb-6">
                  In 2019, Bolaji and Olutade were watching talented African founders struggle, not because their  ideas weren't brilliant, but because they couldn't find developers and designers who actually delivered.
                  Projects dragged on for months. Communication was spotty. Quality was inconsistent, We knew there had to be a better way. 
                </p>
                <p>
                  DevCheque was built on a simply promise: deliver exceptional digital products, on time and on budget, without the adency BS. No overpromising. No endless revisions. No surprise fees. Just honest work from people who care about your success. <br />
                  Six years and 50+ projects later, that promises still drives everything we do.
                </p>
                <p>
                  We've helped fintech startups launch MVPs that attracted seed funding. We've redesigned e-commerce platforms that doubled conversion rates. We've built mobile apps that users genuinely love.
                  But our proudest acheivements aren't just the projects, they're the relationships we've built and the businesses we've helped grow. Today, DevCheque is more than a design and development studio.
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700">
                  Read more ⓘ
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <img src="src/assets/About.jpeg" loading='lazy' />
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">Meet Our Team</h3>
              <p className="text-center text-gray-600 mb-8">
                Experienced professionals dedicated to delivering exceptional digital products
              </p>
            
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
                  >
                    {teamMembers.map((member, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />

                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-bold">{member.name}</h4>
                              <p className="text-green-600 font-semibold">{member.role}</p>
                            </div>
                            <span className="text-sm text-gray-500">{member.experience}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                          <div className="mb-4">
                            <p className="text-sm font-semibold mb-2">Key Skills</p>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, idx) => (
                                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="border-t pt-3">
                            <p className="text-xs text-gray-500">What She Brings:</p>
                            <p className="text-sm font-medium">{member.expertise}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              
                <button
                  onClick={handlePrevTeam}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextTeam}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTeamIndex ? 'bg-green-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}

export default Team;
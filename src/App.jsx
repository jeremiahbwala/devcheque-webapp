import './index.css';
import React, { useState, useEffect } from 'react';
import { Rocket, Users, Award, Star, CheckCircle, Code, Smartphone, Palette, TrendingUp, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

export function DevChequeWebsite() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectTypes: [],
    budget: 5000,
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(null);

  

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

  const handleProjectTypeToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
  };

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <span className="text-xl font-bold">Devcheque</span>
              </div>
            
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-700 hover:text-green-500">About us</a>
                <a href="#projects" className="text-gray-700 hover:text-green-500">Projects</a>
                <a href="#services" className="text-gray-700 hover:text-green-500">Services</a>
                <a href="#work" className="text-gray-700 hover:text-green-500">How we work</a>
              </div>

              <button className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Start Your Project
              </button>

              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-3">
                <a href="#about" className="block text-gray-700">About us</a>
                <a href="#projects" className="block text-gray-700">Projects</a>
                <a href="#services" className="block text-gray-700">Services</a>
                <a href="#work" className="block text-gray-700">How we work</a>
                <button className="w-full bg-green-500 text-white px-6 py-2 rounded-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Case Studies */}
        <section id="projects" className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Case studies</h2>
            <p className="text-center text-gray-600 mb-12">
             Explore our recent projects and see how we've helped brands achieve their goals
            </p>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 p-6 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                         <div key={i} className="w-24 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"></div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <button className="text-green-600 font-semibold hover:text-green-700">
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
        <section className="py-16 px-4 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Work With DevCheque?</h2>
            <p className="text-center text-gray-400 mb-12">What makes us different from other agencies</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Launch in Weeks, Not Months</h3>
                <p className="text-gray-400">
                We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Stack Experience</h3>
                <p className="text-gray-400">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Result Oriented</h3>
                <p className="text-gray-400">
                  We handle everything from branding, design, frontend, backend, development. No multiple vendors, no frontend gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
             </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-green-600 font-semibold mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What our clients say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl text-green-500 mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  Before DevCheque, our program was chaotic and hard to scale. The app they built modernized everything— personalized workouts, smooth tracking, higher engagement, and triple retention. They didn't just build an app; they strengthened our entire business.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Michael Reeves</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl text-green-500 mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  Our old brand made us look smaller than we were. DevCheque fixed that with a modern identity and a website built for enterprise clients. Clear messaging and confident visuals improved our credibility, and within weeks it qualified leads grew. They truly elevated our business for good.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Damilola Grant</p>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      <Star size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Development Works */}
        <section id="work" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How development through Devcheque works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#1</div>
                <h3 className="text-xl font-bold mb-2">Discovery & Alignment</h3>
                <p className="text-gray-600">
                  We start by understanding your goals, challenges, and vision for the product before starting a plan.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#2</div>
                <h3 className="text-xl font-bold mb-2">Design Sprint</h3>
                <p className="text-gray-600">
                  We design high-fidelity layouts, user interfaces, and interactive prototypes in fast easy cycles.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#3</div>
                <h3 className="text-xl font-bold mb-2">Development & Build</h3>
                <p className="text-gray-600">
                  We turn the designs into fast, reliable, and scalable digital products using modern technologies.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#4</div>
                <h3 className="text-xl font-bold mb-2">Deploy</h3>
                <p className="text-gray-600">
                  After testing and final refinements, we launch your product ensuring everything works perfectly.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#5</div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance & Refinement</h3>
                <p className="text-gray-600">
                  We rigorously test the product across devices, browsers, and screen sizes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-green-600 font-bold mb-2">#6</div>
                <h3 className="text-xl font-bold mb-2">Launch & Handover</h3>
                <p className="text-gray-600">
                  We prepare the product for deployment, finalize all configurations, and ensure a smooth handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-green-600 font-semibold mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-gray-600 mb-12">
              Comprehensive digital solutions tailored to bring your vision to life
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Palette size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Uiux Design</h3>
                <p className="text-gray-600 mb-4">
                  We craft intuitive and visually stunning interfaces that delight users and drive engagement. Our design process focuses on user research, wireframing, prototyping, and creating pixel-perfect designs that align with your brand.
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 w-full">
                  Learn more
                </button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Building fast, responsive, and scalable websites using modern technologies. From simple landing pages to complex web applications, we develop solutions that are robust, secure, and optimized for performance.
                </p>
                <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-900 w-full">
                  Learn more
                </button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Apps</h3>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. We build apps that are performant, user-friendly, and designed to meet your business objectives.
                </p>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 w-full">
                  Learn more
                </button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Branding</h3>
                <p className="text-gray-600 mb-4">
                  Creating cohesive brand identities that resonate with your target audience. From logo design to complete brand guidelines, we help you establish a strong visual presence in the market.
                </p>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    );
}

export default DevChequeWebsite;

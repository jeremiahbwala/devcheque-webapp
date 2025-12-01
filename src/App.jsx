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

  const teamMembers = [
    {
      name: 'Bolaji',
      role: 'Team Lead',
      experience: '3+ years',
      description: 'Seasoned product designer and team leader who turns complex problems into elegant user experiences. He ensures every design decision aligns with user needs and business goals.',
      skills: ['Product Design', 'Ux Strategy', 'Design System', 'Prototyping'],
      expertise: 'Great code and artwork, innovative'
    },
    {
      name: 'Olutade',
      role: 'Team Lead',
      experience: '3+ years',
      description: 'Olutade builds scalable and reliable digital products with clean engineering practices. He skills as a digital between design and development, ensuring seamless execution.',
      skills: ['Frontend Development', 'React', 'Custom Architecture'],
      expertise: 'High quality builds delivered with expertise promised'
    },
    {
      name: 'Fortune',
      role: 'Team Lead',
      experience: '6+ years',
      description: 'Fortune blends creativity with precision to craft beautiful, intuitive user experiences. She highlights ideas into digital products that users love and businesses grow with.',
      skills: ['Sales', 'Wordsmithing', 'Visual Design', 'Interaction Design', 'Prototyping'],
      expertise: 'Seasoned mix of keen saleswomanship and quality'
    },
    {
      name: 'Chidera',
      role: 'Team Lead',
      experience: '4+ years',
      description: 'Chidera takes user-focused design approaches bringing strategic thinking and creative visual interfaces that resonate with audiences.',
      skills: ['Strategy', 'Ux Architecture'],
      expertise: 'Strategic thinking'
    }
  ];

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

  const faqs = [
    { q: 'What services does DevCheque offer?', a: 'DevCheque delivers end-to-end digital product design and development' },
    { q: 'Do you only design, or do you also build/develop?', a: 'We do both - full design and development services' },
    { q: 'What industries or types of businesses do you work with?', a: 'We work with startups and businesses across various industries' },
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity' },
    { q: "What's your process? How involved do I need to be?", a: 'We follow a collaborative process with regular check-ins' },
    { q: 'Do you work with clients outside Nigeria?', a: 'Yes, we work with clients globally' },
    { q: 'Do you offer payment plans or flexible payment options?', a: 'Yes, we offer flexible payment arrangements' },
    { q: "What if I'm not satisfied with the work?", a: 'We work closely with you until you\'re satisfied' },
    { q: 'What technologies do you use?', a: 'We use modern tech stacks tailored to your needs' },
    { q: 'Will I own the code and design files?', a: 'Yes, you own all deliverables upon project completion' },
    { q: 'Do you provide ongoing support and maintenance after launch?', a: 'Yes, we offer post-launch support packages' }
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

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-900 to-green-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wide mb-4">Design.Develop.Deploy</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your Product Launched in <span className="text-green-400">Weeeks</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              DevCheque is your full-stack team for digital products that ship.
              From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
                Start Your Project →
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100">
                View Our Work →
              </button>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-2xl h-48 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl transform rotate-3 opacity-80"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-green-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-600 mb-8">Trusted by 50+ startups and businesses across Africa</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Rocket className="mx-auto mb-2 text-green-600" size={32} />
                <p className="text-sm text-gray-600">Project Delivered</p>
                <p className="text-3xl font-bold text-gray-900">50+</p>
              </div>
              <div>
                <Users className="mx-auto mb-2 text-green-600" size={32} />
                <p className="text-sm text-gray-600">Satisfied Client</p>
                <p className="text-3xl font-bold text-gray-900">98%</p>
              </div>
              <div>
                <Award className="mx-auto mb-2 text-green-600" size={32} />
                <p className="text-sm text-gray-600">Years Experience</p>
                <p className="text-3xl font-bold text-gray-900">6 yrs</p>
              </div>
              <div>
                <Star className="mx-auto mb-2 text-green-600" size={32} />
                <p className="text-sm text-gray-600">Rating</p>
                <p className="text-3xl font-bold text-gray-900">4.9</p>
              </div>
            </div>
          </div>
        </section>

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

        {/* About Us */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About us</h2>
            <div className="md:flex gap-12 items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">We Create Digital Products That Make a Difference</h3>
                <p className="text-gray-600 mb-6">
                  DevCheque began with a simple mission: help founders get reliable, high-quality digital products without delays or excuses. What started with two developers is now a trusted studio delivering clean design, solid development, and real results. From UI/UX to web and mobile apps, we turn ideas into scalable, effective products.
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700">
                  See more Informations ⓘ
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="bg-gray-300 w-full h-full rounded-lg"></div>
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
                          <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
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

        {/* Contact Form */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Have a great idea?</h2>
            <p className="text-center text-gray-600 mb-8">
              Got a great idea that you might want to work out on together, then you can let us know by filling up your details below.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 mx-auto block mb-8">
              Start Project
            </button>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Company/Organization <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes('Web Design')}
                      onChange={() => handleProjectTypeToggle('Web Design')}
                      className="w-4 h-4"
                    />
                    <span>Web Design</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes('Branding')}
                      onChange={() => handleProjectTypeToggle('Branding')}
                      className="w-4 h-4"
                    />
                    <span>Branding</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes('Mobile App Design')}
                      onChange={() => handleProjectTypeToggle('Mobile App Design')}
                      className="w-4 h-4"
                    />
                    <span>Mobile App Design</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes('Others')}
                      onChange={() => handleProjectTypeToggle('Others')}
                      className="w-4 h-4"
                    />
                    <span>Others</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Project Budget</label>
                <p className="text-xs text-gray-500 mb-3">Slide to indicate your budget range</p>
                <input
                  type="range"
                  min="5000"
                  max="25000"
                  step="1000"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                  className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${formData.budget.toLocaleString()}</span>
                  <span>$25000</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Type here"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold">
                Submit
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12">
              Everything you need to know about working with DevCheque
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="font-semibold">{faq.q}</span>
                    </div>
                    <span className="text-2xl text-gray-400">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-gray-600 pl-18">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Devcheque</h3>
                <p className="text-gray-400 mb-4">devcheque@gmail.com</p>
                <p className="text-gray-400">Phone: +01 234567890</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-green-500">About us</a></li>
                  <li><a href="#projects" className="hover:text-green-500">Projects</a></li>
                  <li><a href="#services" className="hover:text-green-500">Services</a></li>
                  <li><a href="#work" className="hover:text-green-500">How we work</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-green-500">Blog</a></li>
                  <li><a href="#" className="hover:text-green-500">Support</a></li>
                  <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Subscribe</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 px-6 py-2 rounded-r-lg hover:bg-green-700">
                    Send
                  </button>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2024 DevCheque. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default DevChequeWebsite;

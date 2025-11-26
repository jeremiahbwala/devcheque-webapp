import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Rocket, Users, Award, Star } from 'lucide-react';

// Reusable Button Component
const Button = ({ variant = 'primary', children, onClick, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Dev cheque<span className="text-green-500">✓</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-500">About us</a>
            <a href="#projects" className="text-gray-700 hover:text-green-500">Projects</a>
            <a href="#services" className="text-gray-700 hover:text-green-500">Services</a>
            <a href="#how-we-work" className="text-gray-700 hover:text-green-500">How we work</a>
            <Button variant="primary">Start Your Project</Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" className="block text-gray-700">About us</a>
            <a href="#projects" className="block text-gray-700">Projects</a>
            <a href="#services" className="block text-gray-700">Services</a>
            <a href="#how-we-work" className="block text-gray-700">How we work</a>
            <Button variant="primary" className="w-full">Start Your Project</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wider mb-4">Design.Develop.Deploy</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Get Your Product Launched in <span className="text-green-400">Weeks</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          DevCheque is your full-stack team for digital products that ship. 
          From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">Start Your Project →</Button>
          <Button variant="outline">How We Work →</Button>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-3xl h-64 flex items-center justify-center">
            <p className="text-white text-xl">3D Ribbon Visual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { icon: '📄', label: 'Project Delivered', value: '50+' },
    { icon: '👥', label: 'Satisfied Client', value: '98%' },
    { icon: '⏱️', label: 'Years Experience', value: '6 yrs' },
    { icon: '⭐', label: 'Rating', value: '4.9' }
  ];
  
  return (
    <section className="bg-green-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm mb-8">Trusted by 50+ startups and businesses across Africa</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Study Card
const CaseStudyCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Phone Mockups Placeholder */}
        <div className="flex gap-4 justify-center md:w-1/2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-24 h-48 bg-blue-100 rounded-3xl border-4 border-gray-800 flex items-center justify-center">
              <p className="text-xs text-gray-500">Screen {i}</p>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="text-green-500 font-medium hover:text-green-600">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

// Case Studies Section
const CaseStudiesSection = () => {
  const cases = [
    {
      title: 'App Design For Firefit',
      description: 'Firefit was built to simplify digital cooking. Designed with a clean grid, it delivers a seamless fitness experience across devices. We deep-dived into user needs, we created a class platform that feel apps connect manage details, track progress, and deliver personalization tracking wild owa.'
    },
    {
      title: 'App Design For Firefit',
      description: 'Firefit was built to simplify digital cooking. Designed with a clean grid, it delivers a seamless fitness experience across devices. We deep-dived into user needs, we created a class platform that feel apps connect manage details, track progress, and deliver personalization tracking wild owa.'
    },
    {
      title: 'App Design For Firefit',
      description: 'Firefit was built to simplify digital cooking. Designed with a clean grid, it delivers a seamless fitness experience across devices. We deep-dived into user needs, we created a class platform that feel apps connect manage details, track progress, and deliver personalization tracking wild owa.'
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Case studies</h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our recent projects and see how we've helped brands achieve their goals
        </p>
        <div className="space-y-6">
          {cases.map((caseStudy, idx) => (
            <CaseStudyCard key={idx} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// Why Us Section
const WhyUsSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Launch in Weeks, Not Months',
      description: 'We move fast without cutting corners. Most projects complete in 4-8 weeks not 3-6 months like traditional agencies. How? We\'ve refined our process over 50+ projects, eliminating bottlenecks without sacrificing quality. You get to market while momentum is hot, not when it\'s cold.'
    },
    {
      icon: '🎯',
      title: 'Full-Stack Excellence. Zero Coordination Headache',
      description: 'From brand identity to deployed backend, we handle it all. No juggling multiple vendors. No gaps where things fall through. Just one team, one vision, and seamless execution from concept to launch.'
    },
    {
      icon: '🤝',
      title: 'Launch in Weeks, Not Month Your Success Is Our Success',
      description: 'We don\'t just execute and disappear. We collaborate, provide strategic input, and genuinely care about your outcome. You get proactive communication, honest timelines, and a team that treats your project like it\'s their own. Because when you win, we win.'
    }
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Why Work With DevCheque?</h2>
        <p className="text-center text-gray-600 mb-12">What makes us different from other agencies</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Card
const TestimonialCard = ({ quote, name, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="text-4xl text-blue-500 mb-4">"</div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div>
          <p className="font-semibold">{name}</p>
          <div className="flex text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    { quote: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna velit sit dolor fringilla vulput lectus amet. Integer quis pulvinar odio tempor elit. Viverra massa mauris id vel tortor dui adipiscing.', name: 'Name', rating: 5 },
    { quote: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna velit sit dolor fringilla vulput lectus amet. Integer quis pulvinar odio tempor elit. Viverra massa mauris id vel tortor dui adipiscing.', name: 'Name', rating: 5 },
    { quote: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna velit sit dolor fringilla vulput lectus amet. Integer quis pulvinar odio tempor elit. Viverra massa mauris id vel tortor dui adipiscing.', name: 'Name', rating: 5 },
    { quote: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna velit sit dolor fringilla vulput lectus amet. Integer quis pulvinar odio tempor elit. Viverra massa mauris id vel tortor dui adipiscing.', name: 'Name', rating: 5 }
  ];
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-2">Testimonial</p>
        <h2 className="text-3xl font-bold text-center mb-12">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Step
const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
          #{number}
        </div>
        <div>
          <h4 className="font-bold mb-2">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { number: 1, title: 'Discovery & Alignment', description: 'We start with a deep dive into your vision, goals, and target audience to ensure we\'re aligned.' },
    { number: 2, title: 'Design Sprint', description: 'We design high-fidelity layouts, mockups, and prototypes for your brand.' },
    { number: 3, title: 'Development & Build', description: 'Our developers bring designs to life and enable legal architecture.' },
    { number: 4, title: 'Deploy', description: 'After testing and fine-tuning, we launch your product and make sure it\'s scalable.' },
    { number: 5, title: 'Quality Assurance & Refinement', description: 'We rigorously test for bugs and usability issues to ensure a flawless launch.' },
    { number: 6, title: 'Launch & Handover', description: 'We support the product for developers, designers, and marketing via feedback.' }
  ];
  
  return (
    <section id="how-we-work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">How development</h2>
        <p className="text-center mb-12">through Devcheque works</p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card
const ServiceCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    green: 'bg-green-50',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50'
  };
  
  return (
    <div className={`${colorClasses[color]} p-6 rounded-xl`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: '✏️',
      title: 'UI/UX Design',
      description: 'We craft intuitive and visually stunning interfaces that delight users and drive engagement. Our design process focuses on user research, wireframing, prototyping, and creating pixel-perfect designs that align with your brand.',
      color: 'green'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable websites using modern technologies. From simple landing pages to complex web applications, we develop solutions that are robust, secure, and optimized for performance.',
      color: 'blue'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across iOS and Android. We build apps that are performant, user-friendly, and designed to meet your business objectives.',
      color: 'purple'
    },
    {
      icon: '🎨',
      title: 'Branding',
      description: 'Creating cohesive brand identities that resonate with your target audience. From logo design to complete brand guidelines, we help you establish a strong visual presence that stands out in the market.',
      color: 'orange'
    }
  ];
  
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-wider text-green-500 mb-2">WHAT WE DO</p>
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          Comprehensive digital solutions tailored to bring your vision to life
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              We Create Digital Products That Make a Difference
            </h3>
            <p className="text-gray-600 mb-6">
              We help brands elevate their digital presence through exceptional design and smart technology. At DevCheque, our team of designers and developers collaborates to build functional, beautiful, and high-performing digital products. From UI/UX to web and mobile development, we turn ideas into scalable solutions that deliver real results.
            </p>
            <button className="text-green-500 font-medium hover:text-green-600">
              See more Informations →
            </button>
          </div>
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
            <p className="text-gray-500">Team Photo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Clients Section
const ClientsSection = () => {
  const clients = ['Google', 'Slack', 'Behance', 'Notion', 'Figma', 'Microsoft', 'Dribbble'];
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-4">Our Clients</h3>
        <p className="text-center text-gray-600 mb-8">
          We love making, and being made, by our very clients
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, idx) => (
            <div key={idx} className="text-gray-400 font-semibold text-xl">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Item
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center font-bold flex-shrink-0">
            Q
          </div>
          <span className="font-medium text-left">{question}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    { question: 'What services does DevCheque offer?', answer: 'DevCheque offers end-to-end digital product development including UI/UX design, web development, mobile app development, and branding services.' },
    { question: 'Do you only design, or do you also build/develop?', answer: 'We do both! We provide comprehensive services from design to development and deployment.' },
    { question: 'How long does a typical project take?', answer: 'Most projects are completed in 4-8 weeks, depending on complexity and scope.' },
    { question: 'What industries or types of businesses do you work with?', answer: 'We work with startups, SMEs, and established businesses across various industries including tech, healthcare, finance, and e-commerce.' },
    { question: 'What\'s your process? How involved do I need to be?', answer: 'Our process includes discovery, design, development, testing, and launch. We keep you involved at key milestones while handling the heavy lifting.' },
    { question: 'Do you work with clients outside Nigeria?', answer: 'Yes! We work with clients globally and have experience delivering projects internationally.' },
    { question: 'Do you offer payment plans or flexible payment options?', answer: 'Yes, we offer flexible payment plans tailored to your project needs.' },
    { question: 'What if Im not satisfied with the work?', answer: 'We work closely with you throughout the process and offer revisions to ensure you\'re completely satisfied.' },
    { question: 'Will I own the code and design files?', answer: 'Yes, upon project completion and full payment, you own all the code and design files.' },
    { question: 'What technologies do you use?', answer: 'We use modern technologies including React, Node.js, React Native, and more, chosen based on your project needs.' },
    { question: 'Do you provide ongoing support and maintenance after launch?', answer: 'Yes, we offer ongoing support and maintenance packages to keep your product running smoothly.' }
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to know about working with confidence
        </p>
        <div className="bg-white rounded-xl shadow-sm">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CaseStudiesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <FAQSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Product?</h3>
          <p className="text-gray-400 mb-6">Let's turn your vision into reality</p>
          <Button variant="primary">Get Started Today</Button>
          <div className="mt-12 text-gray-500 text-sm">
            © 2024 DevCheque. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;

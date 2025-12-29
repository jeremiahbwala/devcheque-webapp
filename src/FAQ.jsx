import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  // Move FAQ data to a constant - easier to manage
  const faqs = [
    { 
      q: 'What services does DevCheque offer?', 
      a: 'DevCheque delivers end-to-end digital product design and development, including UI/UX design, web development, mobile apps, and branding.' 
    },
    { 
      q: 'Do you only design, or do you also build/develop?', 
      a: 'We do both - full design and development services. We handle everything from initial wireframes to final deployment.' 
    },
    { 
      q: 'What industries or types of businesses do you work with?', 
      a: 'We work with startups and businesses across various industries including fintech, e-commerce, health & fitness, and SaaS platforms.' 
    },
    { 
      q: 'How long does a typical project take?', 
      a: 'Project timelines vary based on scope and complexity. A simple landing page takes 2-3 weeks, while full apps take 8-12 weeks.' 
    },
    { 
      q: "What's your process? How involved do I need to be?", 
      a: 'We follow a collaborative process with regular check-ins. You\'ll be involved in key decisions but we handle the day-to-day execution.' 
    },
    { 
      q: 'Do you work with clients outside Nigeria?', 
      a: 'Yes, we work with clients globally. We have experience working remotely with teams across Africa, Europe, and North America.' 
    },
    { 
      q: 'Do you offer payment plans or flexible payment options?', 
      a: 'Yes, we offer flexible payment arrangements including milestone-based payments and installment plans for larger projects.' 
    },
    { 
      q: "What if I'm not satisfied with the work?", 
      a: 'We work closely with you until you\'re satisfied. Our process includes regular reviews and revisions at key milestones.' 
    },
    { 
      q: 'What technologies do you use?', 
      a: 'We use modern tech stacks tailored to your needs - React, Node.js, Django, React Native, and more. We choose the best tools for each project.' 
    },
    { 
      q: 'Will I own the code and design files?', 
      a: 'Yes, you own all deliverables upon project completion and final payment. We provide full source code and design files.' 
    },
    { 
      q: 'Do you provide ongoing support and maintenance after launch?', 
      a: 'Yes, we offer post-launch support packages including bug fixes, updates, and feature enhancements.' 
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container" style={{ maxWidth: '48rem' }}>
        <h2 className="text-center fw-bold mb-3 display-5">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-secondary mb-4">
          Everything you need to know about working with DevCheque
        </p>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${openFaq === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`collapse${index}`}
                >
                  <span className="d-flex align-items-center gap-3">
                    <div className="bg-success text-white rounded px-2 py-1 fw-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {faq.q}
                  </span>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
              >
                <div className="accordion-body">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
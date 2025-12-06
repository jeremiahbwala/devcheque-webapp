import './index.css';
import React, { useState, useEffect } from 'react';
import { Rocket, Users, Award, Star, CheckCircle, Code, Smartphone, Palette, TrendingUp, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);
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
    return (
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
    )
}

export default FAQ;
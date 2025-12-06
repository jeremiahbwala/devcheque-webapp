import './index.css';
import React, { useState } from 'react';

function CaseStudy() {
    return (
        <>
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
        </>
    )
    
}

export default CaseStudy;
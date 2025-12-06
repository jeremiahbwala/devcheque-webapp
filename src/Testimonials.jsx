import './index.css';
import React, { useState, useEffect } from 'react';

function Testimonials() {
    return (
        <>
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
        </>
    )
}

export default Testimonials;
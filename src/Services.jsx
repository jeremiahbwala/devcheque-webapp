import './index.css';
import React, { useState, useEffect } from 'react';

function Services() {
    return (
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
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
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
    )
}

export default Services;
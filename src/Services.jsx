import './index.css';
import React, { useState, useEffect } from 'react';

function Services() {
    return (
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
    )
}

export default Services;
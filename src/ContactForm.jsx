import './index.css';
import React, { useState, useEffect } from 'react';

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
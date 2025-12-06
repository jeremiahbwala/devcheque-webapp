import './index.css';
import React, { useState, useEffect } from 'react';
import { Rocket, Users, Award, Star, CheckCircle, Code, Smartphone, Palette, TrendingUp, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

export function DevChequeWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

        

        

        
      </div>
    );
}

export default DevChequeWebsite;

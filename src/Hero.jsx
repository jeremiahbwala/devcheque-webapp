import './index.css';
import React, { useState, useEffect } from 'react';
import { Rocket, Users, Award, Star, CheckCircle, Code, Smartphone, Palette, TrendingUp, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

function Hero() {
    return (
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
    );
}

export default Hero();
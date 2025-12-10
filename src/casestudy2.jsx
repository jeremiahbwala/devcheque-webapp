import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Rocket, CheckCircle, TrendingUp } from "lucide-react";

import App1 from './assets/casestudy.jpg';
import App2 from './assets/casestudy2.jpg';
import App3 from './assets/casestudy3.jpg';

export default function AlternatingGrid() {
    const caseStudies = [
      {
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
        title: 'App Design For Firefit',
        description: "FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish"
      },
      {
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
        title: 'App Design For Firefit',
        description: "FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish"
      },
      {
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
        title: 'App Design For Firefit',
        description: "FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish"
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={study.image}
                  alt={`Case study ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-gray-800">{study.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

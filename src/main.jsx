import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Devchequewebsite from './App.jsx'
import Hero from './Hero.jsx'
import Services from './Services'
import Team from './Team'
import FAQ from './FAQ'
import ContactForm from './ContactForm'
import Footer from './Footer'
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Devchequewebsite />
    <Hero />
    <CaseStudy />
    <Testimonials />
    <Services />
    <Team />
    <ContactForm />
    <FAQ />
    <Footer />
  </StrictMode>,
)

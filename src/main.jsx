import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Devchequewebsite from './App.jsx'
import Hero from './Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Devchequewebsite />
    <Hero />
  </StrictMode>,
)

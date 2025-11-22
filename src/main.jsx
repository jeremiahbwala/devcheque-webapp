import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './hero.jsx'
import Service from './service.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero />
    <Service />
  </StrictMode>,
)

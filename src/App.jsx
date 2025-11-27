import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav>
          <div className="navbar">
              <div className="logo">
                <img src="src/assets/image 1.png" alt="" />
              </div>
              <div className="nav-link">
                  <a href="#">About Us</a>
                  <a href="#">Projects</a>
                  <a href="#">Services</a>
                  <a href="#">How we work</a>
              </div>
              <div className="btn">Start your Project</div>
          </div>
      </nav>
    </>
  )
}

export default App

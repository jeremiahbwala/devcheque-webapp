import { useState } from 'react'
import './App.css'

function Hero() {

  return (
    <>
      <div className="hero">
          <div className="headline">
          <p>Design. Develop. Deploy.
          Get Your Product Cut Launched in Week.</p>
          </div>
          <div className="sub-heading">
              <p>Devcheque is your full-stack
              team for digital products that ship.
              From branding to  UI/UX and development,
              we handle it all. 
              Launch fasterwith top quality.
              </p>
          </div>
          <div className="btn">
              <img src="src/assets/web-development.png" />
          </div>
          <div>
            <img src="src/assets/Frame 1000002935.png" alt="" />
          </div>
      </div>
    </>
  )
}

export default Hero

import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import './Service/service.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
import './index.css';
import { Code, Smartphone } from "lucide-react";

function Services() {
    return (
<<<<<<< HEAD
      <section id="services" className="p-3 font-archivo section-light-green">
      <div className="container">
        <h2 className="text-center fw-bold mb-3 display-5 font-archivo">Our Services</h2>
        <p className="text-center text-black mb-5 font-archivo">
          Comprehensive digital solutions tailored to bring your vision to life
        </p>
=======
      <section id="services" class="font-archivo service-section">
  <div class="container">
    <h2 class="text-center fw-bold font-archivo">Our Services</h2>
    <p class="text-center text-black font-archivo">
      Comprehensive digital solutions tailored to bring your vision to life
    </p>
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4

    <hr class="service-divider"/>

<<<<<<< HEAD
        <div className="row g-4">
          {/* UI/UX Design */}
          <div className="col-md-3">
            <div className="h-100 p-3">
              <div className="d-flex align-items-center text-white justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
                </svg>
              </div>
              <h3 className="h5 text-black fw-bold mb-3 font-archivo">UI/UX Design</h3>
              <p className="text-black mb-3 font-archivo">
                We craft intuitive and visually stunning interfaces that delight users and drive engagement. Our design process focuses on user research, wireframing, prototyping, and creating pixel-perfect designs that align with your brand.
              </p>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="col-md-3">
            <div className="h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="h5 text-black fw-bold mb-3 font-archivo">Mobile Apps</h3>
              <p className="text-black mb-3 font-archivo">
                Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. We build apps that are performant, user-friendly, and designed to meet your business objectives.
              </p>
            </div>
          </div>

          {/* Branding */}
          <div className="col-md-3">
            <div className="h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="h5 text-black fw-bold mb-3 font-archivo">Branding</h3>
              <p className="text-black mb- font-archivo">
                Creating cohesive brand identities that resonate with your target audience. From logo design to complete brand guidelines, we help you establish a strong visual presence in the market.
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="col-md-3">
            <div className="h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Code size={24} className="text-white" />
              </div>
              <h3 className="h5 text-black fw-bold mb-3 font-archivo">Web Development</h3>
              <p className="text-black mb-3 font-archivo">
                Building fast, responsive, and scalable websites using modern technologies. From simple landing pages to comples web applications, web development solutions that are robust, secure, and optimized for performance.
              </p>
            </div>
          </div>
=======
    <div class="services-grid">
      {/*-- UI/UX Design */}
      <div class="service-item">
        <div class="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
          </svg>
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
        </div>
        <h3 class="font-archivo">UI/UX Design</h3>
        <p class="font-archivo">
          We design intuitive, visually striking interfaces rooted in user research, smart wireframes, and polished prototypes, all crafted to delight users and strengthen your brand.
        </p>
      </div>

      {/*- Mobile Apps */}
      <div class="service-item">
        <div class="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="font-archivo">Mobile Apps</h3>
        <p class="font-archivo">
          We build fast, user-friendly native and cross-platform apps that deliver seamless experiences across iOS and Android.
        </p>
      </div>

      {/*- Branding */}
      <div class="service-item">
        <div class="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="font-archivo">Branding</h3>
        <p class="font-archivo">
          We create cohesive brand identities, from logos to full guidelines, that help you stand out and connect with your audience.
        </p>
      </div>

      {/*-- Web Development */}
      <div class="service-item">
        <div class="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="font-archivo">Web Development</h3>
        <p class="font-archivo">
          We build fast, scalable, and secure websites from landing pages to full web apps optimized for performance.
        </p>
      </div>
    </div>
  </div>
</section>
    )
}

export default Services;
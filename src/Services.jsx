import 'bootstrap/dist/css/bootstrap.min.css'
import { Code, Smartphone } from "lucide-react";

function Services() {
    return (
      <section id="services" className="p-3 font-archivo" style={{backgroundColor: '#90ee90'}}>
      <div className="container">
        <h2 className="text-center fw-bold mb-3 display-5">Our Services</h2>
        <p className="text-center text-black mb-5">
          Comprehensive digital solutions tailored to bring your vision to life
        </p>

        <hr className="border-dark border-3"/>

        <div className="row g-4">
          {/* UI/UX Design */}
          <div className="col-md-3">
            <div className="h-100 p-3">
              <div className="d-flex align-items-center text-white justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
                </svg>
              </div>
              <h3 className="h5 text-black fw-bold mb-3">UI/UX Design</h3>
              <p className="text-black mb-3">
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
              <h3 className="h5 text-black fw-bold mb-3">Mobile Apps</h3>
              <p className="text-black mb-3">
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
              <h3 className="h5 text-black fw-bold mb-3">Branding</h3>
              <p className="text-black mb-3">
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
              <h3 className="h5 text-black fw-bold mb-3">Web Development</h3>
              <p className="text-black mb-3">
                Building fast, responsive, and scalable websites using modern technologies. From simple landing pages to comples web applications, web development solutions that are robust, secure, and optimized for performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Services;
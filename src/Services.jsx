import 'bootstrap/dist/css/bootstrap.min.css'
import { Palette, Code, Smartphone, TrendingUp } from "lucide-react";

function Services() {
    return (
      <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-3 display-5">Our Services</h2>
        <p className="text-center text-secondary mb-5">
          Comprehensive digital solutions tailored to bring your vision to life
        </p>

        <div className="row g-4">
          {/* UI/UX Design */}
          <div className="col-md-3">
            <div className="card shadow-sm h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Palette size={24} className="text-white" />
              </div>
              <h3 className="h5 fw-bold mb-3">UI/UX Design</h3>
              <p className="text-secondary mb-3">
                We craft intuitive and visually stunning interfaces that delight users and drive engagement. Our design process focuses on user research, wireframing, prototyping, and creating pixel-perfect designs that align with your brand.
              </p>
              <button className="btn btn-success w-100">Learn more</button>
            </div>
          </div>

          {/* Web Development */}
          <div className="col-md-3">
            <div className="card shadow-sm h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-success rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Code size={24} className="text-white" />
              </div>
              <h3 className="h5 fw-bold mb-3">Web Development</h3>
              <p className="text-secondary mb-3">
                Building fast, responsive, and scalable websites using modern technologies. From simple landing pages to complex web applications, we develop solutions that are robust, secure, and optimized for performance.
              </p>
              <button className="btn btn-success w-100">Learn more</button>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="col-md-3">
            <div className="card shadow-sm h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-secondary rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="h5 fw-bold mb-3">Mobile Apps</h3>
              <p className="text-secondary mb-3">
                Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. We build apps that are performant, user-friendly, and designed to meet your business objectives.
              </p>
              <button className="btn btn-secondary w-100">Learn more</button>
            </div>
          </div>

          {/* Branding */}
          <div className="col-md-3">
            <div className="card shadow-sm h-100 p-3">
              <div className="d-flex align-items-center justify-content-center bg-dark rounded mb-3" style={{ width: '3rem', height: '3rem' }}>
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="h5 fw-bold mb-3">Branding</h3>
              <p className="text-secondary mb-3">
                Creating cohesive brand identities that resonate with your target audience. From logo design to complete brand guidelines, we help you establish a strong visual presence in the market.
              </p>
              <button className="btn btn-dark w-100">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Services;
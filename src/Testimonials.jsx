import 'bootstrap/dist/css/bootstrap.min.css'
import { Star } from "lucide-react";


function Testimonials() {
    return (
        <>
      {/* Testimonials */}
      <section className="py-5 bg-green-400 p-3">
        <div className="container">
          <p className="text-success fw-semibold text-center mb-2">Testimonial</p>
          <h2 className="text-center fw-bold mb-5 display-5">What our clients say</h2>

          <div className="row g-4">
          {/* Testimonial 1 */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100">
                <div className="text-success display-4 mb-3">"</div>
                <p className="text-secondary mb-4">
                  Before DevCheque, our program was chaotic and hard to scale. The app they built modernized everything—personalized workouts, smooth tracking, higher engagement, and triple retention. They didn't just build an app; they strengthened our entire business.
                </p>

                <div className="d-flex align-items-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "3rem", height: "3rem" }}
                  >
                    <img
                      src="src/assets/Olumide.jpg"
                      alt="Olumide"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <p className="fw-bold mb-1">Olumide Adebayo</p>
                    <div className="d-flex text-warning">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100">
                <div className="text-success display-4 mb-3">"</div>
                <p className="text-secondary mb-4">
                  Our old brand made us look smaller than we were. DevCheque fixed that with a modern identity and a website built for enterprise clients. Clear messaging and confident visuals improved our credibility, and within weeks it qualified leads grew. They truly elevated our business for good.
                </p>

                <div className="d-flex align-items-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "3rem", height: "3rem" }}
                  >
                    <img
                      src="src/assets/Zanele.jpg"
                      alt="Zanele"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <p className="fw-bold mb-1">Zanele Khumalo</p>
                    <div className="d-flex text-warning">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      <Star size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Development Works */}
      <section id="work" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-5">
            How we work
          </h2>

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#1</div>
                <h3 className="h5 fw-bold mb-2">Discovery & Alignment</h3>
                <p className="text-secondary">
                  We start by understanding your goals, challenges, and vision for the product before starting a plan.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#2</div>
                <h3 className="h5 fw-bold mb-2">Design Sprint</h3>
                <p className="text-secondary">
                  We design high-fidelity layouts, user interfaces, and interactive prototypes in fast easy cycles.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#3</div>
                <h3 className="h5 fw-bold mb-2">Development & Build</h3>
                <p className="text-secondary">
                  We turn the designs into fast, reliable, and scalable digital products using modern technologies.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#4</div>
                <h3 className="h5 fw-bold mb-2">Deploy</h3>
                <p className="text-secondary">
                  After testing and final refinements, we launch your product ensuring everything works perfectly.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#5</div>
                <h3 className="h5 fw-bold mb-2">Quality Assurance & Refinement</h3>
                <p className="text-secondary">
                  We rigorously test the product across devices, browsers, and screen sizes.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="col-md-4">
              <div className="card p-3 bg-light h-100 rounded-3">
                <div className="text-success fw-bold mb-2">#6</div>
                <h3 className="h5 fw-bold mb-2">Launch & Handover</h3>
                <p className="text-secondary">
                  We prepare the product for deployment, finalize all configurations, and ensure a smooth handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Testimonials;
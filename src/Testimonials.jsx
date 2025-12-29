import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import './Testimonial/testimonial.css';
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
import './index.css';
import { Star } from "lucide-react";
import olumideImg from './assets/Olumide.jpg';
import zaneleImg from './assets/Zanele.jpg';
<<<<<<< HEAD
=======
import vector from './assets/Vector.png';
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4


function Testimonials() {
  const steps = [
    {
      num: '#1',
      title: 'Discovery & Alignment',
      description: 'We start by understanding your goals, challenges, and vision. This helps us define a clear direction for the project.'
    },
    {
      num: '#3',
      title: 'Development & Build',
      description: 'We turn the designs into fast, reliable, and scalable digital products using modern technologies.'
    },
    {
      num: '#5',
      title: 'Quality Assurance & Refinement',
      description: 'We rigorously test the product across devices, browsers, and screen sizes.'
    },
    {
      num: '#2',
      title: 'Design Sprint',
      description: 'We design high-fidelity layouts, interfaces, and interactions in focused 3-5 day cycles'
    },
    {
      num: '#4',
      title: 'Deploy',
      description: 'After testing and final refinements, we launch your product and ensure everything works perfectly.'
    },
    {
      num: '#6',
      title: 'Launch & Handover',
      description: 'We prepare the product for deployment, finalize all configurations, and ensure everything works in the live environment'
    }
  ];
  return (
    <>
      {/* Testimonials */}
<<<<<<< HEAD
      <section className="p-3 font-archivo section-light-green">
        <div className="container">
          <p className="text-success fw-semibold text-center mb-2 font-archivo">Testimonial</p>
=======
      <section className="p-3 font-archivo testimonial-section">
        <div className="container">
          <p className="text-success fw-semibold text-center mb-2 fs-4 font-archivo">Testimonial</p>
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
          <h2 className="text-center fw-bold mb-5 display-5 font-archivo">What our clients say</h2>

          <div className="row g-4">
          {/* Testimonial 1 */}
            <div className="col-md-6">
              <div className="cards shadow-sm p-4 h-100">
                <div className="text-success text-center display-4 mb-3">
<<<<<<< HEAD
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                  </svg>
=======
                  <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                </div>
                <p className="text-black mb-4 font-archivo">
                  Before DevCheque, our program was chaotic and hard to scale. The app they built modernized everything—personalized workouts, smooth tracking, higher engagement, and triple retention. They didn't just build an app; they strengthened our entire business.
                </p>

                <div className="d-flex align-items-center justify-content-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src={olumideImg}
                      alt="Olumide"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <p className="fw-bold mb-1 font-archivo">Olumide Adebayo</p>
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
              <div className="cards shadow-sm p-4 h-100">
                <div className="text-success text-center display-4 mb-3">
                  <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <p className="text-black mb-4 font-archivo">
                  Our old brand made us look smaller than we were. DevCheque fixed that with a modern identity and a website built for enterprise clients. Clear messaging and confident visuals improved our credibility, and within weeks it qualified leads grew. They truly elevated our business for good.
                </p>

                <div className="d-flex align-items-center justify-content-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src={zaneleImg}
                      alt="Zanele"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <p className="fw-bold mb-1 font-archivo">Zanele Khumalo</p>
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
<<<<<<< HEAD
      <section id="work" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-5 font-archivo">
            How we work
          </h2>

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#1</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">
                    Discovery & Alignment
                  </h3>
                </div>
                <p className="text-secondary font-archivo">
                  We start by understanding your goals, challenges, and vision. This helps us define a clear direction for the product
=======
      <section id='work' class="work-section bg-white">
        <div class="work-container">
          <h2 class="work-title">How we work</h2>

          <div class="timeline-wrapper">
            <div class="timeline-line"></div>
            <div class="timeline-trophy">🏆</div>

            <div class="steps-grid">
              {/*- Row 1 - Steps 1, 3, 5 -->*/}
              <div class="step-card row-1">
                <div class="step-header">
                  <span class="step-number">#1</span>
                  <h3 class="step-title">Discovery & Alignment</h3>
                </div>
                <p class="step-description">
                  We start by understanding your goals, challenges, and vision. This helps us define a clear direction for the project.
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                </p>
              </div>

<<<<<<< HEAD
            {/* Step 2 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#3</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">Development & Build</h3>
                </div>
                <p className="text-secondary font-archivo">
                  We turn the designs into fast, reliable, and scalable digital products using modern technologies.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#5</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">Quality Assurance & Refinement</h3>
                </div>
                <p className="text-secondary font-archivo">
                  We rigorously test the product across devices, browsers, and screen sizes.
=======
              <div class="step-card row-1">
                <div class="step-header">
                  <span class="step-number">#3</span>
                  <h3 class="step-title">Development & Build</h3>
                </div>
                <p class="step-description">
                  We turn the designs into fast, reliable, and scalable digital products using modern technologies.
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                </p>
              </div>

<<<<<<< HEAD
            {/* Step 4 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#2</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">Design Sprint</h3>
                </div>
                <p className="text-secondary font-archivo">
                  We design high-fidelity layouts, interfaces, and interactions in focused 3-5 day cycles.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#4</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">Deploy</h3>
                </div>
                <p className="text-secondary font-archivo">
                  After testing and final refinements, we launch your product ensuring everything works perfectly.
=======
              <div class="step-card row-1">
                <div class="step-header">
                  <span class="step-number">#5</span>
                  <h3 class="step-title">Quality Assurance & Refinement</h3>
                </div>
                <p class="step-description">
                  We rigorously test the product across devices, browsers, and screen sizes.
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                </p>
              </div>

<<<<<<< HEAD
            {/* Step 6 */}
            <div className="col-md-4">
              <div className="card p-3 bg-white h-100 rounded-3">
                <div className="d-flex">
                  <div className="text-success fw-bold mb-2 font-archivo">#6</div>
                  <h3 className="h5 fw-bold mb-2 font-archivo ms-3">Launch & Handover</h3>
                </div>
                <p className="text-secondary font-archivo">
                  We prepare the product for deployment, finalize all configurations, and ensure everything works in the live environment.
=======
              {/*} Row 2 - Steps 2, 4, 6 -->*/}
              <div class="step-card row-2">
                <div class="step-header">
                  <span class="step-number">#2</span>
                  <h3 class="step-title">Design Sprint</h3>
                </div>
                <p class="step-description">
                  We design high-fidelity layouts, interfaces, and interactions in focused 3–5-day cycles
                </p>
              </div>

              <div class="step-card row-2">
                <div class="step-header">
                  <span class="step-number">#4</span>
                  <h3 class="step-title">Deploy</h3>
                </div>
                <p class="step-description">
                  After testing and final refinements, we launch your product and ensure everything works perfectly.
                </p>
              </div>

              <div class="step-card row-2">
                <div class="step-header">
                  <span class="step-number">#6</span>
                  <h3 class="step-title">Launch & Handover</h3>
                </div>
                <p class="step-description">
                  We prepare the product for deployment, finalize all configurations, and ensure everything works in the live environment
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
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
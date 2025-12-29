import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, buildHeaders, fetchWithTimeout, logApiCall } from './config/api';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    company: '',
    projectTypes: [],
    budget: 5000,
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  

  // Fetch user data if available
  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetchWithTimeout(API_ENDPOINTS.form);
        if (!res.ok) return;
        
        const data = await res.json();
        setFormData(prev => ({
          ...prev,
          fullName: data.name || '',
          email: data.email || ''
        }));
      } catch (err) {
        console.warn("User data fetch failed:", err);
      }
    }
    fetchUserData();
  }, []);

  const handleProjectTypeToggle = (type) => {
    setFormData(prev => {
      const isSelected = prev.projectTypes.includes(type);
      const updatedTypes = isSelected
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: updatedTypes };
    });
  };

  const handleSubmit = async () => {
    console.log("🚀 === FORM SUBMISSION START ===");
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      console.log("❌ Validation failed");
      setError("Please fill in all required fields");
      return;
    }

    try {
      console.log("✅ Validation passed");
      setLoading(true);
      setError('');
      setSuccess(false);

      const payload = {
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
        company: formData.company,
        project_type: formData.projectTypes.join(", "),
        budget_range: `$${formData.budget.toLocaleString()}`,
        honeypot: formData.honeypot
      };

      console.log("📦 Payload being sent:", payload);

      
      console.log("📡 Sending request to:", API_ENDPOINTS.form);
      logApiCall(API_ENDPOINTS.form, { 
        method: 'POST', 
        headers, 
        body: JSON.stringify(payload) 
      });

      const res = await fetch(
        API_ENDPOINTS.form,
        {
          method: "POST",
          headers: buildHeaders(),
          body: JSON.stringify(payload)
        }
      );

      console.log("📥 Response received!");
      console.log("   Status Code:", res.status);
      console.log("   Status OK?:", res.ok);

      if (!res.ok) {
        console.log("❌ Response not OK, handling error...");
        const errorText = await res.text();
        console.error("   Error Response:", errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
        
        throw new Error(errorData.message || errorData.error || `Server error: ${res.status}`);
      }

      // Check response type
      const contentType = res.headers.get("content-type");
      console.log("📄 Response Content-Type:", contentType);

      let responseData;
      if (contentType && contentType.includes("application/json")) {
        responseData = await res.json();
        console.log("✅ JSON Response Data:", responseData);
      } else {
        responseData = await res.text();
        console.log("⚠️ TEXT Response Data:", responseData);
      }

      console.log("🎉 SUCCESS! Setting success state...");
      setSuccess(true);
      setError('');

      console.log("🧹 Clearing form...");
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        message: '',
        company: '',
        projectTypes: [],
        budget: 5000,
        honeypot: ''
      });

      console.log("✅ Form cleared successfully!");

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        console.log("👋 Hiding success message now");
        setSuccess(false);
      }, 5000);

    } catch (err) {
      console.error("💥 === ERROR CAUGHT ===");
      console.error("Error Object:", err);
      console.error("Error Message:", err.message);
      
      setError(err.message || "Error sending message. Please try again.");
      setSuccess(false);
    } finally {
      console.log("🏁 Setting loading to false");
      setLoading(false);
      console.log("=== FORM SUBMISSION END ===\n");
    }
  };

  return (
    <section id='contactForm' className="section-light-green">
      <div className="container" style={{ maxWidth: '42rem' }}>
        <h2 className="text-center text-black fw-bold mb-3 display-5">
          Let's Talk About Your Project
        </h2>
      
        <div className="card shadow-sm rounded-3 p-4">
          {success && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              ✓ Message sent successfully!
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSuccess(false)}
                aria-label="Close"
              ></button>
            </div>
          )}
          
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setError('')}
                aria-label="Close"
              ></button>
            </div>
          )}

          <div>
            {/* Name & Email */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="fullName">
                  Full Name <span className="text-danger">(Required)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Type here"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="email">
                  Email <span className="text-danger">(Required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Type here"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="mb-3">
              <label className="form-label" htmlFor="company">
                Company/Organization <span className='text-danger'> (optional)</span>
              </label>
              <input
                type="text"
                id="company"
                className="form-control"
                placeholder="Type here"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Project Types */}
            <div className="mb-3">
              <label className="form-label">Project Type</label>
              <div className="d-flex flex-wrap gap-3">
                {["Web Design", "Branding", "Mobile App Design", "Others"].map((type) => (
                  <div className="form-check" key={type}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={formData.projectTypes.includes(type)}
                      onChange={() => handleProjectTypeToggle(type)}
                      id={type}
                    />
                    <label className="form-check-label" htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-3">
              <label className="form-label" htmlFor="budget">
                Project Budget
              </label>
              <p className="small text-muted mb-2">Slide to indicate your budget</p>
              <input
                type="range"
                id="budget"
                className="form-range"
                min="5000"
                max="25000"
                step="1000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
              />
              <div className="d-flex justify-content-between small text-muted">
                <span>${formData.budget.toLocaleString()}</span>
                <span>$25,000</span>
              </div>
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control textarea-lined"
                rows="4"
                placeholder="Type here"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Submit Button */}
            <button
              type="button"
              className="btn btn-success-custom w-50 justfy-content-center"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
        <p className='text-center text-black mt-3'>
          We respect your privacy and respond within 24 hours
        </p>
      </div>
    </section>
  );
}

export default ContactForm;
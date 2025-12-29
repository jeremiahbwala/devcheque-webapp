import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, buildHeaders, fetchWithTimeout, logApiCall } from './config/api';
=======
import './Contact Form/contact.css';
import React, { useState } from 'react';
import { API_ENDPOINTS, buildHeaders, logApiCall } from './config/api';
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4

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
  
<<<<<<< HEAD

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
=======
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4

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
<<<<<<< HEAD
        headers, 
=======
        headers: buildHeaders(), 
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
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
<<<<<<< HEAD
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
=======
    <section id='contactForm' className="contact-section">
        <div className="contact-container">
          <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2.5rem', color: '#000' }}>
            Let's Talk About Your Project
          </h2>

          <div className="form-card">
            {success && (
              <div className="alert-custom alert-success section-light-green font-archivo">
                ✓ Message sent successfully!
                <button className="close-btn font-archivo" onClick={() => setSuccess(false)}>×</button>
              </div>
            )}
            
            {error && (
              <div className="alert-custom alert-danger font-archivo">
                {error}
                <button className="close-btn font-archivo" onClick={() => setError('')}>×</button>
              </div>
            )}

            {/* Name & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div className="form-name-field">
                <label className="form-label-custom font-archivo">
                  Full Name <span className="required-tag font-archivo">(Required)</span>
                </label>
                <input
                  type="text"
                  className="input-custom font-archivo"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                  placeholder="Type here"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
<<<<<<< HEAD
              <div className="col-md-6">
                <label className="form-label" htmlFor="email">
                  Email <span className="text-danger">(Required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
=======

              <div className="form-email-field">
                <label className="form-label-custom font-archivo">
                  Email <span className="required-tag font-archivo">(Required)</span>
                </label>
                <input
                  type="email"
                  className="input-custom font-archivo"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                  placeholder="Type here"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Company */}
<<<<<<< HEAD
            <div className="mb-3">
              <label className="form-label" htmlFor="company">
                Company/Organization <span className='text-danger'> (optional)</span>
              </label>
              <input
                type="text"
                id="company"
                className="form-control"
=======
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Company/Organization <span className="optional-tag font-archivo">(optional)</span>
              </label>
              <input
                type="text"
                className="input-custom font-archivo"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                placeholder="Type here"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Project Type */}
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Project Type 
              </label>
              <div className="checkbox-grid font-archivo">
                {["Web Design", "Branding", "Mobile App Design", "Others"].map((type) => (
                  <div className="checkbox-item" key={type}>
                    <input
                      type="checkbox"
                      className="checkbox-custom font-archivo"
                      checked={formData.projectTypes.includes(type)}
                      onChange={() => handleProjectTypeToggle(type)}
                      id={type}
                    />
                    <label className="checkbox-label" htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
<<<<<<< HEAD
            <div className="mb-3">
              <label className="form-label" htmlFor="budget">
                Project Budget
              </label>
              <p className="small text-muted mb-2">Slide to indicate your budget</p>
              <input
                type="range"
                id="budget"
                className="form-range"
=======
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Project Budget
              </label>
              <p className='font-archivo' style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                Slide to indicate your budget range
              </p>
              <input
                type="range"
                className="budget-slider"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                min="5000"
                max="25000"
                step="1000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                style={{
                  background: `linear-gradient(to right, #7cb342 0%, #7cb342 ${((formData.budget - 5000) / (25000 - 5000)) * 100}%, #424242 ${((formData.budget - 5000) / (25000 - 5000)) * 100}%, #424242 100%)`
                }}
              />
              <div className="budget-labels">
                <span className='font-archivo'>${formData.budget.toLocaleString()}</span>
                <span className='font-archivo'>$25000</span>
              </div>
            </div>

            {/* Message */}
<<<<<<< HEAD
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control textarea-lined"
=======
            <div className="form-message-field">
              <label className="form-label-custom font-archivo">
                Message <span className="required-tag font-archivo">(Required)</span>
              </label>
              <textarea
                className="textarea-custom font-archivo"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
                rows="4"
                placeholder="Type here"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Submit Button */}
            <button
<<<<<<< HEAD
              type="button"
              className="btn btn-success-custom w-50 justfy-content-center"
=======
              className="submit-button font-archivo"
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className='font-archivo' style={{ marginRight: '8px' }}>⟳</span>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

            <p className="privacy-text font-archivo">
              We respect your privacy and we respond between 24 hrs
            </p>
          </div>
        </div>
<<<<<<< HEAD
        <p className='text-center text-black mt-3'>
          We respect your privacy and respond within 24 hours
        </p>
      </div>
    </section>
=======
      </section>
>>>>>>> 969a01c85553514f661f9a661dba7628b23ab7c4
  );
}

export default ContactForm;
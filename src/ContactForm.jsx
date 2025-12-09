import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

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
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const res = await fetch(
          "https://devchequebackend-production.up.railway.app/api/csrf/",
          { 
            credentials: "include",
            mode: 'cors'
          }
        );
        if (!res.ok) {
          console.warn("CSRF endpoint returned error:", res.status);
          // Don't set error, just log it
          return;
        }
        const data = await res.json();
        console.log("CSRF Response:", data);
        setCsrfToken(data.csrfToken || "");
      } catch (err) {
        console.warn("CSRF fetch failed (form will work without it):", err);
        // Don't set error - form can still work without CSRF in some cases
      }
    }
    fetchCsrfToken();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("https://devchequebackend-production.up.railway.app/api/form/");
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
    console.log("Submit button clicked!");
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      setError("Please fill in all required fields");
      return;
    }

    try {
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

      console.log("Sending payload:", payload);
      console.log("CSRF Token:", csrfToken ? "Present" : "Not present");

      const headers = {
        "Content-Type": "application/json"
      };

      // Only add CSRF token if we have it
      if (csrfToken) {
        headers["X-CSRFToken"] = csrfToken;
      }

      const res = await fetch("https://devchequebackend-production.up.railway.app/api/", {
        method: "POST",
        headers: headers,
        credentials: "include",
        mode: 'cors',
        body: JSON.stringify(payload)
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
        
        throw new Error(errorData.message || errorData.error || `Server error: ${res.status}`);
      }

      const responseData = await res.json();
      console.log("Success response:", responseData);

      setSuccess(true);
      setError('');

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

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error("Submit error:", err);
      setError(err.message || "Error sending message. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '42rem' }}>
        <h2 className="text-center fw-bold mb-3 display-5">Have a great idea?</h2>
        <p className="text-center text-secondary mb-4">
          Got a great idea that you might want to work out on together? Fill the form below.
        </p>

        <div className="card shadow-sm rounded-3 p-4">
          {success && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              ✓ Message sent successfully!
              <button type="button" className="btn-close" onClick={() => setSuccess(false)}></button>
            </div>
          )}
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button type="button" className="btn-close" onClick={() => setError('')}></button>
            </div>
          )}

          <div>
            {/* Name & Email */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
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
              <label className="form-label">Company/Organization (optional)</label>
              <input
                type="text"
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
              <label className="form-label">Project Budget</label>
              <p className="small text-muted mb-2">Slide to indicate your budget</p>
              <input
                type="range"
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
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
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
            />

            {/* Submit Button */}
            <button
              type="button"
              className="btn btn-success w-100"
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
      </div>
    </section>
  );
}

export default ContactForm;
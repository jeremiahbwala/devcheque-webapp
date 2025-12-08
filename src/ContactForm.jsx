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
  const [error, setError] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const res = await fetch(
          "https://devchequebackend-production.up.railway.app/api/csrf/",
          { credentials: "include" }
        );
        const data = await res.json();
        setCsrfToken(data.csrfToken || "");
      } catch (err) {
        console.log("Error fetching CSRF token:", err);
      }
    }
    fetchCsrfToken();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("https://devchequebackend-production.up.railway.app/api/form/");
        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();
        setFormData(prev => ({
          ...prev,
          fullName: data.name || '',
          email: data.email || ''
        }));
      } catch (err) {
        console.log("Error fetching user data:", err);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!csrfToken) return;

    try {
      setLoading(true);

      const payload = {
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
        company: formData.company,
        project_type: formData.projectTypes.join(", "),
        budget_range: `$${formData.budget.toLocaleString()}`,
        honeypot: formData.honeypot
      };

      const res = await fetch("https://devchequebackend-production.up.railway.app/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrfToken
        },
        credentials: "include",
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setError(false);

      setFormData({
        fullName: '',
        email: '',
        message: '',
        company: '',
        projectTypes: [],
        budget: 5000,
        honeypot: ''
      });

    } catch (err) {
      console.log("Submit error:", err);
      setError(true);
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
          {success && <div className="alert alert-success">Message sent successfully!</div>}
          {error && <div className="alert alert-danger">Error sending message. Try again.</div>}

          <form onSubmit={handleSubmit}>
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

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

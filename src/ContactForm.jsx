import './index.css';
import React, { useState, useEffect } from 'react';

function Contactform() {
  // Form state
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

  // Fetch CSRF token once on mount
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

  // GET request to pre-fill name/email
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

  // Toggle project types
  const handleProjectTypeToggle = (type) => {
    setFormData(prev => {
      const isSelected = prev.projectTypes.includes(type);
      const updatedTypes = isSelected
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: updatedTypes };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!csrfToken) return; // prevent submit before token is ready

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

    } catch (err) {
      console.log("Submit error:", err);
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Have a great idea?</h2>
        <p className="text-center text-gray-600 mb-8">
          Got a great idea that you might want to work out on together? Fill the form below.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {success && <p className="text-green-600 mb-4 font-semibold">Message sent successfully!</p>}
          {error && <p className="text-red-600 mb-4 font-semibold">Error sending message. Try again.</p>}

          <form onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Company/Organization (optional)</label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Project Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Project Type</label>
              <div className="grid grid-cols-2 gap-4">
                {["Web Design", "Branding", "Mobile App Design", "Others"].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes(type)}
                      onChange={() => handleProjectTypeToggle(type)}
                      className="w-4 h-4"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Project Budget</label>
              <p className="text-xs text-gray-500 mb-3">Slide to indicate your budget</p>
              <input
                type="range"
                min="5000"
                max="25000"
                step="1000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                className="w-full h-2 bg-green-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${formData.budget.toLocaleString()}</span>
                <span>$25000</span>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Type here"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
              disabled={loading || !csrfToken}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactform;

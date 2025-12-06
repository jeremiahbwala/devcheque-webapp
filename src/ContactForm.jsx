import './index.css';
import React, { useState } from 'react';

function Contactform() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectTypes: [],
    budget: 5000,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Toggle project types
  const handleProjectTypeToggle = (type) => {
    setFormData((prev) => {
      const isSelected = prev.projectTypes.includes(type);
      const updatedTypes = isSelected
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type];

      return { ...prev, projectTypes: updatedTypes };
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("https://your-backend.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setError(false);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectTypes: [],
        budget: 5000,
        message: ''
      });

    } catch (err) {
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

          {/* success message */}
          {success && <p className="text-green-600 mb-4 font-semibold">Message sent successfully!</p>}

          {/* error message */}
          {error && <p className="text-red-600 mb-4 font-semibold">Error sending message. Try again.</p>}

          <form onSubmit={handleSubmit}>

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

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Company/Organization (optional)
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Project Type Checkbox */}
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

            {/* Budget Slider */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Project Budget</label>
              <p className="text-xs text-gray-500 mb-3">Slide to indicate your budget</p>

              <input
                type="range"
                min="5000"
                max="25000"
                step="1000"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: parseInt(e.target.value) })
                }
                className="w-full h-2 bg-green-200 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${formData.budget.toLocaleString()}</span>
                <span>$25000</span>
              </div>
            </div>

            {/* Message Box */}
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
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

export default Contactform;

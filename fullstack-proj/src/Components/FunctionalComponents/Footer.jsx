import React, { useState } from 'react';
import "../../assets/css/Footer.css"

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display form data in console or perform any action
    console.log('Form Submitted:', formData);
    alert("Form submitted successfully!");
    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
    });
  };

  return (
    <footer className="footer">
      {/* Title with Life Quote */}
      <h2 className="footer-title">
        Personal Information
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="footer-form">
        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Gender Dropdown */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Date of Birth */}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </footer>
  );
}

export default Footer;

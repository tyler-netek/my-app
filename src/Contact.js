import React, { useState } from 'react';
import './Contact.css';
import main from './images/main.png';
import search from './images/searchbar.png';
import chart from './images/chart.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqkvevkj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 id="contact">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <div className="submitted-message">Submitted!</div>}
    </div>
    <div class="image-container">
        <hr />
        <img src={main} alt="Home Page (Predictr)" />
        <img src={search} alt="Search Results (Predictr)" />
        <img src={chart} alt="Chart (Predictr)" />
        <hr />
    </div>
  );
};

export default Contact;

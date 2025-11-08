import React, { useState } from 'react';
import './Contact.css';
import footerVector from '../assets/footer-vector.png';
import footerVector2 from '../assets/footer2-vector.png';

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    const postData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrors({ submit: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <img src={footerVector2} alt="" className="contact-mandala mandala-top" />
      <img src={footerVector} alt="" className="contact-mandala mandala-bottom" />

      <div className="contact-container">
        <div className="contact-left">
          <p>
            Whether you have an idea, a question, or simply want
            to explore how V can work together, V're just a
            message away. <br /> Let's catch up over coffee.
            <br /> Great stories always begin with a good conversation
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Join the Story</h2>
            <p className="form-subtitle">
              Ready to bring your vision to life? Let's talk.
            </p>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your message*"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {isSubmitted && (
              <div className="success-text">Form Submitted</div>
            )}
            {errors.submit && (
              <div className="error-text submit-error">{errors.submit}</div>
            )}
          </form>

          <div className="contact-info">
             <a href="mailto:vernita@varnanfilms.co.in">vernita@varnanfilms.co.in</a>
             <a href="tel:+919872684567">+91 98726 84567</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

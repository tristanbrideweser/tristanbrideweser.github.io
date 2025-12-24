/**
 * CONTACT COMPONENT
 * 
 * This component provides a contact form for visitors to reach out.
 * Includes form validation and a submission handler structure.
 * 
 * CUSTOMIZATION:
 * - Modify form fields as needed
 * - Connect to a backend/email service (see handleSubmit function)
 * - Update validation rules
 * - Add more form fields if needed
 */

import { useState } from 'react';
import './Contact.css';
import '../../styles/animations.css';

function Contact() {
  /**
   * FORM STATE
   * 
   * useState hook manages form data
   * Each field has its own state variable
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /**
   * FORM VALIDATION STATE
   * 
   * Stores error messages for each field
   * Empty object means no errors
   */
  const [errors, setErrors] = useState({});

  /**
   * SUBMISSION STATE
   * 
   * Tracks if form is being submitted
   * Prevents multiple submissions
   */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * SUCCESS STATE
   * 
   * Shows success message after successful submission
   */
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  /**
   * HANDLE INPUT CHANGE
   * 
   * Updates form data when user types in any field
   * Also clears error for that field when user starts typing
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * FORM VALIDATION
   * 
   * Validates all form fields before submission
   * Returns true if valid, false if errors found
   * 
   * TODO: Customize validation rules as needed
   */
  const validate = () => {
    const newErrors = {};

    // Name validation - required, minimum length
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation - required, valid email format
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation - required
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation - required, minimum length
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    // Set errors and return validation result
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * HANDLE FORM SUBMISSION
   * 
   * This function is called when the form is submitted.
   * 
   * TODO: Connect this to your backend/email service
   * 
   * Options for form submission:
   * 1. EmailJS (client-side email sending)
   *    - Install: npm install @emailjs/browser
   *    - Docs: https://www.emailjs.com/docs/
   * 
   * 2. Formspree (form handling service)
   *    - Sign up at: https://formspree.io/
   *    - Use their endpoint URL
   * 
   * 3. Your own backend API
   *    - Create an API endpoint
   *    - Send POST request with formData
   * 
   * Example with fetch API:
   * 
   * const response = await fetch('YOUR_API_ENDPOINT', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify(formData)
   * });
   * 
   * if (response.ok) {
   *   setSubmitStatus('success');
   *   setFormData({ name: '', email: '', subject: '', message: '' });
   * } else {
   *   setSubmitStatus('error');
   * }
   */
  const handleSubmit = async (e) => {
    // Prevent default form submission (page refresh)
    e.preventDefault();

    // Validate form before submission
    if (!validate()) {
      return; // Stop if validation fails
    }

    // Set submitting state
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace this with actual form submission logic
    // This is a placeholder that simulates form submission
    try {
      // Simulate API call (remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Add your actual submission logic here
      // Example:
      // const response = await fetch('YOUR_ENDPOINT', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // });

      // On success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      // On error
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header slide-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            {/* TODO: Update this subtitle text */}
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form slide-up-delay-1" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Your name"
            />
            {/* Error message */}
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject <span className="required">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-input ${errors.subject ? 'error' : ''}`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Tell me about your project or question..."
              rows="6"
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;


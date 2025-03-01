import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeTab, setActiveTab] = useState('message');

  const services = [
    { id: 'shared', name: 'Shared Hosting' },
    { id: 'vps', name: 'VPS Hosting' },
    { id: 'dedicated', name: 'Dedicated Servers' },
    { id: 'cloud', name: 'Cloud Hosting' },
    { id: 'wordpress', name: 'WordPress Hosting' },
    { id: 'radio', name: 'Radio Hosting' },
    { id: 'other', name: 'Other Services' }
  ];

  useEffect(() => {
    // Add animation classes after component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('contact-info-container')) {
            entry.target.classList.add('animate-fade-in-left');
          } else if (entry.target.classList.contains('contact-form-container')) {
            entry.target.classList.add('animate-fade-in-right');
          }
        }
      });
    }, { threshold: 0.2 });
    
    // Observe containers
    document.querySelectorAll('.contact-info-container, .contact-form-container').forEach(container => {
      observer.observe(container);
    });
    
    return () => {
      // Cleanup observer
      document.querySelectorAll('.contact-info-container, .contact-form-container').forEach(container => {
        observer.unobserve(container);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleQuickServiceRequest = (serviceId) => {
    const serviceName = services.find(s => s.id === serviceId)?.name || '';
    setFormData(prevState => ({
      ...prevState,
      service: serviceId,
      subject: `Request for ${serviceName}`
    }));
    setActiveTab('message');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message with animation
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any questions or support</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-container">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-info-content">
                  <h3>Our Location</h3>
                  <p>MSK eServices, No.296/3D, Delpe junction, Ragama.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-info-content">
                  <h3>Call Us</h3>
                  <p>071 5 321 750</p>
                  <p>011 2 959 005</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h3>Email Us</h3>
                  <p>we-services@mskcomputers.lk</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-content">
                  <h3>Working Hours</h3>
                  <p>24/7 Customer Support</p>
                  <p>Sales: Mon-Fri, 9am-6pm</p>
                </div>
              </div>
              
              <div className="quick-service-request">
                <h3>Quick Service Request</h3>
                <p>Click to quickly request information about our services:</p>
                <div className="service-buttons">
                  {services.map(service => (
                    <button 
                      key={service.id}
                      type="button" 
                      className="service-button"
                      onClick={() => handleQuickServiceRequest(service.id)}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formStatus.submitted && formStatus.success ? (
              <div className="form-success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <>
                <div className="form-tabs">
                  <button 
                    className={`form-tab ${activeTab === 'message' ? 'active' : ''}`}
                    onClick={() => setActiveTab('message')}
                  >
                    <i className="fas fa-envelope"></i> Send Message
                  </button>
                  <button 
                    className={`form-tab ${activeTab === 'callback' ? 'active' : ''}`}
                    onClick={() => setActiveTab('callback')}
                  >
                    <i className="fas fa-phone-alt"></i> Request Callback
                  </button>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>{activeTab === 'message' ? 'Send Us a Message' : 'Request a Callback'}</h3>
                    <p>
                      {activeTab === 'message' 
                        ? 'Fill out the form below and we\'ll get back to you as soon as possible.' 
                        : 'Leave your details and we\'ll call you back shortly.'}
                    </p>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <div className="input-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required={activeTab === 'callback'}
                      />
                    </div>

                    <div className="form-group">
                      <div className="input-icon">
                        <i className="fas fa-server"></i>
                      </div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="service-select"
                      >
                        <option value="">Select a Service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group contact-preference">
                    <label>Preferred Contact Method:</label>
                    <div className="contact-method-options">
                      <label className="contact-method-option">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                        />
                        <span><i className="fas fa-envelope"></i> Email</span>
                      </label>
                      <label className="contact-method-option">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                        />
                        <span><i className="fas fa-phone"></i> Phone</span>
                      </label>
                    </div>
                  </div>

                  {activeTab === 'message' && (
                    <>
                      <div className="form-group">
                        <div className="input-icon">
                          <i className="fas fa-tag"></i>
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <i className="fas fa-comment-alt"></i>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </>
                  )}

                  {activeTab === 'callback' && (
                    <div className="callback-info">
                      <p><i className="fas fa-info-circle"></i> Our team will call you back within 2 business hours during our working hours (Mon-Fri, 9am-6pm).</p>
                    </div>
                  )}

                  <button type="submit" className="button contact-button">
                    <span>{activeTab === 'message' ? 'Send Message' : 'Request Callback'}</span>
                    <i className={activeTab === 'message' ? 'fas fa-paper-plane' : 'fas fa-phone'}></i>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="contact-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact; 
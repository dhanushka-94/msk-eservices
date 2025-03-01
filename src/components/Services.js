import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-service');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      // Cleanup observer
      document.querySelectorAll('.service-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive hosting solutions for your digital needs</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Shared Hosting</h3>
            <p>Affordable and reliable hosting perfect for small to medium websites.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> 99.9% Uptime</li>
              <li><i className="fas fa-check"></i> Free SSL Certificate</li>
              <li><i className="fas fa-check"></i> 24/7 Support</li>
              <li><i className="fas fa-check"></i> 1-Click Installs</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud Hosting</h3>
            <p>Scalable resources that grow with your business needs.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Scalable Resources</li>
              <li><i className="fas fa-check"></i> Load Balancing</li>
              <li><i className="fas fa-check"></i> Dedicated IP</li>
              <li><i className="fas fa-check"></i> SSD Storage</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>VPS Hosting</h3>
            <p>Virtual private servers with dedicated resources and full control.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Root Access</li>
              <li><i className="fas fa-check"></i> Dedicated Resources</li>
              <li><i className="fas fa-check"></i> Choice of OS</li>
              <li><i className="fas fa-check"></i> Managed Options</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fab fa-wordpress"></i>
            </div>
            <h3>WordPress Hosting</h3>
            <p>Optimized environment for WordPress websites with enhanced performance.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Auto Updates</li>
              <li><i className="fas fa-check"></i> WP-CLI Enabled</li>
              <li><i className="fas fa-check"></i> Staging Environment</li>
              <li><i className="fas fa-check"></i> Pre-installed Plugins</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-hdd"></i>
            </div>
            <h3>Dedicated Servers</h3>
            <p>Full server resources dedicated to your business with maximum performance.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Full Resources</li>
              <li><i className="fas fa-check"></i> Custom Configuration</li>
              <li><i className="fas fa-check"></i> High Performance</li>
              <li><i className="fas fa-check"></i> Advanced Security</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-broadcast-tower"></i>
            </div>
            <h3>Radio Hosting</h3>
            <p>Professional streaming solutions for radio stations of all sizes.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> 24/7 Streaming</li>
              <li><i className="fas fa-check"></i> High Bitrate Support</li>
              <li><i className="fas fa-check"></i> Auto DJ Feature</li>
              <li><i className="fas fa-check"></i> Listener Statistics</li>
            </ul>
            <a href="#pricing" className="service-button">
              <span>View Plans</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="services-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1E1E1E" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services; 
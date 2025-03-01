import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all footer columns
    document.querySelectorAll('.footer-column').forEach(column => {
      observer.observe(column);
    });
    
    return () => {
      // Cleanup observer
      document.querySelectorAll('.footer-column').forEach(column => {
        observer.unobserve(column);
      });
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <h2>MSK <span>eServices</span></h2>
            </div>
            <p className="footer-description">
              Premium web & radio hosting services for businesses of all sizes. Fast, secure, and reliable hosting solutions.
            </p>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services-shared">Shared Hosting</a></li>
              <li><a href="#services-vps">VPS Hosting</a></li>
              <li><a href="#services-dedicated">Dedicated Servers</a></li>
              <li><a href="#services-cloud">Cloud Hosting</a></li>
              <li><a href="#services-wordpress">WordPress Hosting</a></li>
              <li><a href="#services-radio">Radio Hosting</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#home">Home</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/tickets">Ticket System</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/status">System Status</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} MSK eServices. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/legal">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
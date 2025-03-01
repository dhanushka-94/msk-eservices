import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const heroContent = document.querySelector('.hero-content');
    const serverIllustration = document.querySelector('.server-illustration');
    
    if (heroContent) {
      heroContent.classList.add('animate-fade-in-up');
    }
    
    if (serverIllustration) {
      serverIllustration.classList.add('animate-fade-in-right');
    }
    
    // Add animation to features with delay
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.classList.add('animate-fade-in-up');
      }, 300 + (index * 150));
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Premium Web & Radio Hosting for Your Success</h1>
          <p>
            MSK eServices provides lightning-fast, secure, and reliable hosting solutions 
            for websites, applications, and radio stations. Get started today with our affordable plans.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="button primary-button">
              <i className="fas fa-tags"></i> View Plans
            </a>
            <a href="#contact" className="button secondary-button">
              <i className="fas fa-headset"></i> Contact Sales
            </a>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon"><i className="fas fa-bolt"></i></span>
              <span className="feature-text">99.9% Uptime</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><i className="fas fa-shield-alt"></i></span>
              <span className="feature-text">Free SSL Certificate</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><i className="fas fa-broadcast-tower"></i></span>
              <span className="feature-text">Radio Streaming</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><i className="fas fa-headset"></i></span>
              <span className="feature-text">24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="server-illustration">
            <div className="server-rack">
              <div className="server-unit">
                <div className="server-led"></div>
                <div className="server-led"></div>
              </div>
              <div className="server-unit">
                <div className="server-led"></div>
                <div className="server-led"></div>
              </div>
              <div className="server-unit">
                <div className="server-led"></div>
                <div className="server-led"></div>
              </div>
              <div className="server-unit">
                <div className="server-led"></div>
                <div className="server-led"></div>
              </div>
            </div>
            <div className="server-lights">
              <div className="light"></div>
              <div className="light"></div>
              <div className="light"></div>
            </div>
            <div className="data-flow">
              <div className="data-particle"></div>
              <div className="data-particle"></div>
              <div className="data-particle"></div>
              <div className="data-particle"></div>
              <div className="data-particle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1E1E1E" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Handle scroll events for header styling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Only update active section on homepage
      if (isHomePage) {
        // Update active section based on scroll position
        const sections = ['home', 'services', 'pricing', 'features', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>MSK <span>eServices</span></h1>
          </Link>
        </div>
        
        <div className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/"
                className={activeSection === 'home' && isHomePage ? 'active' : ''}
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#services" 
                  className={activeSection === 'services' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  <i className="fas fa-server"></i>
                  <span>Services</span>
                </a>
              ) : (
                <Link 
                  to="/#services"
                  onClick={closeMenu}
                >
                  <i className="fas fa-server"></i>
                  <span>Services</span>
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#pricing" 
                  className={activeSection === 'pricing' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  <i className="fas fa-tags"></i>
                  <span>Pricing</span>
                </a>
              ) : (
                <Link 
                  to="/#pricing"
                  onClick={closeMenu}
                >
                  <i className="fas fa-tags"></i>
                  <span>Pricing</span>
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#features" 
                  className={activeSection === 'features' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  <i className="fas fa-star"></i>
                  <span>Features</span>
                </a>
              ) : (
                <Link 
                  to="/#features"
                  onClick={closeMenu}
                >
                  <i className="fas fa-star"></i>
                  <span>Features</span>
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </a>
              ) : (
                <Link 
                  to="/#contact"
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
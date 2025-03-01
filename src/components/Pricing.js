import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeCategory, setActiveCategory] = useState('shared');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  // Shared Hosting Plans
  const sharedPlans = [
    {
      id: 1,
      name: 'Basic',
      description: 'Perfect for small websites and blogs',
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
      features: [
        '1 Website',
        '10 GB SSD Storage',
        '100 GB Bandwidth',
        'Free SSL Certificate',
        '1 Email Account',
        '24/7 Support'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Plus',
      description: 'Ideal for growing businesses',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        'Unlimited Websites',
        '50 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '10 Email Accounts',
        'Free Domain for 1 Year',
        'Priority Support'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Pro',
      description: 'Advanced features for professionals',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        'Unlimited Websites',
        '100 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Unlimited Email Accounts',
        'Free Domain for Life',
        'Dedicated Resources',
        'Premium Support'
      ],
      popular: false
    }
  ];

  // Cloud Hosting Plans
  const cloudPlans = [
    {
      id: 1,
      name: 'Cloud Starter',
      description: 'Reliable cloud hosting for small projects',
      monthlyPrice: 12.99,
      yearlyPrice: 129.99,
      features: [
        '2 vCPU Cores',
        '2 GB RAM',
        '25 GB SSD Storage',
        '1 TB Bandwidth',
        'Free SSL Certificate',
        'Daily Backups',
        '99.9% Uptime Guarantee'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Cloud Business',
      description: 'Scalable solution for growing websites',
      monthlyPrice: 24.99,
      yearlyPrice: 249.99,
      features: [
        '4 vCPU Cores',
        '4 GB RAM',
        '50 GB SSD Storage',
        '2 TB Bandwidth',
        'Free SSL Certificate',
        'Daily Backups',
        'Load Balancer',
        '99.95% Uptime Guarantee'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Cloud Enterprise',
      description: 'High-performance cloud infrastructure',
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        '8 vCPU Cores',
        '8 GB RAM',
        '100 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Hourly Backups',
        'Load Balancer',
        'CDN Integration',
        '99.99% Uptime Guarantee'
      ],
      popular: false
    }
  ];

  // VPS Hosting Plans
  const vpsPlans = [
    {
      id: 1,
      name: 'VPS Basic',
      description: 'Entry-level VPS with full root access',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        '1 vCPU Core',
        '2 GB RAM',
        '30 GB SSD Storage',
        '1 TB Bandwidth',
        'Full Root Access',
        'Choice of Linux OS',
        'Basic Server Management'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'VPS Advanced',
      description: 'Powerful VPS for demanding applications',
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      features: [
        '2 vCPU Cores',
        '4 GB RAM',
        '60 GB SSD Storage',
        '2 TB Bandwidth',
        'Full Root Access',
        'Choice of OS',
        'Server Management',
        'DDoS Protection'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'VPS Elite',
      description: 'High-performance VPS for resource-intensive workloads',
      monthlyPrice: 69.99,
      yearlyPrice: 699.99,
      features: [
        '4 vCPU Cores',
        '8 GB RAM',
        '120 GB SSD Storage',
        '3 TB Bandwidth',
        'Full Root Access',
        'Choice of OS',
        'Premium Server Management',
        'DDoS Protection',
        'Dedicated IP Address'
      ],
      popular: false
    }
  ];

  // WordPress Hosting Plans
  const wordpressPlans = [
    {
      id: 1,
      name: 'WP Starter',
      description: 'Optimized for small WordPress sites',
      monthlyPrice: 7.99,
      yearlyPrice: 79.99,
      features: [
        '1 WordPress Site',
        '15 GB SSD Storage',
        '10K Monthly Visitors',
        'Free SSL Certificate',
        'WordPress Auto-Updates',
        'Free WordPress Migrations',
        'Daily Backups'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'WP Plus',
      description: 'For growing WordPress websites',
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      features: [
        '3 WordPress Sites',
        '30 GB SSD Storage',
        '25K Monthly Visitors',
        'Free SSL Certificate',
        'WordPress Auto-Updates',
        'Free WordPress Migrations',
        'Daily Backups',
        'WordPress Staging Environment'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'WP Pro',
      description: 'For professional WordPress developers',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        'Unlimited WordPress Sites',
        '50 GB SSD Storage',
        '100K Monthly Visitors',
        'Free SSL Certificate',
        'WordPress Auto-Updates',
        'Free WordPress Migrations',
        'Hourly Backups',
        'WordPress Staging Environment',
        'WP-CLI & Git Integration'
      ],
      popular: false
    }
  ];

  // Dedicated Server Plans
  const dedicatedPlans = [
    {
      id: 1,
      name: 'Dedicated Basic',
      description: 'Entry-level dedicated server',
      monthlyPrice: 99.99,
      yearlyPrice: 999.99,
      features: [
        '4 CPU Cores',
        '8 GB RAM',
        '1 TB HDD Storage',
        '5 TB Bandwidth',
        'Full Root Access',
        'Choice of OS',
        'Basic Server Management',
        '99.9% Uptime Guarantee'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Dedicated Pro',
      description: 'High-performance dedicated server',
      monthlyPrice: 149.99,
      yearlyPrice: 1499.99,
      features: [
        '8 CPU Cores',
        '16 GB RAM',
        '2 TB SSD Storage',
        '10 TB Bandwidth',
        'Full Root Access',
        'Choice of OS',
        'Advanced Server Management',
        'DDoS Protection',
        '99.95% Uptime Guarantee'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Dedicated Enterprise',
      description: 'Enterprise-grade dedicated infrastructure',
      monthlyPrice: 249.99,
      yearlyPrice: 2499.99,
      features: [
        '16 CPU Cores',
        '32 GB RAM',
        '4 TB SSD Storage',
        'Unlimited Bandwidth',
        'Full Root Access',
        'Choice of OS',
        'Premium Server Management',
        'Advanced DDoS Protection',
        'Hardware Redundancy',
        '99.99% Uptime Guarantee'
      ],
      popular: false
    }
  ];

  // Radio Hosting Plans
  const radioPlans = [
    {
      id: 1,
      name: 'Radio Basic',
      description: 'Perfect for new radio stations',
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      features: [
        '64 kbps Streaming',
        '100 Concurrent Listeners',
        '10 GB Storage for Music',
        'Basic Auto DJ',
        'Stream Statistics',
        '24/7 Support'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Radio Pro',
      description: 'For established radio stations',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        '128 kbps Streaming',
        '500 Concurrent Listeners',
        '50 GB Storage for Music',
        'Advanced Auto DJ',
        'Detailed Analytics',
        'Custom Radio App',
        'Priority Support'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Radio Enterprise',
      description: 'Professional broadcasting solution',
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        '320 kbps Streaming',
        'Unlimited Concurrent Listeners',
        '100 GB Storage for Music',
        'Premium Auto DJ with Scheduling',
        'Advanced Analytics & Reports',
        'Custom Radio App & Website',
        'Multiple Stream Support',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  // Map category to plans
  const planCategories = {
    shared: { title: 'Shared Hosting', plans: sharedPlans },
    cloud: { title: 'Cloud Hosting', plans: cloudPlans },
    vps: { title: 'VPS Hosting', plans: vpsPlans },
    wordpress: { title: 'WordPress Hosting', plans: wordpressPlans },
    dedicated: { title: 'Dedicated Servers', plans: dedicatedPlans },
    radio: { title: 'Radio Hosting', plans: radioPlans }
  };

  const activePlans = planCategories[activeCategory].plans;
  const activeTitle = planCategories[activeCategory].title;

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2>Affordable Hosting Plans</h2>
          <p>Choose the perfect plan for your needs</p>
        </div>

        <div className="plan-categories">
          <button 
            className={`category-button ${activeCategory === 'shared' ? 'active' : ''}`}
            onClick={() => setActiveCategory('shared')}
          >
            Shared Hosting
          </button>
          <button 
            className={`category-button ${activeCategory === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cloud')}
          >
            Cloud Hosting
          </button>
          <button 
            className={`category-button ${activeCategory === 'vps' ? 'active' : ''}`}
            onClick={() => setActiveCategory('vps')}
          >
            VPS Hosting
          </button>
          <button 
            className={`category-button ${activeCategory === 'wordpress' ? 'active' : ''}`}
            onClick={() => setActiveCategory('wordpress')}
          >
            WordPress Hosting
          </button>
          <button 
            className={`category-button ${activeCategory === 'dedicated' ? 'active' : ''}`}
            onClick={() => setActiveCategory('dedicated')}
          >
            Dedicated Servers
          </button>
          <button 
            className={`category-button ${activeCategory === 'radio' ? 'active' : ''}`}
            onClick={() => setActiveCategory('radio')}
          >
            Radio Hosting
          </button>
        </div>

        <div className="category-title">
          <h3>{activeTitle}</h3>
        </div>

        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <div className="toggle-switch" onClick={toggleBillingCycle}>
            <div className={`toggle-knob ${billingCycle === 'yearly' ? 'yearly' : ''}`}></div>
          </div>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly <span className="save-badge">Save 20%</span></span>
        </div>

        <div className="pricing-grid">
          {activePlans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="button pricing-button">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
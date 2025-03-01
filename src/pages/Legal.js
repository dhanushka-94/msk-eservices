import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Legal = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Legal Information</h1>
      </div>
      <div className="page-content">
        <section className="legal-section">
          <h2>Legal Overview</h2>
          <p>
            This page provides access to MSK eServices' legal agreements and policies that govern the use of our services and website. We encourage you to read these documents carefully to understand your rights and responsibilities when using our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>Available Legal Documents</h2>
          <div className="legal-documents">
            <div className="legal-document-card">
              <h3>Terms of Service</h3>
              <p>
                Our Terms of Service outline the rules, guidelines, and obligations that apply when you use MSK eServices' services. These terms constitute a legally binding agreement between you and MSK eServices.
              </p>
              <Link to="/terms" className="legal-link">Read Terms of Service</Link>
            </div>

            <div className="legal-document-card">
              <h3>Privacy Policy</h3>
              <p>
                Our Privacy Policy explains how we collect, use, and protect your personal information. It details what data we collect, how we use it, and your rights regarding your personal information.
              </p>
              <Link to="/privacy" className="legal-link">Read Privacy Policy</Link>
            </div>

            <div className="legal-document-card">
              <h3>Acceptable Use Policy</h3>
              <p>
                Our Acceptable Use Policy outlines the permitted and prohibited uses of our services. It helps ensure a safe and reliable environment for all our users.
              </p>
              <Link to="/acceptable-use" className="legal-link">Read Acceptable Use Policy</Link>
            </div>

            <div className="legal-document-card">
              <h3>Service Level Agreement</h3>
              <p>
                Our Service Level Agreement (SLA) defines the level of service you can expect from us, including uptime guarantees, support response times, and compensation for service disruptions.
              </p>
              <Link to="/sla" className="legal-link">Read Service Level Agreement</Link>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Legal Compliance</h2>
          <p>
            MSK eServices is committed to complying with all applicable laws and regulations. We regularly review and update our legal documents to ensure they remain current with evolving legal requirements.
          </p>
          <p>
            If you have any questions about our legal documents or need clarification on any terms, please contact our legal team at legal@mskcomputers.lk.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to Legal Documents</h2>
          <p>
            We may update our legal documents from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email. The "Last Updated" date at the bottom of each document indicates when it was last revised.
          </p>
          <p>
            Your continued use of our services after we post changes to our legal documents constitutes your acceptance of those changes.
          </p>
        </section>

        <div className="legal-footer">
          <p>Last updated: March 2, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Legal; 
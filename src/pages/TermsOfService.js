import React from 'react';
import './Pages.css';

const TermsOfService = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Terms of Service</h1>
      </div>
      <div className="page-content">
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to MSK eServices. These Terms of Service ("Terms") govern your use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Services Description</h2>
          <p>
            MSK eServices provides web and radio hosting services for businesses of all sizes. Our services include but are not limited to shared hosting, VPS hosting, dedicated servers, cloud hosting, WordPress hosting, and radio hosting solutions.
          </p>
          <p>
            We strive to ensure high availability, reliability, and performance of our Services. However, we cannot guarantee that the Services will be uninterrupted, timely, secure, or error-free at all times.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Account Registration and Security</h2>
          <p>
            To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.
          </p>
          <p>
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Acceptable Use Policy</h2>
          <p>
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate MSK eServices, a MSK eServices employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm MSK eServices or users of the Services or expose them to liability.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Content Policy</h2>
          <p>
            Our Services allow you to store, process, and transmit content. You retain ownership of any intellectual property rights that you hold in that content. When you upload content to our Services, you give us permission to store, process, and transmit that content as necessary to provide the Services.
          </p>
          <p>
            You are solely responsible for the content that you upload, post, email, transmit, or otherwise make available via our Services. We do not claim ownership of your content. However, you grant us a worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
          </p>
          <p>
            We reserve the right to remove any content that violates these Terms or that we determine in our sole discretion is otherwise objectionable.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Payment Terms</h2>
          <p>
            Some of our Services are offered on a subscription basis. You agree to pay the fees for the Services you select. All fees are in the currency specified and are exclusive of taxes unless stated otherwise.
          </p>
          <p>
            Subscription fees are billed in advance on a monthly or annual basis, depending on the billing cycle you select when purchasing the Services. You authorize us to charge your payment method for all fees incurred.
          </p>
          <p>
            If we are unable to process payment through your selected payment method, we reserve the right to suspend or terminate your access to the Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Cancellation and Refund Policy</h2>
          <p>
            You may cancel your subscription at any time by contacting our customer support team. Upon cancellation, your subscription will remain active until the end of your current billing period.
          </p>
          <p>
            We offer a 30-day money-back guarantee for new hosting accounts. If you are not satisfied with our Services within the first 30 days of your subscription, you may request a full refund. This refund policy does not apply to domain registrations, SSL certificates, or other add-on services.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall MSK eServices, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Services;</li>
            <li>Any conduct or content of any third party on the Services;</li>
            <li>Any content obtained from the Services; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            MSK eServices<br />
            Email: legal@mskcomputers.lk
          </p>
        </section>

        <div className="terms-footer">
          <p>Last updated: March 2, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 
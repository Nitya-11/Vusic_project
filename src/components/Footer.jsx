import React from 'react';

const services = [
  'Music distribution',
  'Caller tune distribution',
  'Artist promotion',
  'Playlisting and official featuring',
  'Music interviews',
  'Music monetization',
  'Analytics and reporting',
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid page-container">
        <section>
          <h2>Services</h2>
          <ul className="footer-services">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
          <span className="dmca-badge">DMCA protected</span>
          <p className="footer-location">📍 Noida | Delhi | Mumbai | Gorakhpur</p>
        </section>

        <section className="footer-about">
          <a className="footer-brand" href="#home" aria-label="Vusic Records home">
            <span className="footer-brand-mark" aria-hidden="true">V</span>
            <span><strong>Vusic Records</strong><small>FOR ARTISTS, BY ARTISTS</small></span>
          </a>
          <p>
            Vusic Records is formed by a team of Indian music artists, music company executives,
            and recording studios. We understand independent musicians and help their songs reach
            listeners across India and the world.
          </p>
          <a className="footer-social" href="https://www.instagram.com/" aria-label="Instagram">◎</a>
          <nav className="footer-legal" aria-label="Legal">
            <a href="#privacy">Privacy policy</a><span>|</span>
            <a href="#refund">Refund policy</a><span>|</span>
            <a href="#terms">Terms of service</a>
          </nav>
        </section>

        <section className="footer-contact">
          <h2>Contact</h2>
          <a href="tel:+919315903706">+91 93159 03706</a>
          <a href="mailto:info@vusicrecords.com">info@vusicrecords.com</a>
          <p>Noida | Delhi | Mumbai | Gorakhpur</p>
          <span className="made-in-india">Made in India<br /><small>Music for the world</small></span>
        </section>
      </div>
      <div className="footer-bottom page-container">
        <p>© 2026 Vusic Records Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

import React from 'react';
import { services } from '../data/landingPage.js';

const iconPaths = {
  distribution: (
    <>
      <path d="M5 19a4 4 0 0 1 4-4h1v4H9a4 4 0 0 1-4-4" />
      <path d="M13 5a8 8 0 0 1 8 8" />
      <path d="M13 1a12 12 0 0 1 12 12" />
      <path d="m3 17 6 6" />
    </>
  ),
  promotion: <path d="M3 10v4h4l12 6V4L7 10H3Zm4 4 2 7h4l-2-6m12-7a7 7 0 0 1 0 9" />,
  monetization: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5 9h.01M19 15h.01" />
    </>
  ),
  analytics: <path d="M4 20V4m0 16h18M8 15l4-5 4 3 6-7" />,
  labels: (
    <>
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="17" width="6" height="5" rx="1" />
      <rect x="9" y="17" width="6" height="5" rx="1" />
      <rect x="16" y="17" width="6" height="5" rx="1" />
      <path d="M12 7v5M5 17v-3h14v3" />
    </>
  ),
  playlist: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8h9M8 12h9M8 16h9" />
      <circle cx="6" cy="8" r=".5" />
      <circle cx="6" cy="12" r=".5" />
      <circle cx="6" cy="16" r=".5" />
    </>
  ),
  protection: (
    <>
      <path d="M9 10V5a2 2 0 0 1 4 0v5h1V7a2 2 0 0 1 4 0v4h1a2 2 0 0 1 1.8 2.9l-3.5 7A2 2 0 0 1 15.5 22H12a5 5 0 0 1-4-2l-4-5a2 2 0 0 1 3-2.6L9 14v-4Z" />
      <path d="M2 9v8" />
    </>
  ),
};

function ServiceIcon({ name }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

export default function Services() {
  return (
    <section className="services-section page-container" id="services" aria-labelledby="services-title">
      <div className="section-heading services-heading">
        <div>
          <p className="section-eyebrow">Artists first</p>
          <h2 id="services-title">How Vusic Records helps artists, labels, and right holders</h2>
        </div>
        <div className="section-intro">
          <p>
            Entertainment is a very serious business. We give artists, labels, and rights holders
            access to the technology and tools to grow their music career.
            
          </p>
          <p>We take your musical career extremely seriously.</p>
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <ServiceIcon name={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

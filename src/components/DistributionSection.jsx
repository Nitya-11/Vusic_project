import React from 'react';
import { audioDistribution, audioPartners, videoDistribution, videoPartners } from '../data/landingPage.js';

const icons = {
  social: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r=".8" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  music: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M7 10c3-1 7-.5 10 1M7.5 13c2.8-.8 6.1-.3 8.7 1M8 16c2.2-.5 4.2-.2 6.2.7" />
    </>
  ),
  global: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </>
  ),
  video: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
};

function DistributionIcon({ name }) {
  return (
    <svg
      className="distribution-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function DistributionGroup({ id, label, title, description, items, partners, indexOffset = 0 }) {
  return (
    <section className="distribution-block" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading distribution-heading">
        <div>
          <p className="section-eyebrow">{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="section-intro">
          <p>{description}</p>
          <p>Reach your audience with transparency, trust, and room to grow.</p>
        </div>
      </div>
      <div className="distribution-grid">
        {items.map((item, index) => (
          <article className="distribution-card" key={item.title}>
            <DistributionIcon name={item.icon} />
            <h3>
              <span>{index + indexOffset + 1}</span> {item.title}
            </h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <ul className="partner-list" aria-label={`${title} partner platforms`}>
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </section>
  );
}

export default function DistributionSection() {
  return (
    <div className="distribution-section page-container">
      <DistributionGroup
        id="audio-distribution"
        label="Widest coverage"
        title="Audio distribution"
        description="Audio distribution you can trust, with transparency and the tools to help you grow."
        items={audioDistribution}
        partners={audioPartners}
      />
      <DistributionGroup
        id="video-distribution"
        label="Reach every screen"
        title="Music video distribution"
        description="Share your music videos with fans across leading TV, OTT, and streaming platforms."
        items={videoDistribution}
        partners={videoPartners}
        indexOffset={5}
      />
    </div>
  );
}

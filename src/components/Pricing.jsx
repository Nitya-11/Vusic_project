import React from 'react';

const benefits = [
  'Keep 100% of your royalties',
  'Reach 150+ streaming platforms',
  'Release music on your schedule',
];

export default function Pricing({ onGetStarted }) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-copy">
        <p className="eyebrow pricing-eyebrow">Your music. Your rules.</p>
        <h2>Make your next move.</h2>
        <p>Everything you need to put your music out there and build your career, all in one place.</p>
      </div>
      <div className="benefit-list">
        {benefits.map((benefit) => (
          <div className="benefit" key={benefit}>
            <span className="benefit-check" aria-hidden="true">✓</span>
            <span>{benefit}</span>
          </div>
        ))}
        <button className="button button-dark" type="button" onClick={onGetStarted}>
          Find your plan <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}

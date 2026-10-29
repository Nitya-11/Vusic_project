import React, { useState } from 'react';

function CampaignArtwork() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`campaign-art${imageLoaded ? ' has-image' : ''}`}
      role="img"
      aria-label="Vusic Records artist campaign artwork"
    >
      <img
        className="campaign-image"
        src="/images/heroImage.png"
        alt=""
        onLoad={() => setImageLoaded(true)}
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
      <div className="campaign-label">VUSIC RECORDS PRESENTS</div>
      <h2 className="campaign-title">DIG<br />SWIRL<br />SPREAD</h2>
      <div className="sun-disc" />
      <div className="campaign-orbit orbit-one" />
      <div className="campaign-orbit orbit-two" />
      <div className="chair">
        <span className="chair-back" />
        <span className="chair-seat" />
        <span className="chair-leg chair-leg-left" />
        <span className="chair-leg chair-leg-right" />
      </div>
      <div className="artist-figure">
        <span className="figure-hair" />
        <span className="figure-head" />
        <span className="figure-body" />
        <span className="figure-arm" />
      </div>
      <div className="campaign-stamp">SOUND<br />ON REPEAT</div>
      <span className="campaign-footer">A LITTLE LOUDER. A LOT MORE YOU.</span>
    </div>
  );
}

export default function Hero({ onStart }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Earn money, fans and fame</p>
            <h1>Create<br />Upload<br />Monetize<br />Repeat.</h1>
            <p className="hero-description">
              Vusic Records helps you make more from your music. Reach fans worldwide
              across streaming apps, social platforms, UGC and everywhere your sound travels.
            </p>
            <button className="button button-primary start-button" type="button" onClick={onStart}>
              Start Now <span aria-hidden="true">↗</span>
            </button>
          </div>

          <figure className="campaign">
            <CampaignArtwork />
            <figcaption>
              <strong>Big sound. Bigger reach.</strong> See how Vusic Records helps artists
              turn original music into moments people can’t stop sharing.
            </figcaption>
          </figure>
        </div>
        <div className="social-proof" aria-label="Rated 4.6 out of 5 by artists">
          <span className="quote-mark">“</span>
          <p>Finally, a world-class music distribution company for independent artists.</p>
          <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
          <strong className="rating">(4.6/5)</strong>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />
    </>
  );
}

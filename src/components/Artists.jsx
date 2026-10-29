import React from 'react';
import { artists } from '../data/landingPage.js';

export default function Artists() {
  return (
    <section className="artists-section" id="artists" aria-labelledby="artists-title">
      <div className="page-container">
        <div className="artists-heading">
          <h2 id="artists-title">Artists on Vusic</h2>
          <p>
            From Bollywood and Punjabi to South Indian and international music, we’re proud to
            release and distribute music from artists around the world.
          </p>
        </div>
        <div className="artist-grid">
          {artists.map((artist) => (
            <article className="artist-card" key={artist.name}>
              <div className="artist-photo" style={{ backgroundColor: artist.color }}>
                <span className="artist-initial" aria-hidden="true">
                  {artist.name.slice(0, 1)}
                </span>
                <img
                  src={`/images/artists/${encodeURIComponent(artist.image)}`}
                  alt={`${artist.name} artist portrait`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              </div>
              <div className="artist-card-info">
                <h3>{artist.name}</h3>
                <p>Vusic Records Artist</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

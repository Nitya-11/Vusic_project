import React from 'react';

export default function Header({ onLogin, onCreateAccount }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Vusic Records home">
        <svg className="brand-mark" viewBox="0 0 42 42" aria-hidden="true">
          <path d="M2 3h37L20 39 2 3Z" fill="currentColor" />
          <path d="m22 8-7 13h7l-4 9 13-17h-8l4-5h-5Z" fill="#252525" />
        </svg>
        <span className="brand-copy">
          <strong>Vusic Records</strong>
          <small>FOR ARTISTS, BY ARTISTS</small>
        </span>
      </a>

      <nav className="header-actions" aria-label="Main navigation">
        <a className="nav-link" href="#pricing">Pricing</a>
        <button className="nav-link" type="button" onClick={onLogin}>Login</button>
        <button className="button button-primary header-cta" type="button" onClick={onCreateAccount}>
          Create New Account
        </button>
      </nav>
    </header>
  );
}

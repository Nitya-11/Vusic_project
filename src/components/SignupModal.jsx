import React, { useEffect, useState } from 'react';

export default function SignupModal({ isOpen, mode, onClose, onModeChange }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setSubmitted(false);
  }, [mode, isOpen]);

  if (!isOpen) return null;

  const isLogin = mode === 'login';

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="signup-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close dialog">×</button>
        {submitted ? (
          <div className="form-success" role="status">
            <span className="success-icon" aria-hidden="true">✓</span>
            <h2 id="modal-title">{isLogin ? 'You’re all set.' : 'You’re on your way.'}</h2>
            <p>This demo form is ready to connect to your account service.</p>
            <button className="button button-primary" type="button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <p className="eyebrow modal-eyebrow">For artists, by artists</p>
            <h2 id="modal-title">{isLogin ? 'Welcome back.' : 'Start your music journey.'}</h2>
            <p className="modal-description">
              {isLogin ? 'Log in to manage your releases.' : 'Create your free artist account in minutes.'}
            </p>
            <form className="account-form" onSubmit={handleSubmit}>
              {!isLogin && (
                <label>
                  Artist name
                  <input name="artist" type="text" placeholder="Your artist name" autoComplete="nickname" required />
                </label>
              )}
              <label>
                Email address
                <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </label>
              <label>
                Password
                <input name="password" type="password" placeholder="At least 8 characters" autoComplete={isLogin ? 'current-password' : 'new-password'} minLength="8" required />
              </label>
              <button className="button button-primary form-submit" type="submit">
                {isLogin ? 'Log in' : 'Create account'} <span aria-hidden="true">↗</span>
              </button>
            </form>
            <p className="modal-switch">
              {isLogin ? 'New to Vusic?' : 'Already have an account?'}{' '}
              <button type="button" onClick={() => onModeChange(isLogin ? 'create' : 'login')}>
                {isLogin ? 'Create account' : 'Log in'}
              </button>
            </p>
          </>
        )}
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';
import Services from './components/Services.jsx';
import Artists from './components/Artists.jsx';
import DistributionSection from './components/DistributionSection.jsx';
import Footer from './components/Footer.jsx';
import SignupModal from './components/SignupModal.jsx';

export default function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupMode, setSignupMode] = useState('create');

  function openSignup(mode = 'create') {
    setSignupMode(mode);
    setIsSignupOpen(true);
  }

  return (
    <>
      <Header onLogin={() => openSignup('login')} onCreateAccount={() => openSignup('create')} />
      <main>
        <Hero onStart={() => openSignup('create')} />
        <Pricing onGetStarted={() => openSignup('create')} />
        <Services />
        <Artists />
        <DistributionSection />
      </main>
      <Footer />
      <SignupModal
        isOpen={isSignupOpen}
        mode={signupMode}
        onClose={() => setIsSignupOpen(false)}
        onModeChange={setSignupMode}
      />
    </>
  );
}

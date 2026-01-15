import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import FloatingSocials from './components/FloatingSocials';
import WorkoutSamples from './components/WorkoutSamples';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-red-800 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <WorkoutSamples />
        <Features />
        <Contact />
      </main>
      <FloatingSocials />
    </div>
  );
};

export default App;
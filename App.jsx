import React from 'react';
// These import statements pull in the specific sections we just made
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' }}>
      {/* We place our components here in the exact order we want them to show up on screen */}
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

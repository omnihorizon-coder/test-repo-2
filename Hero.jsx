import React from 'react';

const Hero = () => {
  return (
    <section id="about" style={styles.hero}>
      {/* The main bold headline of your portfolio */}
      <h1 style={styles.title}>Hi, I'm a <span style={styles.highlight}>MERN Stack</span> Developer</h1>
      
      {/* A short sentence describing what you do */}
      <p style={styles.subtitle}>I build scalable, high-performance web applications using MongoDB, Express, React, and Node.js.</p>
      
      {/* Call to Action (CTA) buttons */}
      <div style={styles.btnContainer}>
        <a href="#skills" style={styles.primaryBtn}>See My Skills</a>
        <a href="#contact" style={styles.secondaryBtn}>Let's Talk</a>
      </div>
    </section>
  );
};

const styles = {
  hero: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '70vh', backgroundColor: '#1a1a1a', color: '#fff', padding: '0 20px' },
  title: { fontSize: '48px', marginBottom: '20px', fontWeight: '800' },
  highlight: { color: '#007bff' },
  subtitle: { fontSize: '20px', color: '#ccc', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' },
  btnContainer: { display: 'flex', gap: '20px' },
  primaryBtn: { textDecoration: 'none', backgroundColor: '#007bff', color: '#fff', padding: '12px 30px', borderRadius: '5px', fontWeight: 'bold' },
  secondaryBtn: { textDecoration: 'none', border: '2px solid #007bff', color: '#007bff', padding: '10px 28px', borderRadius: '5px', fontWeight: 'bold' }
};

export default Hero;

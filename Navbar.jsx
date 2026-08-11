import React from 'react';

// This is a function that returns the visual structure of our Navigation Bar
const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {/* This is our website logo */}
      <div style={styles.logo}>Dev<span>Portfolio</span></div>
      
      {/* These are the clickable links to navigate our single-page site */}
      <ul style={styles.ul}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#contact" style={styles.contactBtn}>Contact</a></li>
      </ul>
    </nav>
  );
};

// This object holds our CSS styling (colors, layout, spacing) written in JavaScript format
const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', backgroundColor: '#111', color: '#fff', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '24px', fontWeight: 'bold' },
  ul: { display: 'flex', listStyle: 'none', gap: '30px', alignItems: 'center', margin: 0, padding: 0 },
  link: { textDecoration: 'none', color: '#bbb', fontSize: '16px' },
  contactBtn: { textDecoration: 'none', color: '#fff', backgroundColor: '#007bff', padding: '8px 20px', borderRadius: '5px', fontWeight: 'bold' }
};

// This line allows other files in our project to use this Navbar component
export default Navbar;

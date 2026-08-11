import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Get In Touch</h2>
      <p style={styles.subtext}>Have a project in mind? Drop me a message below.</p>
      
      {/* HTML Form structure for collecting user input */}
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="5" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.submitBtn}>Send Message</button>
      </form>
    </section>
  );
};

const styles = {
  section: { padding: '80px 8%', backgroundColor: '#1a1a1a', textAlign: 'center', color: '#fff' },
  heading: { fontSize: '36px', marginBottom: '10px' },
  subtext: { color: '#aaa', marginBottom: '40px' },
  form: { maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', fontSize: '16px' },
  textarea: { padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', fontSize: '16px', resize: 'none' },
  submitBtn: { padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};

export default Contact;

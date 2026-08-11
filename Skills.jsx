import React from 'react';

const Skills = () => {
  // This is an Array (a list) holding your professional skills
  const techStack = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'HTML5 & CSS3', 'Git & GitHub'];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Tech Stack</h2>
      <div style={styles.grid}>
        {/* .map() is a loop that automatically creates a box for every item in our array list */}
        {techStack.map((tech, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.text}>{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '80px 8%', backgroundColor: '#111', textAlign: 'center' },
  heading: { color: '#fff', fontSize: '36px', marginBottom: '40px' },
  grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
  card: { backgroundColor: '#222', padding: '15px 30px', borderRadius: '8px', border: '1px solid #333', minWidth: '120px' },
  text: { color: '#fff', margin: 0, fontWeight: '500' }
};

export default Skills;

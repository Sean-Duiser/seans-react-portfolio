import React from 'react';
import Footer from '../Footer';

const styles = {
  body: {
    backgroundColor: '#846C5B',
    display: 'flex',
    alignItems: 'center',

  },
  h1: {
    color: '#4DA167',
  },
  p: {
    color: '#FFFBFA',
    display: 'flex',
    textAlign: 'center',
  },
  image: {
    width: '18rem',
  }
}

export default function About() {
  return (
    <div class='card' style={styles.body}>
      <h1 style={styles.h1}>About Page</h1>
      <img style={styles.image} src='https://avatars.githubusercontent.com/u/97902749?v=4' />
      <p style={styles.p}>
        I'm a Full-Stack Software Engineering Student. I'm excited to start my career in the industry and put my skills to use! I've learned several languages and used all of my newly acquired knowledge to create various projects that you can view and inspect on this portfolio page.
      </p>
      <Footer />
    </div>
  );
}

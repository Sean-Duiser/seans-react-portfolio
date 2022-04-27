import React from 'react';
import Footer from '../Footer';
import Form from '../Form';

const styles = {
  body: {
    backgroundColor: '#846C5B',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'

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

export default function Contact() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Contact Page</h1>
      <Form />
      <Footer />
    </div>
  );
}

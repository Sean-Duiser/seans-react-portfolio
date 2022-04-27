import React from 'react';
import Footer from '../Footer';
import myResume from '../../../src/assets/myResume.pdf';

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
  },
  ul: {
    padding: '0',
    margin: '0',
    fontWeight: 'bold',
  }
}

export default function Resume() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Resume Page</h1>
      <div style={styles.body}>
        <a href={myResume} download="Sean Duiser Resume" target="_blank">
          <p style={styles.p}>
            Click to download a copy of my resume.
          </p>
        </a>
        <ul style={styles.ul}>
          <li style={styles.p}>
            -HTML
          </li>
          <li style={styles.p}>
            -CSS
          </li>
          <li style={styles.p}>
            -JavaScript
          </li>
          <li style={styles.p}>
            -React
          </li>
          <li style={styles.p}>
            -MySQL
          </li>
          <li style={styles.p}>
            -MongoDB
          </li>
        </ul>
        <Footer />
      </div >
    </div>
  );
}

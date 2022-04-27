import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '10px',
  },
  link: {
    margin: '5px',
    color: '#54DEFD',
    fontWeight: 'bold',
  }
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <div style={styles.footer}>
      <a href="https://github.com/Sean-Duiser">
        <p style={styles.link}>
          GitHub
        </p>
      </a>
      <a href="https://www.linkedin.com/in/sean-duiser/">
        <p style={styles.link}>
          LinkedIn
        </p>
      </a>
      <a href="https://stackoverflow.com/users/18143464/sean-duiser">
        <p style={styles.link}>
          StackOverflow
        </p>
      </a>
    </div>
  );
}

export default Footer;
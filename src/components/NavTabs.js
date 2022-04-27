import React from 'react';

const styles = {
  NavTabs: {
    margin: '5px',
    color: '#49C6E5',
    fontWeight: 'bold',
  },
  header: {
    backgroundImage: '#FFFBFA',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  h1: {
    color: '#49C6E5',
    textAlign: 'center'
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.h1}>Sean Duiser</h1>
        <ul style={styles.NavTabs} className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={styles.NavTabs}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={styles.NavTabs}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={styles.NavTabs}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={styles.NavTabs}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavTabs;

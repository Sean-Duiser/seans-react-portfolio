import React from 'react';

function Footer({ currentPage, handlePageChange }) {
  return (
    <div>
      <a href="https://github.com/Sean-Duiser">
        <p>
          GitHub
        </p>
      </a>
      <a href="https://www.linkedin.com/in/sean-duiser/">
        <p>
          LinkedIn
        </p>
      </a>
      <a href="https://stackoverflow.com/users/18143464/sean-duiser">
        <p>
          StackOverflow
        </p>
      </a>
    </div>
  );
}

export default Footer;
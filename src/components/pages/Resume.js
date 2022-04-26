import React from 'react';
import Footer from '../Footer';
import myResume from '../../../src/assets/myResume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={myResume} download="Sean Duiser Resume" target="_blank">
        <p>
          Click to download a copy of my resume.
        </p>
      </a>
      <ul>
        <li>
          HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          React
        </li>
        <li>
          MySQL
        </li>
        <li>
          MongoDB
        </li>
      </ul>
      <Footer />
    </div >
  );
}

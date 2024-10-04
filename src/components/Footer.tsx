import React from 'react';
import './Footer.css'; // Footer styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

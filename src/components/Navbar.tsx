import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h1>DETA<span className="liquid"></span></h1>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleMenu}>&times;</button> {/* Close Button */}
          <ul>
            <li><a href="#about-me" onClick={toggleMenu}>About</a></li>
            <li><a href="#stake-with-us" onClick={toggleMenu}>Stake</a></li>
            <li><a className="contact-button" href="#contact-us" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

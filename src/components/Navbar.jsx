import React, { useState } from 'react';
import './Navbar.css';
import vFilmsLogo from '../assets/v-films-logo.png';
import hamburgerIcon from '../assets/hamburger-icon.svg';
import closeIcon from '../assets/close-icon.svg';
import mailIcon from '../assets/mail-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a href="#" className="nav-logo-link">
        <img src={vFilmsLogo} alt="V Films Logo" className="nav-logo" />
      </a>

      <div className="nav-right-cluster">
        {isMenuOpen && (
          <nav className="nav-menu-inline">
            <ul className="nav-links-inline">
              <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
              <li><a href="#" onClick={handleLinkClick}>Their Stories</a></li>
              <li><a href="#" onClick={handleLinkClick}>Our Story</a></li>
              <li><a href="#" onClick={handleLinkClick}>Varnan</a></li>
            </ul>
            <a 
              href="#contact" 
              className="lets-talk-btn" 
              onClick={handleLinkClick}
            >
              Let's Talk
              <img src={mailIcon} alt="talk icon" className="mail-icon" />
            </a>
          </nav>
        )}

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <img src={closeIcon} alt="Close menu" />
          ) : (
            <img src={hamburgerIcon} alt="Open menu" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

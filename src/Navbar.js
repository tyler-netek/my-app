import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './retro-navbar.css';

const Navbar = () => {
  const items = [
    { text: 'Home', link: 'home' },
    { text: 'About', link: 'about' },
    { text: 'Resume', link: 'resume' },
    { text: 'Contact', link: 'contact' },
  ];

  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map((item, index) => (
          <li key={index}>
            {item.link === 'home' ? (
              <a href="#home" className="link-item" onClick={handleHomeClick}>
                <span className="typewriter-text retro-cursor">{item.text}</span>
              </a>
            ) : (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="link-item"
              >
                <span className="typewriter-text retro-cursor">{item.text}</span>
              </Link>
            )}
          </li>
        ))}
        {/* Add Font Awesome icons for LinkedIn and GitHub */}
        <li>
          <a href="https://www.linkedin.com/in/tylernetek/" className="link-item">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/tyler-netek" className="link-item">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;











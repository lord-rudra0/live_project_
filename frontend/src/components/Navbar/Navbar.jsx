import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" className="logo-text">
            <span className="logo-gradient">CareerFindr</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
          <button className="signup-button">Sign Up</button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="menu-icon">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="menu-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="sheet-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="sheet-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="signup-button" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

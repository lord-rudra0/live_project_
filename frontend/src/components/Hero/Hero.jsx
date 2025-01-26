import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Discover Your <span className="highlight">Career Path</span>
        </h1>
        <p className="hero-description">
          Not sure where to start? Let us guide you! Our platform helps you explore career opportunities based on your skills, interests, and preferences. Take the first step toward your dream career today.
        </p>
        <Link to="/test" className="hero-button">
          Get Started <span className="arrow">→</span>
        </Link>
      </div>
      <img src="https://unsplash.com/photos/a-row-of-light-bulbs-with-a-mans-head-in-the-middle-bPPGBNqAorg" alt="Portal Image" className="portal-image" />
    </section>
  );
};

export default Hero;

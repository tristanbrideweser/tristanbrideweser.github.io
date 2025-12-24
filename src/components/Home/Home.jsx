/**
 * HOME COMPONENT
 * 
 * This is the landing page of your portfolio.
 * It serves as an introduction and entry point to your site.
 * 
 * CUSTOMIZATION:
 * - Update the hero text and call-to-action buttons
 * - Modify the featured content sections
 * - Add your own introduction content
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '../../styles/animations.css';

function Home() {
  /**
   * CYCLING TYPING ANIMATION
   * 
   * This creates a typing effect that cycles through different roles/descriptions
   * It types out each text, pauses, deletes it, then types the next one
   * 
   * TODO: Customize the roles array with your own roles/descriptions
   */
  const roles = [
    'Robotics Engineer',
    'Business Student',
    'R&D Specialist',
    'Data Scientist',
    'Innovation Leader',
    // Add more roles here
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Typing speed (lower = faster)
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000; // How long to pause after typing complete

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Pause after typing complete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="home section">
      <div className="container">
        {/* Hero Section */}
        <div className="home-hero slide-up">
          <h1 className="hero-title">
            Tristan Brideweser
          </h1>
          <p className="hero-subtitle">
            Graduate Engineering & Business Student @ Purdue University
          </p>
          <div className="hero-typing">
            <span className="typing-prefix">I'm a </span>
            <span className="typing-text">
              {displayedText}
              <span className="typing-cursor">|</span>
            </span>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View My Projects
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="home-quicklinks slide-up-delay-1">
          <div className="quicklink-card">
            <Link to="/about" className="quicklink-link">
              <h3>About</h3>
              <p>Learn about my background, skills, and interests</p>
            </Link>
          </div>
          
          <div className="quicklink-card">
            <Link to="/resume" className="quicklink-link">
              <h3>Resume</h3>
              <p>View my professional experience and education</p>
            </Link>
          </div>
          
          <div className="quicklink-card">
            <Link to="/projects" className="quicklink-link">
              <h3>Projects</h3>
              <p>Explore my work and side projects</p>
            </Link>
          </div>
          
          <div className="quicklink-card">
            <Link to="/contact" className="quicklink-link">
              <h3>Contact</h3>
              <p>Get in touch and connect with me</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


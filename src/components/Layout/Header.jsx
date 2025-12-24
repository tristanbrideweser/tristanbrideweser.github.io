/**
 * HEADER COMPONENT
 * 
 * This component creates the navigation header that appears at the top of every page.
 * It includes:
 * - Logo/brand name (left side)
 * - Navigation links (right side)
 * - Active route highlighting
 * 
 * CUSTOMIZATION:
 * - Change logo text in the Link component (line ~30)
 * - Add/remove navigation items in the navItems array (line ~15)
 * - Modify styling in Header.css
 */

import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

function Header() {
  // Get current route location to highlight active nav link
  // useLocation is a React Router hook that returns the current location object
  const location = useLocation();
  
  // Get theme and toggle function from ThemeContext
  const { theme, toggleTheme } = useTheme();

  /**
   * NAVIGATION ITEMS
   * 
   * TODO: Customize this array to add/remove navigation links
   * 
   * Structure:
   * - path: The route path (must match routes in App.jsx)
   * - label: The text displayed in the navigation
   * 
   * Example: To add a "Blog" section:
   * { path: '/blog', label: 'Blog' }
   */
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* 
          LOGO/BRAND SECTION
          TODO: Customize your logo/brand name here
          - Change "Your Name" to your actual name or brand
          - Add an image logo by replacing the text with: <img src="/logo.png" alt="Logo" />
        */}
        <Link to="/" className="header-logo">
          Tristan Brideweser
        </Link>

        {/* 
          NAVIGATION MENU
          This creates the navigation links dynamically from the navItems array
        */}
        <nav className="header-nav">
          <ul className="nav-list">
            {/* 
              Map through navItems to create navigation links
              Each item becomes a clickable link in the navigation
            */}
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  // Add 'active' class if current route matches this link's path
                  // This allows you to style the active link differently
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* 
            THEME TOGGLE BUTTON
            Allows users to switch between light and dark mode
          */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;


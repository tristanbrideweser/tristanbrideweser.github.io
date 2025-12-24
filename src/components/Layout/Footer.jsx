/**
 * FOOTER COMPONENT
 * 
 * Simple footer component with social media links and copyright.
 * 
 * CUSTOMIZATION:
 * - Update social links in the socialLinks array (line ~15)
 * - Change copyright text (line ~40)
 * - Modify styling in Footer.css
 */

import './Footer.css';

function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  /**
   * SOCIAL MEDIA LINKS
   * 
   * TODO: Customize this array with your social media profiles
   * 
   * Structure:
   * - name: Display name for the social platform
   * - url: Link to your profile
   * - icon: Emoji or text icon (you can also use SVG icons)
   * 
   * To add a new social link:
   * { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '🐦' }
   */
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tristanbrideweser', icon: '' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tristanbrideweser', icon: '' },
    { name: 'Email', url: 'mailto:tristanbrideweser@gmail.com', icon: '' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links Section */}
        <div className="footer-social">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            {/* Map through socialLinks to create social media links */}
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          {/* 
          */}
          <p>© {currentYear} Tristan Brideweser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


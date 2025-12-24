/**
 * ABOUT COMPONENT
 * 
 * This component displays your personal introduction, bio, and skills.
 * It's the landing page when users visit your portfolio.
 * 
 * CUSTOMIZATION:
 * - Update bio text (line ~25)
 * - Add/remove skills in the skills array (line ~15)
 * - Add a profile image (line ~35)
 * - Modify the structure to add more sections
 */

import './About.css';
import '../../styles/animations.css';

function About() {
  /**
   * SKILLS ARRAY
   * 
   * TODO: Customize this array with your skills
   * 
   * Structure:
   * - Each item is a string representing a skill
   * - Skills are displayed as tags/badges
   * 
   * Example:
   * ['React', 'JavaScript', 'Python', 'Node.js']
   */
  const skills = [
    'Python',
    'ROS2',
    'Git',
    'CI/CD',
    'Fullstack Development',
    // Add more skills here
  ];

  return (
    <section className="about section">
      <div className="container">
        {/* 
          HERO SECTION
          This is the main introduction area at the top
        */}
        <div className="about-hero slide-up">
          {/* 
            ABOUT CONTENT - LEFT SIDE
            Text content appears on the left
          */}
          <div className="about-content">
            {/* 
              TODO: Update your name and title
            */}
            <h1 className="about-name">Tristan Brideweser</h1>
            <p className="about-title">Graudate Engineering & Business Student @ Purdue University</p>

            {/* 
              BIO SECTION
              TODO: Write your personal bio here
              This is where you introduce yourself and describe what you do
            */}
            <div className="about-bio">
              <p>
                {/* 
                  TODO: Replace this placeholder text with your actual bio
                  Write 2-3 sentences about yourself, your background, and what you're passionate about
                */}
                Welcome to my portfolio! I'm a passionate developer who loves creating
                beautiful and functional web experiences. I enjoy working with modern
                technologies and solving complex problems.
              </p>
              <p>
                {/* Add more paragraphs if needed */}
                Feel free to explore my projects and get in touch if you'd like to collaborate!
              </p>
            </div>
          </div>

          {/* 
            PROFILE IMAGE - RIGHT SIDE
            TODO: Add your profile image here
            Replace this div with: <img src="/profile.jpg" alt="Your Name" className="profile-image" />
          */}
          <div className="profile-image-placeholder">
            {/* Placeholder - replace with actual image */}
          </div>
        </div>

        {/* 
          SKILLS SECTION
          Displays your skills as tags/badges
        */}
        <div className="about-skills slide-up-delay-1">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list">
            {/* 
              Map through skills array to create skill tags
              Each skill becomes a clickable/taggable element
            */}
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 
          ADDITIONAL SECTIONS
          TODO: Add more sections here if needed, such as:
          - Education
          - Experience
          - Certifications
          - Hobbies/Interests
        */}
      </div>
    </section>
  );
}

export default About;


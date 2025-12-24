/**
 * PROJECT CARD COMPONENT
 * 
 * This component displays a single project in a card format.
 * It receives project data as props and renders it beautifully.
 * 
 * PROPS:
 * - project: Object containing project information
 *   - title: Project name
 *   - description: Short description
 *   - technologies: Array of tech stack items
 *   - githubUrl: Link to GitHub repository (optional)
 *   - liveUrl: Link to live demo (optional)
 *   - image: Path to project image (optional)
 */

import './ProjectCard.css';
import '../../styles/animations.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card hover-lift">
      {/* 
        PROJECT IMAGE
        TODO: Add project images to the public folder and reference them here
        Example: <img src="/projects/project1.jpg" alt={project.title} />
      */}
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      {/* Project Content */}
      <div className="project-content">
        {/* Project Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Project Description */}
        <p className="project-description">{project.description}</p>

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        <div className="project-links">
          {/* GitHub Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}

          {/* Live Demo Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


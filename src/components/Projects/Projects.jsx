/**
 * PROJECTS COMPONENT
 * 
 * This component displays all your projects in a grid layout.
 * Projects are stored in an array and can be easily customized.
 * 
 * CUSTOMIZATION:
 * - Add/remove projects in the projects array (line ~15)
 * - Modify project data structure as needed
 * - Add filtering/tagging functionality (commented example provided)
 */

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import '../../styles/animations.css';

function Projects() {
  /**
   * PROJECTS DATA ARRAY
   * 
   * TODO: Customize this array with your actual projects
   * 
   * Structure for each project:
   * - title: Project name
   * - description: Brief description of the project
   * - category: Project category (used for filtering/grouping)
   * - technologies: Array of technologies used (optional)
   * - githubUrl: Link to GitHub repository (optional)
   * - liveUrl: Link to live demo (optional)
   * - image: Path to project image (optional)
   * 
   * Example:
   * {
   *   title: 'My Awesome Project',
   *   description: 'A web app that does amazing things',
   *   category: 'Web Development',
   *   technologies: ['React', 'Node.js', 'MongoDB'],
   *   githubUrl: 'https://github.com/username/project',
   *   liveUrl: 'https://myproject.com',
   *   image: '/projects/project1.jpg'
   * }
   */
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. Explain what it does and why it\'s interesting.',
      category: 'Web Development',
      technologies: ['React', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1-demo.com',
      // image: '/projects/project1.jpg', // Uncomment when you add images
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight key features and technologies used.',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/project2',
      // liveUrl: 'https://project2-demo.com', // Optional
    },
    {
      title: 'Project 3',
      description: 'Another project description. Showcase your versatility and skills.',
      category: 'Web Development',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/project3',
    },
    // Add more projects here...
  ];

  /**
   * CATEGORY FILTERING
   * 
   * This allows users to filter projects by category
   * - 'All' shows all project sections
   * - Selecting a category shows only that category section
   */
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get all unique categories from projects
  const allCategories = ['All', ...new Set(
    projects.map(project => project.category || 'Uncategorized')
  )];

  /**
   * GROUP PROJECTS BY CATEGORY
   * 
   * Organizes projects into sections by category
   * Returns an object where keys are category names and values are project arrays
   */
  const projectsByCategory = projects.reduce((acc, project) => {
    const category = project.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  // Get categories to display (all if "All" selected, otherwise just selected)
  const categoriesToShow = selectedCategory === 'All'
    ? Object.keys(projectsByCategory)
    : [selectedCategory];

  return (
    <section className="projects section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header slide-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            {/* TODO: Update this subtitle text */}
            A collection of my recent work and side projects.
          </p>
        </div>

        {/* 
          CATEGORY FILTER BUTTONS
          Allows users to filter projects by category
        */}
        <div className="projects-filters slide-up-delay-1">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 
          PROJECT SECTIONS BY CATEGORY
          Each category gets its own section with a header
        */}
        <div className="projects-sections">
          {categoriesToShow.map((category, categoryIndex) => (
            <div key={category} className="project-category-section slide-up-delay-1">
              {/* Category Section Header */}
              <h3 className="category-title">
                {category}
                <span className="category-count">
                  ({projectsByCategory[category]?.length || 0})
                </span>
              </h3>

              {/* Projects Grid for this Category */}
              <div className="projects-grid">
                {projectsByCategory[category]?.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 
          Empty State (if no categories match)
        */}
        {categoriesToShow.length === 0 && (
          <div className="projects-empty">
            <p>No projects found. Try a different filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;


import React from 'react';
import './projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  devpostUrl?: string;
  codeUrl?: string;
  liveUrl?: string;
}

const ProjectsDisplay: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'PERSONAL PORTFOLIO',
      description: 'Full-stack solution with payment integration and admin dashboard.',
      technologies: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'EXPRESS', 'JWT', 'REDUX', 'AWS'],
      imageUrl: 'https://via.placeholder.com/300x400',
      codeUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'VOICEMEDIC',
      description: 'Productivity app with drag-and-drop functionality.',
      technologies: ['TYPESCRIPT', 'REACT', 'FIREBASE', 'TAILWIND', 'CONTEXT API', 'DRAG & DROP'],
      imageUrl: 'https://via.placeholder.com/300x400',
      devpostUrl: '#'
    },
    {
      id: 3,
      title: 'BRAINUP',
      description: 'Real-time forecasts with interactive maps.',
      technologies: ['JAVASCRIPT', 'API', 'CSS3', 'GEOLOCATION', 'CHART.JS', 'OPENWEATHER'],
      imageUrl: 'https://via.placeholder.com/300x400',
      codeUrl: '#'
    },
    {
        id: 4,
        title: 'PRODUCTIVITY EXTENSION',
        description: 'Full-stack solution with payment integration and admin dashboard.',
        technologies: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'EXPRESS', 'JWT', 'REDUX', 'AWS'],
        imageUrl: 'https://via.placeholder.com/300x400',
        codeUrl: '#',
        liveUrl: '#'
      }, 
      {
        id: 5,
        title: 'FITNESS WATCH',
        description: 'Full-stack solution with payment integration and admin dashboard.',
        technologies: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'EXPRESS', 'JWT', 'REDUX', 'AWS'],
        imageUrl: 'https://via.placeholder.com/300x400',
        codeUrl: '#',
        liveUrl: '#'
      },   
      {
        id: 6,
        title: 'WATERING SYSTEM',
        description: 'Full-stack solution with payment integration and admin dashboard.',
        technologies: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'EXPRESS', 'JWT', 'REDUX', 'AWS'],
        imageUrl: 'https://via.placeholder.com/300x400',
        codeUrl: '#',
        liveUrl: '#'
      },
  ];

  const splitTechnologies = (techs: string[]) => {
    const midIndex = Math.ceil(techs.length / 2);
    return {
      row1: techs.slice(0, midIndex),
      row2: techs.slice(midIndex)
    };
  };

  const getLinkContainerClass = (project: Project) => {
    const linkCount = [project.devpostUrl, project.codeUrl, project.liveUrl].filter(Boolean).length;
    return `project-links ${linkCount === 1 ? 'single-link' : ''}`;
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">$PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project) => {
          const { row1, row2 } = splitTechnologies(project.technologies);
          return (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-text-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              <div className="project-hover-footer">
                <div className={getLinkContainerClass(project)}>
                  {project.devpostUrl && (
                    <a 
                      href={project.devpostUrl} 
                      className="project-link devpost-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEVPOST
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      className="project-link github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="project-link live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  )}
                </div>
                <div className="technology-rows">
                  <div className="technology-row">
                    {row1.map((tech, index) => (
                      <span key={index} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="technology-row">
                    {row2.map((tech, index) => (
                      <span key={index} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
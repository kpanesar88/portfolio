'use client';
import React from 'react';
import Image from 'next/image';
import './projects.css';

const projectImages = {
  portfolio: '/images/projectimgs/portfolio.png',
  voicemedic: '/images/projectimgs/voicemedic.png',
  brainup: '/images/projectimgs/brainup.png',
  productivity: '/images/projectimgs/productivityextension.png',
  fitness: '/images/projectimgs/fitnesswatch.jpg',
  watering: '/images/projectimgs/water.jpg',
};

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  devpostUrl?: string;
  codeUrl?: string;
  liveUrl?: string;
  isHackathonWinner?: boolean;
  hackathonName?: string;
}

const ProjectsDisplay: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'PERSONAL PORTFOLIO',
      description: 'My corner of the internet—code, creations, and continuous learning.',
      technologies: ['REACT', 'NEXT.JS', 'HTML/CSS/JS', 'TYPESCRIPT', 'VSCODE',],
      imageUrl: projectImages.portfolio,
      liveUrl: '/about',
      codeUrl: 'https://github.com/kpanesar88/portfolio',
    },
    {
      id: 2,
      title: 'VOICEMEDIC',
      description: 'A voice-activated first aid assistant that guides users through emergencies with AI-powered, step-by-step instructions—no medical experience needed.',
      technologies: ['TYPESCRIPT', 'EXPO', 'TAILWIND', 'OPENAI', 'NODEJS', 'HTML/CSS/JS',],
      imageUrl: projectImages.voicemedic,
      devpostUrl: 'https://devpost.com/software/voice-medic',
      codeUrl:'https://github.com/kpanesar88/VoiceMedic',
    },
    {
      id: 3,
      title: 'BRAINUP',
      description: 'An AI coach that analyzes your saved Instagram content to recommend personalized productivity tips and learning resources. Won Best AI Hack at Hack the Hill 2024!',
      technologies: ['PYTHON', 'FLASK', 'REACTJS', 'SELENIUM', 'HDBSCAN', 'HTML/CSS/JS', ],
      imageUrl: projectImages.brainup,
      devpostUrl:'https://devpost.com/software/brainup',
      codeUrl: 'https://github.com/kpanesar88/BrainUp',
      isHackathonWinner: true,
      hackathonName: 'Hack the Hill 2024 (AI CHALLENGE)',
    },
    {
      id: 4,
      title: 'PRODUCTIVITY EXTENSION',
      description: 'A browser extension that monitors your attention by detecting when you look at the screen. Simple feedback shows focus sessions without interruptions.',
      technologies: ['PYTHON', 'FLASK', 'HTML/CSS/JS', 'VSCODE'],
      imageUrl: projectImages.productivity,
      codeUrl: 'https://github.com/kpanesar88/productivity-ext',
    }, 
    {
      id: 5,
      title: 'FITNESS WATCH',
      description: 'An Arduino-powered activity tracker that counts steps and burns—just the essentials in a compact circuit.',
      technologies: ['C++', 'ARDUINO', 'DS3231 RTC', 'LIS3DHTR Accelerometer', 'VSCODE'],
      imageUrl: projectImages.fitness,
      codeUrl: 'https://github.com/kpanesar88/fitness-watch-arduino',
    },   
    {
      id: 6,
      title: 'WATERING SYSTEM',
      description: 'An automated system that uses soil sensors to control watering—perfect hydration, no guesswork. Ideal for busy plant lovers!',
      technologies: ['JAVA','ARDUINO', 'FIRMATA4J', 'JSSC', 'ECLIPSE','IoT'],
      imageUrl: projectImages.watering,
      codeUrl: 'https://github.com/kpanesar88/automated-plant-watering-system',
    },
  ];

  const splitTechnologies = (techs: string[]) => {
    const midIndex = Math.ceil(techs.length / 2);
    return {
      row1: techs.slice(0, midIndex),
      row2: techs.slice(midIndex)
    };
  };

  return (
    <div className="projects-container">
<h1 className="projects-title">
  <span className="purple-text">$MY</span><span className="white-text">PROJECTS</span>
</h1>      <div className="projects-grid">
        {projects.map((project) => {
          const { row1, row2 } = splitTechnologies(project.technologies);
          return (
            <div 
              key={project.id} 
              className={`project-card ${project.isHackathonWinner ? 'hackathon-winner' : ''}`}
            >
              {project.isHackathonWinner && (
                <div 
                  className="winner-tag"
                  title={project.hackathonName}
                  aria-label={`Winner of ${project.hackathonName}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 576 512"
                    width="20"
                    height="20"
                    fill="gold"
                  >
                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.24 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.24-7.936 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"/>
                  </svg>
                  <span>Winner</span>
                </div>
              )}

              <div className="project-image-container">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  width={300}
                  height={180}
                  className="project-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x180';
                  }}
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-hover-footer">
                  <div className="project-links">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsDisplay;

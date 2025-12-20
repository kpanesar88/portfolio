'use client';
import React from 'react';
import Image from 'next/image';
import './projects.css';
import { FaMicrosoft, FaGithub } from 'react-icons/fa';
import { SiNvidia } from 'react-icons/si';

// ================== PROJECT IMAGES ==================
const projectImages = {
  portfolio: '/images/projectimgs/portfolio.png',
  voicemedic: '/images/projectimgs/voicemedic.png',
  brainup: '/images/projectimgs/brainup.png',
  productivity: '/images/projectimgs/productivityextension.png',
  fitness: '/images/projectimgs/fitnesswatch.jpg',
  watering: '/images/projectimgs/water.jpg',
};

// ================== INTERFACES ==================
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

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
  certUrl?: string;
}

// ================== MAIN COMPONENT ==================
const ProjectsDisplay: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'PERSONAL PORTFOLIO',
      description: 'My corner of the internet—code, creations, and continuous learning.',
      technologies: ['REACT', 'NEXT.JS', 'HTML/CSS/JS', 'TYPESCRIPT', 'VSCODE', 'VERCEL'],
      imageUrl: projectImages.portfolio,
      liveUrl: '/about',
      codeUrl: 'https://github.com/kpanesar88/portfolio',
    },
    {
      id: 2,
      title: 'VOICEMEDIC',
      description:
        'A voice-activated first aid assistant that guides users through emergencies with AI-powered, step-by-step instructions—no medical experience needed.',
      technologies: ['TYPESCRIPT', 'EXPO', 'TAILWIND', 'OPENAI', 'NODEJS', 'HTML/CSS/JS'],
      imageUrl: projectImages.voicemedic,
      devpostUrl: 'https://devpost.com/software/voice-medic',
      codeUrl: 'https://github.com/kpanesar88/VoiceMedic',
    },
    {
      id: 3,
      title: 'BRAINUP',
      description:
        'An AI coach that analyzes your saved Instagram content to recommend personalized productivity tips and learning resources. Won Best AI Hack at Hack the Hill 2024!',
      technologies: ['PYTHON', 'FLASK', 'REACTJS', 'SELENIUM', 'HDBSCAN', 'HTML/CSS/JS'],
      imageUrl: projectImages.brainup,
      devpostUrl: 'https://devpost.com/software/brainup',
      codeUrl: 'https://github.com/kpanesar88/BrainUp',
      isHackathonWinner: true,
      hackathonName: 'Hack the Hill 2024 (AI CHALLENGE)',
    },
    {
      id: 4,
      title: 'PRODUCTIVITY EXTENSION',
      description:
        'A browser extension that monitors your attention by detecting when you look at the screen. Simple feedback shows focus sessions without interruptions.',
      technologies: ['PYTHON', 'FLASK', 'HTML/CSS/JS', 'VSCODE'],
      imageUrl: projectImages.productivity,
      codeUrl: 'https://github.com/kpanesar88/productivity-ext',
    },
    {
      id: 5,
      title: 'FITNESS WATCH',
      description:
        'An Arduino-powered activity tracker that counts steps and calories—just the essentials in a compact circuit.',
      technologies: ['C++', 'ARDUINO', 'DS3231 RTC', 'LIS3DHTR Accelerometer', 'VSCODE'],
      imageUrl: projectImages.fitness,
      codeUrl: 'https://github.com/kpanesar88/fitness-watch-arduino',
    },
    {
      id: 6,
      title: 'WATERING SYSTEM',
      description:
        'An automated system that uses soil sensors to control watering—perfect hydration, no guesswork. Ideal for busy plant lovers!',
      technologies: ['JAVA', 'ARDUINO', 'FIRMATA4J', 'JSSC', 'ECLIPSE', 'IoT'],
      imageUrl: projectImages.watering,
      codeUrl: 'https://github.com/kpanesar88/automated-plant-watering-system',
    },
  ];

  // ===== CERTIFICATIONS (Reorganized) =====
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Deep Learning Fundamentals',
      issuer: 'NVIDIA Deep Learning Institute',
      date: '',
      icon: <SiNvidia color="#76B900" size={40} />,
      certUrl: 'https://drive.google.com/file/d/1SNdwOgwqfpSDyTM6eEc4GG5mN0cGgync/view',
    },
    {
      id: 2,
      title: 'Getting Started with Modern CUDA C',
      issuer: 'NVIDIA',
      date: '',
      icon: <SiNvidia color="#76B900" size={40} />,
      certUrl: 'https://drive.google.com/file/d/195PVBpPpEff5NPbFSmSjadcB8MCfwBnZ/view?usp=sharing',
    },
    {
      id: 3,
      title: 'Ubuntu Linux Professional Certificate',
      issuer: 'Canonical',
      date: '',
      icon: (
        <Image
          src="/images/company/Canonical.png"
          alt="Canonical Logo"
          width={40}
          height={40}
          style={{ borderRadius: '6px', objectFit: 'contain' }}
        />
      ),
      certUrl:
        'https://www.linkedin.com/learning/certificates/fd753de597ebd4b17a4651dffbbc8f04372788400496f8bdf778e1e86a934d66',
    },
    {
      id: 4,
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft',
      date: '',
      icon: <FaMicrosoft color="#00A4EF" size={40} />,
      certUrl:
        'https://www.linkedin.com/learning/certificates/e933c10f3f77a26ad4c61f3f817085bde857f500b69c7bd691b46a7baaef5bb2',
    },
    {
      id: 5,
      title: 'Azure AI Essentials ',
      issuer: 'Microsoft',
      date: '',
      icon: <FaMicrosoft color="#00A4EF" size={40} />,
      certUrl:
        'https://www.linkedin.com/learning/certificates/1ac84f2d378f109aa0e3165d1c35d2b393f193ed92bf7d900a74a9a96d21060b',
    },
    {
      id: 6,
      title: 'Career Essentials in GitHub',
      issuer: '',
      date: '2025',
      icon: <FaGithub color="#ffffff" size={40} />,
      certUrl:
        'https://www.linkedin.com/learning/certificates/f147fc7abadb67569f92c39920883291c737c3811f207d27a4ca98bfc88b75a1',
    },
  ];

  const splitTechnologies = (techs: string[]) => {
    const midIndex = Math.ceil(techs.length / 2);
    return { row1: techs.slice(0, midIndex), row2: techs.slice(midIndex) };
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">
        <span className="purple-text">$MY</span>
        <span className="white-text">PROJECTS</span>
      </h1>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid">
        {projects.map((project) => {
          const { row1, row2 } = splitTechnologies(project.technologies);
          return (
            <div key={project.id} className={`project-card ${project.isHackathonWinner ? 'hackathon-winner' : ''}`}>
              {project.isHackathonWinner && (
                <div className="winner-tag" title={project.hackathonName}>
                  🏆 <span>Winner</span>
                </div>
              )}

              <div className="project-image-container">
                <Image src={project.imageUrl} alt={project.title} width={300} height={180} className="project-image" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-hover-footer">
                  <div className="project-links">
                    {project.devpostUrl && (
                      <a href={project.devpostUrl} className="project-link devpost-link" target="_blank" rel="noopener noreferrer">
                        DEVPOST
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                        GITHUB
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link live-link" target="_blank" rel="noopener noreferrer">
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

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <section className="certifications-section">
        <h2 className="certifications-title">
          <span className="purple-text">$MY</span>
          <span className="white-text">CERTIFICATIONS</span>
        </h2>

        <div className="certifications-list">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-row">
              <div className="cert-left">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <span className="cert-separator">—</span>
                  <span>{cert.issuer}</span>
                  <span className="cert-separator">—</span>
                  <span>Issued {cert.date}</span>
                </div>
              </div>

              {cert.certUrl && (
                <a href={cert.certUrl} target="_blank" rel="noopener noreferrer" className="cert-btn">
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsDisplay;

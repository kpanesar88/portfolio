import React from "react";
import "./skillspage.css";
import SectionDivider from "@/app/sectiondivider/divider";

// Language Icons
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava } from 'react-icons/fa';
import { SiCsharp } from "@react-icons/all-files/si/SiCsharp";
import { SiVisualstudiocode } from "@react-icons/all-files/si/SiVisualstudiocode";

// Tool Icons
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiEclipse } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { SiArduino } from "react-icons/si";
// Simple Icons
import { 
  SiTypescript, 
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiLinux,
  SiGnubash,
  SiUnity,
  SiBlender,
  SiFigma,
} from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 color="white" />, category: "language" },
  { name: "CSS", icon: <FaCss3Alt color="white" />, category: "language" },
  { name: "JavaScript", icon: <FaJs color="white" />, category: "language" },
  { name: "TypeScript", icon: <SiTypescript color="white" />, category: "language" },
  { name: "Python", icon: <FaPython color="white" />, category: "language" },

  { name: "VS Code", icon: <SiVisualstudiocode color="white" />, category: "tool" },
  { name: "Tailwind", icon: <SiTailwindcss color="white" />, category: "tool" },
  { name: "Node.js", icon: <FaNodeJs color="white" />, category: "tool" },
  { name: "Next.js", icon: <SiNextdotjs color="white" />, category: "tool" },
  { name: "React", icon: <FaReact color="white" />, category: "tool" },
  { name: "GitHub", icon: <FaGithub color="white" />, category: "tool" },
  { name: "Arduino", icon: <SiArduino color="white" />, category: "tool" },

  { name: "C++", icon: <SiCplusplus color="white" />, category: "learning" },
  { name: "Linux", icon: <SiLinux color="white" />, category: "learning" },
  { name: "Unity", icon: <SiUnity color="white" />, category: "learning" },
  { name: "Blender", icon: <SiBlender color="white" />, category: "learning" },
  { name: "Figma", icon: <SiFigma color="white" />, category: "learning" }
];
const SimpleSkillsGrid = () => {
  return (
    <div className="skills-container">
      <div className="skills-title-container">
        <h1 className="skills-main-title">
          <span className="dollar-my">$MY</span>
          <span className="skills-text">SKILLS</span>
        </h1>
        <div className="skills-underline"></div>
      </div>
      
      {/* Languages */}
      <div className="category-section">
      <SectionDivider text="<Languages/>" size="medium"  bounceIntensity="subtle" />
      <div className="skills-grid">
          {skills
            .filter((skill) => skill.category === "language")
            .map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
        </div>
      </div>

      {/* Tools */}
      <div className="category-section">
      <SectionDivider text="<Tools/>" size="medium"  bounceIntensity="subtle" />

        <div className="skills-grid">
          {skills
            .filter((skill) => skill.category === "tool")
            .map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
        </div>
      </div>

      {/* Learning */}
      <div className="category-section">
      <SectionDivider text="<Learning/>" size="medium"  bounceIntensity="subtle" />
        <div className="skills-grid">
          {skills
            .filter((skill) => skill.category === "learning")
            .map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
};

export default SimpleSkillsGrid;
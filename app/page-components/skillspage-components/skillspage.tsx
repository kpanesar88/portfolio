import React from "react";
import "./skillspage.css";
import SectionDivider from "@/app/sectiondivider/divider";

import { FaPython, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "@react-icons/all-files/si/SiVisualstudiocode";
import {
  SiC,
  SiCplusplus,
  SiGnubash,
  SiStmicroelectronics,
  SiArduino,
  SiLinux,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, category: "language" },
  { name: "C", icon: <SiC />, category: "language" },
  { name: "C++", icon: <SiCplusplus />, category: "language" },
  { name: "Bash", icon: <SiGnubash />, category: "language" },

  { name: "VS Code", icon: <SiVisualstudiocode />, category: "tool" },
  { name: "STM32", icon: <SiStmicroelectronics />, category: "tool" },
  { name: "Arduino", icon: <SiArduino />, category: "tool" },
  { name: "GitHub", icon: <FaGithub />, category: "tool" },
  { name: "Linux", icon: <SiLinux />, category: "tool" },
];

const SimpleSkillsGrid = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-title-container">
        <h1 className="skills-main-title">
          <span className="dollar-my">$MY</span>
          <span className="skills-text">SKILLS</span>
        </h1>
        <div className="skills-underline"></div>
      </div>

      <div className="category-section">
        <SectionDivider text="<Languages/>" size="medium" bounceIntensity="subtle" />
        <div className="skills-grid">
          {skills
            .filter((skill) => skill.category === "language")
            .map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
        </div>
      </div>

      <div className="category-section">
        <SectionDivider text="<Tools/>" size="medium" bounceIntensity="subtle" />
        <div className="skills-grid">
          {skills
            .filter((skill) => skill.category === "tool")
            .map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({
  skill,
}: {
  skill: { name: string; icon: React.ReactNode };
}) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
};

export default SimpleSkillsGrid;
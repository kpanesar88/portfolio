import React from "react";
import "./skillspage.css";

const skills = [
  // Languages
  { name: "JavaScript", icon: "JS", category: "language" },
  { name: "TypeScript", icon: "TS", category: "language" },
  { name: "Python", icon: "PY", category: "language" },
  { name: "HTML/CSS", icon: "</>", category: "language" },
  // Tools
  { name: "React", icon: "⚛️", category: "tool" },
  { name: "Git", icon: "🔀", category: "tool" },
  { name: "Figma", icon: "🎨", category: "tool" },
  { name: "VS Code", icon: "💻", category: "tool" },
  // Learning
  { name: "Rust", icon: "🦀", category: "learning" },
  { name: "AI/ML", icon: "🧠", category: "learning" },
  { name: "Three.js", icon: "✨", category: "learning" },
];

const SimpleSkillsGrid = () => {
  return (
    <div className="skills-container">
      <h1>$SKILLS</h1>
      
      {/* Languages */}
      <div className="category-section">
        <h2>&lt;<span>Languages/</span>&gt;</h2>
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
        <h2>&lt;<span>Tools/</span>&gt;</h2>
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
        <h2>&lt;<span>Curiosities/</span>&gt;</h2>
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

const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
};

export default SimpleSkillsGrid;
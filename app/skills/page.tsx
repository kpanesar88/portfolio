'use client';
import SectionDivider from 'app/sectiondivider/divider';

export default function SkillsPage() {
  return (
    <main className="skills-page">
      <SectionDivider text="$SKILLS" />
      
      <div className="skills-container">
        {/* Your skills content */}
        <div className="skill-category">
          <h2 className="category-title">
            <i className="bi bi-code-square"></i>
            Frontend
          </h2>
          <div className="skills-grid">
            {/* Skill items here */}
          </div>
        </div>
      </div>
    </main>
  );
}
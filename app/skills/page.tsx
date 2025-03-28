'use client';
import SectionDivider from 'app/sectiondivider/divider';

export default function SkillsPage() {
  return (
    <main id="skills-page" className="skills-page"> {/* Added ID here */}
      <SectionDivider text="$SKILLS" />
      
      <div className="skills-container">
        {/* Example skill category - customize with your actual skills */}
        <div className="skill-category">
          <h2 className="category-title">
            <i className="bi bi-code-square" style={{ marginRight: '10px' }}></i>
            Frontend
          </h2>
          
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-info">
                <h3>React</h3>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            {/* Add more skills here */}
          </div>
        </div>
      </div>
    </main>
  );
}
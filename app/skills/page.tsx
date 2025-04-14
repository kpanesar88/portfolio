'use client';
import SimpleSkillsGrid from '../page-components/skillspage-components/skillspage';
import Timeline from '../page-components/skillspage-components/timeline';

export default function Skills() {
  return (
    <main className="skills-page">
      <SimpleSkillsGrid/>
      <Timeline/>
    </main>
  );
}
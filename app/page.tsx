// app/page.tsx
import Homepage from 'app/page-components/homepage-components/homepage/homepage';
import About from 'app/page-components/homepage-components/about/about';
import ProjectsDisplay from './page-components/projectspage-components/projects';
import SimpleSkillsGrid from './page-components/skillspage-components/skillspage';
import Contact from './page-components/contactpage-components/contact/contact';

export default function Home() {
  return (
    <>
      <Homepage />
      <About /> {/* This is your about section */}
      <SimpleSkillsGrid />
      <ProjectsDisplay/>
      <Contact />
    </>
  );
}
// app/page.tsx
import Homepage from './homepage-components/homepage/homepage';
import SectionDivider from './sectiondivider/divider';
import About from './homepage-components/about/about';
import Interests from './homepage-components/interests/interest';
import MoreInfo from './homepage-components/moreinfo/moreinfo';

export default function Home() {
  return (
    <>
      <Homepage />
      <SectionDivider text="$WHOAMI" />
      <About /> {/* This is your about section */}
      <SectionDivider text="$INTERESTS" />
      <Interests />
      <MoreInfo />
    </>
  );
}
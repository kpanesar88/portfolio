// app/page.tsx
import Homepage from 'app/page-components/homepage-components/homepage/homepage'
import SectionDivider from 'app/sectiondivider/divider';
import About from 'app/page-components/homepage-components/about/about';
import Interests from 'app/page-components/homepage-components/interests/interest';
import MoreInfo from 'app/page-components/homepage-components/moreinfo/moreinfo';

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
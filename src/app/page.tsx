// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { HeroSection } from '@/views/HeroSection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}
      <HeroSection />
      <ExpertiseSection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

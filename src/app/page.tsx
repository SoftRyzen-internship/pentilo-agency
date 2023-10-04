// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { TimelineSection } from '@/views/TimelineSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { HeroSection } from '@/views/HeroSection';
import { CasesSection } from '@/views/CasesSection';
import { AboutSection } from '@/views/AboutSection';
import { TrustSection } from '@/views/TrustSection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TrustSection />
      <CasesSection />
      <TimelineSection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

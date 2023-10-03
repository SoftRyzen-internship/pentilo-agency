// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { CasesSection } from '@/views/CasesSection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}
      <div className="h-[100px]"></div>
      <div className="pt-[56px]"></div>
      <ExpertiseSection />
      <CasesSection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

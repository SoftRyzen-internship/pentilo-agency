// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { Expertise } from '@/views/Expertise';
import { ApplyForm } from '@/views/ApplyForm';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { CasesSection } from '@/views/CasesSection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}
      <div className="h-[100px]"></div>
      <div className="pt-[56px]"></div>
      <Expertise />
      <CasesSection />
      <ApplyForm />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

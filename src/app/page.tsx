import { ExampleSection } from '@/views/ExampleSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <ExampleSection />
      <ScrollToTopButton sectionIdStart="expertise"/>
    </>
  );
}

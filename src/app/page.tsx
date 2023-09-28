import { ExampleSection } from '@/views/ExampleSection';

import { Countdown } from '@/components/ui/Countdown';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <div className="h-[700px] bg-stone-600"></div>
      <div className="h-[800px] bg-stone-400"></div>
      <Countdown into="hero" />
      <ExampleSection />
      <div className="h-[700px] bg-red-600"></div>
      <div className="h-[800px] bg-red-400"></div>
      <ScrollToTopButton />
    </>
  );
}

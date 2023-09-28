import { ExampleSection } from '@/views/ExampleSection';

import { Countdown } from '@/components/ui/Countdown';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <Countdown into="hero" />
      <ExampleSection />
      <ScrollToTopButton />
    </>
  );
}

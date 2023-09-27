import { ExampleSection } from '@/views/ExampleSection';
import { Countdown } from '@/components/ui/Countdown';

export default function Home() {
  return (
    <>
      <Countdown into="hero" />
      <Countdown into="form" />

      <ExampleSection />
    </>
  );
}

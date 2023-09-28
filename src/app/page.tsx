import { ExampleSection } from '@/views/ExampleSection';

import { Countdown } from '@/components/ui/Countdown';
import {  ScrollToTopButton, ToTopButtonWrapper } from '@/components/ui/ScrollToTopButton';

export default function Home() {
  return (
    <>
    {/* <ToTopButtonWrapper> */}
    <div className="h-[700px] bg-stone-600" ></div>
    <div className="h-[800px] bg-stone-400" ></div>
    
      
        <Countdown />
        <ExampleSection />
      {/* </ToTopButtonWrapper> */}
      <ScrollToTopButton/>
    </>
  );
}

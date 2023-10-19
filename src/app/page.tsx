import { advantages } from '@/constants';

import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ServicesSection } from '@/views/ServicesSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { TimelineSection } from '@/views/TimelineSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { HeroSection } from '@/views/HeroSection';
import { TeamSection } from '@/views/TeamSection';
import { CasesSection } from '@/views/CasesSection';
import { AboutSection } from '@/views/AboutSection';
import { TrustSection } from '@/views/TrustSection';
import { QASection } from '@/views/QASection';
import { StatisticsSection } from '@/views/StatisticsSection';
import { AdvantagesSection } from '@/views/AdvantagesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <AdvantagesSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <TeamSection />
      <CasesSection />
      <TrustSection />
      <TimelineSection />
      <QASection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart={advantages} />
    </>
  );
}

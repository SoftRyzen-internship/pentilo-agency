'use client';
import dynamic from 'next/dynamic';

import { advantages } from '@/constants';

// import { ExpertiseSection } from '@/views/ExpertiseSection';
// import { ServicesSection } from '@/views/ServicesSection';
// import { ApplyFormSection } from '@/views/ApplyFormSection';
// import { TimelineSection } from '@/views/TimelineSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
// import { HeroSection } from '@/views/HeroSection';
// import { TeamSection } from '@/views/TeamSection';
// import { CasesSection } from '@/views/CasesSection';
// import { AboutSection } from '@/views/AboutSection';
// import { TrustSection } from '@/views/TrustSection';
// import { QASection } from '@/views/QASection';
// import { StatisticsSection } from '@/views/StatisticsSection';
// import { AdvantagesSection } from '@/views/AdvantagesSection';

const ExpertiseSection = dynamic(() =>
  import('@/views/ExpertiseSection').then(mod => mod.ExpertiseSection),
);
const ServicesSection = dynamic(() =>
  import('@/views/ServicesSection').then(mod => mod.ServicesSection),
);
const ApplyFormSection = dynamic(() =>
  import('@/views/ApplyFormSection').then(mod => mod.ApplyFormSection),
);
const TimelineSection = dynamic(() =>
  import('@/views/TimelineSection').then(mod => mod.TimelineSection),
);
const HeroSection = dynamic(() =>
  import('@/views/HeroSection').then(mod => mod.HeroSection),
);
const TeamSection = dynamic(() =>
  import('@/views/TeamSection').then(mod => mod.TeamSection),
);
const CasesSection = dynamic(() =>
  import('@/views/CasesSection').then(mod => mod.CasesSection),
);
const AboutSection = dynamic(() =>
  import('@/views/AboutSection').then(mod => mod.AboutSection),
);
const TrustSection = dynamic(() =>
  import('@/views/TrustSection').then(mod => mod.TrustSection),
);
const QASection = dynamic(() =>
  import('@/views/QASection').then(mod => mod.QASection),
);
const StatisticsSection = dynamic(() =>
  import('@/views/StatisticsSection').then(mod => mod.StatisticsSection),
);
const AdvantagesSection = dynamic(() =>
  import('@/views/AdvantagesSection').then(mod => mod.AdvantagesSection),
);
const ScrollToTopButton = dynamic(() =>
  import('@/components/ui/ScrollToTopButton').then(
    mod => mod.ScrollToTopButton,
  ),
);

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

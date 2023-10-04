"use client"

import hero from '@/data/hero.json';
import './HeroSection.css';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { apply } from '@/constants';
import common from '@/data/common.json';
import { Slider } from '@/components/Slider';
import { ExpertiseCard } from '@/components/ExpertiseCard';

export const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="container">
          <h1 className="visually-hidden">{hero.header}</h1>
          <h2 className="mb-28 mt-24 flex flex-col content-between gap-6">
            <span className="heading2 shadow-text max-w-xs">{hero.title}</span>
            <span className=" self-end text-shadow-tex max-w-xs text-right font-dela_gothic text-l uppercase">
              {hero.subtitle}
            </span>
          </h2>

          <Countdown into="hero" className="mb-1"/>
          <p className="mb-4">{hero.timerText}</p>
          <Button
          tag="a"
          href={apply}
          accent={true}
          className="mx-auto mb-6 xl:w-[279px]"
        >
          {common.buttonsText.v3}
        </Button>
        <Slider section="hero" element={ExpertiseCard} data={hero.services}/>
        </div>
      </div>
    </section>
  );
};

"use client"

import hero from '@/data/hero.json';
import './HeroSection.css';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { apply } from '@/constants';
import common from '@/data/common.json';

export const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="container">
          <h1 className="visually-hidden">{hero.header}</h1>
          <h2 className="mb-28 mt-24 flex flex-col content-between gap-6">
            <span className="heading2 shadow-text max-w-xs">{hero.title}</span>
            <span className="flex-end text-shadow-tex max-w-xs text-right font-dela_gothic text-l uppercase">
              {hero.subtitle}
            </span>
          </h2>

          <Countdown into="hero" />
          <p>Перша консультація – безкоштовна</p>
          <Button
          tag="a"
          href={apply}
          accent={true}
          className="mx-auto xl:w-[279px]"
        >
          {common.buttonsText.v3}
        </Button>
        </div>
      </div>
    </section>
  );
};

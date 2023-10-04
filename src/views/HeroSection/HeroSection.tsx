'use client';

import hero from '@/data/hero.json';
import './HeroSection.css';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { apply } from '@/constants';
import common from '@/data/common.json';
import { Slider } from '@/components/Slider';
import { HeroCard } from '@/components/HeroCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="pb-[168px]">
      <div className="wrapper h-[634px] max-w-[1280px] xl:h-[657px] ">
        <div className="container pt-[152px]">
          <h1 className="visually-hidden">{hero.header}</h1>
          <h2 className="mb-28 flex flex-col content-between gap-6 xl:flex-row xl:justify-between">
            <span className="heading2 shadow-text max-w-xs">{hero.title}</span>
            <span className=" max-w-xs self-end text-right font-dela_gothic text-l uppercase text-shadow-text xl:max-w-sm xl:text-xxl">
              {hero.subtitle}
            </span>
          </h2>
          <div className="text-center xl:flex">
            <div className="mb-4 xl:mb-0 xl:flex">
              <Countdown into="hero" className="mb-1 xl:mr-3" />
              <p className="">{hero.timerText}</p>
            </div>
            <Button
              tag="a"
              href={apply}
              accent={true}
              className="mx-auto mb-6 xl:w-[279px]"
            >
              {common.buttonsText.v3}
            </Button>
          </div>

          <Slider
            section="hero"
            element={HeroCard}
            //  autoplay={true}
            data={hero.services}
          />
        </div>
      </div>
    </section>
  );
};

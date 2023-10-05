'use client';

import hero from '@/data/hero.json';
import './HeroSection.css';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import common from '@/data/common.json';
import { HeroCardsList } from '@/components/HeroCardsList';

export const HeroSection: React.FC = () => {
  return (
    <section className="pb-[168px]">
      <div className="wrapper h-[634px] max-w-[1280px] md:h-[1046px] xl:h-[657px] ">
        <div className="container pt-[152px] md:pt-[302px] xl:pt-[167px]">
          <h1 className="visually-hidden">{hero.header}</h1>
          <h2 className="mb-28 flex flex-col content-between gap-6 md:mb-[234px]  md:gap-10 xl:mb-[88px] xl:flex-row xl:justify-between">
            <span className="heading2 shadow-text max-w-xs md:text-xxxl_small">
              {hero.title}
            </span>
            <span className=" max-w-xs self-end text-right font-dela_gothic text-l uppercase text-shadow-text md:max-w-xl md:text-xxl_big xl:max-w-sm xl:text-xxl">
              {hero.subtitle}
            </span>
          </h2>
          <div className="mb-6 text-center md:mb-8 xl:mb-[150px] xl:flex xl:justify-between">
            <div className="mb-4 xl:mb-0 xl:flex">
              <Countdown
                into="hero"
                className="mb-1 xl:mb-0 xl:mr-3 xl:min-w-[230px]"
              />
              <p className="timer-text relative xl:max-w-[160px] xl:text-left">
                {hero.timerText}
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                tag="a"
                accent={false}
                href="about"
                className="border-gradient mb-[10px] hidden shadow-transparent xl:mb-0 xl:mr-5 xl:block xl:w-[150px] xl:py-[16.5px] xl:text-l_small"
              >
                {common.buttonsText.v2}
              </Button>
              <Button tag="a" accent={true} href="/" className=" xl:w-[180px]">
                {common.buttonsText.v3}
              </Button>
            </div>
          </div>

          <HeroCardsList />
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';

import useWindowSize from '@/utils/useWindowSize';
import { Slider } from '../Slider';
import { HeroCard } from '../HeroCard/HeroCard';
import data from '@/data/hero.json';

export const HeroCardsList: React.FC = () => {

  const { width } = useWindowSize();

  if (width >= 1280) {
    const heroCards = data.services.map(({text}, idx) => (
      <HeroCard key={idx} text={text} />
    ));
    return <div className='flex justify-center gap-[28px]'>{heroCards}</div>;
  } else
    return (
      <Slider
        section="hero"
        element={HeroCard}
         autoplay={true}
        data={data.services}
      />
    );
};

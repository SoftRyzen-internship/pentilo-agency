'use client';

import React from 'react';

import css from './HeroCardsList.module.css';
import useWindowSize from '@/utils/useWindowSize';
import { Slider } from '../Slider';
import { HeroCard } from '../HeroCard/HeroCard';
import data from '@/data/hero.json';

export const HeroCardsList: React.FC = () => {

  console.log(data.services)
  const { width } = useWindowSize();

  if (width >= 1440) {
    const heroCards = data.services.map((title, idx) => (
      <HeroCard key={idx} expertise={title} />
    ));

    return <>{heroCards}</>;
  } else
    return (
      <Slider
        section="hero"
        element={HeroCard}
        //  autoplay={true}
        data={data.services}
      />
    );
};

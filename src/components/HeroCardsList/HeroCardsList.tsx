'use client';

import React, { useEffect, useState } from 'react';

import useWindowSize from '@/utils/useWindowSize';
import { Slider } from '../Slider';
import { HeroCard } from '../HeroCard/HeroCard';
import data from '@/data/hero.json';
import { SCREEN_DESKTOP } from '@/constants';

export const HeroCardsList: React.FC = () => {
  const { width } = useWindowSize();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (hasMounted && width >= SCREEN_DESKTOP) {
    const heroCards = data.services.map(({ text }, idx) => (
      <HeroCard key={idx} text={text} />
    ));
    return <div className="flex justify-center gap-[28px]">{heroCards}</div>;
  } else if (hasMounted && width < SCREEN_DESKTOP)
    return (
      <Slider
        section="hero"
        element={HeroCard}
        autoplay={true}
        data={data.services}
      />
    );
};

'use client';

import React, { useEffect, useState } from 'react';

import useWindowSize from '@/utils/useWindowSize';
import { Slider } from '../Slider';
import { HeroCard } from '../HeroCard/HeroCard';
import data from '@/data/hero.json';
import { SCREEN_DESKTOP } from '@/constants';

import { motion } from 'framer-motion';
import { fadeInUpHero } from '@/variants';

export const HeroCardsList: React.FC = () => {
  const { width } = useWindowSize();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  if (hasMounted && width >= SCREEN_DESKTOP) {
    const heroCards = data.services.map(({ text }, idx) => (
      <HeroCard key={idx} text={text} />
    ));
    return (
      <motion.div
        variants={fadeInUpHero}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.25, once: true }}
        className="flex justify-center gap-[28px]"
      >
        {heroCards}
      </motion.div>
    );
  } else
    return (
      <Slider
        section="hero"
        element={HeroCard}
        autoplay={true}
        data={data.services}
        className={'hero'}
        slideClassName={'heroSlide'}
        loop={true}
      />
    );
};

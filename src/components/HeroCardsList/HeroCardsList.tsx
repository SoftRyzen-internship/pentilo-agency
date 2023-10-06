'use client';

import React from 'react';

import useWindowSize from '@/utils/useWindowSize';
import { Slider } from '../Slider';
import { HeroCard } from '../HeroCard/HeroCard';
import data from '@/data/hero.json';
import { SCREEN_DESKTOP } from '@/constants';

import { motion } from 'framer-motion';
import { list } from '@/variants';

export const HeroCardsList: React.FC = () => {
  const { width } = useWindowSize();

  if (width >= SCREEN_DESKTOP) {
    const heroCards = data.services.map(({ text }, idx) => (
      <HeroCard key={idx} text={text} />
    ));
    return <motion.div 
    initial="hidden"
    animate="visible"
    variants={list}
    viewport={{ amount: 0.25, once: false }}
    
    className="flex justify-center gap-[28px]">{heroCards}</motion.div>;
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

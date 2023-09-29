'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import { SCROLL_HEIGHT } from '@/constants/scroll';

import { Logo } from '@/components/ui/Logo';
import { blur } from './variants';

export const Header = () => {
  const [isBlur, setIsBlur] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > SCROLL_HEIGHT) setIsBlur(true);
    if (latest < SCROLL_HEIGHT) setIsBlur(false);
  });

  return (
    <motion.header
      variants={isBlur ? blur : {}}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-1/2 -translate-x-1/2 container w-full pt-[10px] pb-[8px]"
    >
      <Logo />
    </motion.header>
  );
};

'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import { SCROLL_HEIGHT } from '@/constants/scroll';

import { blur } from './variants';
import { Logo } from '@/components/ui/Logo';

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
      className="container fixed left-1/2 top-0 w-full -translate-x-1/2 pb-[8px] pt-[10px]"
    >
      <Logo />
    </motion.header>
  );
};

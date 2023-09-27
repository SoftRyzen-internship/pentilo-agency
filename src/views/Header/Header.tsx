'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import { Logo } from '@/components/Logo';
import { blur } from './variants';

const MIN_SCROLL_HEIGHT = 50;

export const Header = () => {
  const { scrollY } = useScroll();
  const [isBlur, setIsBlur] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > MIN_SCROLL_HEIGHT) setIsBlur(true);
    if (latest < MIN_SCROLL_HEIGHT) setIsBlur(false);
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

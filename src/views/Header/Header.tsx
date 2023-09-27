'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import { Logo } from '@/components/ui/Logo';
import { blur } from './variants';

export const Header = () => {
  const { scrollY } = useScroll();
  const [scrollHeight, setScrollHeight] = useState(0);

  useMotionValueEvent(scrollY, 'change', latest => {
    setScrollHeight(latest);
  });

  return (
    <motion.header
      variants={scrollHeight > 50 ? blur : {}}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-1/2 -translate-x-1/2 container w-full pt-[10px] pb-[8px]"
    >
      <Logo />
    </motion.header>
  );
};

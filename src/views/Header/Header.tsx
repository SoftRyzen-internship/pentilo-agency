'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import common from '@/data/common.json';

import { SCROLL_HEIGHT } from '@/constants/scroll';
import { Logo } from '@/components/ui/Logo';

import { Button } from '@/components/ui/Button';

import { blur, headerVariants } from './variants';

export const Header = () => {
  const [isBlur, setIsBlur] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > SCROLL_HEIGHT) setIsBlur(true);
    if (latest < SCROLL_HEIGHT) setIsBlur(false);
  });

  return (
    <motion.header
      variants={isBlur ? blur : headerVariants}
      initial="initial"
      animate="animate"
      className=" container fixed left-1/2 top-0 z-10 flex w-full -translate-x-1/2 justify-between pb-[8px] pt-[10px] xl:px-[50px]"
    >
      <Logo />

      <Button
        tag="a"
        accent={false}
        href="/"
        className="mb-[10px] hidden uppercase xl:block xl:w-[129px] xl:px-[10px] xl:py-[8px] xl:text-xs"
      >
        {common.buttonsText.v1}
      </Button>
    </motion.header>
  );
};

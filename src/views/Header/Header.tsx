'use client';

import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

import { useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { NavigationRow } from '@/components/ui/NavigationRow';
import { SocialsMenu } from '@/components/ui/SocialsMenu';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from '@/components/MobileMenu';

import common from '@/data/common.json';
import { SCROLL_HEIGHT } from '@/constants/scroll';
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
      className=" container fixed left-1/2 top-0 z-10 flex w-full -translate-x-1/2 items-center pb-[8px] pt-[10px] xl:px-[50px]"
    >
      <Logo className="xl:mr-[273px]" />
      <NavigationRow variant="header" />
      <SocialsMenu className="ml-[202px]" />

      <Button
        tag="a"
        accent={false}
        href="/"
        className="ml-auto hidden uppercase xl:block xl:h-[31px] xl:w-[129px] xl:px-[10px] xl:py-[8px] xl:text-xs"
      >
        {common.buttonsText.v1}
      </Button>
      <MobileMenu />
    </motion.header>
  );
};

'use client';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { NavigationRow } from '@/components/ui/NavigationRow';
import { SocialsMenu } from '@/components/ui/SocialsMenu';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from '@/components/MobileMenu';

import common from '@/data/common.json';
import { SCROLL_HEIGHT, apply } from '@/constants';

export const Header = () => { 

  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_HEIGHT) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header
      className={`testAnimation fixed top-0 z-10 w-full pb-[8px] pt-[10px] ${isBlur ? 'blurred' : ''}`}
    >
      <div className="container relative flex items-center">
        <Logo className="xl:mr-[273px]" />
        <NavigationRow variant="header" />
        <SocialsMenu className="ml-[202px]" />

        <Button
          tag="a"
          accent={false}
          href={apply}
          className=" ml-auto hidden rounded-button uppercase before:content-[''] 
          xl:block xl:h-[31px] xl:w-[129px] xl:px-[10px] xl:py-[8px] xl:text-xs"
        >
          {common.buttonsText.v1}
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
};

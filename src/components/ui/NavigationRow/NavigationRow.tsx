import React from 'react';
import { NavigationRowLink } from '@/components/ui/NavigationRowLink';
import { navLinks } from '@/data/navLinks';
const NavigationRow = () => {
  return (
    <ul className="w-[114px] h-[191px] flex-col justify-start items-center gap-6 inline-flex xl:w-96 xl:h-[15px] xl:flex-row xl:items-start xl:gap-8">
      {navLinks.map((link, index) => (
        <NavigationRowLink key={index} title={link.title} href={link.href} />
      ))}
    </ul>
  );
};

export default NavigationRow;

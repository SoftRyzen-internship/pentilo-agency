import React from 'react';
import classNames from 'classnames';

import { NavigationRowLink } from '@/components/ui/NavigationRowLink';
import { navLinks } from '@/data/navLinks';
import { NavigationRowProps } from '@/components/ui/NavigationRow/types';

export const NavigationRow: React.FC<NavigationRowProps> = ({ variant }) => {
  const NavigationRowClasses = classNames('flex', {
    'z-10 text-white text-center text-s_xs flex-col gap-6 xl:hidden':
      variant === 'mobile-menu',
    'text-grey text-xs gap-8 flex-row smOnly:hidden mdOnly:hidden':
      variant === 'header',
    'text-xs text-grey  smOnly:items-end md:items-start md:gap-4  flex-col gap-6 md:gap-5':
      variant === 'footer',
  });

  return (
    <ul className={NavigationRowClasses}>
      {navLinks.map((link, index) => (
        <NavigationRowLink key={index} title={link.title} href={link.href} />
      ))}
    </ul>
  );
};
